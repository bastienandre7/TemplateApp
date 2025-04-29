import CookieBanner from "@/components/CookieBanner";
import CookieConsentGate from "@/components/CookieConsentGate";
import FooterCPN from "@/components/Footer/FooterCPN";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
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
  keywords: [
    "website templates",
    "premium website templates",
    "modern website templates",
    "responsive website templates",
    "Tailwind CSS templates",
    "UI components",
    "UI kits",
    "buy website templates",
    "download website templates",
    "website starter kits",
    "modern design systems",
    "frontend development resources",
    "web design templates",
    "web development templates",
    "professional website templates",
    "ready-to-use templates",
    "website design tools",
    "premium Tailwind templates",
    "responsive UI components",
    "modern UI design",
  ],
  openGraph: {
    title: "BloomTPL – Modern Next.js Templates",
    description:
      "Discover and download premium templates and components built with Next.js, Tailwind CSS, and modern design systems.",
    url: "https://bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL – Modern Next.js Templates",
    description:
      "Discover and download premium templates and components built with Next.js, Tailwind CSS, and modern design systems.",
  },
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
          <Suspense fallback={<div className="min-h-screen" />}>
            <CookieBanner />
            {children}
          </Suspense>
          <FooterCPN />
          <CookieConsentGate>
            <SpeedInsights />
            <Analytics />
          </CookieConsentGate>
        </Providers>
      </body>
    </html>
  );
}
