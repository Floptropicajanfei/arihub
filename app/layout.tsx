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
    default: "Ari",
    template: "",
  },
  description: "",

  openGraph: {
    title: "Ari",
    description: "",
    url: "https://www.arihub.online/",
    siteName: "Ari",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ari",
    description: "",
    images: ["/opengraph-image.png"],
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
