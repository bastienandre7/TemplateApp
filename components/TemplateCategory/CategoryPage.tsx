"use client";

import TemplateCard from "@/components/Template/TemplateCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  discount?: number;
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
  seo,
  searchQuery = "",
  onClearSearch,
}: {
  products: Product[];
  category: string;
  seo?: { h1: string; h2: string; paragraph: string };
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
    <div className="bg-background">
      <section
        className="relative pt-24"
        itemScope
        itemType="https://schema.org/WebSite"
      >
        <div className="relative pt-4">
          <div className="mx-auto max-w-5xl px-6 pt-20">
            <div className="text-left md:text-center">
              <h1 className="text-foreground mb-4 text-4xl font-semibold leading-tight tracking-tight text-balance lg:text-5xl lg:leading-[1.1]">
                {seo?.h1 || `Best Free & Premium ${category} Next.js Templates`}
              </h1>
              {seo?.h2 && (
                <h2 className="text-foreground/90 mb-6 text-xl font-medium tracking-tight text-balance lg:text-2xl">
                  {seo.h2}
                </h2>
              )}
              <p className="mx-auto max-w-3xl text-muted-foreground mb-10 leading-relaxed font-normal">
                {seo?.paragraph ||
                  `Explore best free and premium ${category} Next.js templates built with Tailwind CSS, TypeScript, and React. Production-ready, SEO optimised beautifully designed without the overpriced tag.`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        id="templates"
        className="w-full mx-auto text-black relative pb-24 max-w-7xl"
      >
        <div className="relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
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

            <div className="lg:flex lg:gap-8">
              <main className="flex-1 min-w-0">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/nextjs-templates">
                            Templates
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href={`/nextjs-templates/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                            aria-current="page"
                          >
                            {category}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
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
                        <TemplateCard
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          slug={item.slug ?? ""}
                          description={item.description}
                          category={item.category}
                          price={item.price}
                          discount={item.discount}
                          imageUrl={item.imageUrl}
                          demoUrl={item.demoUrl}
                          openGraphImage={item.openGraphImage}
                          created_at={item.created_at}
                          owned={isOwned}
                        />
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
