import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import { SITE, PRODUCTS, IRON_MODELS, BRAND_NAME } from "../data";

let EMPTY = { name: "", phone: "", product: "", message: "", website: "" };
let OTHER = "Boshqa / maslahat kerak";

function productNames() {
  let list = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    list.push(BRAND_NAME[PRODUCTS[i].brand] + " — " + PRODUCTS[i].name);
  }
  for (let j = 0; j < IRON_MODELS.length; j++) {
    list.push("Temir eshik — " + IRON_MODELS[j].name);
  }
  list.push(OTHER);
  return list;
}

export default function Contact(props) {
  let [form, setForm] = useState(EMPTY);
  let [status, setStatus] = useState("idle");
  let [error, setError] = useState("");

  useEffect(
    function () {
      if (!props.prefill) return;
      setStatus("idle");
      setForm(function (f) {
        return {
          name: f.name,
          phone: f.phone,
          product: props.prefill.product,
          message: props.prefill.note || f.message,
          website: "",
        };
      });
    },
    [props.prefill]
  );

  function change(field) {
    return function (e) {
      let value = e.target.value;
      setForm(function (f) {
        let next = { name: f.name, phone: f.phone, product: f.product, message: f.message, website: f.website };
        next[field] = value;
        return next;
      });
    };
  }

  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    let digits = form.phone.replace(/\D/g, "");
    if (form.name.trim().length < 2) {
      setError("Ismingizni kiriting");
      return;
    }
    if (digits.length < 9) {
      setError("Telefon raqamni to'g'ri kiriting");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      let r = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data = await r.json().catch(function () {
        return {};
      });
      if (!r.ok || !data.ok) throw new Error(data.error || "Xatolik");
      setStatus("done");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError("Yuborib bo'lmadi. Iltimos, telefon orqali bog'laning: " + SITE.phone);
    }
  }

  let names = productNames();
  if (form.product && names.indexOf(form.product) === -1) {
    names.splice(names.length - 1, 0, form.product);
  }
  let options = [];
  for (let i = 0; i < names.length; i++) {
    options.push(
      <option key={names[i]} value={names[i]}>
        {names[i]}
      </option>
    );
  }

  let mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.address);
  let tgLink = "https://t.me/" + SITE.telegram;

  return (
    <section id="aloqa" className="py-16 sm:py-24">
      <div className="container-x reveal">
        <SectionHead
          eyebrow="Aloqa"
          title="Bepul o'lchovga yoziling"
          text={SITE.region + " bo'yicha ishlaymiz. Raqamingizni qoldiring, o'zimiz qo'ng'iroq qilamiz."}
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl bg-gradient-to-br from-aqua-600 to-ink-800 p-6 text-white shadow-xl shadow-aqua-600/20 sm:p-8 lg:col-span-2">
            <div className="space-y-5 text-sm">
              <div>
                <div className="text-aqua-100">{SITE.phoneLabel}</div>
                <a href={SITE.phoneHref} className="font-display text-2xl font-bold hover:underline">
                  {SITE.phone}
                </a>
              </div>
              <div>
                <div className="text-aqua-100">Manzil</div>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-base font-medium hover:underline">
                  {SITE.address}
                </a>
              </div>
              <div>
                <div className="text-aqua-100">Ish vaqti</div>
                <div className="text-base font-medium">{SITE.hours}</div>
              </div>
            </div>
            <a href={tgLink} target="_blank" rel="noopener noreferrer" className="btn-light mt-8 w-full">
              Telegramda yozish
            </a>
          </div>

          <div className="rounded-3xl border border-aqua-100 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
            {status === "done" ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">Arizangiz qabul qilindi</h3>
                <p className="mt-2 text-sm text-slate-600">Tez orada siz bilan bog'lanamiz.</p>
                <button
                  type="button"
                  className="btn-ghost mt-6"
                  onClick={function () {
                    setStatus("idle");
                  }}
                >
                  Yana ariza yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" noValidate>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Ismingiz</span>
                  <input className="field" value={form.name} onChange={change("name")} placeholder="Ism" autoComplete="name" maxLength={80} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Telefon</span>
                  <input
                    className="field"
                    value={form.phone}
                    onChange={change("phone")}
                    placeholder="+998 90 123 45 67"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={30}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Mahsulot</span>
                  <select className="field" value={form.product} onChange={change("product")}>
                    <option value="">Mahsulotni tanlang (ixtiyoriy)</option>
                    {options}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Izoh</span>
                  <textarea className="field min-h-[110px]" value={form.message} onChange={change("message")} placeholder="O'lcham, rang yoki savollaringiz" maxLength={600} />
                </label>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={change("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                {error ? (
                  <p className="text-sm text-red-600 sm:col-span-2" role="alert">
                    {error}
                  </p>
                ) : null}
                <button type="submit" className="btn-primary sm:col-span-2 disabled:opacity-60" disabled={status === "sending"}>
                  {status === "sending" ? "Yuborilmoqda..." : "Ariza yuborish"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
