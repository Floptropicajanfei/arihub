// app/components/SmoothScroll.tsx
"use client";

import { useEffect } from "react";

/**
 * Ultra-smooth scrolling using requestAnimationFrame + easing.
 * Slower, softer, no snapping.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const originalScrollTo = window.scrollTo.bind(window);
    const originalScrollIntoView = Element.prototype.scrollIntoView;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScroll = (
      targetY: number,
      duration = 25 // ⬅ slower = smoother (increase if needed)
    ) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        originalScrollTo({
          top: startY + diff * eased,
          behavior: "auto",
        });

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    // PATCH scrollTo
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollTo = (optionsOrX?: any, y?: any) => {
      if (typeof optionsOrX === "object" && optionsOrX !== null) {
        smoothScroll(Number(optionsOrX.top ?? 0));
        return;
      }

      const top = typeof y === "number" ? y : 0;
      smoothScroll(top);
    };

    // PATCH scrollIntoView
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Element.prototype as any).scrollIntoView = function () {
      const rect = this.getBoundingClientRect();
      const targetY = rect.top + window.scrollY;
      smoothScroll(targetY);
    };

    return () => {
      window.scrollTo = originalScrollTo;
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  return null;
}
