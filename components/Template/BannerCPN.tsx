"use client";

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
      className="relative pt-24"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="relative pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:pt-20">
          <div className="text-center">
            <h1 className="text-foreground leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter mb-6">
              Launch Faster with Free & Premium Next.js Templates
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

            <SearchModal products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
