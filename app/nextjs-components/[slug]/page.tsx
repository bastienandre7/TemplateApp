import ComponentDetailClient from "@/components/components/ComponentDetailClient";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const components = await prisma.component.findMany({
    select: { slug: true },
  });
  return components.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await paramsPromise;
  const comp = await prisma.component.findUnique({
    where: { slug },
  });
  if (!comp) {
    return {
      title: "Component Not Found | BloomTPL",
      description: "The component you're looking for doesn't exist.",
    };
  }
  return {
    title: `${comp.name} - Free React Component | BloomTPL`,
    description: `${comp.description} Copy this free component built with React and Tailwind CSS.`,
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
      url: `https://bloomtpl.com/nextjs-components/${comp.slug}`,
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
      canonical: `https://bloomtpl.com/nextjs-components/${comp.slug}`,
    },
  };
}

export default async function ComponentDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;

  const comp = await prisma.component.findUnique({
    where: { slug },
  });
  if (!comp) {
    notFound();
  }
  return <ComponentDetailClient component={comp} />;
}
