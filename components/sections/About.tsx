"use client";

import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/lib/icons";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" alt>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Photo
            src="/images/portrait.jpg"
            alt={t.about.photoLabel}
            label={t.about.photoLabel}
            tone="warm"
            imgClassName="object-top"
            className="aspect-[4/5] w-full shadow-soft"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-forest">
              {t.about.subheading}
            </p>
            <h2 className="text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
              {t.about.heading}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.about.values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={0.05 * i}
                className="flex gap-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-line/60"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-faint text-forest">
                  <Icon name={v.icon} className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {v.title}
                  </span>
                  {v.desc ? (
                    <span className="mt-0.5 block text-sm leading-snug text-muted">
                      {v.desc}
                    </span>
                  ) : null}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
