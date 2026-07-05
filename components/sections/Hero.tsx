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

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* full-bleed lifestyle photo */}
      <Photo
        alt={t.hero.photoLabel}
        label={t.hero.photoLabel}
        tone="warm"
        rounded="rounded-none"
        priority
        className="absolute inset-0 h-full w-full"
      />
      {/* readability scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.p
            {...fade(0.05)}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-forest ring-1 ring-line backdrop-blur"
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
      </div>

      <a
        href="#trust"
        aria-label={t.hero.ctaPrimary}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-ink sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
