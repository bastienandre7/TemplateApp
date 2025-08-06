"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { signIn, useSession } from "next-auth/react";
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
  slug?: string;
  created_at: string;
  openGraphImage?: string;
};

type Purchase = {
  template: string;
};

export default function MainContainer({
  products,
  searchQuery = "",
  onClearSearch,
}: {
  products: Product[];
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

  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  const filteredItems = [...products]
    .filter((p) => {
      // Filtre par catégorie
      const categoryMatch =
        !selectedCategory || p.category === selectedCategory;

      // Filtre par recherche (nom ou catégorie)
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
    <div
      id="templates"
      className="w-full mx-auto text-black relative bg-white mb-24"
    >
      <div className="relative z-10 px-4 ">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Notion style */}
          <div className="text-center mb-12">
            {searchQuery && (
              <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg inline-flex items-center gap-3">
                <p className="text-sm text-purple-700">
                  Searching for:{" "}
                  <span className="font-medium">&quot;{searchQuery}&quot;</span>
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

          {/* Filters - Responsive layout */}
          <div className="space-y-4 mb-8">
            {/* Top row: Results counter */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Templates</h3>
              <div className="text-sm text-gray-500">
                {filteredItems.length} templates
              </div>
            </div>

            {/* Bottom row: Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Select
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              >
                <SelectTrigger
                  className="w-full sm:w-[180px] border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Sort templates"
                >
                  Newest first
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest first</SelectItem>
                  <SelectItem value="asc">Price: Low to High</SelectItem>
                  <SelectItem value="desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              {categories.length > 0 && (
                <Select
                  value={selectedCategory ?? "all"}
                  onValueChange={(value) =>
                    setSelectedCategory(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger
                    className="w-full sm:w-[180px] border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
                    aria-label="Filter templates by category"
                  >
                    {selectedCategory || "All categories"}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          {/* Templates Grid - Notion style */}
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {filteredItems.map((item) => {
                const isOwned = ownedTemplates.includes(item.name);
                console.log(`Checking ownership for ${item.name}: ${isOwned}`);

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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
                        <Link href={`/nextjs-templates/${item.slug}`}>
                          <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-violet-600 transition-colors duration-200">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description ||
                            "A beautifully crafted template ready for your next project."}
                        </p>

                        {/* Simple tech tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Next.js
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Tailwind
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            TypeScript
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons - Notion style */}
                      <div className="flex gap-2 ">
                        <Button variant="outline">
                          <Link
                            href={`${item.demoUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Link>
                        </Button>

                        {isOwned ? (
                          <Button asChild variant="outline">
                            <Link href="/dashboard">Owned</Link>
                          </Button>
                        ) : (
                          <Button
                            variant="default"
                            onClick={() => {
                              if (!session) {
                                signIn();
                              } else if (session.user?.email) {
                                const email = encodeURIComponent(
                                  session.user.email
                                );
                                const url = `${item.lemonLink}?checkout[email]=${email}`;
                                window.location.href = url;
                              }
                            }}
                          >
                            {item.price === 0
                              ? "Download Free"
                              : `Buy Now - ${item.price}€`}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
