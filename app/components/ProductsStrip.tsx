"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/app/lib/productsData";

export default function ProductsStrip() {
  const top = products.slice(0, 3);

  return (
    <section className="section">
      <div className="section-row">
        <h2>Products</h2>
        <Link className="see-all" href="/products">
          See all
        </Link>
      </div>

      <div className="products-grid">
        {top.map((p) => (
          <ProductStripCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProductStripCard({ product }: { product: any }) {
  const images: string[] = useMemo(() => product.images || [], [product.images]);
  const [index, setIndex] = useState(0);

  // direction: -1 = left, +1 = right (for autoplay + arrow)
  const [dir, setDir] = useState<(-1 | 1)>(1);
  const hoveredRef = useRef(false);

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

  // ✅ autoplay (pauses on hover)
  useEffect(() => {
    if (images.length <= 1) return;

    const t = setInterval(() => {
      if (hoveredRef.current) return;
      go(index + 1, 1);
    }, 3500);

    return () => clearInterval(t);
  }, [index, images.length]);

  return (
    <article
      className="product-box"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
    >
      {/* MEDIA */}
      <div className="product-image">
        <div
          className={`product-track ${dir === 1 ? "dir-right" : "dir-left"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src: string, i: number) => (
            <div className="product-slide" key={`${src}-${i}`}>
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
  );
}
