import { notFound } from "next/navigation";
import { products } from "../productsData";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) notFound();

  return (
    <main className="page">
      {/* HERO */}
      <section
        style={{
          marginBottom: 64,
          display: "grid",
          gap: 32,
        }}
      >
        <img
          src={product.heroImage}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: 24,
          }}
        />

        <div style={{ maxWidth: 800 }}>
          <h1 style={{ marginBottom: 16 }}>{product.name}</h1>
          <p style={{ lineHeight: 1.7 }}>{product.description}</p>

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
        </div>
      </section>

      {/* GALLERY */}
      {product.galleryImages?.length ? (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
