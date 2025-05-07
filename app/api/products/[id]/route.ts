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

    const decodeHtml = (html: string): string =>
      html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

    const extractDemoUrl = (description?: string): string => {
      if (!description) return "";
      const match = description.match(/href="(https?:\/\/[^"]+)"/i);
      return match?.[1] || "";
    };

    const extractFeatures = (description?: string): string[] => {
      if (!description) return [];
      const decoded = decodeHtml(description);
      const lines = decoded.split(/<br\s*\/?\>|<\/?p>/gi);
      const index = lines.findIndex((line) => /features/i.test(line));
      const features = index === -1 ? [] : lines.slice(index + 1);
      return features
        .map((l) => l.replace(/<[^>]+>/g, "").trim())
        .filter(Boolean);
    };

    const cleanDescription = (description?: string): string => {
      if (!description) return "";
      const decoded = decodeHtml(description);
      const lines = decoded.split(/<br\s*\/?\>|<\/?p>/gi);
      const index = lines.findIndex((line) =>
        /features|live demo|preview/i.test(line)
      );
      return (index === -1 ? lines : lines.slice(0, index))
        .map((line) => line.replace(/<[^>]+>/g, "").trim())
        .filter(Boolean)
        .join(" ");
    };

    const formatted = {
      id: Number(product.id),
      name: product.attributes.name,
      price: product.attributes.price ? product.attributes.price / 100 : 0,
      imageUrl: product.attributes.large_thumb_url,
      description: cleanDescription(product.attributes.description),
      demoUrl: extractDemoUrl(product.attributes.description),
      lemonLink: product.attributes.buy_now_url,
      features: extractFeatures(product.attributes.description),
      slug: product.attributes.name.toLowerCase().replace(/\s+/g, "-"),
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
