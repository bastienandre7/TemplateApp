import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type LemonProduct = {
  id: string;
  attributes: {
    price?: number;
    buy_now_url?: string;
    created_at?: string;
    // Ajoute d'autres attributs si besoin
  };
};

export async function GET(
  _req: Request,
  context: { params: Promise<{ category: string }> }
) {
  const { category } = await context.params;
  const normalized = slugify(category);

  try {
    // Récupère tous les templates qui contiennent cette catégorie slugifiée
    const templates = await prisma.template.findMany({
      where: {
        categoriesSlugs: {
          has: normalized,
        },
      },
      select: {
        lemonId: true,
        name: true,
        description: true,
        slug: true,
        demoUrl: true,
        category: true,
        createdAt: true,
        openGraphImage: true,
        tech: true,
        pages: true,
        extras: true,
        categories: true,
      },
    });

    const productsRes = await fetch(
      "https://api.lemonsqueezy.com/v1/products",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
        next: { revalidate: 60 },
      }
    );

    const productsJson = await productsRes.json();

    // Formatage des templates
    const formatted = templates.map((tpl) => {
      const lemon = (productsJson.data as LemonProduct[]).find(
        (product) => Number(product.id) === tpl.lemonId
      );
      return {
        id: tpl.lemonId,
        name: tpl.name,
        price: lemon?.attributes?.price ? lemon.attributes.price / 100 : 0,
        description: tpl.description,
        lemonLink: lemon?.attributes?.buy_now_url || "",
        slug: tpl.slug,
        type: "template",
        demoUrl: tpl.demoUrl,
        category: tpl.category,
        created_at: lemon?.attributes?.created_at || tpl.createdAt,
        openGraphImage: tpl.openGraphImage || "",
        tech: tpl.tech,
        pages: tpl.pages,
        extras: tpl.extras,
        categories: tpl.categories,
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur API catégorie:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}
