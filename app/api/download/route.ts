import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { variantId } = await req.json();

    if (!variantId) {
      return NextResponse.json({ error: "Missing variantId" }, { status: 400 });
    }

    // Vérification que l'utilisateur a bien acheté ce variantId
    const purchase = await prisma.purchase.findFirst({
      where: {
        email: session.user.email,
        variantId: variantId,
      },
    });

    if (!purchase) {
      return NextResponse.json(
        { error: "Unauthorized or no purchase found" },
        { status: 403 }
      );
    }

    // Si l'achat est vérifié, on appelle Lemon API
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/files?filter[variant_id]=${variantId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      }
    );

    const json = await res.json();
    const file = json?.data?.[0];
    const downloadUrl = file?.attributes?.download_url;

    if (!downloadUrl) {
      return NextResponse.json(
        { error: "No file found for this variant." },
        { status: 404 }
      );
    }

    return NextResponse.json({ url: downloadUrl });
  } catch (err) {
    console.error("Download API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
