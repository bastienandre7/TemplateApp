import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LayoutShell from "./LayoutShell";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "8+ Best Free and Premium Next.js Templates (2025)",
  description:
    "Explore 8+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
  metadataBase: new URL("https://www.bloomtpl.com"),
  alternates: {
    canonical: "https://www.bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "8+ Best Free and Premium Next.js Templates (2025)",
    description:
      "Explore 8+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
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
    title: "8+ Best Free and Premium Next.js Templates (2025)",
    description:
      "Explore 8+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
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
