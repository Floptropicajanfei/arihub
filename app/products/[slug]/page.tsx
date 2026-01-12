import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = String(params.slug || "").trim().toLowerCase();

  const product = products.find(
    (p) => p.slug.trim().toLowerCase() === slug
  );

  if (!product) return notFound();

  return (
    <main className="page">
      <Link href="/products">← Back to products</Link>

      <h1>{product.name}</h1>

      <img
        src={product.heroImage}
        alt={product.name}
        style={{ width: "100%", borderRadius: 20 }}
      />

      <p style={{ marginTop: 12 }}>{product.description}</p>

      <a
        href={product.robloxGameUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-robux"
        style={{ marginTop: 16, display: "inline-flex" }}
      >
        <img className="robux-icon" src="/robux.png" alt="Robux" />
        {product.robuxPrice}
      </a>
    </main>
  );
}
