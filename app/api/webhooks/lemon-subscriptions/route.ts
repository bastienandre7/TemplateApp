import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  if (!signature || !process.env.LEMON_WEBHOOK_SUB_SECRET) {
    return NextResponse.json(
      { error: "Missing signature or secret" },
      { status: 401 }
    );
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.LEMON_WEBHOOK_SUB_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.error("Invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);
  const eventName = body.meta?.event_name;
  const customerEmail = body.data?.attributes?.user_email;
  const subscriptionId = body.data?.id;

  if (!customerEmail || !subscriptionId) {
    console.error("Missing email or subscription ID:", body);
    return NextResponse.json(
      { error: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    switch (eventName) {
      case "subscription_created":
        await prisma.subscription.upsert({
          where: { userEmail: customerEmail },
          update: {
            plan: "PRO",
            status: "ACTIVE",
            lemonSqueezyId: subscriptionId,
          },
          create: {
            userEmail: customerEmail,
            plan: "PRO",
            status: "ACTIVE",
            lemonSqueezyId: subscriptionId,
          },
        });
        break;

      case "subscription_updated":
        const status = body.data?.attributes?.status;
        let subscriptionStatus: "ACTIVE" | "CANCELLED" | "EXPIRED" = "ACTIVE";

        if (status === "cancelled") {
          subscriptionStatus = "CANCELLED";
        } else if (status === "expired") {
          subscriptionStatus = "EXPIRED";
        }

        await prisma.subscription.update({
          where: { userEmail: customerEmail },
          data: {
            status: subscriptionStatus,
            plan: subscriptionStatus === "ACTIVE" ? "PRO" : "FREE",
          },
        });
        break;

      case "subscription_cancelled":
        await prisma.subscription.update({
          where: { userEmail: customerEmail },
          data: {
            plan: "FREE",
            status: "CANCELLED",
          },
        });
        break;

      case "subscription_expired":
        await prisma.subscription.update({
          where: { userEmail: customerEmail },
          data: {
            plan: "FREE",
            status: "EXPIRED",
          },
        });
        break;

      case "subscription_payment_success":
        await prisma.subscription.update({
          where: { userEmail: customerEmail },
          data: {
            plan: "PRO",
            status: "ACTIVE",
          },
        });
        break;

      case "subscription_payment_failed":
        break;

      default:
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
