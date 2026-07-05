import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium tracking-tight transition duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black hover:shadow-lift",
  secondary:
    "bg-white text-ink ring-1 ring-line hover:-translate-y-0.5 hover:shadow-soft",
};

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  children: ReactNode;
}

// Anchor-based button so it works for in-page navigation and links.
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

interface ActionButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  children: ReactNode;
}

export function ActionButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
