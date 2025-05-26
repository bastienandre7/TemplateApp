"use client";
import { useEffect, useState } from "react";

export default function PromoBanner() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const now = new Date();
    const end = new Date("2025-06-08T00:00:00+02:00");
    if (now < end) setShow(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("LAUNCH50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="w-full bg-black text-white text-center py-2 px-4 text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-2">
      <span>
        🎉 Launch offer: <span className="text-yellow-400 font-semibold">50% OFF</span> all templates until{" "}
        <strong>June 8</strong> with code
      </span>

      <button
        onClick={handleCopy}
        className="ml-1 bg-white text-black px-2 py-1 rounded font-bold hover:bg-neutral-200 transition text-sm"
      >
        {copied ? "Copied!" : "LAUNCH50"}
      </button>
    </div>
  );
}
