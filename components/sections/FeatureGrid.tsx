"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icons";
import type { FeatureCard } from "@/lib/content";

interface FeatureGridProps {
  id: string;
  heading: string;
  subheading: string;
  cards: FeatureCard[];
  alt?: boolean;
}

export function FeatureGrid({
  id,
  heading,
  subheading,
  cards,
  alt = false,
}: FeatureGridProps) {
  return (
    <Section id={id} alt={alt}>
      <SectionHeader title={heading} subtitle={subheading} />

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            delay={(i % 4) * 0.05}
            hoverLift
            className="hover-guard group flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-soft ring-1 ring-line/60 transition-shadow duration-200 ease-smooth hover:shadow-lift sm:p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-faint text-forest transition-transform duration-200 group-hover:scale-105">
              <Icon name={card.icon} className="h-5 w-5" />
            </span>
            <span className="text-[15px] font-medium leading-snug tracking-tight text-ink">
              {card.title}
            </span>
            {card.desc ? (
              <span className="text-sm leading-snug text-muted">{card.desc}</span>
            ) : null}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
