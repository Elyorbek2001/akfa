import ProductArt from "./ProductArt";
import { SITE, STATS } from "../data";

export default function Hero() {
  let stats = [];
  for (let i = 0; i < STATS.length; i++) {
    stats.push(
      <div key={STATS[i].label}>
        <div className="font-display text-2xl font-bold text-aqua-700 sm:text-3xl">{STATS[i].value}</div>
        <div className="text-xs text-slate-500 sm:text-sm">{STATS[i].label}</div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-aqua-50 via-white to-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-aqua-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-aqua-400/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white px-4 py-1.5 text-xs font-semibold text-aqua-800 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {SITE.experience}
          </div>
          <div className="eyebrow mt-5">Akfa · Ekopen · Temir eshiklar</div>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
            Uyingizga nur va sokinlik olib keladigan{" "}
            <span className="bg-gradient-to-r from-aqua-500 to-aqua-800 bg-clip-text text-transparent">
              oyna va eshiklar
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            Akfa va Ekopen profilli oynalar, balkon va kirish eshiklari hamda mustahkam temir eshiklar. Bepul o'lchov,
            yetkazish va o'rnatish.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#katalog" className="btn-primary">
              Katalogni ko'rish
            </a>
            <a href="#hisoblash" className="btn-ghost">
              Narxni hisoblash
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-aqua-100 pt-6">{stats}</div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="animate-float rounded-[2rem] bg-white/60 p-3 shadow-2xl shadow-aqua-500/20 ring-1 ring-aqua-100 backdrop-blur">
            <ProductArt art="window2" tone="#ffffff" className="h-auto w-full" />
          </div>
          <div className="absolute -left-3 top-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-800 shadow-xl ring-1 ring-aqua-100 sm:-left-8">
            <span className="h-2.5 w-2.5 rounded-full bg-aqua-500" />
            Issiqlikni saqlaydi
          </div>
          <div className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-800 shadow-xl ring-1 ring-aqua-100 sm:-right-8">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Shovqinni kamaytiradi
          </div>
        </div>
      </div>
    </section>
  );
}
