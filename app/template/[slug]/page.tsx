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
    title: `BloomTPL | ${product.name} | Next.js & Tailwind CSS`,
    description: product.description,
    alternates: {
      canonical: `https://www.bloomtpl.com/template/${slug}`,
    },
    openGraph: {
      title: `BloomTPL | ${product.name} | Next.js & Tailwind CSS`,
      description: product.description,
      url: `https://www.bloomtpl.com/template/${slug}`,
      images: [
        {
          url: `https://www.bloomtpl.com${product.openGraphImage || "/og-image.png"}`,
          alt: `${product.name} – Premium Tailwind Template`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `BloomTPL | ${product.name} | Next.js & Tailwind CSS`,
      description: product.description,
      images: [
        `https://www.bloomtpl.com${product.openGraphImage || "/og-image.png"}`,
      ],
    },
  };
}

export default async function TemplatePage({
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
    image: [product.imageUrl],
    description: product.description,
    sku: product.slug,
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
    },
    isAccessibleForFree: false,
    category: product.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "24",
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
