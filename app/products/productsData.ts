export type Product = {
  slug: string;

  // Card (landing page)
  name: string;
  shortDescription: string;
  cardImage: string; // small/presentation image for card

  // Detail page
  description: string; // long description
  heroImage: string; // big image at top
  galleryImages?: string[]; // extra presentation images

  // Robux purchase
  robuxPrice: number;
  robloxGameUrl: string;
};

export const products: Product[] = [
  {
    slug: "aritest",
    name: "AriTest Product",
    shortDescription: "Small description for the landing page card goes here.",
    cardImage: "/products/aritest.png",

    description:
      "Full product description goes here. You can write multiple sentences and explain everything about the product.",
    heroImage: "/products/aritest-hero.png",
    galleryImages: ["/products/aritest-1.png", "/products/aritest-2.png"],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  },

  // Add more:
  // { slug: "product2", ... }
];
