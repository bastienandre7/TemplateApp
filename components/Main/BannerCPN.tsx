"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderCPN from "../Header/HeaderCPN";

export default function HeroBanner({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Appeler la fonction onSearch si elle est fournie
    if (onSearch) {
      onSearch(searchQuery);
    }
    // Scroll vers les templates avec le terme de recherche
    const element = document.getElementById("templates");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-white border-b border-gray-100 pt-20"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
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
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
          <div className="text-center">
            {/* Main Headline - SEO optimized */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
              BloomTPL -{" "}
              <span className="text-purple-600">Best Next.js Templates</span>
            </h1>

            {/* Subtitle - SEO enhanced */}
            <h2 className="mx-auto max-w-xl text-xl text-gray-600 mb-12 leading-relaxed font-normal">
              The best Next.js templates and starter kits for modern developers.
              <br />
              <span className="text-gray-500">
                Launch faster with production-ready boilerplates, TypeScript and
                Tailwind CSS.
              </span>
            </h2>

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

            {/* Minimal Search Bar - Notion style - Mobile responsive */}
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

            {/* Simple CTA Button - Notion style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#templates"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200"
                aria-label="Browse all templates and starter kits"
              >
                Explore Templates
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-3 font-medium text-base transition-colors duration-200"
              >
                Get Custom Template
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
