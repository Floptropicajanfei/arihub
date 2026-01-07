import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  preview: string;
  imageSrc: string;
  href: string;
  buttonLabel?: string;
};

export default function ProjectCard({
  title,
  preview,
  imageSrc,
  href,
  buttonLabel = "Learn more",
}: Props) {
  return (
    <div className="project-box">
      <div className="project-main">
        <div className="project-image">
          <Image
            src={imageSrc}
            alt={title}
            width={1200}
            height={800}
            className="project-img"
            priority={false}
          />
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-preview">{preview}</p>
      </div>

      <Link className="project-contact" href={href}>
        {buttonLabel}
      </Link>
    </div>
  );
}
