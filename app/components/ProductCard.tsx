"use client";

import { useState } from "react";
import type { Product } from "@/app/lib/productsData";

export default function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? product.images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === product.images.length - 1 ? 0 : i + 1));

  return (
    <div className="product-box">
      {/* IMAGE */}
      <div className="product-image">
        <img src={product.images[index]} alt={product.name} />

        {product.images.length > 1 && (
          <>
            <button className="arrow left" onClick={prev}>
              <img src="/arrowleft.png" alt="Previous" />
            </button>
            <button className="arrow right" onClick={next}>
              <img src="/arrowright.png" alt="Next" />
            </button>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
      </div>

      {/* FOOTER */}
      <div className="product-footer">
        <a
          href={product.robloxUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-white"
        >
          <img src="/robux.png" alt="Robux" />
          {product.robuxPrice}
        </a>
      </div>
    </div>
  );
}
