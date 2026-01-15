"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // If browser does NOT support CSS smooth scrolling
    if (!("scrollBehavior" in document.documentElement.style)) {
      const smoothScroll = (targetY: number, duration = 500) => {
        const startY = window.scrollY;
        const diff = targetY - startY;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const knowing = timestamp - start;
          const percent = Math.min(knowing / duration, 1);

          window.scrollTo(0, startY + diff * percent);

          if (knowing < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;

        if (!anchor) return;

        const id = anchor.getAttribute("href")?.slice(1);
        if (!id) return;

        const el = document.getElementById(id);
        if (!el) return;

        e.preventDefault();
        smoothScroll(el.offsetTop);
      });
    }
  }, []);

  return null;
}
