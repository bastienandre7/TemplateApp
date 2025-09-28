"use client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { X } from "lucide-react";
import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full z-[60]">
      <div className="flex items-center justify-center gap-3 bg-purple-50 text-purple-900 px-6 py-2 text-xs md:text-base relative border-b border-purple-200">
        <p>
          Get 50% off your purchase! Enter code &quot;BLOOM50&quot; at checkout.
        </p>
        <Separator className="mx-2 h-4 bg-purple-200 w-[1px] hidden md:block" />
        <button
          onClick={() => setVisible(false)}
          className="text-black hover:text-purple-300 text-lg px-2 py-1 rounded transition"
          aria-label="Close promo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
