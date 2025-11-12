"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface DynamicBuyButtonProps {
  template: {
    name: string;
    price: number;
    lemonLink: string;
  };
  purchases: { template: string }[];
  variant?: "light" | "dark";
}

export default function DynamicBuyButton({
  template,
  purchases,
}: DynamicBuyButtonProps) {
  const { status, data } = useSession();
  const isOwned = purchases.some((p) => p.template === template.name);

  // Fonction pour scroll vers la section Pricing
  const scrollToPricing = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Si loading, bouton désactivé
  if (status === "loading") {
    return (
      <Button disabled className="w-full px-8 py-4 text-lg h-[50px] opacity-60">
        Loading...
      </Button>
    );
  }

  // Si template possédé ou gratuit
  if (isOwned || template.price === 0) {
    if (status === "unauthenticated") {
      return (
        <Button
          className="w-full px-8 py-4 text-lg h-[50px] bg-primary text-white"
          onClick={() => signIn()}
        >
          Sign in to access
        </Button>
      );
    }

    const email = data?.user?.email;
    const lemonLinkWithEmail =
      email && template.lemonLink.includes("lemonsqueezy.com")
        ? `${template.lemonLink}${template.lemonLink.includes("?") ? "&" : "?"}checkout[email]=${encodeURIComponent(email)}`
        : template.lemonLink;

    return (
      <Link
        href={isOwned ? "/dashboard" : lemonLinkWithEmail}
        className="w-full"
        target={isOwned ? undefined : "_blank"}
      >
        <Button className="w-full px-8 py-4 text-lg bg-primary text-white h-[50px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          {isOwned ? "Download Template" : "Get FREE"}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      type="button"
      variant="default"
      onClick={scrollToPricing}
      className="w-full px-8 py-4 text-lg h-[50px] cursor-pointer"
    >
      See Pricing
    </Button>
  );
}
