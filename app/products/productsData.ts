export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  priceUsd: string;      // e.g. "$4"
  priceAlt: string;      // e.g. "R$1999" or "£49"
  stripeUrl: string;     // your Stripe payment link
  imageSrc: string;      // /public path
  badge?: string;        // e.g. "NEW"
};

export const products: Product[] = [
  {
    slug: "AriTest",
    name: "Ari",
    tagline: "This is a test",
    description:
      "This is a test",
    priceUsd: "£1",
    priceAlt: "$1",
    stripeUrl: "https://buy.stripe.com/8x200icnJgolfDUb0n7Vm00", // <-- paste your Stripe link
    imageSrc: "/products/AriTest.png",
    badge: "NEW",
  },
];
