import HomeWrapper from "@/components/HomeWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BloomTPL - Best Next.js Templates & Starter Kits",
  description:
    "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://www.bloomtpl.com"),
  alternates: {
    canonical: "https://www.bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "BloomTPL - Best Next.js Templates & Starter Kits",
    description:
      "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
    url: "https://www.bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL - Best Next.js Templates & Starter Kits",
    description:
      "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
    images: ["https://www.bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await res.json();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.bloomtpl.com/#organization",
        name: "BloomTPL",
        url: "https://www.bloomtpl.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.bloomtpl.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "BloomTPL is a premium template marketplace offering high-quality, production-ready Next.js templates for SaaS apps, e-commerce, portfolios, blogs and more.",
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
        "@id": "https://www.bloomtpl.com/#website",
        url: "https://www.bloomtpl.com",
        name: "BloomTPL - Best Next.js Templates & Starter Kits",
        description:
          "BloomTPL is a template marketplace offering high-quality, production-ready templates for SaaS apps, e-commerce, portfolios, blogs and more, built with Next.js and Tailwind CSS.",
        publisher: {
          "@id": "https://www.bloomtpl.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.bloomtpl.com/?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.bloomtpl.com/#products",
        name: "Next.js Templates",
        description:
          "Premium Next.js and Tailwind CSS templates for modern web development",
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
              "@id": `https://www.bloomtpl.com/template/${product.slug}`,
              name: product.name,
              description: product.description,
              url: `https://www.bloomtpl.com/template/${product.slug}`,
              image: product.openGraphImage || product.imageUrl,
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                price: product.price.toFixed(2),
                availability: "https://schema.org/InStock",
                seller: {
                  "@id": "https://www.bloomtpl.com/#organization",
                },
              },
              brand: {
                "@id": "https://www.bloomtpl.com/#organization",
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
