// app/components/ProductCard.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/app/lib/productsData";

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => product.cardImages || [], [product.cardImages]);
  const [index, setIndex] = useState(0);

  const [zoomOpen, setZoomOpen] = useState(false);
  const [closing, setClosing] = useState(false);

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

  useEffect(() => {
    if (!hasMany || zoomOpen) return;

    autoplayRef.current = window.setInterval(() => next(), 4500);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany, zoomOpen, images.length]);

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
    setClosing(false);
  };

  const closeZoom = () => {
    setClosing(true);
    window.setTimeout(() => {
      setZoomOpen(false);
      setClosing(false);
    }, 220);
  };

  const comingSoonHref = `/products/coming-soon?slug=${encodeURIComponent(
    product.slug
  )}`;

  return (
    <>
      <article className="product-box">
        <div className="product-media" style={{ position: "relative" }}>
          {images.length ? (
            <>
              <button
                type="button"
                onClick={openZoom}
                className="product-media-click"
                aria-label="Open image"
                style={{ all: "unset", cursor: "pointer", width: "100%", display: "block" }}
              >
                <img
                  key={`${product.slug}-${index}`}
                  className="product-img"
                  src={images[index]}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: 190,
                    objectFit: "cover",
                    borderRadius: 18,
                    display: "block",
                  }}
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
                    style={{
                      position: "absolute",
                      left: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img src="/arrowleft.png" alt="" style={{ width: 28, height: 28 }} />
                  </button>

                  <button
                    type="button"
                    className="arrow arrow-right"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next image"
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img src="/arrowright.png" alt="" style={{ width: 28, height: 28 }} />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="product-img-missing">No image</div>
          )}
        </div>

        <div className="product-body">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.shortDescription}</p>
          {product.pageDescription ? <p className="product-desc muted">{product.pageDescription}</p> : null}
        </div>

        <div className="product-footer">
          {product.comingSoon ? (
            <a className="btn btn-buy" href={comingSoonHref}>
              Coming soon
            </a>
          ) : (
            <a className="btn btn-buy" href={product.robloxGameUrl} target="_blank" rel="noreferrer">
              <img className="robux-icon" src="/robux.png" alt="Robux" />
              <span className="robux-price">{product.robuxPrice}</span>
            </a>
          )}
        </div>
      </article>

      {zoomOpen && (
        <div
          className={`zoom-backdrop ${closing ? "zoom-out" : "zoom-in"}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeZoom();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 22,
            background: "rgba(0,0,0,0.78)",
            animation: closing ? "fadeOut .22s ease forwards" : "fadeIn .22s ease forwards",
          }}
        >
          <div
            className={`zoom-panel ${closing ? "zoom-out" : "zoom-in"}`}
            style={{
              width: "min(1200px, 96vw)",
              height: "min(720px, 86vh)",
              borderRadius: 40,
              overflow: "hidden",
              position: "relative",
              background: "transparent",
              transform: closing ? "scale(0.965)" : "scale(1)",
              transition: "transform .22s ease",
            }}
          >
            <img
              key={`zoom-${product.slug}-${index}`}
              src={images[index]}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "transparent",
                animation: closing ? "none" : "slideIn .25s ease",
              }}
            />

            <button
              type="button"
              onClick={closeZoom}
              aria-label="Close"
              style={{
                position: "absolute",
                right: 26,
                top: 26,
                zIndex: 3,
                width: 42,
                height: 42,
                borderRadius: 999,
                border: 0,
                background: "rgba(0,0,0,0.35)",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
            >
              ×
            </button>

            {hasMany && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: 24,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                >
                  <img src="/arrowleft.png" alt="" style={{ width: 36, height: 36 }} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: 24,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                >
                  <img src="/arrowright.png" alt="" style={{ width: 36, height: 36 }} />
                </button>
              </>
            )}
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
            @keyframes slideIn { from { opacity: 0; transform: translateX(14px); } to { opacity: 1; transform: translateX(0); } }
          `}</style>
        </div>
      )}
    </>
  );
}
