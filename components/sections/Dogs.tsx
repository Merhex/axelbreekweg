"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

// Real photos keyed by dog name (names are the same in both locales).
const dogPhotos: Record<string, string | undefined> = {
  Goldas: "/images/goldas.jpg",
  // Raava: "/images/raava.jpg", // add when available
};

export function Dogs() {
  const { t } = useI18n();

  return (
    <Section id="dogs" alt>
      <SectionHeader title={t.dogs.heading} subtitle={t.dogs.subheading} />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {t.dogs.list.map((dog, i) => (
          <Reveal
            key={dog.name}
            delay={0.08 * i}
            className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-line/60"
          >
            <Photo
              src={dogPhotos[dog.name]}
              alt={dog.photoLabel}
              label={dog.photoLabel}
              tone={i % 2 === 0 ? "warm" : "forest"}
              rounded="rounded-none"
              imgClassName="object-[center_38%]"
              className="aspect-[4/3] w-full"
            />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {dog.name}
                </h3>
                <span className="text-sm text-muted">
                  {dog.meta.join(" · ")}
                </span>
              </div>

              <p className="mt-4 text-pretty leading-relaxed text-muted">
                {dog.blurb}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {dog.traits.map((trait) => (
                  <li
                    key={trait}
                    className="inline-flex items-center gap-1.5 rounded-full bg-forest-faint px-3 py-1.5 text-sm font-medium text-forest"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
