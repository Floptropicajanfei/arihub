import Link from "next/link";
import { products } from "./productsData";

export default function ProductsPage() {
  return (
    <main className="page">
      <div className="page-head">
        <h1>Products</h1>
        <p className="muted">Choose a product and learn more before purchasing.</p>
      </div>

      <section className="products-grid">
        {products.map((p) => (
          <article key={p.slug} className="product-box">
            <div className="product-media">
              <img className="product-img" src={p.cardImage} alt={p.name} />
            </div>

            <div className="product-body">
              <h3 className="product-title">{p.name}</h3>
              <p className="product-desc">{p.shortDescription}</p>
            </div>

            <div className="product-footer">
              <a className="btn btn-robux" href={p.robloxGameUrl} target="_blank" rel="noreferrer">
                <img className="robux-icon" src="/robux.png" alt="Robux" />
                {p.robuxPrice}
              </a>

              <Link className="btn btn-ghost" href={`/products/${p.slug}`}>
                Learn more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
