"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
  /**
   * Adds a subtle lift on hover, driven by Framer so it shares the same
   * transform channel as the entrance animation. Do NOT also put a CSS
   * transform transition (e.g. hover:-translate-y) on the same element —
   * that fights this animation and causes a flicker on scroll-in.
   */
  hoverLift?: boolean;
}

// Subtle fade + slide-up on scroll. Honours prefers-reduced-motion by
// rendering content immediately with no transform.
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  hoverLift = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        hoverLift
          ? { y: -4, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }
          : undefined
      }
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
