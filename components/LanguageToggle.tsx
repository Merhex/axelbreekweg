"use client";

import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  const option = (value: Locale, label: string) => {
    const active = locale === value;
    return (
      <button
        type="button"
        onClick={() => setLocale(value)}
        aria-pressed={active}
        className={`rounded-full px-3 py-1 text-sm font-medium transition duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
          active ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className="flex items-center rounded-full bg-beige/80 p-0.5 ring-1 ring-line"
    >
      {option("lt", t.langToggle.lt)}
      {option("en", t.langToggle.en)}
    </div>
  );
}
