import { templateData } from "@/lib/products"; // Import de tes données locales
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    interface Product {
      id: string;
      attributes: {
        name: string;
        description?: string;
        price?: number;
        large_thumb_url?: string;
        buy_now_url: string;
        slug: string;
      };
    }

    const formatted = productsJson.data.map((product: Product) => {
      const localData = templateData.find(
        (tpl) => tpl.id === Number(product.id)
      );

      return {
        id: Number(product.id),
        name: product.attributes.name,
        price: product.attributes.price ? product.attributes.price / 100 : 0,
        imageUrl: product.attributes.large_thumb_url || "/images/NoImage.jpg",
        description: localData?.description || "",
        lemonLink: product.attributes.buy_now_url,
        slug: localData?.slug,
        type: "template",
        features: localData?.features || [],
        demoUrl: localData?.demoUrl || "",
        tech: localData?.tech || [],
        category: localData?.category || "Uncategorized",
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur Lemon API:", error);
    return NextResponse.json({ error: "Erreur Lemon API" }, { status: 500 });
  }
}
