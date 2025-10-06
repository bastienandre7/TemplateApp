import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
      price: true,
      lemonLink: true,
    },
  });

  if (!tpl) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  const formatted = {
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
    tech: tpl.tech || [],
    category: tpl.category || "Uncategorized",
    openGraphImage: tpl.openGraphImage || "/images/og-template.png",
    updated_at: tpl.updatedAt.toISOString(),
    pages: tpl.pages || [],
    extras: tpl.extras || [],
    performanceImage: tpl.performanceImage || null,
  };

  await prisma.$disconnect();
  return NextResponse.json(formatted);
}
