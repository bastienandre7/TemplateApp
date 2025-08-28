"use client";
import { useState } from "react";

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BLOOM50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full z-[60]">
      <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-2 font-semibold text-base">
        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mr-2 hidden md:block">
          🎉 Limited Offer
        </span>
        <div className="flex items-center flex-wrap gap-2">
          <p>
            <b className="text-purple-300">Get 50% OFF</b> – Use code{" "}
            <span className="font-mono tracking-wide bg-white text-purple-700 px-2 rounded">
              BLOOM50
            </span>
          </p>
          <b className="hidden md:block text-sm">Only for the first 10 users</b>
          <span className="mx-2 text-purple-200 hidden md:block">|</span>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-white px-2 rounded font-mono tracking-wider cursor-pointer border border-purple-300 hover:bg-purple-50 transition font-bold text-purple-700"
            title="Copy discount code"
          >
            Copy
          </button>
          {copied && (
            <span className="ml-2 text-xs text-white font-normal">
              ✅ Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
