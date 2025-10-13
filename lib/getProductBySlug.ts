import { prisma } from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  const tpl = await prisma.template.findUnique({
    where: { slug },
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      demoUrl: true,
      openGraphImage: true,
      category: true,
      tech: true,
      pages: true,
      extras: true,
      lemonId: true,
      updatedAt: true,
      performanceImage: true,
      price: true,
      lemonLink: true,
      docLink: true,
      structure: true,
      variants: true,
    },
  });

  if (!tpl) return null;

  return {
    id: tpl.id,
    name: tpl.name,
    price: tpl.price ? tpl.price / 100 : 0,
    description: tpl.description || "",
    lemonLink:
      tpl.lemonLink ||
      `https://bloomtpl.lemonsqueezy.com/checkout/buy/${tpl.lemonId}`,
    slug: tpl.slug,
    demoUrl: tpl.demoUrl || "",
    frameworks: tpl.tech ? [tpl.tech] : [],
    tech: Array.isArray(tpl.tech)
      ? tpl.tech.filter((t) => typeof t === "string")
      : [],
    category: tpl.category || "Uncategorized",
    openGraphImage: tpl.openGraphImage || "/images/og-template.png",
    updated_at: tpl.updatedAt.toISOString(),
    pages: Array.isArray(tpl.pages)
      ? tpl.pages.filter((t) => typeof t === "string")
      : [],
    extras: Array.isArray(tpl.extras)
      ? tpl.extras.filter((t) => typeof t === "string")
      : [],
    performanceImage: tpl.performanceImage || undefined,
    docLink: tpl.docLink || undefined,
    structure: tpl.structure || undefined,
    variants: tpl.variants || undefined,
  };
};
