import { notFound } from "next/navigation";
import { products } from "../productsData";

export const dynamic = "force-static";
export const revalidate = false;

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="page">
      <section style={{ marginBottom: 64 }}>
        <img
          src={product.heroImage}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: 24,
            marginBottom: 32,
          }}
        />

        <h1>{product.name}</h1>

        <p style={{ maxWidth: 800, lineHeight: 1.7 }}>
          {product.description}
        </p>

        <div style={{ marginTop: 32 }}>
          <a
            href={product.robloxGameUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-robux"
          >
            <img
              src="/robux.png"
              alt="Robux"
              style={{ height: 20, marginRight: 8 }}
            />
            Buy for {product.robuxPrice}
          </a>
        </div>
      </section>

      {product.galleryImages && (
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {product.galleryImages.map((img) => (
            <img
              key={img}
              src={img}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: 18,
              }}
            />
          ))}
        </section>
      )}
    </main>
  );
}
