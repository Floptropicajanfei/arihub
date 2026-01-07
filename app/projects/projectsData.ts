export type Project = {
  slug: string;
  title: string;
  preview: string;
  imageSrc: string;
  joinHref?: string; // NEW
};

export const projects: Project[] = [
  {
    slug: "xstage-productions",
    title: "XStage Productions",
    preview: "Write a short preview about XStage Productions here.",
    imageSrc: "/projects/xstage.png",
    joinHref: "https://discord.gg/JfE2rv8FQj", // <-- put your invite
  },
  {
    slug: "giuris",
    title: "Giuris",
    preview: "Write a short preview about Giuris here.",
    imageSrc: "/projects/giuris.png",
    joinHref: "https://discord.gg/JfE2rv8FQj", // <-- put your invite
  },
];
