import { Camera } from "lucide-react";

// Root-absolute asset paths (e.g. "/images/hero.jpg") must be prefixed with
// the base path when the site is served from a subdirectory (GitHub Pages).
// Next only auto-prefixes next/image & next/link, not a plain <img>.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
function withBasePath(src: string) {
  return src.startsWith("/") ? `${BASE_PATH}${src}` : src;
}

type Tone = "beige" | "forest" | "warm";

const tones: Record<Tone, string> = {
  beige: "from-[#F3EEE5] via-[#EFE8DC] to-[#E7DECB]",
  forest: "from-[#EAEFEA] via-[#E2E9E2] to-[#D3DFD4]",
  warm: "from-[#F6EFE6] via-[#F0E4D6] to-[#EAD9C4]",
};

interface PhotoProps {
  /**
   * Path to a real photograph (e.g. "/images/hero.jpg"). When omitted, an
   * elegant placeholder is rendered so the layout still reads as premium.
   * Drop real images into /public/images and pass their path here.
   */
  src?: string;
  alt: string;
  /** Caption shown inside the placeholder to indicate the intended photo. */
  label?: string;
  className?: string;
  imgClassName?: string;
  tone?: Tone;
  priority?: boolean;
  rounded?: string;
}

// A photo slot. Renders a real <img> when `src` is supplied, otherwise a
// tasteful, on-brand placeholder that names the intended shot.
export function Photo({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  tone = "beige",
  priority = false,
  rounded = "rounded-3xl",
}: PhotoProps) {
  if (src) {
    return (
      <div className={`overflow-hidden ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(src)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${rounded} ring-1 ring-black/5 ${className}`}
    >
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-forest shadow-sm">
          <Camera className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        {label ? (
          <span className="text-sm font-medium tracking-tight text-ink/70">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
