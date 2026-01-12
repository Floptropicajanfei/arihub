// app/components/ProjectCard.tsx
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  preview: string;
  imageSrc: string;
  href: string;
  buttonLabel?: string;
  joinHref?: string; // optional discord join link
};

export default function ProjectCard({
  title,
  preview,
  imageSrc,
  href,
  buttonLabel = "Learn more",
  joinHref,
}: ProjectCardProps) {
  return (
    <article className="product-box">
      <div className="product-media">
        <img className="product-img" src={imageSrc} alt={title} />
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{preview}</p>
      </div>

      <div className="product-footer">
        <Link className="btn btn-buy" href={href}>
          {buttonLabel}
        </Link>

        {joinHref ? (
          <a className="btn btn-ghost" href={joinHref} target="_blank" rel="noreferrer">
            Join now
          </a>
        ) : null}
      </div>
    </article>
  );
}
