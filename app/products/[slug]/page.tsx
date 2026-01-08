import { products } from "../productsData";

export const dynamic = "force-dynamic";

export default function DebugProductPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="page">
      <h1>DEBUG PRODUCT PAGE</h1>
      <p>
        URL slug: <b>{params.slug}</b>
      </p>

      <h2>Available slugs in productsData:</h2>
      <ul>
        {products.map((p) => (
          <li key={p.slug}>
            <code>{JSON.stringify(p.slug)}</code>
          </li>
        ))}
      </ul>
    </main>
  );
}
