// app/components/ProductsStrip.tsx
import Link from "next/link";
import { products } from "@/app/lib/productsData";
import ProductCard from "./ProductCard";

export default function ProductsStrip() {
  const top = products.slice(0, 3);

  return (
    <div className="products-grid">
      {top.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
