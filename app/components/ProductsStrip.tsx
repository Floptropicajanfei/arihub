// app/components/ProductsStrip.tsx
import Link from "next/link";
import { products } from "@/app/lib/productsData";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsStrip() {
  const top = products.slice(0, 3);

  return (
    <section className="section">
      <div className="section-row products-head">
        <h2>Products</h2>
        <Link className="see-all" href="/products">
          See all →
        </Link>
      </div>

      <div className="products-grid">
        {top.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
