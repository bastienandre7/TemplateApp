import CookieBanner from "@/components/CookieBanner";
import CookieConsentGate from "@/components/CookieConsentGate";
import FooterCPN from "@/components/Footer/FooterCPN";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title:
    "Premium Tailwind Templates for SaaS, Dashboards, Portfolios & More - BloomTPL",
  description:
    "Explore premium Next.js templates built with Tailwind CSS. Perfect for SaaS apps, admin dashboards, and modern portfolio websites.",
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
    title:
      "Premium Tailwind Templates for SaaS, Dashboards, Portfolios & More - BloomTPL",
    description:
      "Explore premium Next.js templates built with Tailwind CSS. Perfect for SaaS apps, admin dashboards, and modern portfolio websites.",
    url: "https://www.bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bloomtpl.com/og-image.png",
        width: 1260,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Premium Tailwind Templates for SaaS, Dashboards, Portfolios & More - BloomTPL",
    description:
      "Explore premium Next.js templates built with Tailwind CSS. Perfect for SaaS apps, admin dashboards, and modern portfolio websites.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen bg-white">
            <CookieBanner />
            <main className="flex-1">{children}</main>
            <FooterCPN />
          </div>
          <CookieConsentGate>
            <SpeedInsights />
            <Analytics />
          </CookieConsentGate>
        </Providers>
      </body>
    </html>
  );
}
