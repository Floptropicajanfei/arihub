import { products } from "@/app/lib/productsData";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="page">
      <div className="page-head">
        <h1>Products</h1>
        <p className="muted">Browse all products.</p>
      </div>

      <section className="section">
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p as any} />
          ))}
        </div>
      </section>
    </main>
  );
}
