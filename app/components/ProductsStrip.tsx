import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "../products/productsData";

export default function ProductsStrip() {
  const topThree = products.slice(0, 3);

  return (
    <section className="section">
      <div className="section-head">
        <h2>Products</h2>
        <Link className="see-all" href="/products">
          See all
        </Link>
      </div>

      <div className="products-grid">
        {topThree.map((p) => (
          <ProductCard
            key={p.slug}
            href={`/products/${p.slug}`}
            imageSrc={p.imageSrc}
            name={p.name}
            priceLeft={p.priceUsd}
            priceRight={p.priceAlt}
            badge={p.badge}
          />
        ))}
      </div>
    </section>
  );
}
