import ComponentDetailClient from "@/components/ComponentDetailClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Générer les métadonnées dynamiquement
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/components/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return {
      title: "Component Not Found | BloomTPL",
      description: "The component you're looking for doesn't exist.",
    };
  }
  const comp = await res.json();

  return {
    title: `${comp.name} - Free React Component | BloomTPL`,
    description: `${comp.description} Copy and paste this free ${comp.name} component built with React and Tailwind CSS.`,
    keywords: [
      comp.name.toLowerCase(),
      "react",
      "component",
      "tailwind css",
      "free",
      "nextjs",
      comp.category,
      "ui component",
      "copy paste",
    ],

    openGraph: {
      title: `${comp.name} - Free React Component`,
      description: `${comp.description} Built with React and Tailwind CSS.`,
      type: "article",
      url: `https://bloomtpl.com/components/${slug}`,
      images: [
        {
          url: comp.image,
          width: 1200,
          height: 630,
          alt: comp.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${comp.name} - Free React Component`,
      description: `${comp.description} Built with React and Tailwind CSS.`,
      images: [comp.image],
    },
    alternates: {
      canonical: `https://bloomtpl.com/components/${slug}`,
    },
  };
}

// Server Component principal
export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/components/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    notFound();
  }
  const comp = await res.json();

  return <ComponentDetailClient component={comp} />;
}
