export type Product = {
  slug: string;

  // Card (landing page)
  name: string;
  shortDescription: string;
  cardImage: string;

  // Full page
  description: string;
  heroImage: string;
  galleryImages?: string[];

  // Robux
  robuxPrice: number;
  robloxGameUrl: string;
};

export const products: Product[] = [
  {
    slug: "aritest",
    name: "AriTest Product",
    shortDescription:
      "Small description for the product card on the landing page.",

    cardImage: "/products/aritest.png",

    description:
      "This is the full product description. You can write multiple paragraphs here explaining what the product does, what is included, and why someone should buy it.",

    heroImage: "/products/aritest-hero.png",

    galleryImages: [
      "/products/aritest-1.png",
      "/products/aritest-2.png",
    ],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  },
];
