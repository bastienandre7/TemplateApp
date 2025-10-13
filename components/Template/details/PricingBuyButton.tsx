"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface PricingBuyButtonProps {
  link: string;
  label: string;
}

export default function PricingBuyButton({
  link,
  label,
}: PricingBuyButtonProps) {
  const { status, data } = useSession();

  // Ajoute l'email à l'URL si disponible
  const email = data?.user?.email;
  const linkWithEmail =
    email && link.includes("lemonsqueezy.com")
      ? `${link}${link.includes("?") ? "&" : "?"}checkout[email]=${encodeURIComponent(email)}`
      : link;

  const handleClick = () => {
    if (status === "unauthenticated") {
      signIn();
    }
  };

  return (
    <Button
      variant="default"
      className="w-full py-6 my-2 text-lg"
      asChild={status === "authenticated"}
      onClick={handleClick}
      disabled={status === "loading"}
    >
      {status === "authenticated" ? (
        <Link href={linkWithEmail} target="_blank">
          {label}
        </Link>
      ) : (
        <span>{status === "loading" ? "Loading..." : label}</span>
      )}
    </Button>
  );
}
