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
        src="/images/dogs-together.jpg"
        alt={t.closing.photoLabel}
        label={t.closing.photoLabel}
        tone="warm"
        rounded="rounded-none"
        imgClassName="object-[center_30%]"
        className="absolute inset-0 h-full w-full"
      />
      {/* gentle wash so the photo stays visible around the text card */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/50 via-canvas/25 to-canvas/60" />

      <div className="relative mx-auto flex w-full max-w-content items-center justify-center px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="w-full max-w-xl">
          <div className="rounded-3xl bg-white/80 p-8 text-center shadow-lift ring-1 ring-white/60 backdrop-blur-md sm:p-10">
            <h2 className="text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
              {t.closing.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
              {t.closing.body}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#contact" variant="primary">
                {t.closing.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
