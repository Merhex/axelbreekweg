"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#dogs", label: t.nav.dogs },
    { href: "#care", label: t.nav.home },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ease-smooth ${
        scrolled
          ? "border-b border-line/70 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-md"
        >
          Axel<span className="text-forest">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
