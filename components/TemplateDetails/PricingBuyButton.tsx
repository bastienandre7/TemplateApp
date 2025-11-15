"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface PricingBuyButtonProps {
  link: string;
  label: string;
  buttonClass?: string;
  isOwned?: boolean;
}

export default function PricingBuyButton({
  link,
  label,
  buttonClass,
  isOwned = false,
}: PricingBuyButtonProps) {
  const { status, data } = useSession();

  const email = data?.user?.email;
  const linkWithEmail =
    email && link.includes("lemonsqueezy.com")
      ? `${link}${link.includes("?") ? "&" : "?"}checkout[email]=${encodeURIComponent(
          email
        )}`
      : link;

  if (status === "loading") {
    return (
      <Button
        disabled
        className={`w-full py-6 my-4 font-semibold text-lg cursor-pointer bg-chart-2 ${buttonClass ?? ""}`}
      >
        Loading...
      </Button>
    );
  }

  // Si possédé et authentifié, dashboard
  if (status === "authenticated" && isOwned) {
    return (
      <Button
        variant="default"
        className={`w-full py-6 my-4 font-semibold text-lg cursor-pointer bg-chart-2 ${buttonClass ?? ""}`}
        asChild
      >
        <Link href="/dashboard">{label}</Link>
      </Button>
    );
  }

  // Si non authentifié, sign in
  if (status === "unauthenticated") {
    return (
      <Button
        variant="default"
        className={`w-full py-6 my-4 font-semibold text-lg cursor-pointer bg-chart-2 ${buttonClass ?? ""}`}
        onClick={() => signIn()}
      >
        {label}
      </Button>
    );
  }

  // Sinon, lien LemonSqueezy (avec email si possible)
  return (
    <Button
      variant="default"
      className={`w-full py-6 my-4 font-semibold text-lg cursor-pointer bg-chart-2 ${buttonClass ?? ""}`}
      asChild
    >
      <Link href={linkWithEmail} target="_blank">
        {label}
      </Link>
    </Button>
  );
}
