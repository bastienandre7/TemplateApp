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
      };
    }

    const extractDemoUrl = (description?: string): string => {
      if (!description) return "";
      const match = description.match(/href=\"(https?:\/\/[^\"]+)\"/i);
      return match?.[1] || "";
    };

    const formatted = productsJson.data.map((product: Product) => {
      const rawDescription = product.attributes.description || "";

      const type = rawDescription.includes("component")
        ? "component"
        : "template";

      const demoUrl = extractDemoUrl(rawDescription);
      const lines = rawDescription.split(/<br\s*\/?\>|<\/?p>/gi);
      const keptLines = lines.filter((line) => !/demo|preview/i.test(line));
      const cleaned = keptLines
        .join(" ")
        .replace(/<[^>]+>/g, "")
        .trim();

      const firstImage =
        product.attributes.large_thumb_url || "/images/NoImage.jpg";

      return {
        id: Number(product.id),
        name: product.attributes.name,
        price: product.attributes.price ? product.attributes.price / 100 : 0,
        imageUrl: firstImage,
        description: cleaned,
        demoUrl,
        lemonLink: product.attributes.buy_now_url,
        type,
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur Lemon API:", error);
    return NextResponse.json({ error: "Erreur Lemon API" }, { status: 500 });
  }
}
