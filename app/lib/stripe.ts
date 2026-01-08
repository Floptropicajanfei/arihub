import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Don't set apiVersion here — Stripe will use your account's default.
});
