import { useState } from "react";
import { SITE } from "../data";

let LINKS = [
  { href: "#katalog", label: "Katalog" },
  { href: "#temir", label: "Temir eshiklar" },
  { href: "#hisoblash", label: "Narx hisoblash" },
  { href: "#afzallik", label: "Afzalliklar" },
  { href: "#aloqa", label: "Aloqa" },
];

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logo-g)" />
      <rect x="14" y="12" width="36" height="40" rx="4" fill="#fff" />
      <rect x="18" y="16" width="13" height="32" rx="2" fill="#67e8f9" />
      <rect x="33" y="16" width="13" height="32" rx="2" fill="#22d3ee" />
    </svg>
  );
}

export default function Header() {
  let [open, setOpen] = useState(false);
  let desktop = [];
  let mobile = [];

  for (let i = 0; i < LINKS.length; i++) {
    let l = LINKS[i];
    desktop.push(
      <a
        key={l.href}
        href={l.href}
        className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-aqua-50 hover:text-aqua-700"
      >
        {l.label}
      </a>
    );
    mobile.push(
      <a
        key={l.href}
        href={l.href}
        onClick={function () {
          setOpen(false);
        }}
        className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-aqua-50"
      >
        {l.label}
      </a>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-aqua-100 bg-white/85 backdrop-blur-lg">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <Logo />
          {SITE.name}
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Asosiy menyu">
          {desktop}
        </nav>
        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="btn-primary hidden !py-2 sm:inline-flex">
            {SITE.phone}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-aqua-100 text-ink-800 lg:hidden"
            aria-label="Menyuni ochish"
            aria-expanded={open}
            onClick={function () {
              setOpen(!open);
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-aqua-100 bg-white lg:hidden">
          <nav className="container-x py-3" aria-label="Mobil menyu">
            {mobile}
            <a href={SITE.phoneHref} className="btn-primary mt-2 w-full">
              {SITE.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
