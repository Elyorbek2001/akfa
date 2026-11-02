import { SITE } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink-900 py-10 text-slate-300">
      <div className="container-x grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold text-white">{SITE.name}</div>
          <p className="mt-2 text-sm">
            {SITE.region} bo'yicha 10 yildan ortiq tajriba. Akfa va Ekopen oyna, eshiklar hamda temir eshiklar.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">Bo'limlar</div>
          <ul className="mt-2 space-y-1.5">
            <li><a href="#katalog" className="hover:text-aqua-300">Katalog</a></li>
            <li><a href="#temir" className="hover:text-aqua-300">Temir eshiklar</a></li>
            <li><a href="#hisoblash" className="hover:text-aqua-300">Narx hisoblash</a></li>
            <li><a href="#aloqa" className="hover:text-aqua-300">Aloqa</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">{SITE.phoneLabel}</div>
          <a href={SITE.phoneHref} className="mt-2 block text-lg font-bold text-aqua-300">
            {SITE.phone}
          </a>
          <p className="mt-2">{SITE.address}</p>
        </div>
      </div>
      <div className="container-x mt-8 border-t border-white/10 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
