import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface LemonProduct {
  id: string;
  attributes: {
    name: string;
    description?: string;
    price?: number;
    large_thumb_url?: string;
    buy_now_url: string;
    created_at: string;
    slug: string;
  };
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

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
      // images: false <-- inutile, non sélectionné
    },
  });

  if (!tpl) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    let allProducts: LemonProduct[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.lemonsqueezy.com/v1/products?page[size]=100&page[number]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
            Accept: "application/vnd.api+json",
          },
          next: { revalidate: 60 },
        }
      );

      const json = await response.json();
      const products: LemonProduct[] = json.data;

      allProducts = [...allProducts, ...products];

      // Vérifie s'il y a d'autres pages
      hasMore = json.meta?.page?.last_page > page;
      page++;
    }

    // 3. Trouve le produit LemonSqueezy correspondant à lemonId
    const product = allProducts.find((p) => Number(p.id) === tpl.lemonId);

    if (!product) {
      // Fallback - Retourne les données de la DB
      const fallbackFormatted = {
        id: tpl.id,
        name: tpl.name,
        price: 49, // Prix par défaut
        description: tpl.description || "",
        lemonLink: `https://bloomtpl.lemonsqueezy.com/checkout/buy/${tpl.lemonId}`,
        slug: tpl.slug,
        demoUrl: tpl.demoUrl || "",
        frameworks: tpl.tech ? [tpl.tech] : [],
        tech: tpl.tech || [],
        category: tpl.category || "Uncategorized",
        openGraphImage: tpl.openGraphImage || "/images/og-template.png",
        updated_at: tpl.updatedAt.toISOString(),
        pages: tpl.pages || [],
        extras: tpl.extras || [],
        performanceImage: tpl.performanceImage || null,
      };

      return NextResponse.json(fallbackFormatted);
    }

    const formatted = {
      id: Number(product.id),
      name: product.attributes.name,
      price: product.attributes.price ? product.attributes.price / 100 : 0,
      description: tpl.description || product.attributes.description || "",
      lemonLink: product.attributes.buy_now_url,
      slug: tpl.slug,
      demoUrl: tpl.demoUrl || "",
      frameworks: tpl.tech ? [tpl.tech] : [],
      tech: tpl.tech || [],
      category: tpl.category || "Uncategorized",
      openGraphImage: tpl.openGraphImage || "/images/og-template.png",
      updated_at: product.attributes.created_at,
      pages: tpl.pages || [],
      extras: tpl.extras || [],
      performanceImage: tpl.performanceImage || null,
    };

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur produit introuvable" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
