// app/components/ProductCard.tsx

"use client";

import Link from "next/link";
import type { Product } from "@/app/lib/productsData";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.cardImages?.[0] || product.cardImage || product.pageImages?.[0] || "/preview.png";

  return (
    <article className="product-box">
      <div className="product-media">
        <img src={cover} alt={product.name} className="product-img" />
      </div>

      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.shortDescription}</p>
      </div>

      <div className="product-footer">
        <Link className="project-contact" href={`/products/${product.slug}`}>
          Learn more
        </Link>
      </div>

      <style>{`
        .product-box{
          display:flex;flex-direction:column;
          border-radius:22px;overflow:hidden;
          background:#fff;border:1px solid rgba(0,0,0,.08);
        }
        .product-media{height:180px;background:#f3f3f3}
        .product-img{width:100%;height:100%;object-fit:cover;display:block}
        .product-body{padding:14px 14px 10px}
        .product-title{margin:0 0 6px;font-weight:700;font-size:1.05rem;color:#0b0b0b}
        .product-desc{margin:0;opacity:.75;font-size:.95rem;color:#0b0b0b}
        .product-footer{padding:12px 14px 14px;margin-top:auto}

        /* match your Projects button */
        .project-contact{
          width:100%;
          height:44px;
          border-radius:18px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
          text-decoration:none;
          border:1px solid rgba(0,0,0,.12);
          background:#0b0b0b;
          color:#fff;
        }
        .project-contact:hover{filter:brightness(.95)}
      `}</style>
    </article>
  );
}
