export type Product = {
  slug: string;
  name: string;
  description: string;
  priceUsd: string;
  priceAlt: string;
  stripeUrl: string;
  imageSrc: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "aritest",
    name: "AriTest",
    description: "Put your description here.",
    priceUsd: "$4",
    priceAlt: "£3.50",
    stripeUrl: "https://buy.stripe.com/REPLACE_ME",
    imageSrc: "/products/aritest.png",
    badge: "NEW",
  },
];

// ✅ default export too (prevents import mismatch crashes)
export default products;
