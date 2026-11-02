import { SITE } from "../data";

export default function FloatingTelegram() {
  return (
    <a
      href={"https://t.me/" + SITE.telegram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram orqali yozish"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-aqua-500 to-aqua-700 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-aqua-600/40 transition hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
      <span className="hidden sm:inline">Telegramda yozing</span>
    </a>
  );
}
