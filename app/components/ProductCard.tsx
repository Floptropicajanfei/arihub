"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;
  description: string; // short description
  images: string[];
  robuxPrice: number;
  robloxUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => product.images || [], [product.images]);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<(-1 | 1)>(1);

  const hoveredRef = useRef(false);

  // Lightbox
  const [open, setOpen] = useState(false);

  const clampIndex = (i: number) => {
    if (!images.length) return 0;
    const m = images.length;
    return ((i % m) + m) % m;
  };

  const go = (nextIndex: number, direction: -1 | 1) => {
    if (images.length <= 1) return;
    setDir(direction);
    setIndex(clampIndex(nextIndex));
  };

  const prev = () => go(index - 1, -1);
  const next = () => go(index + 1, 1);

  // ✅ autoplay (PAUSES on hover OR when lightbox is open)
  useEffect(() => {
    if (images.length <= 1) return;
    if (open) return;

    const t = setInterval(() => {
      if (hoveredRef.current) return;
      go(index + 1, 1);
    }, 3500);

    return () => clearInterval(t);
  }, [index, images.length, open]);

  // ESC to close lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index]);

  return (
    <>
      <article
        className="product-box"
        onMouseEnter={() => (hoveredRef.current = true)}
        onMouseLeave={() => (hoveredRef.current = false)}
      >
        {/* MEDIA */}
        <div
          className="product-image"
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
          aria-label={`Open ${product.name} images`}
        >
          <div
            className={`product-track ${dir === 1 ? "dir-right" : "dir-left"}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div className="product-slide" key={`${src}-${i}`}>
                <img src={src} alt={product.name} />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                className="arrow left"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <img src="/arrowleft.png" alt="" />
              </button>

              <button
                className="arrow right"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <img src="/arrowright.png" alt="" />
              </button>
            </>
          )}
        </div>

        {/* TEXT */}
        <div className="product-content">
          <h3>{product.name}</h3>
          <p className="muted">{product.description}</p>
        </div>

        {/* BUY */}
        <div className="product-footer">
          <a
            className="btn btn-white"
            href={product.robloxUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img className="robux-icon" src="/robux.png" alt="Robux" />
            <span className="robux-price">{product.robuxPrice}</span>
          </a>
        </div>
      </article>

      {/* ✅ LIGHTBOX */}
      {open && (
        <div
          className="lightbox"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) setOpen(false);
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="lightbox-panel">
            <div className="lightbox-image">
              <div
                className={`product-track ${dir === 1 ? "dir-right" : "dir-left"}`}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((src, i) => (
                  <div className="product-slide" key={`lb-${src}-${i}`}>
                    <img src={src} alt={product.name} />
                  </div>
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button className="arrow left" type="button" onClick={prev} aria-label="Previous image">
                    <img src="/arrowleft.png" alt="" />
                  </button>
                  <button className="arrow right" type="button" onClick={next} aria-label="Next image">
                    <img src="/arrowright.png" alt="" />
                  </button>
                </>
              )}
            </div>

            <button className="lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
