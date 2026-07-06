import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ScrollHoverGuard } from "@/components/ScrollHoverGuard";

export const metadata: Metadata = {
  title: "Axel — A reliable tenant in Vilnius",
  description:
    "Get to know Axel — a Belgian software engineer relocating to Vilnius with two well-trained dogs. Stable, quiet, respectful and low-risk.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollHoverGuard />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
