import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Catalog from "./components/Catalog";
import IronDoors from "./components/IronDoors";
import Calculator from "./components/Calculator";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingTelegram from "./components/FloatingTelegram";

export default function App() {
  let [brand, setBrand] = useState("all");
  let [prefill, setPrefill] = useState(null);

  function scrollTo(id) {
    let el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleOrder(product, note) {
    setPrefill({ id: Date.now(), product: product, note: note || "" });
    scrollTo("aloqa");
  }

  function pickBrand(id) {
    setBrand(id);
    scrollTo("katalog");
  }

  useEffect(function () {
    let els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      for (let i = 0; i < els.length; i++) els[i].classList.add("in");
      return;
    }
    let io = new IntersectionObserver(
      function (entries) {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add("in");
            io.unobserve(entries[i].target);
          }
        }
      },
      { threshold: 0.1 }
    );
    for (let j = 0; j < els.length; j++) io.observe(els[j]);
    return function () {
      io.disconnect();
    };
  }, []);

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Brands onPick={pickBrand} />
        <Catalog brand={brand} onBrand={setBrand} onOrder={handleOrder} />
        <IronDoors onOrder={handleOrder} />
        <Calculator onOrder={handleOrder} />
        <Features />
        <Steps />
        <Faq />
        <Contact prefill={prefill} />
      </main>
      <Footer />
      <FloatingTelegram />
    </div>
  );
}
