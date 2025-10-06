import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
        price: true,
        lemonLink: true,
      },
    });

    // Formatage des templates
    const formatted = templates.map((tpl) => ({
      id: tpl.lemonId,
      name: tpl.name,
      price: tpl.price ? tpl.price / 100 : 0,
      description: tpl.description,
      lemonLink: tpl.lemonLink || "",
      slug: tpl.slug,
      type: "template",
      demoUrl: tpl.demoUrl,
      category: tpl.category,
      created_at: tpl.createdAt,
      openGraphImage: tpl.openGraphImage || "",
      tech: tpl.tech,
      pages: tpl.pages,
      extras: tpl.extras,
      categories: tpl.categories,
    }));

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
