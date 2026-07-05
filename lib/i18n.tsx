"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { content, type Content, type Locale } from "./content";

interface I18nValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Content;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "ts-locale";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "lt";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "lt" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  // Automatic detection. Default to Lithuanian; only English speakers
  // (with no Lithuanian preference) fall back to English.
  const langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
  const prefersLt = langs.some((l) => l.toLowerCase().startsWith("lt"));
  const prefersEn = langs.some((l) => l.toLowerCase().startsWith("en"));
  if (prefersEn && !prefersLt) return "en";
  return "lt";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Server + first client render both use "lt" (the default) to avoid a
  // hydration mismatch. Detection runs in an effect right after mount.
  const [locale, setLocaleState] = useState<Locale>("lt");

  useEffect(() => {
    const detected = detectLocale();
    if (detected !== "lt") setLocaleState(detected);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
