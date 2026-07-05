"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lock, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ActionButton } from "@/components/ui/Button";
import { Icon } from "@/lib/icons";
import { QrCode } from "@/components/QrCode";

export function Contact() {
  const { t } = useI18n();
  const [revealed, setRevealed] = useState(false);
  const reduce = useReducedMotion();

  return (
    <Section id="contact" alt>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-forest">
            {t.contact.heading}
          </p>
          <h2 className="text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
            {t.contact.prompt}
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted">
            {t.contact.note}
          </p>

          <div className="mt-8">
            <AnimatePresence mode="wait" initial={false}>
              {!revealed ? (
                <motion.div
                  key="cta"
                  initial={reduce ? undefined : { opacity: 0 }}
                  animate={reduce ? undefined : { opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ActionButton
                    variant="primary"
                    onClick={() => setRevealed(true)}
                    aria-expanded={revealed}
                    aria-controls="contact-details"
                  >
                    <Lock className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    {t.contact.reveal}
                  </ActionButton>
                </motion.div>
              ) : (
                <motion.ul
                  id="contact-details"
                  key="details"
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {t.contact.links.map((link) => (
                    <li key={link.type}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-line/60 transition duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-faint text-forest">
                          <Icon name={link.type} className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-medium uppercase tracking-[0.1em] text-muted">
                            {link.label}
                          </span>
                          <span className="block truncate text-[15px] font-medium text-ink">
                            {link.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-muted transition group-hover:text-forest"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <QrCode />
        </Reveal>
      </div>
    </Section>
  );
}
