import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LayoutShell from "./LayoutShell";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BloomTPL - Tailwind CSS & Next.js Templates for SaaS & UI",
  description:
    "Launch faster with premium Tailwind CSS & Next.js templates. Ideal for SaaS products, dashboards, and developer portfolios. Built to be clean and ready.",
  alternates: {
    canonical: "https://www.bloomtpl.com",
  },
  keywords: [
    "Next.js templates",
    "Tailwind CSS templates",
    "UI components",
    "SaaS dashboard templates",
    "ecommerce templates",
    "portfolio templates",
    "website starter kits",
    "premium templates",
    "modern UI design",
    "responsive design systems",
  ],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "BloomTPL - Tailwind CSS & Next.js Templates for SaaS & UI",
    description:
      "Launch faster with premium Tailwind CSS & Next.js templates. Ideal for SaaS products, dashboards, and developer portfolios. Built to be clean and ready.",
    url: "https://www.bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL - Tailwind CSS & Next.js Templates for SaaS & UI",
    description:
      "Launch faster with premium Tailwind CSS & Next.js templates. Ideal for SaaS products, dashboards, and developer portfolios. Built to be clean and ready.",
    images: ["https://www.bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
