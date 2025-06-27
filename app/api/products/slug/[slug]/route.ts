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

  // 1. Récupère le template depuis la base
  const tpl = await prisma.template.findUnique({ where: { slug } });

  if (!tpl) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    // 2. Récupère les infos LemonSqueezy
    const response = await fetch(`https://api.lemonsqueezy.com/v1/products`, {
      headers: {
        Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
      next: { revalidate: 60 },
    });

    const json = await response.json();
    const products: LemonProduct[] = json.data;

    // 3. Trouve le produit LemonSqueezy correspondant à lemonId
    const product = products.find((p) => Number(p.id) === tpl.lemonId);

    if (!product) {
      throw new Error("Produit Lemon non trouvé");
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
      images: tpl.images || [],
      tech: tpl.tech || [],
      category: tpl.category || "Uncategorized",
      openGraphImage: tpl.openGraphImage || "/images/og-template.png",
      updated_at: product.attributes.created_at,
      pages: tpl.pages || [],
      extras: tpl.extras || [],
    };

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur API Lemon:", error);
    return NextResponse.json(
      { error: "Erreur produit introuvable" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
