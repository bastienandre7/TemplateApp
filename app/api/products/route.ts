import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsRes = await fetch("https://api.lemonsqueezy.com/v1/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
      next: { revalidate: 60 },
    });

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

    const decodeHtml = (html: string): string => {
      return html
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
    };

    const extractDemoUrl = (description?: string): string => {
      if (!description) return "";
      const match = description.match(/href="(https?:\/\/[^"]+)"/i);
      return match?.[1] || "";
    };

    const extractFeatures = (description?: string): string[] => {
      if (!description) return [];

      const decoded = decodeHtml(description);
      const lines = decoded.split(/<br\s*\/?\>|<\/?p>/gi);

      const indexOfFeatures = lines.findIndex((line) =>
        /features/i.test(line)
      );

      if (indexOfFeatures === -1) return [];

      const featureLines = lines.slice(indexOfFeatures + 1);

      return featureLines
        .map((line) => line.replace(/<[^>]+>/g, "").trim())
        .filter((line) => line.length > 0);
    };

    const extractCleanedDescription = (description?: string): string => {
      if (!description) return "";

      const decoded = decodeHtml(description);
      const lines = decoded.split(/<br\s*\/?\>|<\/?p>/gi);

      // Trouver l'index du bloc à exclure ("Live demo" ou "Features")
      const indexToCut = lines.findIndex((line) =>
        /live demo|preview|features/i.test(line)
      );

      const contentLines =
        indexToCut === -1 ? lines : lines.slice(0, indexToCut);

      return contentLines
        .map((line) => line.replace(/<[^>]+>/g, "").trim())
        .filter((line) => line.length > 0)
        .join(" ");
    };

    const formatted = productsJson.data.map((product: Product) => {
      const rawDescription = product.attributes.description || "";
      const decodedDescription = decodeHtml(rawDescription);

      const demoUrl = extractDemoUrl(decodedDescription);
      const features = extractFeatures(rawDescription);
      const cleaned = extractCleanedDescription(rawDescription);
      const firstImage = product.attributes.large_thumb_url || "/images/NoImage.jpg";

      return {
        id: Number(product.id),
        name: product.attributes.name,
        price: product.attributes.price ? product.attributes.price / 100 : 0,
        imageUrl: firstImage,
        description: cleaned, // ✅ Sans live demo ni features
        demoUrl,
        lemonLink: product.attributes.buy_now_url,
        type: "template",
        features,
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Erreur Lemon API:", error);
    return NextResponse.json({ error: "Erreur Lemon API" }, { status: 500 });
  }
}
