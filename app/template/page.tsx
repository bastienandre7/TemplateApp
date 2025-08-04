import HomeWrapper from "@/components/HomeWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
  description:
    "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and blog pages.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com/template",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
    description:
      "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and blog pages.",
    url: "https://bloomtpl.com/template",
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
    title: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
    description:
      "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and blog pages.",
    images: ["https://bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default async function TemplatePage() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await res.json();

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
          "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and blog pages.",
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
        name: "10+ Best Free and Premium Next.js Templates (2025) | BloomTPL",
        description:
          "Explore 10+ free and premium Next.js templates, starter kits and themes built with Tailwind CSS and React — ideal for SaaS, e-commerce, portfolios and blog pages.",
        publisher: {
          "@id": "https://bloomtpl.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://bloomtpl.com/?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://bloomtpl.com/#products",
        name: "Next.js Templates",
        description:
          "Free and Premium Next.js and Tailwind CSS templates for modern web development",
        numberOfItems: data.length,
        itemListElement: data.slice(0, 10).map(
          (
            product: {
              slug: string;
              name: string;
              description: string;
              price: number;
              openGraphImage?: string;
              imageUrl: string;
              category: string;
            },
            index: number
          ) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              "@id": `https://bloomtpl.com/template/${product.slug}`,
              name: product.name,
              description: product.description,
              url: `https://bloomtpl.com/template/${product.slug}`,
              image: product.openGraphImage || product.imageUrl,
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
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
          })
        ),
      },
    ],
  };

  return (
    <>
      <HomeWrapper products={data} />

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
