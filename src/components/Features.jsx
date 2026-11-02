import SectionHead from "./SectionHead";
import { FEATURES } from "../data";

let ICONS = {
  heat: "M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z",
  sound: "M11 5L6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 010 7 M19 5a9 9 0 010 14",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4",
  ruler: "M3 17L17 3l4 4L7 21l-4-4z M7 13l2 2 M10 10l2 2 M13 7l2 2",
  truck: "M1 6h13v10H1z M14 9h4l3 3v4h-7z M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  award: "M12 15a6 6 0 100-12 6 6 0 000 12z M8.2 13.9L7 22l5-3 5 3-1.2-8.1",
};

export default function Features() {
  let cards = [];
  for (let i = 0; i < FEATURES.length; i++) {
    let f = FEATURES[i];
    cards.push(
      <div key={f.title} className="rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400 to-aqua-700 text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={ICONS[f.icon]} />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{f.title}</h3>
        <p className="mt-1.5 text-sm text-slate-600">{f.text}</p>
      </div>
    );
  }

  return (
    <section id="afzallik" className="bg-aqua-50/60 py-16 sm:py-24">
      <div className="container-x reveal">
        <SectionHead eyebrow="Afzalliklar" title="Nega bizni tanlashadi" center />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
      </div>
    </section>
  );
}
