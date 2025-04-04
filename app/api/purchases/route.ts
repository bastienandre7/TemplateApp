// app/api/purchase/route.ts
import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const body = await req.json();
  const { template, variantId } = body;

  const status = body?.data?.attributes?.status;
  if (status !== "paid") return NextResponse.json({ ok: true });

  if (!template || !variantId) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const newPurchase = await prisma.purchase.create({
    data: {
      email: session.user.email,
      template,
      variantId,
    },
  });

  return NextResponse.json(newPurchase);
}
