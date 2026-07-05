import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Alternate soft-beige background band. */
  alt?: boolean;
}

export function Section({ id, children, className = "", alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-beige" : ""} scroll-mt-20 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-forest">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
