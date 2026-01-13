// app/projects/giuris/page.tsx
export const dynamic = "force-dynamic";

import { projects } from "../projectsData";

export default function GiurisPage() {
  const project = projects.find((p) => p.slug === "giuris");
  const discordUrl = project?.joinHref ?? "https://discord.gg/JfE2rv8FQj";

  return (
    <main className="page">
      <section className="project-detail">
        <h1>{project?.title ?? "Giuris"}</h1>

        {project?.imageSrc && (
          <div className="project-detail-image">
            <img src={project.imageSrc} alt={project.title} />
          </div>
        )}

        <div className="project-detail-box">
          <div className="project-detail-main">
            <h2>About</h2>
            <p>
              Giuris is a moderation product that uses AI to moderate Roblox games at all
              times. It focuses heavily on customization and security, allowing developers
              to fully control how moderation works in their game — from banned accessories
              to what behaviour should be detected and punished. Giuris is designed to keep
              experiences safe, fair, and enjoyable for all players.
            </p>

            <p>Giuris has features like:</p>

            <ul>
              <li>AI Accessory Screening</li>
              <li>AI Chat Moderation</li>
              <li>Configurable Punishment Ladder</li>
              <li>AI Auto-Clicker & Exploit Detection</li>
              <li>Roblox Ban API Integration</li>
              <li>Raid Prevention & Join-Spike Detection</li>
              <li>Comprehensive Audit Logging & Webhook Integration</li>
            </ul>

            <p>This is only a small part of all the features available within Giuris.</p>
          </div>

          <a className="project-contact" href={discordUrl} target="_blank" rel="noreferrer">
            Join now
          </a>
        </div>
      </section>
    </main>
  );
}
