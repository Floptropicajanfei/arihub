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

export const metadata = {
  title: "AriHub",
  description: "Ari – Designer, Developer & Freelancer",

  openGraph: {
    title: "AriHub",
    description: "Designer, Developer & Freelancer",
    url: "https://www.arihub.online",
    siteName: "AriHub",
    images: [
      {
        url: "/preview.png", // ✅ YOUR image only
        width: 1200,
        height: 630,
        alt: "AriHub Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AriHub",
    description: "Designer, Developer & Freelancer",
    images: ["/preview.png"], // ✅ same image
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
