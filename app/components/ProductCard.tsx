"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;

  pageDescription: string;
  shortDescription?: string;

  cardImages: string[];

  robuxPrice: number;
  robloxGameUrl: string;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return (i % len + len) % len;
}

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => product.cardImages ?? [], [product.cardImages]);
  const hasMany = images.length > 1;

  const [index, setIndex] = useState(0);

  // direction for slide animation
  const [dir, setDir] = useState<"left" | "right">("right");
  const [animKey, setAnimKey] = useState(0);

  // zoom modal
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomClosing, setZoomClosing] = useState(false);

  const autoplayRef = useRef<number | null>(null);

  const go = (nextIndex: number, direction: "left" | "right") => {
    if (!images.length) return;
    setDir(direction);
    setIndex(clampIndex(nextIndex, images.length));
    setAnimKey((k) => k + 1);
  };

  const next = () => go(index + 1, "right");
  const prev = () => go(index - 1, "left");

  // autoplay (pause when zoom open)
  useEffect(() => {
    if (!hasMany || zoomOpen) return;

    autoplayRef.current = window.setInterval(() => {
      // setDir needs to be "right" for autoplay
      setDir("right");
      setIndex((i) => clampIndex(i + 1, images.length));
      setAnimKey((k) => k + 1);
    }, 4500);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [hasMany, zoomOpen, images.length]);

  // keyboard controls when zoomed
  useEffect(() => {
    if (!zoomOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomOpen, index, images.length]);

  const openZoom = () => {
    if (!images.length) return;
    setZoomOpen(true);
    setZoomClosing(false);
  };

  const closeZoom = () => {
    setZoomClosing(true);
    window.setTimeout(() => {
      setZoomOpen(false);
      setZoomClosing(false);
    }, 180);
  };

  return (
    <>
      <article className="product-box">
        {/* IMAGE */}
        <div className="product-media">
          {images.length ? (
            <>
              <button
                type="button"
                className="product-media-click"
                onClick={openZoom}
                aria-label="Open image"
              >
                <img
                  key={`${animKey}-${images[index]}`}
                  className={`product-img slide-${dir}`}
                  src={images[index]}
                  alt={product.name}
                />
              </button>

              {hasMany && (
                <>
                  <button
                    type="button"
                    className="arrow arrow-left"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous image"
                  >
                    <img src="/arrowleft.png" alt="" draggable={false} />
                  </button>

                  <button
                    type="button"
                    className="arrow arrow-right"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next image"
                  >
                    <img src="/arrowright.png" alt="" draggable={false} />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="product-img-missing">No image</div>
          )}
        </div>

        {/* TEXT */}
        <div className="product-body">
          <h3 className="product-title">{product.name}</h3>

          <p className="product-page-desc">{product.pageDescription}</p>

          {product.shortDescription ? (
            <p className="product-desc">{product.shortDescription}</p>
          ) : null}
        </div>

        {/* FOOTER */}
        <div className="product-footer">
          <a
            className="btn btn-buy"
            href={product.robloxGameUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img className="robux-icon" src="/robux.png" alt="Robux" />
            <span className="robux-price">{product.robuxPrice}</span>
          </a>
        </div>
      </article>

      {/* ZOOM */}
      {zoomOpen && (
        <div
          className={`zoom-backdrop ${zoomClosing ? "zoom-out" : "zoom-in"}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeZoom();
          }}
        >
          <div className={`zoom-panel ${zoomClosing ? "zoom-out" : "zoom-in"}`}>
            <div className="zoom-media">
              <img
                key={`${animKey}-zoom-${images[index]}`}
                className={`zoom-img slide-${dir}`}
                src={images[index]}
                alt={product.name}
              />

              {hasMany && (
                <>
                  <button
                    type="button"
                    className="zoom-arrow zoom-left"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    <img src="/arrowleft.png" alt="" draggable={false} />
                  </button>

                  <button
                    type="button"
                    className="zoom-arrow zoom-right"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <img src="/arrowright.png" alt="" draggable={false} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
