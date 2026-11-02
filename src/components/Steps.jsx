import SectionHead from "./SectionHead";
import { STEPS } from "../data";

export default function Steps() {
  let items = [];
  for (let i = 0; i < STEPS.length; i++) {
    items.push(
      <li key={STEPS[i].title} className="relative rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua-600 font-display text-lg font-bold text-white">
          {i + 1}
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{STEPS[i].title}</h3>
        <p className="mt-1.5 text-sm text-slate-600">{STEPS[i].text}</p>
      </li>
    );
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container-x reveal">
        <SectionHead eyebrow="Jarayon" title="Buyurtma 4 qadamda" center />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items}</ol>
      </div>
    </section>
  );
}
