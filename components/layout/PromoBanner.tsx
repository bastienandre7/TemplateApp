"use client";

import { AlarmClock, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Date de fin du Black Friday
const targetDate = new Date("2025-11-29T00:00:00Z");

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
      <div className="flex items-center justify-center gap-3 bg-chart-5 text-primary-foreground px-4 py-2 text-sm md:text-base relative shadow-lg font-semibold">
        <Zap className="w-5 h-5 text-yellow-400 mr-2" />
        <span className="uppercase tracking-wider font-bold mr-2">
          Black Friday
        </span>
        <span>
          <span className="font-semibold">50% OFF</span> on every template{" "}
          <span className="font-bold text-primary bg-white px-2 py-1 rounded-2xl shadow-sm ml-2">
            BFBLOOM50
          </span>
        </span>
        <span className="ml-3 text-sm font-medium flex items-center">
          <AlarmClock className="w-5 h-5 mr-2" />{" "}
          <span className="ml-1">{timeLeft} left</span>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-white transition"
          aria-label="Close promo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
