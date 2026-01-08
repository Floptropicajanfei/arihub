import Link from "next/link";
import { products } from "../productsData";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = String(params?.slug || "").trim().toLowerCase();

  const product = products.find(
    (p) => String(p.slug).trim().toLowerCase() === slug
  );

  // Don’t throw server-side. Show a friendly page instead.
  if (!product) {
    return (
      <main className="page">
        <Link className="back-link" href="/products">← Back to Products</Link>
        <h1>Product not found</h1>
        <p>Slug: <b>{slug}</b></p>
      </main>
    );
  }

  const img = product.imageSrc || "/products/placeholder.png";

  return (
    <main className="page product-detail-page">
      <Link className="back-link" href="/products">
        ← Back to Products
      </Link>

      <section className="buy-hero">
        <div className="buy-left">
          <div className="buy-iconWrap">
            <img className="buy-icon" src={img} alt={product.name} />
            {product.badge ? <span className="buy-badge">{product.badge}</span> : null}
          </div>

          <h1 className="buy-title">{product.name}</h1>
          <p className="buy-sub">{product.description}</p>
        </div>

        <div className="buy-right">
          <div className="buy-priceBox">
            <div className="buy-prices">
              <span className="buy-usd">{product.priceUsd}</span>
              <span className="buy-or">or</span>
              <span className="buy-alt">{product.priceAlt}</span>
            </div>

            <a className="buy-button" href={product.stripeUrl} target="_blank" rel="noreferrer">
              Purchase
            </a>
          </div>
        </div>
      </section>

      <section className="buy-imageLarge">
        <img src={img} alt={`${product.name} preview`} />
      </section>
    </main>
  );
}
