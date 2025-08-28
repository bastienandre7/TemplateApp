"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  categories: string;
  slug?: string;
  created_at: string;
  openGraphImage?: string;
};

type Purchase = {
  template: string;
};

export default function CategoryPage({
  products,
  category,
  searchQuery = "",
  onClearSearch,
}: {
  products: Product[];
  category: string;
  searchQuery?: string;
  onClearSearch?: () => void;
}) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ownedTemplates, setOwnedTemplates] = useState<string[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      fetch("/api/purchases")
        .then((res) => res.json())
        .then((data: Purchase[]) => {
          const owned = data.map((purchase) => purchase.template);
          setOwnedTemplates(owned);
        });
    }
  }, [session]);

  const filteredItems = [...products]
    .filter((p) => {
      const categoryMatch =
        !selectedCategory || p.category === selectedCategory;

      const searchMatch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description &&
          p.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      if (sortOrder === "newest")
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      return 0;
    });

  return (
    <div>
      <section
        className="relative bg-white pt-24"
        itemScope
        itemType="https://schema.org/WebSite"
      >
        <div className="relative pt-4">
          <div className="mx-auto max-w-5xl px-6 lg:pt-20">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-4xl">
                Best Free & Premium{" "}
                <span className="text-indigo-600">{category}</span> Next.js
                Templates
              </h1>

              <p className="mx-auto max-w-2xl text-gray-700 mb-10 leading-relaxed font-normal">
                Explore best free and premium {category} Next.js templates built
                with Tailwind CSS, TypeScript, and React. Production-ready, SEO
                optimised beautifully designed without the overpriced tag.
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
            </div>
          </div>
        </div>
      </section>
      <div
        id="templates"
        className="w-full mx-auto text-black relative bg-white mb-24"
      >
        <div className="relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              {searchQuery && (
                <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg inline-flex items-center gap-3">
                  <p className="text-sm text-purple-700">
                    Searching for:{" "}
                    <span className="font-medium">
                      &quot;{searchQuery}&quot;
                    </span>
                  </p>
                  <button
                    onClick={onClearSearch}
                    className="flex items-center justify-center w-5 h-5 text-purple-500 hover:text-purple-700 hover:bg-purple-100 rounded-full transition-colors duration-200"
                    aria-label="Clear search"
                    title="Clear search"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Layout avec sidebar sur desktop */}
            <div className="lg:flex lg:gap-8">
              {/* Contenu principal */}
              <main className="flex-1 min-w-0">
                {/* Header et filtres mobile */}
                <div className="space-y-4 mb-8">
                  {/* Top row: Results counter */}
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        href="/nextjs-templates"
                        className="font-bold text-indigo-600 hover:text-indigo-700 mt-1"
                      >
                        ← Back to all templates
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500">
                      {filteredItems.length} template
                      {filteredItems.length !== 1 ? "s" : ""}
                    </div>
                  </div>

                  {/* Filtres - Mobile et desktop */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select
                      value={sortOrder}
                      onValueChange={(value) => setSortOrder(value)}
                    >
                      <SelectTrigger
                        className="w-full sm:w-[180px] border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Sort templates"
                      >
                        {sortOrder === "newest" && "Newest first"}
                        {sortOrder === "asc" && "Price: Low to High"}
                        {sortOrder === "desc" && "Price: High to Low"}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest first</SelectItem>
                        <SelectItem value="asc">Price: Low to High</SelectItem>
                        <SelectItem value="desc">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Clear filters button */}
                    {(selectedCategory || searchQuery) && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedCategory(null);
                          if (onClearSearch) {
                            onClearSearch();
                          }
                        }}
                        className="w-full sm:w-auto"
                      >
                        Clear filters
                      </Button>
                    )}
                  </div>
                </div>

                {/* Templates Grid */}
                {filteredItems.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                      <svg
                        className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No templates found
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {searchQuery
                          ? `No templates match "${searchQuery}". Try a different search term.`
                          : "No templates match your current filters."}
                      </p>
                      <Button
                        onClick={() => {
                          setSelectedCategory(null);
                          if (onClearSearch) {
                            onClearSearch();
                          }
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Clear filters
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredItems.map((item) => {
                      const isOwned = ownedTemplates.includes(item.name);

                      return (
                        <div
                          key={item.id}
                          className="group relative flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
                        >
                          <Link
                            href={`/nextjs-templates/${item.slug}`}
                            className="block relative aspect-[1200/630] bg-gray-50 overflow-hidden"
                          >
                            <Image
                              src={
                                item.openGraphImage ||
                                item.imageUrl ||
                                "/images/NoImage.jpg"
                              }
                              alt={`${item.name} main preview`}
                              fill
                              className="object-cover w-full h-full"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                              quality={90}
                            />

                            {/* NEW Badge */}
                            {new Date().getTime() -
                              new Date(item.created_at).getTime() <
                              14 * 24 * 60 * 60 * 1000 && (
                              <span className="absolute top-3 right-3 bg-violet-600 text-white text-xs px-2 py-1 rounded font-medium">
                                NEW
                              </span>
                            )}

                            {/* Owned Badge */}
                            {isOwned && (
                              <span className="absolute bottom-3 right-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                ✓ Owned
                              </span>
                            )}
                          </Link>

                          <div className="flex-1 flex flex-col justify-between p-5">
                            <div>
                              <Link
                                className="text-lg font-semibold mb-2 text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                                href={`/nextjs-templates/${item.slug}`}
                              >
                                {item.name}
                              </Link>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {item.description ||
                                  "A beautifully crafted template ready for your next project."}
                              </p>

                              {/* Tech tags + Category */}
                              <div className="flex flex-wrap gap-1 mb-4">
                                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  Next.js
                                </span>
                                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  Tailwind
                                </span>
                                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  TypeScript
                                </span>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="default"
                                className="flex-1 p-0"
                              >
                                <Link
                                  href={`${item.demoUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full text-center cursor-pointer py-2 font-semibold text-zinc-700"
                                >
                                  Live Demo
                                </Link>
                              </Button>

                              <Button
                                variant="outline"
                                className="flex-1 cursor-pointer"
                                size="default"
                              >
                                <Link
                                  href={`/nextjs-templates/${item.slug}`}
                                  className="w-full text-center py-2 font-semibold text-zinc-700"
                                >
                                  {item.price === 0
                                    ? "Free"
                                    : `Buy Now - ${item.price}€`}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
