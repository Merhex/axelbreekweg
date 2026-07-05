"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

function FaqRow({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span className="text-[17px] font-medium tracking-tight text-ink">
            {q}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-beige text-forest transition-transform duration-300 ease-smooth ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <Plus className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="content"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-5 pr-10 text-pretty leading-relaxed text-muted">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const { t } = useI18n();

  return (
    <Section id="faq" alt>
      <SectionHeader title={t.faq.heading} subtitle={t.faq.subheading} />

      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-3xl bg-card px-6 shadow-soft ring-1 ring-line/60 sm:px-8">
          {t.faq.items.map((item, i) => (
            <FaqRow key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
