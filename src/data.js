// DIQQAT: bu fayldagi ma'lumotlar NAMUNA.
// Telefon, manzil, Telegram username, narxlar va statistikani o'zingiznikiga almashtiring.

export const SITE = {
  name: "AqfaOyna",
  phoneLabel: "Ishonch telefoni",
  phone: "+998 97 856 98 28", // ishonch telefoni
  phoneHref: "tel:+998978569828",
  telegram: "aqfaoyna_uz", // t.me/ dan keyingi nom, @ belgisiz
  region: "Xorazm viloyati",
  experience: "Xorazm viloyati bo'yicha 10 yildan ortiq tajriba",
  address: "Xorazm viloyati, Shovot tumani, Cho'qli qishlog'i, To'qmang'it mahallasi",
  hours: "Dushanba – Shanba: 09:00 – 19:00",
};

export const STATS = [
  { value: "10+", label: "yil Xorazm viloyatida" },
  { value: "5000+", label: "o'rnatilgan obyekt" },
  { value: "5 yil", label: "kafolat" },
];

export const BRAND_NAME = {
  akfa: "Akfa",
  ekopen: "Ekopen",
};

export const BRANDS = [
  {
    id: "akfa",
    name: "Akfa",
    text: "Plastik va alyuminiy profilli oyna, eshik hamda sirpanuvchi tizimlar.",
    points: ["Plastik va alyuminiy profil", "Keng rang va o'lcham tanlovi", "Katta panorama va sirpanuvchi yechimlar"],
  },
  {
    id: "ekopen",
    name: "Ekopen",
    text: "PVX profilli oyna va eshiklar: qulay narx va yaxshi issiqlik izolyatsiyasi.",
    points: ["Qulay narx", "Issiqlik va ovoz izolyatsiyasi", "Kvartira va uylar uchun mos"],
  },
];

export const PRODUCTS = [
  {
    id: "a-2",
    brand: "akfa",
    type: "oyna",
    art: "window2",
    tone: "#f8fafc",
    name: "Ikki qanotli oyna",
    desc: "Uy va ofis uchun klassik tanlov, burib-ochiladigan qanotlar.",
    features: ["Ikki kamerali paket", "Burish-ochish furniturasi"],
    price: 1450000,
  },
  {
    id: "a-3",
    brand: "akfa",
    type: "oyna",
    art: "window3",
    tone: "#f8fafc",
    name: "Panorama oyna (3 qanot)",
    desc: "Keng xona va zal uchun yorug'lik ko'p tushadigan yechim.",
    features: ["Katta shisha maydoni", "Markaziy qotirilgan qanot"],
    price: 2300000,
  },
  {
    id: "a-b",
    brand: "akfa",
    type: "eshik",
    art: "balcony",
    tone: "#f8fafc",
    name: "Balkon bloki",
    desc: "Balkon eshigi va oyna birgalikda: toza va zamonaviy ko'rinish.",
    features: ["Eshik + oyna", "Past ostona varianti"],
    price: 2900000,
  },
  {
    id: "a-s",
    brand: "akfa",
    type: "eshik",
    art: "slider",
    tone: "#e2e8f0",
    name: "Sirpanuvchi eshik-oyna",
    desc: "Terrasa va lodjiya uchun joy tejaydigan alyuminiy tizim.",
    features: ["Alyuminiy profil", "Joy tejaydi"],
    price: 3400000,
  },
  {
    id: "e-1",
    brand: "ekopen",
    type: "oyna",
    art: "window1",
    tone: "#ffffff",
    name: "Bir qanotli oyna",
    desc: "Oshxona, hammom va kichik xonalar uchun ixcham oyna.",
    features: ["Ixcham o'lcham", "Qiya ochish rejimi"],
    price: 850000,
  },
  {
    id: "e-2",
    brand: "ekopen",
    type: "oyna",
    art: "window2",
    tone: "#ffffff",
    name: "Ikki qanotli oyna",
    desc: "Yashash xonasi va yotoqxona uchun qulay narxdagi oyna.",
    features: ["Ikki kamerali paket", "Ovoz izolyatsiyasi"],
    price: 1250000,
  },
  {
    id: "e-b",
    brand: "ekopen",
    type: "eshik",
    art: "balcony",
    tone: "#ffffff",
    name: "Balkon bloki",
    desc: "Mustahkam furnitura bilan balkon eshigi va oyna to'plami.",
    features: ["Eshik + oyna", "Mustahkam furnitura"],
    price: 2500000,
  },
  {
    id: "e-d",
    brand: "ekopen",
    type: "eshik",
    art: "entrance",
    tone: "#ffffff",
    name: "Kirish PVX eshigi",
    desc: "Ayvon va tambur uchun issiqlik saqlovchi PVX kirish eshigi.",
    features: ["Shisha insert", "Ikki nuqtali qulf"],
    price: 2100000,
  },
];

