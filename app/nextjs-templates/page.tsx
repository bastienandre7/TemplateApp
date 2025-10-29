import HomeWrapper from "@/components/Template/HomeWrapper";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Next.js & Tailwind Templates (Free + Premium) | BloomTPL",
  description:
    "Explore free and premium Next.js templates built with Tailwind CSS & TypeScript. Perfect for SaaS, blogs, e-commerce, portfolios, and more.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com/nextjs-templates",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Best Next.js & Tailwind Templates (Free + Premium) | BloomTPL",
    description:
      "Explore free and premium Next.js templates built with Tailwind CSS & TypeScript. Perfect for SaaS, blogs, e-commerce, portfolios, and more.",
    url: "https://bloomtpl.com/nextjs-templates",
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
    title: "Best Next.js & Tailwind Templates (Free + Premium) | BloomTPL",
    description:
      "Explore free and premium Next.js templates built with Tailwind CSS & TypeScript. Perfect for SaaS, blogs, e-commerce, portfolios, and more.",
    images: ["https://bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default async function TemplatePage() {
  const data = await prisma.template.findMany({
    select: {
      lemonId: true,
      name: true,
      description: true,
      slug: true,
      demoUrl: true,
      category: true,
      createdAt: true,
      openGraphImage: true,
      tech: true,
      pages: true,
      extras: true,
      categories: true,
      price: true,
      lemonLink: true,
    },
  });

  const products = data.map((tpl) => {
    const price = tpl.price ? tpl.price / 100 : 0;
    const discount = price > 0 ? Math.round(price * 0.8 * 100) / 100 : 0;

    return {
      id: tpl.lemonId,
      name: tpl.name,
      description: tpl.description,
      price,
      discount,
      imageUrl: tpl.openGraphImage || "/og-image.png",
      demoUrl: tpl.demoUrl,
      lemonLink: tpl.lemonLink,
      type: "template" as const,
      category: tpl.category,
      slug: tpl.slug,
      created_at: tpl.createdAt.toISOString(),
      openGraphImage: tpl.openGraphImage,
      categories: tpl.categories,
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bloomtpl.com/#organization",
        name: "BloomTPL",
        url: "https://bloomtpl.com",
        logo: {
          "@type": "ImageObject",
          url: "https://bloomtpl.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Discover premium Next.js templates for 10–40€, built with Tailwind CSS & TypeScript. Fast, SEO-friendly, and ready for production.",
        foundingDate: "2025",
        sameAs: ["https://twitter.com/BloomTPL"],
        contactPoint: {
          "@type": "ContactPoint",
          email: "bloomtpl@gmail.com",
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://bloomtpl.com/#website",
        url: "https://bloomtpl.com",
        name: "10+ Premium Next.js Templates Under 40€ (2025) | BloomTPL",
        description:
          "Discover premium Next.js templates for 10–40€, built with Tailwind CSS & TypeScript. Fast, SEO-friendly, and ready for production.",
        publisher: {
          "@id": "https://bloomtpl.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://bloomtpl.com/nextjs-templates/?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://bloomtpl.com/nextjs-templates/#products",
        name: "Next.js Templates",
        description:
          "Discover premium Next.js templates for 10–40€, built with Tailwind CSS & TypeScript. Fast, SEO-friendly, and ready for production.",
        numberOfItems: products.length,
        itemListElement: products.slice(0, 10).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            "@id": `https://bloomtpl.com/nextjs-templates/${product.slug}`,
            name: product.name,
            description: product.description,
            url: `https://bloomtpl.com/nextjs-templates/${product.slug}`,
            image: product.imageUrl,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: product.price.toFixed(2),
              availability: "https://schema.org/InStock",
              seller: {
                "@id": "https://bloomtpl.com/#organization",
              },
            },
            brand: {
              "@id": "https://bloomtpl.com/#organization",
            },
            category: product.category,
          },
        })),
      },
    ],
  };

  return (
    <>
      <HomeWrapper products={products} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
