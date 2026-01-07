import "./globals.css";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AriHub",
    template: "%s · AriHub",
  },
  description: "Hi! I'm Ari",

  metadataBase: new URL("https://www.arihub.online"),

  openGraph: {
    title: "AriHub",
    description: "Hi! I'm Ari",
    url: "https://www.arihub.online",
    siteName: "Ari",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hi! I'm Ari",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AriHub",
    description: "AriHub portfolio",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
