// app/lib/productsData.ts
export type Product = {
  id: string;

  slug: string;
  name: string;

  // shown on landing + products page card
  shortDescription: string;

  // optional longer text for products page (not a separate product route)
  pageDescription: string;

  // images for the card slideshow
  cardImages: string[];

  robuxPrice: number;
  robloxGameUrl: string;
};

export const products: Product[] = [
  {
    id: "aritest",
    slug: "aritest",
    name: "AriTest Product",

    shortDescription:
      "This is a short description that appears on both the landing page and the products page.",

    pageDescription:
      "This is a longer description that appears on the products page under the product details.",

    // matches your structure: public/products/aritest/1.png etc
    cardImages: [
      "/products/aritest/1.png",
      "/products/aritest/2.png",
      "/products/aritest/3.png",
    ],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  },
];
