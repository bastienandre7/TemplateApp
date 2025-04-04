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
  const body = await req.json();
  const email = body?.data?.attributes?.user_email;
  const items = body?.data?.attributes?.order_items;

  if (!email || !items || !Array.isArray(items)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  for (const item of items) {
    await prisma.purchase.create({
      data: {
        email,
        template: item.product_name,
        variantId: item.variant_id,
      },
    });
  }

  return NextResponse.json({ success: true });
}
