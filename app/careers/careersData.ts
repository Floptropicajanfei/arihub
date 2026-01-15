// app/careers/careersData.ts


export type Career = {
  slug: string;
  title: string;
  ref: string;
  department: string;
  posted: string;
  location: string;
  type: string;
  intro: string[];
  responsibilities: string[];
  roleDimensions: string[];
  highlight?: string;
  applyUrl: string;
  isOpen: boolean;
};

export const careers: Career[] = [
  {
    slug: "Community-Moderator",
    title: "Community Moderator",
    ref: "PRCM-160126",
    department: "Community Operations, Trust & Safety Department",
    posted: "15 January 2026",
    location: "Remote",
    type: "Full-time",
    intro: [
      "Community Moderators are responsible for maintaining a safe, welcoming, and respectful environment across all XStage community platforms.",
      "They act as the first line of moderation, ensuring rules are upheld, conversations remain appropriate, and users receive timely support during both normal operations and live events.",
    ],
    responsibilities: [
      "Monitor chat activity across Discord and Roblox experiences",
      "Enforce community rules and platform guidelines consistently",
      "De-escalate conflicts and handle disruptive behaviour calmly",
      "Assist users with basic questions and direct them to the correct channels",
      "Report serious incidents to Leadership",
      "Support live shows by keeping chat clear and on-topic",
      "Reducing distruptions during live shows inside the arena",
    ],
    roleDimensions: [
      "You must be 13+ (Discord policy enforcment)",
      "Regular availability, especially during events",
      "Clear, calm, and respectful written communication",
      "Strong understanding of community rules and guidelines",
      "Able to act impartially and responsibly at all times",
      "No recent moderation infractions or disciplinary history",
      "Have decent English skills",
    ],
    highlight:
      "If you successfully pass your Application, you will receive a Trial Staff Member role including training and close monitoring.",
    applyUrl: "https://YOUR_FORM_LINK_HERE",
    isOpen: true, // ✅ toggle this per role
  },
];
