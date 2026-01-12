export type Product = {
  id: string;
  name: string;
  description: string;
  robuxPrice: number;
  robloxUrl: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "aritest",
    name: "AriTest Product",
    description:
      "This is a short description that appears on both the landing page and the products page.",
    robuxPrice: 300,
    robloxUrl: "https://www.roblox.com/games/REPLACE_ME",
    images: [
      "/products/aritest/1.png",
      "/products/aritest/2.png",
      "/products/aritest/3.png",
    ],
  },

  // add unlimited products here
];
