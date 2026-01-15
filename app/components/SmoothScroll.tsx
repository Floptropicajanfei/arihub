// app/components/SmoothScroll.tsx
"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // --- scrollTo patch (type-safe) ---
    const originalScrollTo = window.scrollTo.bind(window);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollTo = (optionsOrX?: any, y?: any) => {
      // scrollTo(options)
      if (typeof optionsOrX === "object" && optionsOrX !== null) {
        return originalScrollTo({
          ...optionsOrX,
          behavior: "smooth",
        });
      }

      // scrollTo(x, y)
      const left = typeof optionsOrX === "number" ? optionsOrX : 0;
      const top = typeof y === "number" ? y : 0;

      return originalScrollTo({
        left,
        top,
        behavior: "smooth",
      });
    };

    // --- scrollIntoView patch (type-safe) ---
    const originalScrollIntoView = Element.prototype.scrollIntoView;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Element.prototype as any).scrollIntoView = function (options?: any) {
      if (typeof options === "object" && options !== null) {
        return originalScrollIntoView.call(this, {
          ...options,
          behavior: "smooth",
        });
      }

      // boolean | undefined -> convert to options object
      return originalScrollIntoView.call(this, {
        behavior: "smooth",
        block: options === false ? "nearest" : "start",
      });
    };

    return () => {
      window.scrollTo = originalScrollTo;
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  return null;
}
