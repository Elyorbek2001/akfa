import SectionHead from "./SectionHead";
import { FAQ } from "../data";

export default function Faq() {
  let items = [];
  for (let i = 0; i < FAQ.length; i++) {
    items.push(
      <details key={FAQ[i].q} className="group rounded-2xl border border-aqua-100 bg-white p-5 shadow-sm open:shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink-900">
          {FAQ[i].q}
          <span className="text-2xl leading-none text-aqua-600 transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-sm text-slate-600">{FAQ[i].a}</p>
      </details>
    );
  }

  return (
    <section className="bg-aqua-50/60 py-16 sm:py-24">
      <div className="container-x reveal">
        <SectionHead eyebrow="Savol-javob" title="Ko'p so'raladigan savollar" center />
        <div className="mx-auto max-w-3xl space-y-3">{items}</div>
      </div>
    </section>
  );
}
