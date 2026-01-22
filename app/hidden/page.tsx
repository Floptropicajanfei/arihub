// app/hidden/page.tsx
"use client";

import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

type HiddenImage = {
  src: string;
  nsfw: boolean;
  warningText?: string;
};

const IMAGES: HiddenImage[] = [
  { src: "/hidden/1.webp", nsfw: true },
  { src: "/hidden/2.jpg", nsfw: false },
  { src: "/hidden/3.webp", nsfw: false },
  { src: "/hidden/4.jpeg", nsfw: false },
  { src: "/hidden/5.jpeg", nsfw: false },
  { src: "/hidden/6.jpg", nsfw: false },
  { src: "/hidden/7.avif", nsfw: false },
  { src: "/hidden/8.jpg", nsfw: false },
  { src: "/hidden/9.png", nsfw: false },
  { src: "/hidden/10.jpg", nsfw: false },
  { src: "/hidden/11.webp", nsfw: false },
  { src: "/hidden/12.avif", nsfw: false },
  { src: "/hidden/13.webp", nsfw: false },
  { src: "/hidden/14.jpg", nsfw: false },
  { src: "/hidden/15.avif", nsfw: false },
  { src: "/hidden/16.webp", nsfw: false },
  { src: "/hidden/17.png", nsfw: false },
  { src: "/hidden/18.jpg", nsfw: false },
  { src: "/hidden/19.avif", nsfw: false },
  { src: "/hidden/20.png", nsfw: false },
  { src: "/hidden/21.jpg", nsfw: false },
  { src: "/hidden/22.jpg", nsfw: false },
  { src: "/hidden/23.webp", nsfw: false },
  { src: "/hidden/24.avif", nsfw: false },
  { src: "/hidden/26.webp", nsfw: false },
  { src: "/hidden/27.avif", nsfw: false },
  { src: "/hidden/28.avif", nsfw: false },
  { src: "/hidden/29.avif", nsfw: false },
  { src: "/hidden/30.jpg", nsfw: false },
  { src: "/hidden/31.jpeg", nsfw: false },
];

export default function HiddenPage() {
  const [unlocked, setUnlocked] = useState<boolean[]>(
    () => IMAGES.map(() => false)
  );

  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);

  const next = () => {
    if (zoomIndex === null) return;
    setZoomIndex((i) => ((i ?? 0) + 1) % IMAGES.length);
  };

  const prev = () => {
    if (zoomIndex === null) return;
    setZoomIndex((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
  };

  const closeZoom = () => {
    setClosing(true);
    setTimeout(() => {
      setZoomIndex(null);
      setClosing(false);
    }, 220);
  };

  useEffect(() => {
    if (zoomIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomIndex]);

  return (
    <main className="page">
      <section className="hidden-wrap">
        <header className="hidden-head">
          <h1 className="hidden-title">Hidden</h1>
          <p className="hidden-desc">
            You reached the place where you arent meant to be in... Made for a friend!
          </p>
        </header>

        <section className="hidden-grid">
          {IMAGES.map((img, i) => {
            const needsDisclaimer = img.nsfw;
            const isUnlocked = unlocked[i];
            const isBlocked = needsDisclaimer && !isUnlocked;

            return (
              <div key={img.src} className="hidden-card">
                <button
                  className="hidden-img-btn"
                  onClick={() => {
                    if (isBlocked) return;
                    setZoomIndex(i);
                  }}
                  aria-label="Open image"
                  type="button"
                >
                  <img
                    src={img.src}
                    alt=""
                    className={`hidden-img ${isBlocked ? "blur" : "clear"}`}
                  />
                </button>

                {isBlocked && (
                  <div className="nsfw-overlay">
                    <p className="nsfw-text">
                      {img.warningText || "This image may contain NSFW content"}
                    </p>
                    <button
                      className="btn btn-primary nsfw-btn"
                      type="button"
                      onClick={() =>
                        setUnlocked((u) => {
                          const n = [...u];
                          n[i] = true;
                          return n;
                        })
                      }
                    >
                      Continue
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </section>

      {zoomIndex !== null && (
        <div
          className={`zoom-backdrop ${closing ? "out" : "in"}`}
          onMouseDown={(e) => e.target === e.currentTarget && closeZoom()}
        >
          <div className={`zoom-panel ${closing ? "out" : "in"}`}>
            <button className="zoom-close" onClick={closeZoom} type="button">
              ×
            </button>

            <img
              key={zoomIndex}
              src={IMAGES[zoomIndex].src}
              alt=""
              className="zoom-img"
            />

            <button className="zoom-arrow left" onClick={prev} type="button">
              <img src="/arrowleft.png" alt="" />
            </button>

            <button className="zoom-arrow right" onClick={next} type="button">
              <img src="/arrowright.png" alt="" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hidden-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 60px;
        }

        .hidden-head {
          text-align: center;
          margin-bottom: 28px;
        }

        .hidden-title {
          font-size: clamp(2rem, 4vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .hidden-desc { opacity: .75; }

        .hidden-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 18px;
        }

        .hidden-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #0f0f0f;
        }

        .hidden-img-btn {
          all: unset;
          cursor: pointer;
          display: block;
          width: 100%;
          height: 100%;
        }

        .hidden-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: filter .35s ease, transform .35s ease;
        }

        .hidden-img.blur { filter: blur(22px) brightness(.65); }
        .hidden-img.clear { filter: none; }

        .nsfw-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
          padding: 20px;
          background: rgba(0,0,0,.45);
          animation: popIn .35s ease;
        }

        .nsfw-text { font-weight: 600; }

        .nsfw-btn {
          padding: 10px 18px;
          border-radius: 999px;
          transform: translateZ(0);
          animation: btnPop .35s ease;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes btnPop {
          from { transform: scale(.92); }
          to { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
