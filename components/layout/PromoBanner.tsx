"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

// ✅ Déplacé ici, en dehors du composant
const targetDate = new Date("2025-11-20T00:00:00Z");

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!visible || timeLeft === "Expired") return null;

  return (
    <div className="w-full z-[60]">
      <div className="flex items-center justify-center gap-3 bg-purple-100/80 text-purple-900 px-4 py-2 text-sm md:text-base relative border-b border-purple-200">
        <p className="font-medium text-center">
          🎉 Enjoy <span className="font-semibold">20% off</span> your purchase
          with code{" "}
          <span className="font-semibold text-purple-700 bg-white/60 px-1 py-0.5 rounded-3xl px-2">
            BLOOM20
          </span>{" "}
          <span className="ml-2 text-purple-800 font-semibold">
            ⏰ {timeLeft} left
          </span>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800 transition"
          aria-label="Close promo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
