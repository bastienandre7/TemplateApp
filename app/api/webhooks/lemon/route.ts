import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const rawBody = await req.text(); // important: raw body, pas .json()
  const signature = req.headers.get("x-signature");

  if (!signature || !process.env.LEMON_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 401 });
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.LEMON_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.error("Invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // Reparse body now that we’ve verified the signature
  const body = JSON.parse(rawBody);

  const email = body?.data?.attributes?.user_email;
  const orderItems = body?.data?.attributes?.order_items;

  if (!email || !orderItems || !Array.isArray(orderItems)) {
    console.error("Invalid payload:", body);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

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
}