export const IRON_MODELS = [
  {
    id: "klassik",
    name: "Klassik",
    art: "iron",
    price: 2600000,
    desc: "Kvartira uchun ishonchli klassik model: ikkita qulf, ko'zcha va zich izolyatsiya.",
    specs: ["Ikki qulfli tizim", "Issiqlik va shovqin izolyatsiyasi", "Ichki MDF qoplama", "Eshik ko'zchasi"],
  },
  {
    id: "premium",
    name: "Premium MDF",
    art: "ironPanel",
    price: 4200000,
    desc: "Zamonaviy frezerlangan MDF panel, yashirin ilgaklar va uzun tutqich.",
    specs: ["Frezerlangan MDF panel", "Yashirin ilgak tizimi", "Uch nuqtali qulf", "Qo'shimcha shovqin izolyatsiyasi"],
  },
  {
    id: "kocha",
    name: "Hovli / ko'cha",
    art: "ironStreet",
    price: 3800000,
    desc: "Hovli va tashqi kirish uchun: kuchaytirilgan karkas va namlikka chidamli bo'yoq.",
    specs: ["Kuchaytirilgan po'lat karkas", "Namlikka chidamli bo'yoq", "Ikki tomonlama qulf", "Katta o'lcham varianti"],
  },
];

export const IRON_COLORS = [
  { id: "qora", name: "Qora", hex: "#1f2937" },
  { id: "yongoq", name: "Yong'oq", hex: "#7a4a2b" },
  { id: "oq", name: "Oq", hex: "#e5e7eb" },
  { id: "kulrang", name: "Kulrang", hex: "#64748b" },
  { id: "aqua", name: "Aqua", hex: "#0e7490" },
];

// Kalkulyator: 1 m² narxi (so'm) va koeffitsientlar
export const CALC = {
  rates: { akfa: 1100000, ekopen: 950000 },
  glass: [
    { id: "1", label: "1 kamerali shisha paket", k: 1 },
    { id: "2", label: "2 kamerali shisha paket", k: 1.18 },
  ],
  kinds: [
    { id: "oyna", label: "Oyna", k: 1 },
    { id: "balkon", label: "Balkon eshigi", k: 1.25 },
  ],
  sashPrice: 250000, // har bir ochiladigan qanot uchun
};

export const FEATURES = [
  { icon: "heat", title: "Issiqlikni saqlaydi", text: "Ko'p kamerali profil va shisha paket qishda issiqni, yozda salqinni ushlab turadi." },
  { icon: "sound", title: "Shovqinni kamaytiradi", text: "Zich yopilish va shisha paket ko'cha shovqinini sezilarli pasaytiradi." },
  { icon: "shield", title: "Xavfsizlik", text: "Mustahkam furnitura va ikki qulfli temir eshiklar uyingizni himoya qiladi." },
  { icon: "ruler", title: "Bepul o'lchov", text: "Mutaxassis manzilingizga kelib, o'lchab va maslahat beradi." },
  { icon: "truck", title: "Yetkazish va o'rnatish", text: "Buyurtma tayyor bo'lgach, yetkazib berib, toza o'rnatib beramiz." },
  { icon: "award", title: "Kafolat", text: "Mahsulot va o'rnatish ishlariga yozma kafolat beriladi." },
];

export const STEPS = [
  { title: "Ariza qoldiring", text: "Sayt, Telegram yoki telefon orqali bog'laning." },
  { title: "Bepul o'lchov", text: "Mutaxassis kelib, o'lchab va narxni aniqlaydi." },
  { title: "Ishlab chiqarish", text: "Buyurtmangiz o'lchamiga mos tayyorlanadi." },
  { title: "O'rnatish", text: "Yetkazib, o'rnatib va topshirib beramiz." },
];

export const FAQ = [
  { q: "Buyurtma qancha vaqtda tayyor bo'ladi?", a: "Odatda o'lchovdan keyin 5–10 ish kuni ichida. Aniq muddat hajm va modelga bog'liq." },
  { q: "O'lchov pullikmi?", a: "Yo'q, o'lchov va maslahat bepul." },
  { q: "Akfa va Ekopen orasida qanday farq bor?", a: "Ikkalasi ham sifatli profil. Narx, rang va imkoniyatlar farq qiladi, mutaxassisimiz xonangizga mosini tavsiya qiladi." },
  { q: "Kafolat bormi?", a: "Ha, mahsulot va o'rnatishga yozma kafolat beriladi. Muddat shartnomada ko'rsatiladi." },
];

export function formatPrice(n) {
  let s = String(Math.round(n));
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += " ";
    out += s[i];
  }
  return out + " so'm";
}
