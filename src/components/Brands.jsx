import SectionHead from "./SectionHead";
import { BRANDS } from "../data";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-aqua-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export default function Brands(props) {
  let cards = [];
  for (let i = 0; i < BRANDS.length; i++) {
    let b = BRANDS[i];
    let points = [];
    for (let j = 0; j < b.points.length; j++) {
      points.push(
        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
          <Check />
          {b.points[j]}
        </li>
      );
    }
    cards.push(
      <div
        key={b.id}
        className="rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-aqua-500/10 sm:p-8"
      >
        <div className="font-display text-4xl font-extrabold tracking-tight text-aqua-700">{b.name}</div>
        <p className="mt-3 text-slate-600">{b.text}</p>
        <ul className="mt-5 space-y-2">{points}</ul>
        <button
          type="button"
          className="btn-ghost mt-6"
          onClick={function () {
            props.onPick(b.id);
          }}
        >
          {b.name} mahsulotlari
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x reveal">
        <SectionHead
          eyebrow="Brendlar"
          title="Ikki ishonchli brend, bitta joyda"
          text="Byudjet va xonangizga qarab mos profilni tanlaymiz."
        />
        <div className="grid gap-6 md:grid-cols-2">{cards}</div>
      </div>
    </section>
  );
}
