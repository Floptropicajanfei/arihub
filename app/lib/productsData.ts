export type Product = {
  id: string;
  slug: string;

  name: string;

  /**
   * Shows on:
   * - Landing page product strip card
   * - /products page cards
   */
  pageDescription: string;

  /**
   * Short extra line shown under pageDescription (optional)
   * Keep it short.
   */
  shortDescription?: string;

  /**
   * Card slideshow images (use your real public paths)
   * Your structure: public/products/aritest/1.png etc
   */
  cardImages: string[];

  robuxPrice: number;
  robloxGameUrl: string;
};

export const products: Product[] = [
  {
    id: "aritest",
    slug: "aritest",
    name: "AriTest Product",

    pageDescription:
      "This is a short description that appears on both the landing page and the products page.",
    shortDescription: "Optional extra short line under the description.",

    // ✅ MUST match your actual files in /public
    // screenshot: public/products/aritest/1.png, 2.png, 3.png
    cardImages: [
      "/products/aritest/1.png",
      "/products/aritest/2.png",
      "/products/aritest/3.png",
    ],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  },

  // Add unlimited products like this:
  // {
  //   id: "simplewelcome",
  //   slug: "simplewelcome",
  //   name: "SimpleWelcome",
  //   pageDescription: "Short description shown on landing + products page.",
  //   cardImages: ["/products/simplewelcome/1.png", "/products/simplewelcome/2.png"],
  //   robuxPrice: 100,
  //   robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",
  // },
];
