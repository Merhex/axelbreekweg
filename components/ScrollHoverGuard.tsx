"use client";

import { useEffect } from "react";

// While the page is actively scrolling, cards slide underneath a stationary
// cursor and each briefly triggers :hover — which reads as a flicker. This
// sets data-scrolling on <html> during scroll (cleared shortly after it
// stops); CSS then disables pointer events on hover cards while scrolling.
export function ScrollHoverGuard() {
  useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;

    const onScroll = () => {
      root.setAttribute("data-scrolling", "");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => root.removeAttribute("data-scrolling"), 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
      root.removeAttribute("data-scrolling");
    };
  }, []);

  return null;
}
