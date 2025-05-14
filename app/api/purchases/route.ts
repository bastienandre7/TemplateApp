import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const purchases = await prisma.purchase.findMany({
    where: { email: session.user.email },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(purchases);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const email = body?.data?.attributes?.user_email;
  const item = body?.data?.attributes?.first_order_item;

  if (!email || !item) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (email !== session.user.email) {
    return NextResponse.json({ error: "Invalid user email" }, { status: 403 });
  }

  await prisma.purchase.create({
    data: {
      email,
      template: item.product_name,
      variantId: item.variant_id,
    },
  });

  return NextResponse.json({ success: true });
}
