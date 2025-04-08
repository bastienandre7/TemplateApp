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
          {children}
          <FooterCPN />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
