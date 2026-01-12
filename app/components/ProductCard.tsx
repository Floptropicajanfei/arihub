"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  cardImages?: string[]; // <-- use this for slideshow on cards
  cardImage?: string;    // fallback
  robuxPrice: number;
  robloxGameUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => {
    const list = product.cardImages?.length
      ? product.cardImages
      : product.cardImage
      ? [product.cardImage]
      : [];
    return list;
  }, [product.cardImages, product.cardImage]);

  const [index, setIndex] = useState(0);

  // Zoom modal state + fade out
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomClosing, setZoomClosing] = useState(false);

  const autoplayRef = useRef<number | null>(null);

  const hasMany = images.length > 1;

  const next = () => {
    if (!images.length) return;
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    if (!images.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  // Autoplay (paused when zoom is open)
  useEffect(() => {
    if (!hasMany || zoomOpen) return;

    autoplayRef.current = window.setInterval(() => {
      next();
    }, 4500);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany, zoomOpen, images.length]);

  // Keyboard controls when zoomed
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
  }, [zoomOpen, images.length]);

  const openZoom = () => {
    if (!images.length) return;
    setZoomOpen(true);
    setZoomClosing(false);
  };

  const closeZoom = () => {
    // fade-out before unmounting
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
                {/* sliding image */}
                <img
                  key={images[index]} // key triggers re-render for animation
                  className="product-img"
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
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous image"
                  >
                    <img src="/arrowleft.png" alt="" />
                  </button>

                  <button
                    type="button"
                    className="arrow arrow-right"
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
            </>
          ) : (
            <div className="product-img-missing">No image</div>
          )}
        </div>

        {/* TEXT */}
        <div className="product-body">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.shortDescription}</p>
        </div>

        {/* FOOTER (buy button) */}
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

      {/* ZOOM MODAL */}
      {zoomOpen && (
        <div
          className={`zoom-backdrop ${zoomClosing ? "zoom-out" : "zoom-in"}`}
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) closeZoom();
          }}
        >
          <div className={`zoom-panel ${zoomClosing ? "zoom-out" : "zoom-in"}`}>
            <div className="zoom-media">
              <img className="zoom-img" src={images[index]} alt={product.name} />

              {hasMany && (
                <>
                  <button
                    type="button"
                    className="zoom-arrow zoom-left"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    <img src="/arrowleft.png" alt="" />
                  </button>
                  <button
                    type="button"
                    className="zoom-arrow zoom-right"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <img src="/arrowright.png" alt="" />
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
