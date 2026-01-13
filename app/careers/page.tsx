// app/careers/page.tsx
import Link from "next/link";
import { careers } from "./careersData";

export const dynamic = "force-dynamic";

export default function CareersPage() {
  return (
    <main className="page">
      <div className="page-head" style={{ marginBottom: 18 }}>
        <h1>Careers</h1>
        <p className="muted">Browse available roles and apply online.</p>
      </div>

      <section className="careers-grid">
        {careers.map((c) => (
          <article key={c.slug} className="career-card">
            <div className="career-card-top">
              <h2 className="career-title">{c.title}</h2>
              <div className="career-ref">#{c.ref}</div>
            </div>

            <div className="career-dept">{c.department}</div>
            <div className="career-posted">Posted {c.posted}</div>

            <div className="career-meta">
              <span className="career-chip">📍 {c.location}</span>
              <span className="career-chip">🕒 {c.type}</span>
            </div>

            <ul className="career-bullets">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="career-actions">
              <Link className="btn btn-primary w-full" href={`/careers/${c.slug}`}>
                Apply Now
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
