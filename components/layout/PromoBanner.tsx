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
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 bg-chart-5 text-primary-foreground px-2 md:px-4 py-2 text-xs md:text-base relative shadow-lg font-semibold">
        <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1 md:mr-2" />
        <span className="uppercase tracking-wider font-bold mr-1 md:mr-2">
          Black Friday
        </span>
        <span className="flex items-center gap-1">
          <span className="font-semibold">50% OFF</span>
          <span className="hidden md:inline">on every purchase</span>
          <span className="font-bold text-primary bg-white px-2 py-1 rounded-2xl shadow-sm ml-1">
            BFBLOOM50
          </span>
        </span>
        <span className="ml-0 md:ml-3 text-xs md:text-sm font-medium flex items-center">
          <AlarmClock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
          <span>{timeLeft} left</span>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-white transition"
          aria-label="Close promo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
