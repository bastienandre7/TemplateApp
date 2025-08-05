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
    <div className=" w-full z-[60]">
      <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-1 shadow-lg font-semibold text-base">
        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mr-2">
          -50% CODE
        </span>
        <div className="flex items-center">
          <p>BLOOM50</p>
          <span className="mx-1"></span>
          <b className="hidden md:block"> for the first 10 users</b>
          <span className="mx-2 text-purple-200">|</span>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-white px-2 rounded font-mono tracking-wider cursor-pointer border border-purple-300 hover:bg-purple-50 transition font-bold text-purple-700"
            title="Copy code"
          >
            Copy
          </button>
          {copied && (
            <span className="ml-2 text-xs text-white font-normal">Copied!</span>
          )}
        </div>
      </div>
    </div>
  );
}
