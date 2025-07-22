import ComponentsClient from "@/components/ComponentsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Components | BloomTPL",
  description:
    "Beautiful, responsive components built with Tailwind CSS and React. Copy the code and paste into your project. 100% free.",
  keywords: [
    "nextjs",
    "react",
    "components",
    "tailwind",
    "free",
    "ui",
    "library",
  ],
  openGraph: {
    title: "Free Next.js Components | BloomTPL",
    description:
      "Beautiful, responsive components built with Tailwind CSS and React. Copy the code and paste into your project.",
    type: "website",
    url: "https://yoursite.com/components",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Next.js Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Next.js Components | BloomTPL",
    description:
      "Beautiful, responsive components built with Tailwind CSS and React.",
    images: ["/images/og-components.jpg"],
  },
};

export default function ComponentsPage() {
  return <ComponentsClient />;
}
