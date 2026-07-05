"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useI18n } from "@/lib/i18n";

// Renders a QR code pointing at the current page so it can be printed on a
// rental application or shared digitally.
export function QrCode() {
  const { t } = useI18n();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.origin + window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl bg-card p-8 text-center shadow-soft ring-1 ring-line/60 sm:flex-row sm:text-left">
      <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-line">
        {url ? (
          <QRCodeSVG
            value={url}
            size={136}
            level="M"
            bgColor="#FFFFFF"
            fgColor="#222222"
            aria-label={t.qr.heading}
          />
        ) : (
          <div className="h-[136px] w-[136px] animate-pulse rounded-lg bg-beige" />
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {t.qr.heading}
        </h3>
        <p className="mt-2 max-w-xs text-pretty leading-relaxed text-muted">
          {t.qr.body}
        </p>
      </div>
    </div>
  );
}
