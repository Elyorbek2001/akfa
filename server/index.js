import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

let __dirname = path.dirname(fileURLToPath(import.meta.url));
let app = express();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json({ limit: "20kb" }));

let TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
let CHAT_IDS = [];
let rawIds = (process.env.TELEGRAM_CHAT_ID || "").split(",");
for (let i = 0; i < rawIds.length; i++) {
  let id = rawIds[i].trim();
  if (id) CHAT_IDS.push(id);
}

// Oddiy so'rovlar cheklovi: bir IP dan 10 daqiqada 5 ta
let hits = new Map();
function limited(ip) {
  let now = Date.now();
  let windowMs = 10 * 60 * 1000;
  let list = hits.get(ip) || [];
  let fresh = [];
  for (let i = 0; i < list.length; i++) {
    if (now - list[i] < windowMs) fresh.push(list[i]);
  }
  if (fresh.length >= 5) {
    hits.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  hits.set(ip, fresh);
  return false;
}

function clean(value, max) {
  return String(value || "")
    .replace(/[\u0000-\u0009\u000b-\u001f]/g, " ")
    .trim()
    .slice(0, max);
}

function esc(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

app.get("/api/health", function (req, res) {
  res.json({ ok: true, telegram: Boolean(TOKEN && CHAT_IDS.length) });
});

app.post("/api/order", async function (req, res) {
  try {
    let b = req.body || {};

    // Botlar uchun yashirin maydon: to'ldirilgan bo'lsa jim o'tkazib yuboramiz
    if (b.website) return res.json({ ok: true });

    let name = clean(b.name, 80);
    let phone = clean(b.phone, 30);
    let product = clean(b.product, 140);
    let message = clean(b.message, 600);

    if (name.length < 2 || phone.replace(/\D/g, "").length < 9) {
      return res.status(400).json({ ok: false, error: "Ma'lumot to'liq emas" });
    }
    if (!TOKEN || CHAT_IDS.length === 0) {
      console.error("Telegram sozlanmagan: .env ni tekshiring");
      return res.status(500).json({ ok: false, error: "Telegram sozlanmagan" });
    }
    if (limited(req.ip)) {
      return res.status(429).json({ ok: false, error: "Juda ko'p so'rov. Keyinroq urinib ko'ring." });
    }

    let text =
      "🪟 <b>Yangi buyurtma</b>\n\n" +
      "👤 <b>Ism:</b> " + esc(name) + "\n" +
      "📞 <b>Telefon:</b> " + esc(phone) + "\n" +
      "📦 <b>Mahsulot:</b> " + esc(product || "Tanlanmagan");
    if (message) text += "\n💬 <b>Izoh:</b> " + esc(message);

    let sent = 0;
    for (let i = 0; i < CHAT_IDS.length; i++) {
      let r = await fetch("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_IDS[i], text: text, parse_mode: "HTML" }),
      });
      if (r.ok) {
        sent++;
      } else {
        console.error("Telegram xatosi:", r.status);
      }
    }

    if (sent === 0) {
      return res.status(502).json({ ok: false, error: "Telegramga yuborilmadi" });
    }
    res.json({ ok: true });
  } catch (e) {
    console.error("Server xatosi:", e.message);
    res.status(500).json({ ok: false, error: "Server xatosi" });
  }
});

// Production: build qilingan saytni shu server o'zi beradi
let dist = path.join(__dirname, "..", "dist");
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", function (req, res) {
    res.sendFile(path.join(dist, "index.html"));
  });
}

let PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server: http://localhost:" + PORT);
  if (!TOKEN || CHAT_IDS.length === 0) {
    console.log("Diqqat: .env da TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID to'ldirilmagan");
  }
});
