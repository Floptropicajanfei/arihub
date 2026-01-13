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

      {/* UPDATED HEADER */}
      <header className="career-detail-head" style={{ marginTop: 16 }}>
        <h1
          className="career-detail-title"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          {role.title}
          {role.ref ? (
            <span
              className="career-detail-ref"
              style={{ fontSize: 14, color: "#6b7280", fontWeight: 500 }}
            >
              #{role.ref}
            </span>
          ) : null}
        </h1>

        {/* STRAIGHT LINE META */}
        <div
          className="career-detail-meta"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {role.department ? (
            <span
              className="career-detail-dept"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              {role.department}
            </span>
          ) : null}

          {role.posted ? (
            <span className="career-detail-muted" style={{ fontSize: 14 }}>
              Posted {role.posted}
            </span>
          ) : null}
        </div>
      </header>

      {/* BODY */}
      <section className="career-detail-body">
        {role.intro.map((p) => (
          <p key={p} className="career-p">
            {p}
          </p>
        ))}

        <h2 className="career-h2">Key Responsibilities</h2>
        <ul className="career-list">
          {role.responsibilities.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <h2 className="career-h2">Role Dimensions</h2>
        <ul className="career-list">
          {role.roleDimensions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        {role.highlight ? (
          <div className="career-callout">{role.highlight}</div>
        ) : null}

        <div className="career-apply-bar">
          <a
            className="btn btn-primary"
            href={role.applyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Apply here
          </a>
        </div>
      </section>
    </main>
  );
}
