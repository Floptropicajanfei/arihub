import Link from "next/link";
import { products } from "../products/productsData";

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
        {top.map((p) => (
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
      </div>
    </section>
  );
}
