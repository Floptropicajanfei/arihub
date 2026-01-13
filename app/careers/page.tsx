// app/careers/page.tsx

import Link from "next/link";
import { careers } from "./careersData";

export const dynamic = "force-dynamic";

const DISCORD_INVITE = "https://discord.gg/wankEAHvWQ";

export default function CareersPage() {
  const openRoles = careers.filter((c) => c.isOpen);

  return (
    <main className="page">
      <div className="page-head" style={{ marginBottom: 28 }}>
        <h1>Careers</h1>
        <p className="muted">Browse available roles and apply when open.</p>
      </div>

      {openRoles.length === 0 ? (
        <section
          className="section"
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 520 }}>
            <h2 style={{ marginBottom: 10 }}>There is currently no applications</h2>
            <p className="muted" style={{ marginBottom: 18 }}>
              Check back for later.
            </p>

            <a
              className="btn btn-primary"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: 999,
                paddingLeft: 18,
                paddingRight: 18,
              }}
            >
              Join our Discord
            </a>
          </div>
        </section>
      ) : (
        <section className="careers-grid">
          {openRoles.map((role) => (
            <article key={role.slug} className="career-card">
              <div className="career-card-main">
                <h3 className="career-card-title">{role.title}</h3>
                <p className="career-card-ref">#{role.ref}</p>
                <p className="career-card-dept">{role.department}</p>
                <p className="career-card-muted">Posted {role.posted}</p>

                <div className="career-card-meta">
                  <span className="career-chip"> {role.location}</span>
                </div>
              </div>

              <div className="career-card-actions">
                <Link className="btn btn-primary" href={`/careers/${role.slug}`}>
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
