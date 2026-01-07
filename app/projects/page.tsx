import ProjectCard from "../components/ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="page">
      <section className="projects-section">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              preview={p.preview}
              imageSrc={p.imageSrc}
              href={`/projects/${p.slug}`}
              buttonLabel="Learn more"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
