"use client";

import { useMemo } from "react";

const TILE_COUNT = 140;

function deterministicDelays(count: number) {
  // simple LCG for stable pseudo-random delays
  let seed = 1337;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 31;
    return seed / 2 ** 31;
  };
  return Array.from({ length: count }, () => +(next() * 3).toFixed(2));
}

export default function FooterPulseGrid() {
  const delays = useMemo(() => deterministicDelays(TILE_COUNT), []);

  return (
    <div className="footer-pulse-grid" aria-hidden>
      {delays.map((delay, i) => (
        <div
          key={i}
          className="footer-tile"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}
