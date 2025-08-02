import Docs from "@/components/Docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - How to Use Best Next.js Templates | BloomTPL",
  description:
    "Complete step-by-step guide to install, customize, and deploy your premium Next.js templates. From purchase to production in minutes with BloomTPL's best practices.",
  alternates: {
    canonical: "https://bloomtpl.com/docs",
  },
  openGraph: {
    title: "Documentation - How to Use Best Next.js Templates | BloomTPL",
    description:
      "Master your Next.js template setup with our comprehensive documentation. 5-step process from purchase to deployment with premium templates.",
    url: "https://bloomtpl.com/docs",
    siteName: "BloomTPL - Best Next.js Templates",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL Documentation - Best Next.js Templates Setup Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation - How to Use Best Next.js Templates | BloomTPL",
    description:
      "Complete setup guide for premium Next.js templates. Install, customize, and deploy in minutes with BloomTPL's step-by-step documentation.",
    images: ["/og-image.png"],
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

// Add JSON-LD structured data for better SEO
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Use Best Next.js Templates - Complete Documentation",
    description:
      "Complete step-by-step guide to install, customize, and deploy premium Next.js templates from BloomTPL.",
    author: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://bloomtpl.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://bloomtpl.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bloomtpl.com/images/logo/nextLogo.png",
      },
    },
    datePublished: "2025-06-30",
    dateModified: "2025-06-30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://bloomtpl.com/docs",
    },
    articleSection: "Documentation",
    keywords:
      "Next.js templates, React templates, documentation, setup guide, premium templates",
    audience: {
      "@type": "Audience",
      audienceType: "Developers",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Docs />
    </>
  );
}
