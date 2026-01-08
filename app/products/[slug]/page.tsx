import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug.trim().toLowerCase();
  const product = products.find(
    (p) => String(p.slug).trim().toLowerCase() === slug
  );

  if (!product) return notFound();

  return (
    <main className="page product-detail-page">
      <Link className="back-link" href="/products">
        ← Back to Products
      </Link>

      <section className="buy-hero">
        <div className="buy-left">
          <div className="buy-iconWrap">
            {/* Image (you control this via productsData.ts) */}
            <img
              className="buy-icon"
              src={product.imageSrc}
              alt={product.name}
            />
            {product.badge ? (
              <span className="buy-badge">{product.badge}</span>
            ) : null}
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

            {/* Stripe Payment Link */}
            <a
              className="buy-button"
              href={product.stripeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Purchase
            </a>
          </div>
        </div>
      </section>

      {/* Big preview image section (like your reference) */}
      <section className="buy-imageLarge">
        <img src={product.imageSrc} alt={`${product.name} preview`} />
      </section>
    </main>
  );
}
