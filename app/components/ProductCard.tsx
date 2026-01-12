"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  pageDescription?: string;

  cardImages?: string[];
  cardImage?: string;

  robuxPrice: number;
  robloxGameUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const images = useMemo(() => {
    const list =
      product.cardImages?.length ? product.cardImages : product.cardImage ? [product.cardImage] : [];
    return list.filter(Boolean);
  }, [product.cardImages, product.cardImage]);

  const hasMany = images.length > 1;

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");

  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomClosing, setZoomClosing] = useState(false);

  const autoplayRef = useRef<number | null>(null);

  const next = () => {
    if (!images.length) return;
    setDir("right");
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    if (!images.length) return;
    setDir("left");
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

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
    }, 200);
  };

  // Autoplay (paused in zoom)
  useEffect(() => {
    if (!hasMany || zoomOpen) return;

    autoplayRef.current = window.setInterval(() => {
      setDir("right");
      setIndex((i) => (i + 1) % images.length);
    }, 4500);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [hasMany, zoomOpen, images.length]);

  // Keyboard controls in zoom
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

  // Lock scroll when zoom open
  useEffect(() => {
    if (!zoomOpen) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [zoomOpen]);

  // Keep index valid if images change
  useEffect(() => {
    if (!images.length) return;
    if (index >= images.length) setIndex(0);
  }, [images.length, index, images]);

  const currentSrc = images[index];

  return (
    <>
      <style jsx global>{`
        .product-box {
          border-radius: 22px;
          overflow: hidden;
        }

        .product-media {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
        }

        .product-media-click {
          display: block;
          width: 100%;
          border: 0;
          padding: 0;
          background: transparent;
          cursor: zoom-in;
        }

        .product-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          border-radius: 18px;
          animation: slideInRight 220ms ease both;
        }

        @media (min-width: 860px) {
          .product-img {
            height: 260px;
          }
        }

        .slide-right {
          animation: slideInRight 220ms ease both;
        }
        .slide-left {
          animation: slideInLeft 220ms ease both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          z-index: 3;
          opacity: 0.95;
        }

        .arrow-left {
          left: 14px;
        }
        .arrow-right {
          right: 14px;
        }

        .arrow img {
          width: 22px;
          height: 22px;
          display: block;
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35));
        }

        /* ZOOM */
        .zoom-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background: rgba(0, 0, 0, 0); /* no grey overlay */
        }

        .zoom-panel {
          position: relative;
          width: min(1200px, calc(100vw - 36px));
          height: min(760px, calc(100vh - 72px));
          border-radius: 22px;
          overflow: hidden;
          background: transparent;
        }

        .zoom-media {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zoom-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 22px;
          display: block;
          background: transparent;
        }

        .zoom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          z-index: 10001;
          opacity: 0.95;
        }

        .zoom-left {
          left: 18px;
        }

        .zoom-right {
          right: 18px;
        }

        .zoom-arrow img {
          width: 28px;
          height: 28px;
          display: block;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
        }

        .zoom-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10002;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 0;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.28);
          color: #fff;
          font-size: 22px;
          line-height: 1;
          display: grid;
          place-items: center;
          backdrop-filter: blur(6px);
        }

        .zoom-in {
          animation: zoomFadeIn 180ms ease both;
        }
        .zoom-out {
          animation: zoomFadeOut 180ms ease both;
        }

        @keyframes zoomFadeIn {
          from {
            opacity: 0;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes zoomFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.99);
          }
        }
      `}</style>

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
                  key={`${currentSrc}-${dir}`}
                  className={`product-img slide-${dir}`}
                  src={currentSrc}
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
          {product.pageDescription ? <p className="product-desc">{product.pageDescription}</p> : null}
        </div>

        <div className="product-footer">
          <a className="btn btn-buy" href={product.robloxGameUrl} target="_blank" rel="noreferrer">
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
          role="dialog"
          aria-modal="true"
        >
          <div className={`zoom-panel ${zoomClosing ? "zoom-out" : "zoom-in"}`}>
            <button type="button" className="zoom-close" onClick={closeZoom} aria-label="Close">
              ×
            </button>

            <div className="zoom-media">
              <img
                key={`${currentSrc}-zoom-${dir}`}
                className={`zoom-img slide-${dir}`}
                src={currentSrc}
                alt={product.name}
              />

              {hasMany && (
                <>
                  <button type="button" className="zoom-arrow zoom-left" onClick={prev} aria-label="Previous image">
                    <img src="/arrowleft.png" alt="" />
                  </button>
                  <button type="button" className="zoom-arrow zoom-right" onClick={next} aria-label="Next image">
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
