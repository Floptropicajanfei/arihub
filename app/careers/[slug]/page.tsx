// app/careers/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { careers } from "../careersData";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const role = careers.find((c) => c.slug === slug);
  if (!role) notFound();

  return (
    <main className="page">
      <Link href="/careers" className="back-link no-underline">
        ← Back
      </Link>

      <header className="career-detail-head">
        <h1 className="career-detail-title">
          {role.title}{" "}
          <span className="career-detail-ref">#{role.ref}</span>
        </h1>

        <div className="career-detail-inline">
          <span className="career-chip">{role.department}</span>
          <span className="career-chip">Posted {role.posted}</span>
        </div>
      </header>

      <section className="career-detail-body">
        {role.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>Key Responsibilities</h2>
        <ul>
          {role.responsibilities.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <h2>Requirements</h2>
        <ul>
          {role.Requirements.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        {role.highlight && (
          <div className="career-callout">{role.highlight}</div>
        )}

        <div className="career-apply-bar">
          {role.isOpen ? (
            <a
              className="btn btn-primary"
              href={role.applyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apply here
            </a>
          ) : (
            <div className="career-closed">
              <p className="muted">
                There are currently no applications open.
              </p>
              <a
                className="btn btn-primary"
                href="https://discord.gg/wankEAHvWQ"
                target="_blank"
                rel="noreferrer"
              >
                Join our Discord
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
