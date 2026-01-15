// app/components/ScrollProgress.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  const target = useRef(0);
  const current = useRef(0);

  useEffect(() => {
    const updateTarget = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      target.current = height > 0 ? scrollTop / height : 0;
    };

    const animate = () => {
      /* EXTREMELY SMOOTH EASING */
    const ease = 0.035;


      current.current += (target.current - current.current) * ease;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${current.current})`;
      }

      requestAnimationFrame(animate);
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 4,
        zIndex: 100000,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        ref={barRef}
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          transformOrigin: "left",
          transform: "scaleX(0)",
          borderRadius: 0,
          willChange: "transform",
        }}
      />
    </div>
  );
}
