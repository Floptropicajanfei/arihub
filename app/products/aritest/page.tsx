import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = String(params.slug || "").trim().toLowerCase();
  const product = products.find((p) => p.slug.toLowerCase() === slug);

  if (!product) return notFound();

  return (
    <main className="page product-detail-page">
      <Link className="back-link" href="/products">
        ← Back to Products
      </Link>

      <section className="product-detail-hero">
        <div className="product-detail-left">
          <div className="product-heroMedia">
            <img className="product-heroImg" src={product.heroImage} alt={product.name} />
          </div>

          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-desc">{product.description}</p>
        </div>

        <div className="product-detail-right">
          <div className="buy-box">
            <div className="buy-price">
              <img className="robux-icon" src="/robux.png" alt="Robux" />
              <span>{product.robuxPrice}</span>
            </div>

            <a className="btn btn-robux btn-large" href={product.robloxGameUrl} target="_blank" rel="noreferrer">
              Purchase in Roblox
            </a>

            <p className="muted buy-note">
              You’ll be taken to Roblox to buy this product with Robux.
            </p>
          </div>
        </div>
      </section>

      {product.galleryImages?.length ? (
        <section className="product-gallery">
          <h2>Presentation</h2>
          <div className="gallery-grid">
            {product.galleryImages.map((src, i) => (
              <div key={`${src}-${i}`} className="gallery-box">
                <img className="gallery-img" src={src} alt={`${product.name} preview ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
