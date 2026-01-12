import Link from "next/link";
import { products } from "@/app/lib/productsData";

export default function ProductsPage() {
  return (
    <main className="page">
      <header style={{ marginBottom: 48 }}>
        <h1>Products</h1>
        <p className="muted">
          Browse available products and learn more before purchasing.
        </p>
      </header>

      <section
        className="products-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {products.map((p) => (
          <article
            key={p.slug}
            style={{
              borderRadius: 20,
              padding: 20,
              background: "var(--card-bg, #111)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={p.cardImage}
              alt={p.name}
              style={{
                width: "100%",
                borderRadius: 14,
                marginBottom: 16,
              }}
            />

            <h3>{p.name}</h3>
            <p style={{ marginBottom: 24 }}>{p.shortDescription}</p>

            <div
              style={{
                marginTop: "auto",
                display: "flex",
                gap: 12,
              }}
            >
              <a
                href={p.robloxGameUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-robux"
              >
                <img
                  src="/robux.png"
                  alt="Robux"
                  style={{ height: 18, marginRight: 6 }}
                />
                {p.robuxPrice}
              </a>

              <Link href={`/products/${p.slug}`} className="btn btn-ghost">
                Learn more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
