import { useState } from "react";
import SectionHead from "./SectionHead";
import Tabs from "./Tabs";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data";

let BRAND_TABS = [
  { id: "all", label: "Hammasi" },
  { id: "akfa", label: "Akfa" },
  { id: "ekopen", label: "Ekopen" },
];

let TYPE_TABS = [
  { id: "all", label: "Oyna va eshik" },
  { id: "oyna", label: "Oynalar" },
  { id: "eshik", label: "Eshiklar" },
];

export default function Catalog(props) {
  let [type, setType] = useState("all");
  let cards = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    let p = PRODUCTS[i];
    if (props.brand !== "all" && p.brand !== props.brand) continue;
    if (type !== "all" && p.type !== type) continue;
    cards.push(<ProductCard key={p.id} product={p} onOrder={props.onOrder} />);
  }

  return (
    <section id="katalog" className="bg-aqua-50/60 py-16 sm:py-20">
      <div className="container-x reveal">
        <SectionHead
          eyebrow="Katalog"
          title="Zamonaviy oyna va eshiklar"
          text="Brend va turni tanlang. Aniq narx o'lchovdan keyin belgilanadi."
        />
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tabs items={BRAND_TABS} value={props.brand} onChange={props.onBrand} label="Brend" />
          <Tabs items={TYPE_TABS} value={type} onChange={setType} label="Turi" />
        </div>
        {cards.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{cards}</div>
        ) : (
          <div className="rounded-2xl border border-dashed border-aqua-200 bg-white p-10 text-center text-slate-500">
            Bu tanlov bo'yicha mahsulot topilmadi. Boshqa filtrni sinab ko'ring.
          </div>
        )}
      </div>
    </section>
  );
}
