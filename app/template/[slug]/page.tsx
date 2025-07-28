import ProductPage from "@/components/Template/ProductPage";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return {
      title: "Template Not Found – BloomTPL",
      description: "This template does not exist or is no longer available.",
    };
  }

  const product = await res.json();

  return {
    title: `${product.name} | BloomTPL`,
    description: product.description,
    alternates: {
      canonical: `https://www.bloomtpl.com/template/${slug}`,
    },
    openGraph: {
      title: `${product.name} | BloomTPL`,
      description: product.description,
      url: `https://www.bloomtpl.com/template/${slug}`,
      siteName: "BloomTPL",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${product.openGraphImage || "/og-image.png"}`,
          alt: `${product.name} – Premium Next.js & Tailwind CSS Template`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | BloomTPL`,
      description: product.description,
      images: [`${product.openGraphImage || "/og-image.png"}`],
      creator: "@BloomTPL",
    },
  };
}

export default async function TemplateDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const product = await res.json();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${product.openGraphImage || "/og-image.png"}`],
    description: product.description,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: "BloomTPL",
    },
    manufacturer: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://www.bloomtpl.com",
    },
    category: "Software Template",
    productID: product.slug,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      url: `https://www.bloomtpl.com/template/${product.slug}`,
      priceValidUntil: "2025-12-31",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/NoReturns",
      },
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "BloomTPL",
        url: "https://www.bloomtpl.com",
      },
    },
    isAccessibleForFree: product.price === 0,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Bastien",
        },
        reviewBody:
          "Excellent Next.js template, very clean code and easy to customize.",
      },
    ],
  };

  return (
    <>
      <ProductPage template={product} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
