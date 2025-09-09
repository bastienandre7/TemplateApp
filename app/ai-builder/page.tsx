import AIBuilderComponent from "@/components/AIBuilderComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Component Builder for Next.js & Tailwind CSS | BloomTPL",
  description:
    "Generate Next.js components with TypeScript and Tailwind CSS using AI. Build React components instantly with our intelligent code generator.",
  keywords: [
    "AI",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Component Generator",
    "Code Generation",
  ],
  alternates: {
    canonical: "https://bloomtpl.com/ai-builder",
  },
  openGraph: {
    title: "AI Component Builder for Next.js & Tailwind CSS | BloomTPL",
    description:
      "Generate Next.js components with TypeScript and Tailwind CSS using AI. Build React components instantly with our intelligent code generator.",
    url: "https://bloomtpl.com/ai-builder",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        alt: "AI Component Builder - Generate React Components with AI",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Component Builder for Next.js & Tailwind CSS | BloomTPL",
    description:
      "Generate Next.js components with TypeScript and Tailwind CSS using AI",
    images: ["/images/og-image.png"],
    creator: "@BloomTPL",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AIBuilderPage() {
  // JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Component Builder for Next.js & Tailwind CSS",
    applicationCategory: "DeveloperTool",
    description:
      "Generate Next.js components with TypeScript and Tailwind CSS using AI",
    url: "https://bloomtpl.com/ai-builder",
    publisher: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://bloomtpl.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      eligibleRegion: {
        "@type": "Country",
        name: "Worldwide",
      },
    },
    featureList: [
      "AI-powered code generation",
      "Next.js 15 components",
      "TypeScript support",
      "Tailwind CSS styling",
      "Responsive design",
      "Copy to clipboard",
    ],
  };

  return (
    <>
      <AIBuilderComponent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
