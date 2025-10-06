import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const templates = await prisma.template.findMany({
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

    const formatted = templates.map((tpl) => ({
      id: tpl.lemonId,
      name: tpl.name,
      price: tpl.price ? tpl.price / 100 : 0,
      description: tpl.description,
      lemonLink: tpl.lemonLink,
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
    console.error("Erreur API:", error);
    return NextResponse.json({ error: "Erreur API" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
