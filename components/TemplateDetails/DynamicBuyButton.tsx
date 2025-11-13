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
  const { status } = useSession();
  const isOwned = purchases.some((p) => p.template === template.name);
  const isFree = template.price === 0;

  // Scroll vers la section Pricing
  const scrollToPricing = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Loading
  if (status === "loading") {
    return (
      <Button disabled className="w-full px-8 py-4 text-lg h-[50px] opacity-60">
        Loading...
      </Button>
    );
  }

  // Si payant : scroll vers pricing
  if (!isFree) {
    return (
      <Button
        onClick={scrollToPricing}
        className="w-full sm:w-auto px-8 py-4 text-lg h-[50px] cursor-pointer 
          font-medium text-white bg-gradient-to-r from-primary to-primary/80 
          hover:opacity-90 transition shadow-sm hover:shadow-md border border-white/20"
      >
        Get the Template
      </Button>
    );
  }

  // Gratuit
  if (isFree) {
    // Authentifié et possède déjà
    if (status === "authenticated" && isOwned) {
      return (
        <Link href="/dashboard" className="w-full">
          <Button className="w-full px-8 py-4 text-lg bg-primary text-white h-[50px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-white/20">
            <Download className="w-5 h-5" />
            Download
          </Button>
        </Link>
      );
    }
    // Authentifié et ne possède pas
    if (status === "authenticated" && !isOwned) {
      return (
        <Link href={template.lemonLink} className="w-full" target="_blank">
          <Button className="w-full px-8 py-4 text-lg bg-primary text-white h-[50px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-white/20">
            <Download className="w-5 h-5" />
            Get the Template
          </Button>
        </Link>
      );
    }
    // Non authentifié
    if (status === "unauthenticated") {
      return (
        <Button
          className="w-full px-8 py-4 text-lg h-[50px] bg-primary text-white border border-white/20"
          onClick={() => signIn()}
        >
          Get the Template
        </Button>
      );
    }
  }

  // Fallback
  return (
    <Button
      className="w-full px-8 py-4 text-lg h-[50px] bg-primary text-white border border-white/20"
      disabled
    >
      Get the Template
    </Button>
  );
}
