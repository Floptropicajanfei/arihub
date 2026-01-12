// app/components/ProductCard.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/app/lib/productsData";

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => {
    const list = product.cardImages?.length ? product.cardImages : [];
    return list;
  }, [product.cardImages]);

  const [index, setIndex] = useState(0);

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
      <article className="product-box">
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
                  key={images[index]}
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

        <div className="product-body">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.shortDescription}</p>
          {product.pageDescription ? (
            <p className="product-desc muted">{product.pageDescription}</p>
          ) : null}
        </div>

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
