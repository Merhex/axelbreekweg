"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Dog } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const photoFade = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* soft warm backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_10%,rgba(74,93,79,0.06),transparent_55%),radial-gradient(80%_60%_at_10%_90%,rgba(243,238,229,0.9),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* text */}
        <div className="order-2 lg:order-1">
          <motion.p
            {...fade(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-forest shadow-soft ring-1 ring-line"
          >
            <Dog className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-ink sm:text-5xl md:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-9 flex flex-wrap gap-3">
            <Button href="#about" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#dogs" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* photo */}
        <motion.div {...photoFade} className="order-1 lg:order-2">
          <div className="relative">
            <Photo
              src="/images/hero.jpg"
              alt={t.hero.photoLabel}
              label={t.hero.photoLabel}
              tone="warm"
              priority
              imgClassName="object-center"
              className="aspect-[3/4] w-full shadow-lift"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-1.5 text-sm font-medium text-ink shadow-soft ring-1 ring-line backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-forest" aria-hidden="true" />
              Axel, Raava &amp; Goldas
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#trust"
        aria-label={t.hero.ctaPrimary}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-ink lg:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
