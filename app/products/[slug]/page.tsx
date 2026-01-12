import { products } from "../productsData";
import { notFound } from "next/navigation";

/**
 * 🔥 FORCE RUNTIME RENDERING
 * This disables all static optimisation and caching.
 */
export const dynamic = "force-dynamic";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // Hard guard — if slug is missing, fail loudly
  if (!params || !params.slug) {
    notFound();
  }

  const product = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="page" style={{ paddingBottom: 80 }}>
      {/* HERO */}
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

        <h1 style={{ marginBottom: 16 }}>{product.name}</h1>

        <p
          style={{
            maxWidth: 800,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          {product.description}
        </p>

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
      </section>

      {/* GALLERY */}
      {product.galleryImages?.length ? (
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
      ) : null}
    </main>
  );
}
