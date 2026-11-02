import { useState } from "react";
import SectionHead from "./SectionHead";
import Tabs from "./Tabs";
import ProductArt from "./ProductArt";
import { IRON_MODELS, IRON_COLORS, formatPrice } from "../data";

export default function IronDoors(props) {
  let [modelId, setModelId] = useState(IRON_MODELS[0].id);
  let [colorId, setColorId] = useState(IRON_COLORS[0].id);

  let model = IRON_MODELS[0];
  for (let i = 0; i < IRON_MODELS.length; i++) {
    if (IRON_MODELS[i].id === modelId) model = IRON_MODELS[i];
  }
  let color = IRON_COLORS[0];
  for (let j = 0; j < IRON_COLORS.length; j++) {
    if (IRON_COLORS[j].id === colorId) color = IRON_COLORS[j];
  }

  let tabs = [];
  for (let k = 0; k < IRON_MODELS.length; k++) {
    tabs.push({ id: IRON_MODELS[k].id, label: IRON_MODELS[k].name });
  }

  let swatches = [];
  for (let m = 0; m < IRON_COLORS.length; m++) {
    let c = IRON_COLORS[m];
    let active = c.id === colorId;
    swatches.push(
      <button
        key={c.id}
        type="button"
        aria-label={c.name + " rang"}
        aria-pressed={active}
        title={c.name}
        onClick={function () {
          setColorId(c.id);
        }}
        className={
          "h-9 w-9 rounded-full border border-white/30 transition " +
          (active ? "scale-110 ring-2 ring-aqua-400 ring-offset-2 ring-offset-ink-800" : "hover:scale-105")
        }
        style={{ backgroundColor: c.hex }}
      />
    );
  }

  let specs = [];
  for (let s = 0; s < model.specs.length; s++) {
    specs.push(
      <li key={s} className="flex items-start gap-2 text-sm text-slate-200">
        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5 9-10" />
        </svg>
        {model.specs[s]}
      </li>
    );
  }

  return (
    <section id="temir" className="relative overflow-hidden bg-ink-900 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-aqua-500/10 blur-3xl" />
      <div className="container-x reveal relative">
        <SectionHead
          dark
          eyebrow="Temir eshiklar"
          title="Mustahkam, xavfsiz va chiroyli"
          text="Modelni va rangni tanlang: eshik ko'rinishi o'sha zahoti o'zgaradi."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-ink-700 to-ink-800 p-3 ring-1 ring-white/10">
              <ProductArt art={model.art} color={color.hex} theme="dark" className="h-auto w-full" />
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">{swatches}</div>
            <div className="mt-2 text-center text-sm text-slate-300">Rang: {color.name}</div>
          </div>

          <div>
            <Tabs dark items={tabs} value={modelId} onChange={setModelId} label="Temir eshik modeli" />
            <h3 className="mt-6 font-display text-2xl font-bold">{model.name}</h3>
            <p className="mt-2 text-slate-300">{model.desc}</p>
            <ul className="mt-5 space-y-2">{specs}</ul>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div>
                <div className="text-xs text-slate-400">narxi</div>
                <div className="font-display text-xl font-bold text-aqua-300">dan {formatPrice(model.price)}</div>
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={function () {
                  props.onOrder("Temir eshik — " + model.name, "Rang: " + color.name);
                }}
              >
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
