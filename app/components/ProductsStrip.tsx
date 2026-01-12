import Link from "next/link";
import { products } from "@/app/lib/productsData";
import ProductCard from "./ProductCard";

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
          <ProductCard key={p.id} product={p as any} />
        ))}
      </div>
    </section>
  );
}
