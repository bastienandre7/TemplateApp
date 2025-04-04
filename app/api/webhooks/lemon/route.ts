import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const email = body?.data?.attributes?.user_email;
    const orderItems = body?.data?.attributes?.order_items;

    if (!email || !orderItems || !Array.isArray(orderItems)) {
      console.error("Invalid payload:", body);
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Pour chaque item acheté, enregistrer l’achat
    for (const item of orderItems) {
      const template = item.product_name;
      const variantId = item.variant_id;

      if (!template || !variantId) continue;

      await prisma.purchase.create({
        data: {
          email,
          template,
          variantId,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur dans le webhook:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
