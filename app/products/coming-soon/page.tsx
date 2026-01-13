// app/products/coming-soon/page.tsx

import { products } from "@/app/lib/productsData";

type Props = {
  searchParams?: { slug?: string };
};

export default function ComingSoonPage({ searchParams }: Props) {
  const slug = (searchParams?.slug || "").toLowerCase().trim();
  const p = products.find((x) => x.slug.toLowerCase() === slug);

  return (
    <main className="page">
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: 10,
          padding: 24,
        }}
      >
        <h1>Coming soon!</h1>
        <p className="muted">
          {p?.comingSoonText || "This product is not on sale yet! Check back later."}
        </p>
      </div>
    </main>
  );
}
