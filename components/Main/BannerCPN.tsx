"use client";

import { useState } from "react";
import HeaderCPN from "../Header/HeaderCPN";

export default function HeroBanner({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    const element = document.getElementById("templates");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("BLOOM50");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      className="relative bg-white border-b border-gray-100 pt-24"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative pt-4">
        <HeaderCPN />

        <div className="mx-auto max-w-4xl px-6 py-10 sm:py-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
              8+ Best Free and Premium Next.js Templates (2025)
            </h1>

            <h2 className="mx-auto max-w-2xl text-gray-700 mb-10 leading-relaxed font-normal">
              Explore 8+ free and premium Next.js templates, starter kits and
              themes built with Tailwind CSS and React — ideal for SaaS,
              e-commerce, portfolios and landing pages.
            </h2>

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
                    <span className="ml-2 text-xs text-white font-normal">
                      Copied!
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Quick features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited Project Usage
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Lifetime Updates
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Production Ready
              </div>
            </div>

            {/* Search Bar */}
            <div className="mx-auto max-w-lg mb-16 px-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors duration-200">
                  <div className="pl-3 sm:pl-4">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-2 sm:px-4 py-3 bg-transparent border-0 outline-none placeholder-gray-400 text-gray-900 text-sm sm:text-base min-w-0"
                    aria-label="Search templates and starter kits"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-6 py-3 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Search</span>
                    <svg
                      className="w-4 h-4 sm:hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
