export type Project = {
  slug: string;
  title: string;
  preview: string;     // short text shown on /projects cards
  imageSrc: string;    // path in /public
};

export const projects: Project[] = [
  {
    slug: "xstage-productions",
    title: "XStage Productions",
    preview: "Write a short preview about XStage Productions here.",
    imageSrc: "/projects/xstage.png",
  },
  {
    slug: "giuris",
    title: "Giuris",
    preview: "Write a short preview about Giuris here.",
    imageSrc: "/projects/giuris.png",
  },
];
