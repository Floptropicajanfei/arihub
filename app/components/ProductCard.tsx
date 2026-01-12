"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;

  // Any of these may exist depending on your data:
  cardImages?: string[];
  galleryImages?: string[];
  cardImage?: string;
  heroImage?: string;

  robuxPrice: number;
  robloxGameUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  // ✅ Very defensive: works with any of the common fields
  const images = useMemo(() => {
    const p: any = product;

    const fromCardImages =
      Array.isArray(p.cardImages) && p.cardImages.length ? p.cardImages : null;

    const fromGallery =
      Array.isArray(p.galleryImages) && p.galleryImages.length
        ? p.galleryImages
        : null;

    const fromSingleCard = typeof p.cardImage === "string" && p.cardImage
      ? [p.cardImage]
      : null;

    const fromHero = typeof p.heroImage === "string" && p.heroImage
      ? [p.heroImage]
      : null;

    return fromCardImages ?? fromGallery ?? fromSingleCard ?? fromHero ?? [];
  }, [product]);

  const [index, setIndex] = useState(0);

  // ✅ Reset index if images change (prevents out-of-range blank)
  useEffect(() => {
    setIndex(0);
  }, [product.id, images.length]);

  // Zoom modal state + fade-out
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomClosing, setZoomClosing] = useState(false);

  // Hover pause
  const [hovered, setHovered] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const hasMany = images.length > 1;

  const next = () => {
    if (!images.length) return;
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    if (!images.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  // ✅ Autoplay (pauses on hover OR zoom)
  useEffect(() => {
    if (!hasMany) return;
    if (zoomOpen) return;
    if (hovered) return;

    // clear old interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = window.setInterval(() => {
      // use functional state update indirectly via next()
      next();
    }, 4500);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany, zoomOpen, hovered, images.length]);

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
    setZoomClosing(true);
    window.setTimeout(() => {
      setZoomOpen(false);
      setZoomClosing(false);
    }, 180);
  };

  return (
    <>
      <article
        className="product-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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
                  key={`${product.id}-${images[index]}`} // ensures animation
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
                      e.preventDefault();
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
                      e.preventDefault();
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
