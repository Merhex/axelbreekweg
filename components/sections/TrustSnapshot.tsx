"use client";

import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icons";

export function TrustSnapshot() {
  const { t } = useI18n();

  return (
    <Section id="trust">
      <SectionHeader title={t.trust.heading} subtitle={t.trust.subheading} />

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {t.trust.cards.map((card, i) => (
          <Reveal
            as="li"
            key={card.label}
            delay={(i % 5) * 0.05}
            hoverLift
            className="hover-guard group flex flex-col items-center gap-3 rounded-2xl bg-card p-5 text-center shadow-soft ring-1 ring-line/60 transition-shadow duration-200 ease-smooth hover:shadow-lift sm:p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-faint text-forest transition-transform duration-200 group-hover:scale-105">
              <Icon name={card.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium leading-snug tracking-tight text-ink">
              {card.label}
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
