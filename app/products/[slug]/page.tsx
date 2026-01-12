import Link from "next/link";
import { products } from "../productsData";

<p style={{ opacity: 0.6, fontSize: 12 }}>
  BUILD: {process.env.VERCEL_GIT_COMMIT_SHA ?? "no-vercel-sha"}
</p>

export default function ProductPage({ params }: { params: { slug: string } }) {
  const urlSlug = String(params?.slug ?? "");

  const normalized = urlSlug.trim().toLowerCase();
  const available = products.map((p) => String(p.slug).trim().toLowerCase());

  const product = products.find(
    (p) => String(p.slug).trim().toLowerCase() === normalized
  );

  if (!product) {
    return (
      <main className="page">
        <h1>DEBUG: Product not found</h1>
        <p><b>URL slug:</b> {urlSlug}</p>
        <p><b>Normalized:</b> {normalized}</p>
        <p><b>Available slugs:</b></p>
        <ul>
          {available.map((s) => (
            <li key={s}><code>{s}</code></li>
          ))}
        </ul>

        <p style={{ marginTop: 18 }}>
          If you see this page locally but the live site is 404, your live
          deployment is not on the latest commit.
        </p>

        <Link href="/products">← Back to products</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link href="/products">← Back</Link>
      <h1>{product.name}</h1>
      <img
        src={product.heroImage}
        alt={product.name}
        style={{ width: "100%", borderRadius: 20 }}
      />
      <p style={{ marginTop: 12 }}>{product.description}</p>
      <a href={product.robloxGameUrl} target="_blank" rel="noreferrer">
        Buy for {product.robuxPrice} Robux
      </a>
    </main>
  );
}
