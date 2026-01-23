// app/products/page.tsx
import { products } from "@/app/lib/productsData";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="page">
      <div className="page-head" style={{ marginBottom: 22 }}>
        <h1>Products</h1>
        <p className="muted">Browse all available products. Prices are in Robux.</p>
      </div>

      <section className="products-grid" style={{ marginTop: 18 }}>
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </main>
  );
}
