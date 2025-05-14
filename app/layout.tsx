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
  title: "BloomTPL – Modern Next.js Templates",
  description:
    "Discover and download premium templates and components built with Next.js, Tailwind CSS, and modern design systems.",
  icons: {
    icon: "/logo.ico",
  },
  alternates: {
    canonical: "https://bloomtpl.com",
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
    title: "BloomTPL – Modern Next.js Templates",
    description:
      "Discover and download premium templates and components built with Next.js, Tailwind CSS, and modern design systems.",
    url: "https://bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bloomtpl.com/og-image.png",
        width: 1260,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL – Modern Next.js Templates",
    description:
      "Discover and download premium templates and components built with Next.js, Tailwind CSS, and modern design systems.",
    images: ["https://bloomtpl.com/og-image.png"],
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
