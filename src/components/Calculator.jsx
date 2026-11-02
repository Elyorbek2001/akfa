import { useState } from "react";
import SectionHead from "./SectionHead";
import { BRANDS, BRAND_NAME, CALC, formatPrice } from "../data";

function findById(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return list[0];
}

function Field(props) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">{props.label}</span>
      {props.children}
    </label>
  );
}

export default function Calculator(props) {
  let [brand, setBrand] = useState("akfa");
  let [kind, setKind] = useState("oyna");
  let [glass, setGlass] = useState("2");
  let [w, setW] = useState("120");
  let [h, setH] = useState("140");
  let [sashes, setSashes] = useState("1");
  let [qty, setQty] = useState("1");

  let wN = Number(w);
  let hN = Number(h);
  let qN = Math.max(1, Math.min(50, Math.floor(Number(qty) || 1)));
  let valid = wN >= 40 && wN <= 400 && hN >= 40 && hN <= 300;

  let glassItem = findById(CALC.glass, glass);
  let kindItem = findById(CALC.kinds, kind);
  let area = valid ? (wN * hN) / 10000 : 0;
  let total = 0;
  if (valid) {
    total = (area * CALC.rates[brand] * glassItem.k * kindItem.k + Number(sashes) * CALC.sashPrice) * qN;
  }

  let brandOptions = [];
  for (let i = 0; i < BRANDS.length; i++) {
    brandOptions.push(
      <option key={BRANDS[i].id} value={BRANDS[i].id}>
        {BRANDS[i].name}
      </option>
    );
  }
  let kindOptions = [];
  for (let j = 0; j < CALC.kinds.length; j++) {
    kindOptions.push(
      <option key={CALC.kinds[j].id} value={CALC.kinds[j].id}>
        {CALC.kinds[j].label}
      </option>
    );
  }
  let glassOptions = [];
  for (let k = 0; k < CALC.glass.length; k++) {
    glassOptions.push(
      <option key={CALC.glass[k].id} value={CALC.glass[k].id}>
        {CALC.glass[k].label}
      </option>
    );
  }

  function order() {
    let note =
      kindItem.label + ", " + wN + "×" + hN + " sm, " + glassItem.label + ", ochiladigan qanot: " + sashes +
      ", soni: " + qN + " dona. Taxminiy narx: " + formatPrice(total);
    props.onOrder(BRAND_NAME[brand] + " — maxsus o'lcham", note);
  }

  return (
    <section id="hisoblash" className="py-16 sm:py-24">
      <div className="container-x reveal">
        <SectionHead
          eyebrow="Kalkulyator"
          title="Narxni o'zingiz hisoblang"
          text="O'lchamni kiriting, taxminiy narxni darrov ko'ring."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="grid gap-4 rounded-3xl border border-aqua-100 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-8 lg:col-span-3">
            <Field label="Brend">
              <select className="field" value={brand} onChange={function (e) { setBrand(e.target.value); }}>
                {brandOptions}
              </select>
            </Field>
            <Field label="Turi">
              <select className="field" value={kind} onChange={function (e) { setKind(e.target.value); }}>
                {kindOptions}
              </select>
            </Field>
            <Field label="Eni (sm)">
              <input className="field" type="number" inputMode="numeric" min="40" max="400" value={w} onChange={function (e) { setW(e.target.value); }} />
            </Field>
            <Field label="Bo'yi (sm)">
              <input className="field" type="number" inputMode="numeric" min="40" max="300" value={h} onChange={function (e) { setH(e.target.value); }} />
            </Field>
            <Field label="Shisha paket">
              <select className="field" value={glass} onChange={function (e) { setGlass(e.target.value); }}>
                {glassOptions}
              </select>
            </Field>
            <Field label="Ochiladigan qanot">
              <select className="field" value={sashes} onChange={function (e) { setSashes(e.target.value); }}>
                <option value="0">0 ta (qotirilgan)</option>
                <option value="1">1 ta</option>
                <option value="2">2 ta</option>
                <option value="3">3 ta</option>
              </select>
            </Field>
            <Field label="Soni (dona)">
              <input className="field" type="number" inputMode="numeric" min="1" max="50" value={qty} onChange={function (e) { setQty(e.target.value); }} />
            </Field>
            {!valid ? (
              <p className="self-end text-sm text-amber-600">Eni 40–400 sm, bo'yi 40–300 sm oralig'ida bo'lsin.</p>
            ) : null}
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-aqua-600 to-ink-800 p-6 text-white shadow-xl shadow-aqua-600/20 sm:p-8 lg:col-span-2">
            <div>
              <div className="text-sm text-aqua-100">Taxminiy narx</div>
              <div className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                {valid ? formatPrice(total) : "—"}
              </div>
              {valid ? (
                <div className="mt-3 text-sm text-aqua-100">
                  Maydon: {area.toFixed(2)} m² · {qN} dona
                </div>
              ) : null}
              <p className="mt-5 text-xs text-aqua-100/80">
                Bu taxminiy hisob. Aniq narx bepul o'lchovdan keyin aytiladi.
              </p>
            </div>
            <button type="button" className="btn-light mt-6 w-full disabled:opacity-50" disabled={!valid} onClick={order}>
              Shu hisob bilan buyurtma berish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
