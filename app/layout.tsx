// app/layout.tsx
import "./globals.css";
import Footer from "./components/footer";
import HomeButton from "./components/HomeButton";
import ScrollProgress from "./components/ScrollProgress";
import PagePulseGrid from "./components/PagePulseGrid";
import GlobalReveal from "./components/GlobalReveal";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ari",
  description: "",
  openGraph: {
    title: "Ari",
    description: "",
    url: "https://www.arihub.online",
    siteName: "Ari",
    images: [
      {
        url: "/previewv1.png",
        width: 1200,
        height: 630,
        alt: "Ari",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ari",
    description: "",
    images: ["/previewv1.png"],
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
        {/* Top progress bar */}
        <ScrollProgress />
        <PagePulseGrid />
        <GlobalReveal />

        <main className="page">
          <HomeButton />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
