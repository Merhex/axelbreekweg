"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-2 px-5 py-10 text-center sm:px-8">
        <p className="text-base font-semibold tracking-tight text-ink">
          Axel<span className="text-forest">.</span>
        </p>
        <p className="text-sm text-muted">{t.footer.tagline}</p>
        <p className="mt-1 text-xs text-muted/70">
          Axel · Vilnius, Lietuva · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
