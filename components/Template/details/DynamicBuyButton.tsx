"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
  variant = "light",
}: DynamicBuyButtonProps) {
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

  if (isOwned || template.price === 0) {
    return (
      <Link
        href={isOwned ? "/dashboard" : template.lemonLink}
        className="w-full"
      >
        <Button className="w-full px-8 py-4 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white min-h-[56px] shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          {isOwned ? "Download Template" : "Get FREE"}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      type="button"
      onClick={scrollToPricing}
      className={`w-full px-8 py-4 text-lg min-h-[56px] shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer ${
        variant === "dark"
          ? "bg-white text-slate-900 hover:bg-gray-100"
          : "bg-chart-2 hover:bg-foreground text-white"
      }`}
    >
      See Pricing Options
    </Button>
  );
}
