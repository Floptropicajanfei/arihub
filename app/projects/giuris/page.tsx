export const dynamic = "force-dynamic";

import Link from "next/link";
import { projects } from "../projectsData";

export default function GiurisPage() {
  const project = projects.find((p) => p.slug === "giuris");
  const discordUrl = project?.discordUrl ?? "https://discord.gg/YOUR_INVITE";

  return (
    <main className="page">
      <section className="project-detail">
        <Link className="back-link" href="/">← Back Home</Link>

        <h1>{project?.title ?? "Giuris"}</h1>

        {/* MAIN INFO BOX */}
        <div className="project-detail-box">
          <div className="project-detail-main">
            <h2>About</h2>
            <p>
              Add your Giuris description here. Explain what it is, why it exists, main
              features, and your role.
            </p>

            <h2>What I did</h2>
            <ul>
              <li>Add bullet points here</li>
              <li>Add bullet points here</li>
              <li>Add bullet points here</li>
            </ul>
          </div>

          {/* BOTTOM BAR BUTTON */}
          <a
            className="project-contact"
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            Join now
          </a>
        </div>
      </section>
    </main>
  );
}
