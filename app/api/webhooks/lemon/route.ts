import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  if (!signature || !process.env.LEMON_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing signature or secret" },
      { status: 401 }
    );
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.LEMON_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.error("Invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);

  const email = body?.data?.attributes?.user_email;
  const item = body?.data?.attributes?.first_order_item;

  if (!email || !item) {
    console.error("Invalid payload:", body);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const template = item.product_name;
  const variantId = item.product_id;

  if (!template || !variantId) {
    return NextResponse.json(
      { error: "Missing template or variantId" },
      { status: 400 }
    );
  }

  // Vérifie si déjà enregistré
  const already = await prisma.purchase.findFirst({
    where: { email, template, variantId },
  });
  if (already) {
    return NextResponse.json({ success: true });
  }

  await prisma.purchase.create({
    data: {
      email,
      template,
      variantId,
    },
  });

  return NextResponse.json({ success: true });
}
