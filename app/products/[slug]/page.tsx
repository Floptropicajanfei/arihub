import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find(
    (p) => p.slug === params.slug
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

      <p>{product.description}</p>

      {product.galleryImages?.length && (
        <div style={{ display: "grid", gap: 16 }}>
          {product.galleryImages.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      )}

      <a
        href={product.robloxGameUrl}
        target="_blank"
        rel="noreferrer"
      >
        Buy for {product.robuxPrice} Robux
      </a>
    </main>
  );
}
