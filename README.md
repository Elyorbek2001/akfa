# AquaOyna — Akfa va Ekopen oyna-eshik sayti

Vite + React + Tailwind CSS. Buyurtma formasi Telegram botga yuboriladi.

## Ishga tushirish

1. `npm install`
2. `.env.example` faylini `.env` deb nusxalang (Windows: `copy .env.example .env`) va to'ldiring
3. `npm run dev:all`
   - sayt: http://localhost:5173
   - server: http://localhost:5000

## Telegram ulash (5 daqiqa)

1. Telegramda **@BotFather** ni oching → `/newbot` → nom va username bering → **TOKEN** oling.
2. Yangi botingizni oching va **/start** bosing (bot sizga yoza olishi uchun shart).
3. **Chat ID** olish: brauzerda shu manzilni oching (`<TOKEN>` o'rniga o'z tokeningiz):
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
   Natijada `"chat":{"id":123456789` ko'rinadi, shu raqam sizning chat ID.
   (Bo'sh chiqsa, botga yana bitta xabar yozib, sahifani yangilang.)
4. `.env` fayliga yozing:
   ```
   TELEGRAM_BOT_TOKEN=sizning_tokeningiz
   TELEGRAM_CHAT_ID=sizning_chat_id
   ```
   Bir necha kishiga: `111111,222222`. Guruhga: botni guruhga qo'shing, guruh ID odatda minus bilan boshlanadi (`-100...`).
5. Serverni qayta ishga tushiring, saytdagi formani to'ldiring. Xabar Telegramga keladi.
6. Saytdagi "Telegramda yozing" tugmasi uchun `src/data.js` da `SITE.telegram` ga o'z username'ingizni yozing (@ belgisisiz).

> Token faqat `.env` da turadi. Uni hech qachon React kodiga yozmang va GitHub'ga yuklamang.

Tekshirish: `http://localhost:5000/api/health` → `"telegram": true` bo'lishi kerak.

## Ma'lumotlarni o'zgartirish

Hammasi `src/data.js` ichida: telefon, manzil, Telegram username, mahsulotlar, narxlar, temir eshik modellari, kalkulyator narxlari, savol-javoblar.

**Muhim:** narxlar, statistika (tajriba, obyektlar soni, kafolat) va mahsulot xususiyatlari NAMUNA. O'zingizning haqiqiy ma'lumotlaringiz bilan almashtiring.

## Deploy (Render / Railway)

- Build: `npm install && npm run build`
- Start: `npm run server`
- Environment variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

Server `dist` papkasini o'zi beradi, sayt va API bitta manzilda ishlaydi.

## Tuzilma

```
src/
  data.js            ma'lumotlar (shu yerni tahrirlang)
  App.jsx            sahifa yig'ilishi
  components/        Header, Hero, Catalog, IronDoors, Calculator, Contact ...
server/index.js      Telegramga yuboruvchi API
```
