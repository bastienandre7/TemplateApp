import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { variantId } = await req.json();

    if (!variantId) {
      return NextResponse.json({ error: "Missing variantId" }, { status: 400 });
    }

    const response = await fetch("https://api.lemonsqueezy.com/v1/downloads", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      body: JSON.stringify({
        data: {
          type: "downloads",
          attributes: {
            variant_id: variantId,
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Lemon API error:", error);
      return NextResponse.json(
        { error: "Failed to create download URL" },
        { status: 500 }
      );
    }

    const json = await response.json();
    const downloadUrl = json?.data?.attributes?.url;

    return NextResponse.json({ url: downloadUrl });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
