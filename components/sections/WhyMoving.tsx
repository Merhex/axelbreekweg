"use client";

import { MapPin, ArrowRight, Navigation } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyMoving() {
  const { t } = useI18n();

  return (
    <Section id="moving">
      <SectionHeader title={t.moving.heading} subtitle={t.moving.subheading} />

      <Reveal className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-3xl bg-card p-6 shadow-soft ring-1 ring-line/60 sm:p-10">
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <div className="flex-1 rounded-2xl bg-beige/70 p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                {t.moving.fromLabel}
              </p>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-xl font-semibold text-ink">
                <MapPin className="h-4.5 w-4.5 text-forest" strokeWidth={1.5} />
                {t.moving.from}
              </p>
            </div>

            <ArrowRight
              className="mx-auto hidden h-6 w-6 shrink-0 text-forest sm:block"
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <div className="flex-1 rounded-2xl bg-forest-faint p-5 text-center ring-1 ring-forest/10">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-forest">
                {t.moving.toLabel}
              </p>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-xl font-semibold text-ink">
                <Navigation className="h-4.5 w-4.5 text-forest" strokeWidth={1.5} />
                {t.moving.to}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {t.moving.body.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-lg leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
