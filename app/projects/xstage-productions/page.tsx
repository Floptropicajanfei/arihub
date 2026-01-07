export const dynamic = "force-dynamic";

import Link from "next/link";
import { projects } from "../projectsData";

export default function XStagePage() {
  const project = projects.find((p) => p.slug === "xstage-productions");
  const discordUrl = project?.discordUrl ?? "https://discord.gg/YOUR_INVITE";

  return (
    <main className="page">
      <section className="project-detail">
        <Link className="back-link" href="/">← Back Home</Link>

        <h1>{project?.title ?? "XStage Productions"}</h1>

        {/* MAIN INFO BOX */}
        <div className="project-detail-box">
          <div className="project-detail-main">
            <h2>About</h2>
            <p>
              Add your XStage Productions description here. Explain what it is, what you do,
              what it offers, and highlights.
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
