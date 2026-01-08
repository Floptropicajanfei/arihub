import { products } from "./productsData";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="page">
      <div className="section-head">
        <h1 className="page-title">Products</h1>
        <Link className="see-all" href="/">
          Back Home
        </Link>
      </div>

      <div className="products-grid products-grid-all">
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="product-card">
            <div className="product-media">
              <img className="product-img" src={p.imageSrc} alt={p.name} />
              {p.badge ? <span className="product-badge">{p.badge}</span> : null}
            </div>

            <div className="product-meta">
              <div className="product-name">{p.name}</div>
              <div className="product-price">
                <span className="product-price-main">{p.priceUsd}</span>
                <span className="product-price-sep">or</span>
                <span className="product-price-alt">{p.priceAlt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
