import DemoViewer from "@/components/Demo/DemoOverlay";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      title: "Demo Not Found – BloomTPL",
      description: "This demo does not exist or is no longer available.",
    };
  }

  const product = await res.json();

  return {
    title: `BloomTPL - Next.js Tailwind CSS ${product.name} Live Demo`,
    description: product.description,
    alternates: {
      canonical: `https://www.bloomtpl.com/demo/${slug}`,
    },
    openGraph: {
      title: `BloomTPL - Next.js Tailwind CSS ${product.name} Live Demo`,
      description: product.description,
      url: `https://www.bloomtpl.com/demo/${slug}`,
      images: [
        {
          url: `https://www.bloomtpl.com${product.openGraphImage || "/og-image.png"}`,
          alt: `${product.name} – Live Demo`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `BloomTPL - Next.js Tailwind CSS ${product.name} Live Demo`,
      description: product.description,
      images: [
        `https://www.bloomtpl.com${product.openGraphImage || "/og-image.png"}`,
      ],
    },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const product = await res.json();

  return <DemoViewer template={product} />;
}
