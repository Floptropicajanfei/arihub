import Link from "next/link";
import { notFound } from "next/navigation";
import productsDefault, { products as productsNamed } from "./productsData";

const safeProducts = Array.isArray(productsNamed)
  ? productsNamed
  : Array.isArray(productsDefault)
  ? productsDefault
  : [];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = String(params?.slug || "").trim().toLowerCase();

  const product = safeProducts.find(
    (p) => String(p.slug).trim().toLowerCase() === slug
  );

  if (!product) return notFound();

  const img = product.imageSrc || "/products/placeholder.png";
  const stripeUrl = product.stripeUrl || "#";

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

            <a
              className={`buy-button ${stripeUrl === "#" ? "disabled" : ""}`}
              href={stripeUrl === "#" ? undefined : stripeUrl}
              target={stripeUrl === "#" ? undefined : "_blank"}
              rel="noreferrer"
            >
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
