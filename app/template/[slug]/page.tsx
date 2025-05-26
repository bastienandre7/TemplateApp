import ProductPage from "@/components/ProductPage";
import { getTemplateBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getTemplateBySlug(slug);

  if (!product) {
    return {
      title: "Template Not Found – BloomTPL",
      description: "This template does not exist or is no longer available.",
    };
  }

  return {
    title: `${product.name} – Premium Tailwind Template | BloomTPL`,
    description: product.description,
    alternates: {
      canonical: `https://www.bloomtpl.com/template/${slug}`,
    },
    openGraph: {
      title: `${product.name} – Premium Tailwind Template`,
      description: product.description,
      url: `https://www.bloomtpl.com/template/${slug}`,
      images: [
        {
          url: `https://www.bloomtpl.com${product.images?.[0]}`,
          width: 1200,
          height: 630,
        },
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
  const product = getTemplateBySlug(slug);

  if (!product) return notFound();

  return <ProductPage slug={slug} />;
}
