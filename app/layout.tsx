import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LayoutShell from "./LayoutShell";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
  description:
    "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://www.bloomtpl.com"),
  alternates: {
    canonical: "https://www.bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
    description:
      "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
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
    title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
    description:
      "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
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
