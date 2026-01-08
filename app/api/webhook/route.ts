import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/app/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  if (!sig) {
    console.log("Missing stripe-signature header");
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.log("Signature verify failed:", err?.message);
    return NextResponse.json({ error: err?.message }, { status: 400 });
  }

  console.log("Received Stripe event:", event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email =
      session.customer_details?.email ??
      session.customer_email ??
      "Unknown email";

    const productName =
      session.metadata?.productName ??
      session.metadata?.product ??
      "Unknown product";

    const timestamp = `<t:${Math.floor(Date.now() / 1000)}:F>`;

    const discordUrl = process.env.DISCORD_PURCHASE_WEBHOOK;
    if (!discordUrl) {
      console.log("DISCORD_PURCHASE_WEBHOOK not set");
      return NextResponse.json({ received: true });
    }

    const content =
      `**Product Bought:** ${productName}\n` +
      `**Date of Purchase:** ${timestamp}\n` +
      `**Email:** ${email}`;

    try {
      const r = await fetch(discordUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const text = await r.text().catch(() => "");
      console.log("Discord webhook status:", r.status, text || "(no body)");
    } catch (e: any) {
      console.log("Discord webhook request failed:", e?.message);
    }
  }

  return NextResponse.json({ received: true });
}
