// app/careers/page.tsx

import Link from "next/link";
import { careers } from "./careersData";

export const dynamic = "force-dynamic";

export default function CareersPage() {
  const openRoles = careers.filter((c) => c.isOpen);

  return (
    <main className="page">
      <h1>Careers</h1>
      <p className="muted">Explore current opportunities.</p>

      {openRoles.length === 0 ? (
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
          {openRoles.map((role) => (
            <div key={role.slug} className="career-box">
              <div className="career-box-main">
                <h3 className="career-box-title">{role.title}</h3> 
                <span className="career-detail-ref">#{role.ref}</span>
                <p className="career-box-desc">{role.cardDescription}</p>

                <div className="career-box-meta">
                </div>

                <div className="career-box-tags">
                </div>
              </div>

              <Link
                href={`/careers/${role.slug}`}
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
