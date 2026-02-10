"use client";

import { useEffect } from "react";

export default function GlobalReveal() {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('[class*="card"]')
    );
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!el.classList.contains("reveal")) el.classList.add("reveal");
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            el.classList.remove("out-view");
          } else {
            el.classList.add("out-view");
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: [0, 0.15, 0.35, 0.65, 0.85], rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return null;
}
