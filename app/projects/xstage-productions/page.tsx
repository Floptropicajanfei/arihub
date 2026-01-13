// app/projects/xstage-productions/page.tsx
export const dynamic = "force-dynamic";

import { projects } from "../projectsData";

export default function XStagePage() {
  const project = projects.find((p) => p.slug === "xstage-productions");
  const discordUrl = project?.joinHref ?? "https://discord.gg/JfE2rv8FQj";

  return (
    <main className="page">
      <section className="project-detail">
        <h1>{project?.title ?? "XStage Productions"}</h1>

        {project?.imageSrc && (
          <div className="project-detail-image">
            <img src={project.imageSrc} alt={project.title} />
          </div>
        )}

        <div className="project-detail-box">
          <div className="project-detail-main">
            <h2>About</h2>
            <p>
              XS Productions, where determined builders, scriptures and UI/UX designers come
              together to make great Concert games. XStage Productions also offer Products!
              Join now to test out some of our newly added products.
            </p>
          </div>

          <a className="project-contact" href={discordUrl} target="_blank" rel="noreferrer">
            Join now
          </a>
        </div>
      </section>
    </main>
  );
}
