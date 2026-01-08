import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="page product-detail-page">
      <Link className="back-link" href="/">
        ← Back Home
      </Link>

      <div className="buy-hero">
        <div className="buy-left">
          <div className="buy-iconWrap">
            <img className="buy-icon" src={product.imageSrc} alt={product.name} />
            {product.badge ? <span className="buy-badge">{product.badge}</span> : null}
          </div>

          <h1 className="buy-title">{product.name}</h1>
          <p className="buy-sub">{product.description}</p>
        </div>

        <div className="buy-right">
          <div className="buy-priceBox">
            <div className="buy-prices">
              <span className="buy-usd">{product.priceUsd}</span>
              <span className="buy-or">OR</span>
              <span className="buy-alt">{product.priceAlt}</span>
            </div>

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
      </div>

      {/* Optional “big image” lower section like your mock */}
      <div className="buy-imageLarge">
        <img src={product.imageSrc} alt={`${product.name} preview`} />
      </div>
    </main>
  );
}
