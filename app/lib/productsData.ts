// app/lib/productsData.ts

export type Product = {
  id: string;
  slug: string;

  name: string;
  shortDescription: string;

  // used by ProductCard slideshow
  cardImages: string[];

  // optional extra line ProductCard shows (YOUR ERROR was here)
  pageDescription?: string;

  robuxPrice: number;
  robloxGameUrl: string;

  // coming soon behaviour
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    id: "Chronos",
    slug: "chronos",
    name: "Chronos",
    shortDescription:
      "Chronos is a Trello-powered in-game TV board that displays upcoming shows in real time. In this product, you receive a folder with a configuration script. You can buy a bot addon for a low price of 500 robux, To purchase the bot please contact floptropicajanfei@gmail.com",

    cardImages: [
      "/products/chronos/1.png",
      "/products/chronos/2.png",
      "/products/chronos/3.png",
    ],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/112616976341516/Ari-Products",
    comingSoon: true,
  },
];
