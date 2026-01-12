// app/products/page.tsx
import { products } from "@/app/lib/productsData";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="page">
      <h1>Products</h1>
      <p className="muted">Browse all available products. Prices are in Robux.</p>

      <section className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </main>
  );
}
