import ProductArt from "./ProductArt";
import { BRAND_NAME, formatPrice } from "../data";

export default function ProductCard(props) {
  let p = props.product;
  let brand = BRAND_NAME[p.brand];
  let chips = [];
  for (let i = 0; i < p.features.length; i++) {
    chips.push(
      <span key={i} className="chip">
        {p.features[i]}
      </span>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-aqua-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-aqua-500/15">
      <div className="relative p-3">
        <span className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-aqua-700 shadow">
          {brand}
        </span>
        <ProductArt art={p.art} tone={p.tone} className="h-auto w-full" />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <h3 className="font-display text-lg font-bold text-ink-900">{p.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">{chips}</div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <div className="text-xs text-slate-500">narxi</div>
            <div className="font-display text-base font-bold text-aqua-700">dan {formatPrice(p.price)}</div>
          </div>
          <button
            type="button"
            className="btn-primary !px-4 !py-2.5"
            onClick={function () {
              props.onOrder(brand + " — " + p.name, "");
            }}
          >
            Buyurtma
          </button>
        </div>
      </div>
    </article>
  );
}
