import { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LayoutShell from "./LayoutShell";

const poppins = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const lexend = Lexend_Deca({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
  description:
    "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
    description:
      "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
    url: "https://bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
    description:
      "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and landing pages.",
    images: ["https://bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "manifest", url: "/icons/site.webmanifest" },
      {
        rel: "icon",
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${lexend.style} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
