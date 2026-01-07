import Link from "next/link";

type Props = {
  title: string;
  preview: string;
  imageSrc: string;
  href: string;
  buttonLabel?: string;
  joinHref?: string;
};

export default function ProjectCard({
  title,
  preview,
  imageSrc,
  href,
  buttonLabel = "Learn more",
  joinHref,
}: Props) {
  return (
    <div className="project-box">
      <div className="project-main">
        <div className="project-image">
          {/* Use normal img to avoid build-time Image pipeline issues */}
          <img className="project-img" src={imageSrc} alt={title} />
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-preview">{preview}</p>
      </div>

      <div className="project-actions">
        <Link className="project-contact" href={href}>
          {buttonLabel}
        </Link>

        {joinHref ? (
          <a
            className="project-contact"
            href={joinHref}
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        ) : null}
      </div>
    </div>
  );
}
