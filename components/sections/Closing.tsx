"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";

export function Closing() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <Photo
        alt={t.closing.photoLabel}
        label={t.closing.photoLabel}
        tone="warm"
        rounded="rounded-none"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/40" />

      <div className="relative mx-auto w-full max-w-content px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
            {t.closing.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {t.closing.body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact" variant="primary">
              {t.closing.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
