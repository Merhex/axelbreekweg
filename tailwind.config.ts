import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, premium palette from the specification
        canvas: "#FAF8F4", // Primary background — Warm White
        beige: "#F3EEE5", // Secondary background — Soft Beige
        card: "#FFFFFF",
        ink: "#222222", // Primary text — Near Black
        muted: "#666666", // Secondary text — Warm Gray
        forest: {
          DEFAULT: "#4A5D4F", // Muted Forest Green accent
          soft: "#6E8272",
          faint: "#EAEFEA",
        },
        line: "#EAE4D8", // Hairline borders
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(34,34,34,0.04), 0 8px 24px rgba(34,34,34,0.05)",
        lift: "0 2px 4px rgba(34,34,34,0.05), 0 18px 40px rgba(34,34,34,0.08)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
