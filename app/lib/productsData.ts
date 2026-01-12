export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  robuxPrice: number;
  robloxGameUrl: string;
};

export const products: Product[] = [
  {
    slug: "aritest",
    name: "AriTest Product",
    shortDescription:
      "This is a short description shown on cards and product listings.",
    description:
      "This is the full product description. You can explain features, usage, and anything else here.",
    images: [
      "/products/aritest/1.png",
      "/products/aritest/2.png",
      "/products/aritest/3.png",
    ],
    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  },
];
