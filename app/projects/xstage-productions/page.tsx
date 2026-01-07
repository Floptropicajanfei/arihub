import Image from "next/image";
import Link from "next/link";
import { projects } from "../projectsData";

export default function XStagePage() {
  const project = projects.find((p) => p.slug === "xstage-productions");

  return (
    <main className="page">
      <section className="project-detail">
        <Link className="back-link" href="/projects">← Back to Projects</Link>

        <h1>{project?.title ?? "XStage Productions"}</h1>

        <div className="project-hero">
          {project?.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={1600}
              height={900}
              className="project-hero-img"
            />
          ) : null}
        </div>

        <div className="project-detail-card">
          <h2>About</h2>
          <p>
            {/* Write your full description here */}
            Add your XStage Productions description here. Explain what it is, what you do, what it offers, and any highlights.
          </p>

          <h2>What I did</h2>
          <ul>
            <li>Add bullet points here</li>
            <li>Add bullet points here</li>
            <li>Add bullet points here</li>
          </ul>

          <h2>Links</h2>
          <p>
            Add links here (Discord, website, etc).
          </p>
        </div>
      </section>
    </main>
  );
}
