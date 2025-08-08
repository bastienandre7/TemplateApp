import LandingPage from "@/components/Main/Landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Templates & Free React Components | BloomTPL",
  description:
    "Premium Next.js templates and free React components for SaaS, e-commerce, and portfolios. Built with Tailwind CSS and TypeScript.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Next.js Templates & Free React Components | BloomTPL",
    description:
      "Premium Next.js templates and free React components for modern web apps. Built with Tailwind CSS and TypeScript.",
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
    title: "Next.js Templates & Free React Components | BloomTPL",
    description:
      "Premium Next.js templates and free React components for SaaS, e-commerce, and portfolios. Built with Tailwind CSS and TypeScript.",
    images: ["https://bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default function Home() {
  return <LandingPage />;
}
