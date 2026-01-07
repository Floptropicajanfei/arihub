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
  metadataBase: new URL("https://www.arihub.online/"), // IMPORTANT: use the exact domain you paste in Discord
  title: {
    default: "AriHub",
    template: "%s · AriHub",
  },
  description: "AriHub portfolio",

  openGraph: {
    title: "AriHub",
    description: "AriHub portfolio",
    url: "https://www.arihub.online/",
    siteName: "AriHub",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AriHub preview",
      },
    ],
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "AriHub",
    description: "AriHub portfolio",
    images: ["/opengraph-image"],
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
