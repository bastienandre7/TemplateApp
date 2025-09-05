import { authOptions } from "@/auth";
import ProductPage from "@/components/Template/ProductPage";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { getPurchasesByEmail } from "@/lib/getPurchasesByEmail";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Template Not Found – BloomTPL",
      description: "This template does not exist or is no longer available.",
    };
  }

  return {
    title: `${product.name} | BloomTPL`,
    description: product.description,
    alternates: {
      canonical: `https://bloomtpl.com/nextjs-templates/${slug}`,
    },
    openGraph: {
      title: `${product.name} | BloomTPL`,
      description: product.description,
      url: `https://bloomtpl.com/nextjs-templates/${slug}`,
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
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const session = await getServerSession(authOptions);
  let purchases: { template: string }[] = [];

  if (session?.user?.email) {
    purchases = await getPurchasesByEmail(session.user.email);
  }

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
      url: "https://bloomtpl.com",
    },
    category: "Software Template",
    productID: product.slug,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      url: `https://bloomtpl.com/nextjs-templates/${product.slug}`,
      priceValidUntil: "2025-12-31",
      eligibleRegion: {
        "@type": "Country",
        name: "Worldwide",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "NoReturns",
      },
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "BloomTPL",
        url: "https://bloomtpl.com",
      },
    },
    ...(product.price === 0 ? { isAccessibleForFree: true } : {}),
  };

  return (
    <>
      <ProductPage template={product} purchases={purchases} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
