"use client";

import Link from "next/link";
import { useState } from "react";
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
        {top.map((product) => (
          <ProductStripCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductStripCard({ product }: { product: any }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i: number) =>
      i === 0 ? product.images.length - 1 : i - 1
    );

  const next = () =>
    setIndex((i: number) =>
      i === product.images.length - 1 ? 0 : i + 1
    );

  return (
    <article className="product-box">
      {/* IMAGE / SLIDER */}
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
          <img src="/robux.png" alt="Robux" />
          {product.robuxPrice}
        </a>
      </div>
    </article>
  );
}
