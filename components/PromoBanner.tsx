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
    navigator.clipboard.writeText("BLOOM50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="mx-auto max-w-xl mb-8">
      <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-4 rounded-xl shadow-lg font-semibold text-base border border-purple-300">
        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mr-2">
          -50% CODE
        </span>
        <span>
          <b className="text-lg text-white">BLOOM50</b> for the first{" "}
          <b>10 users</b>
          <span className="mx-2 text-purple-200">|</span>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-white px-2 py-1 rounded font-mono tracking-wider cursor-pointer border border-purple-300 hover:bg-purple-50 transition font-bold text-purple-700"
            title="Copy code"
          >
            Copy
          </button>
          {copied && (
            <span className="ml-2 text-xs text-white font-normal">Copied!</span>
          )}
        </span>
      </div>
    </div>
  );
}
