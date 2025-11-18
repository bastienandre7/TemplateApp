import type { Product } from "@/components/TemplateDetails/ProductPage";
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
      categories: true,
      content: true,
    },
  });

  if (!tpl) return null;

  let parsedVariants: Product["variants"] | undefined = undefined;
  if (tpl.variants) {
    if (typeof tpl.variants === "string") {
      try {
        const parsed = JSON.parse(tpl.variants);
        console.log("parsed variants:", parsed);
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          ("solo" in parsed ||
            "studio" in parsed ||
            "unlimited" in parsed ||
            "free" in parsed ||
            "premium" in parsed)
        ) {
          parsedVariants = parsed as Product["variants"];
        }
      } catch (e) {
        console.log("Erreur parsing variants:", e);
        parsedVariants = undefined;
      }
    } else if (
      typeof tpl.variants === "object" &&
      tpl.variants !== null &&
      ("solo" in tpl.variants ||
        "studio" in tpl.variants ||
        "unlimited" in tpl.variants ||
        "free" in tpl.variants ||
        "premium" in tpl.variants)
    ) {
      parsedVariants = tpl.variants as unknown as Product["variants"];
    }
  }

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
    variants: parsedVariants,
    categories: tpl.categories,
    content: tpl.content || undefined,
  };
};
