// app/careers/careersData.ts

export type Career = {
  slug: string;
  title: string;
  ref: string;
  department: string;
  posted: string;
  location: string; // "Remote" etc
  type: string; // "Full-time" etc

  intro: string[];
  responsibilities: string[];
  roleDimensions: string[];
  highlight?: string;

  applyUrl: string;

  // ✅ NEW:
  isOpen: boolean; // true = applications open, false = closed
};

export const careers: Career[] = [
  {
    slug: "marketing-social-media-assistant",
    title: "Marketing & Social Media Assistant",
    ref: "CEPRX-010126M",
    department: "Customer Experience, Public & External Relations",
    posted: "6 January 2026",
    location: "Remote",
    type: "Full-time",
    intro: [
      "The Social Media & Marketing Assistant supports jaDevelopment’s public-facing communications by delivering a consistent, engaging, and positive presence across social media platforms.",
      "Working collaboratively with colleagues and technical teams, the postholder helps strengthen brand awareness, community connection, and digital participation while operating in line with organisational policies.",
    ],
    responsibilities: [
      "Develop and implement strategic social media plans to grow brand presence on social media platforms",
      "Create engaging multimedia content from short-form videos to promotional posts and graphics",
      "Ensure all content reflects the jaDevelopment brand voice and guidelines",
      "Actively engage with the jaDevelopment community across all platforms",
      "Work closely with the Roblox & Web Development Engineering Team to align social content with upcoming development projects",
      "Stay up to date with the latest social media trends across all platforms",
    ],
    roleDimensions: [
      "Able to work independently or as part of a team to support the delivery of jaDevelopment’s digital communications and online presence.",
      "Responsible for contributing to quality assurance processes, maintaining appropriate records, and supporting administrative tasks related to social media and marketing activity.",
    ],
    highlight:
      "If you are successful in your application, you will be invited to an interview.",
    applyUrl: "https://YOUR_FORM_LINK_HERE",
    isOpen: false, // ✅ toggle this per role
  },
];
