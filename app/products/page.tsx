import ProductCard from "../components/ProductCard";
import { products } from "./productsData";

export default function ProductsPage() {
  return (
    <main className="page">
      <div className="section-head">
        <h1 className="page-title">Products</h1>
      </div>

      <div className="products-grid products-grid-all">
        {products.map((p) => (
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
    </main>
  );
}
