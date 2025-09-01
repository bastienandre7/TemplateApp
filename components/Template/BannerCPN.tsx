"use client";

import Image from "next/image";
import SearchModal from "../SearchModal";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  demoUrl?: string;
  lemonLink: string;
  type: "template" | "component";
  category: string;
  slug?: string;
  created_at: string;
  openGraphImage?: string;
  categories: string[];
};

export default function HeroBanner({ products }: { products: Product[] }) {
  return (
    <section
      className="relative bg-white pt-24"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="relative pt-4">
        <div className="mx-auto max-w-5xl px-6 lg:pt-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-4xl">
              Best Free & Premium Next.js Templates Under 40€
            </h1>

            <p className="mx-auto max-w-2xl text-gray-700 mb-10 leading-relaxed font-normal">
              Explore 10+ best free and premium Next.js templates built with
              Tailwind CSS, TypeScript, and React. Production-ready, beautifully
              designed, and optimized for SaaS, portfolios, e-commerce, and
              blogs — without the overpriced tag.
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

            {/* Bundle Promotion */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/bundle-og-image.png"
                    alt="Bundle Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Get All Templates Bundle
                  </h2>
                  <p className="text-gray-600 mb-3">
                    Access all 8+ premium templates for one low price
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-2xl font-bold text-green-600">
                      39.99€
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      199.99€
                    </span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                      Save 70%
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/bundle/ultimate"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    Get the Bundle
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <SearchModal products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
