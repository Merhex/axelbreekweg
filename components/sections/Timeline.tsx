"use client";

import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  const { t } = useI18n();
  const events = t.timeline.events;

  return (
    <Section id="timeline">
      <SectionHeader title={t.timeline.heading} subtitle={t.timeline.subheading} />

      {/* Desktop: horizontal */}
      <div className="mt-16 hidden md:block">
        <div className="relative">
          <div
            className="absolute left-0 right-0 top-[22px] h-px bg-line"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-5 gap-4">
            {events.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 0.08} className="flex flex-col items-center text-center">
                <span
                  className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-card text-sm font-semibold text-forest shadow-soft ring-1 ring-line"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {e.year ? (
                  <span className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-forest">
                    {e.year}
                  </span>
                ) : (
                  <span className="mt-4 h-4" />
                )}
                <span className="mt-1 text-[15px] font-semibold text-ink">
                  {e.title}
                </span>
                <span className="mt-1.5 text-sm leading-snug text-muted">
                  {e.desc}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile: vertical */}
      <ol className="mt-12 space-y-6 md:hidden">
        {events.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 0.06} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-sm font-semibold text-forest shadow-soft ring-1 ring-line">
                {i + 1}
              </span>
              {i < events.length - 1 ? (
                <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
              ) : null}
            </div>
            <div className="pb-2">
              {e.year ? (
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-forest">
                  {e.year}
                </span>
              ) : null}
              <p className="text-[15px] font-semibold text-ink">{e.title}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
