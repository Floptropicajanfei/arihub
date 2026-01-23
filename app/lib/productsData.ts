// app/lib/productsData.ts

export type Product = {
  id: string;
  slug: string;

  name: string;
  shortDescription: string;

  // optional bits used by the new per-product page
  tagline?: string;
  description?: string;
  pageDescription?: string;

  // images
  icon?: string;
  cardImage?: string;
  cardImages?: string[];
  pageImages?: string[]; // use up to 3 here

  // purchase
  robuxPrice: number;
  robloxGameUrl: string;

  // toggles
  onSale?: boolean; // false = hide purchase (shows coming soon panel)
  comingSoon?: boolean;
  comingSoonText?: string;

  // demo center toggle
  hasDemoCenter?: boolean;
  demoCenterUrl?: string;
};

export const products: Product[] = [
  {
    id: "Chronos",
    slug: "chronos",
    name: "Chronos",
    shortDescription: "A short description for the card.",
    tagline: "Chronos is a Trello-powered in-game TV board that displays upcoming shows in real time. More information coming soon",
    description:
      "  ",

    icon: "/products/chronos/logo.png",
    pageImages: ["/products/chronos/1.png", "/products/chronos/2.png", "/products/chronos/3.png"],

    robuxPrice: 300,
    robloxGameUrl: "https://www.roblox.com/games/REPLACE_ME",

    onSale: true,
    comingSoon: true,

    hasDemoCenter: true,
    demoCenterUrl: "https://www.roblox.com/games/REPLACE_ME_DEMO",
  },
];
