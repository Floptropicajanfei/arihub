// app/careers/page.tsx

import Link from "next/link";
import { careers } from "./careersData";

export const dynamic = "force-dynamic";

export default function CareersPage() {
  const onlineCareers = careers.filter((c) => c.isOpen);

  return (
    <main className="page">
      <h1>Careers</h1>
      <p className="muted">Explore current opportunities.</p>

      {onlineCareers.length === 0 ? (
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 14,
          }}
        >
          <h2>There are currently no applications open</h2>
          <p className="muted">Check back later or join our Discord.</p>
          <a
            className="btn btn-primary"
            href="https://discord.gg/wankEAHvWQ"
            target="_blank"
            rel="noreferrer"
          >
            Join our Discord
          </a>
        </div>
      ) : (
        <section className="careers-grid">
          {onlineCareers.map((c) => (
            <div key={c.slug} className="career-box">
              <div className="career-box-main">
                <h3 className="career-box-title">{c.title}</h3>
                <p className="career-box-ref">{c.ref}</p>

                <div className="career-box-meta">
                  <span className="career-chip">{c.department}</span>
                  <span className="career-chip">Posted {c.posted}</span>
                </div>

                <div className="career-box-tags">
                  <span className="career-chip">📍 {c.location}</span>
                  <span className="career-chip">🕒 {c.type}</span>
                </div>
              </div>

              <Link
                href={`/careers/${c.slug}`}
                className="btn btn-primary career-apply-full"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
