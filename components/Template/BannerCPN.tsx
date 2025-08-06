"use client";

import { useState } from "react";

export default function HeroBanner({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    const element = document.getElementById("templates");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-white pt-24 background-style"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="relative pt-4">
        <div className="mx-auto max-w-5xl px-6 lg:pt-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Premium Next.js Templates at Affordable Prices (Under 40€)
            </h1>

            <p className="mx-auto max-w-2xl text-gray-700 mb-10 leading-relaxed font-normal">
              Explore 10+ handcrafted Next.js templates built with Tailwind CSS,
              TypeScript, and React. Production-ready, beautifully designed, and
              optimized for SaaS, portfolios, e-commerce, and blogs — without
              the overpriced tag.
            </p>

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
                    className="bg-violet-600 hover:bg-violet-700 text-white px-3 sm:px-6 py-3 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
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
