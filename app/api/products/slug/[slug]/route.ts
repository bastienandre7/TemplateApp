import { templateData } from "@/lib/products";
import { NextResponse } from "next/server";

interface LemonProduct {
  id: string;
  attributes: {
    name: string;
    description?: string;
    price?: number;
    large_thumb_url?: string;
    buy_now_url: string;
    updated_at: string;
  };
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const localData = templateData.find((tpl) => tpl.slug === slug);

  if (!localData) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    const response = await fetch(`https://api.lemonsqueezy.com/v1/products`, {
      headers: {
        Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
      next: { revalidate: 60 },
    });

    const json = await response.json();
    const products: LemonProduct[] = json.data;
    const product = products.find(
      (p) => p.attributes.name.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!product) {
      throw new Error("Produit Lemon non trouvé");
    }

    const formatted = {
      id: Number(product.id),
      name: product.attributes.name,
      price: product.attributes.price ? product.attributes.price / 100 : 0,
      imageUrl: product.attributes.large_thumb_url,
      description:
        localData.description || product.attributes.description || "",
      lemonLink: product.attributes.buy_now_url,
      slug: localData.slug,
      demoUrl: localData.demoUrl || "",
      features: localData.features || [],
      frameworks: localData.tech ? [localData.tech] : [],
      images: localData.images || [],
      tech: localData.tech || [],
      category: localData.category || "Uncategorized",
      openGraphImage: localData.openGraphImage || "/images/og-template.png",
      updated_at: product.attributes.updated_at,
    };

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur API Lemon:", error);
    return NextResponse.json(
      { error: "Erreur produit introuvable" },
      { status: 500 }
    );
  }
}
