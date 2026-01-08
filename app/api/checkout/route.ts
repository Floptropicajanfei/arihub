import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";

export async function POST(req: Request) {
  // ✅ Hard guard so builds never crash
  if (!process.env.STRIPE_SECRET_KEY || !stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const name: string = body?.name || "Product";
    const amountPence: number = Number(body?.amountPence || 1000);

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name,
            },
            unit_amount: amountPence,
          },
          quantity: 1,
        },
      ],

      // ✅ IMPORTANT: metadata for Discord webhook
      metadata: {
        productName: name,
      },

      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);

    return NextResponse.json(
      { error: err?.message || "Stripe error" },
      { status: 500 }
    );
  }
}
