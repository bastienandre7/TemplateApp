import UltimateBundle from "@/components/bundle/UltimateBundle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimate Developer Bundle – 8 Premium Next.js Templates | BloomTPL",
  description:
    "Get the best deal with the Ultimate Developer Bundle from BloomTPL. Includes 8 premium Next.js & Tailwind CSS templates to launch SaaS, blogs, portfolios, and more.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com/bundle/ultimate",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Ultimate Developer Bundle – 8 Premium Next.js Templates | BloomTPL",
    description:
      "Get the best deal with the Ultimate Developer Bundle from BloomTPL. Includes 8 premium Next.js & Tailwind CSS templates to launch SaaS, blogs, portfolios, and more.",
    url: "https://bloomtpl.com/bundle/ultimate",
    siteName: "BloomTPL",
    locale: "en_US",
    images: [
      {
        url: "https://bloomtpl.com/bundle-og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Developer Bundle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Developer Bundle – 8 Premium Next.js Templates | BloomTPL",
    description:
      "Get the best deal with the Ultimate Developer Bundle from BloomTPL. Includes 8 premium Next.js & Tailwind CSS templates to launch SaaS, blogs, portfolios, and more.",
    images: ["https://bloomtpl.com/bundle-og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default function UltimateBundlePage() {
  return <UltimateBundle />;
}
