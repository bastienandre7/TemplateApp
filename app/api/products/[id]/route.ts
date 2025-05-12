import { templateData } from "@/lib/products";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await context.params;
  const id = resolvedParams.id;

  if (!id) {
    return NextResponse.json({ error: "ID manquant" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
        next: { revalidate: 60 },
      }
    );

    const json = await response.json();
    const product = json.data;

    if (!product) {
      throw new Error("Produit non trouvé");
    }

    const localData = templateData.find((tpl) => tpl.id === Number(id));

    const formatted = {
      id: Number(product.id),
      name: product.attributes.name,
      price: product.attributes.price ? product.attributes.price / 100 : 0,
      imageUrl: product.attributes.large_thumb_url,
      description:
        localData?.description || product.attributes.description || "",
      lemonLink: product.attributes.buy_now_url,
      slug: product.attributes.name.toLowerCase().replace(/\s+/g, "-"),
      demoUrl: localData?.demoUrl || "",
      features: localData?.features || [],
      frameworks: localData?.tech ? [localData.tech] : [],
      images: localData?.images || [],
      tech: localData?.tech || "",
    };

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur Lemon API:", error);
    return NextResponse.json(
      { error: "Erreur produit introuvable" },
      { status: 500 }
    );
  }
}
