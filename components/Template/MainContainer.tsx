"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "../ui/badge";

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

type Purchase = {
  template: string;
};

export default function MainContainer({ products }: { products: Product[] }) {
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
    new Set(
      products.flatMap((p) => p.categories || [p.category]).filter(Boolean)
    )
  );

  // Compter les templates par catégorie
  const categorycounts = categories.reduce(
    (acc, category) => {
      acc[category] = products.filter((p) =>
        p.categories ? p.categories.includes(category) : p.category === category
      ).length;
      return acc;
    },
    {} as Record<string, number>
  );

  // Suppression de toute logique liée à l'ancienne searchbar
  // Notamment : searchQuery, onClearSearch, et tout ce qui s'y rapporte

  const filteredItems = [...products]
    .filter((p) => {
      const categoryMatch =
        !selectedCategory ||
        (p.categories
          ? p.categories.includes(selectedCategory)
          : p.category === selectedCategory);

      return categoryMatch;
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
    <div id="templates" className="w-full mx-auto text-black relative pb-24">
      <div className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Layout avec sidebar sur desktop */}
          <div className="lg:flex lg:gap-8">
            {/* Sidebar - Categories (Desktop uniquement) */}
            <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
              <div className="sticky top-32">
                <div className="bg-sidebar rounded-lg p-6 border border-gray-200 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-4">Categories</p>

                  {/* Toutes les catégories */}
                  <Button
                    variant={!selectedCategory ? "default" : "outline"}
                    className="w-full flex items-center justify-between mb-4 px-3 py-3 rounded-lg text-left transition-all duration-200"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <span className="font-medium">All Templates</span>
                    <span className="text-sm px-2 py-1 rounded">
                      {products.length}
                    </span>
                  </Button>

                  {/* Liste des catégories */}
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        size={"lg"}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left transition-all duration-200"
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span className="font-medium">
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                        <span className="text-sm px-2 py-1 rounded">
                          {categorycounts[category]}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="flex-1 min-w-0">
              {/* Header et filtres mobile */}
              <div className="space-y-4 mb-8">
                {/* Top row: Results counter */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {selectedCategory
                        ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Templates`
                        : "Templates"}
                    </p>
                    {selectedCategory && (
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-primary hover:underline mt-2"
                      >
                        ← Back to all templates
                      </button>
                    )}
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

                  {/* Mobile category filter */}
                  <div className="lg:hidden">
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
                              {cat.charAt(0).toUpperCase() + cat.slice(1)} (
                              {categorycounts[cat]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
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
                      No templates match your current filters.
                    </p>
                    <Button
                      onClick={() => setSelectedCategory(null)}
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
                      <Card
                        key={item.id}
                        className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <div className="aspect-[1200/630] relative bg-gray-50">
                          <Image
                            src={
                              item.openGraphImage ||
                              item.imageUrl ||
                              "/images/NoImage.jpg"
                            }
                            alt={`${item.name} preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
                        </div>

                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{item.category}</Badge>
                          </div>
                          <CardTitle className="text-xl line-clamp-1">
                            <Link
                              href={`/nextjs-templates/${item.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item.description ||
                              "A beautifully crafted template ready for your next project."}
                          </CardDescription>
                        </CardHeader>

                        <CardFooter className="flex gap-2">
                          <Button variant="outline" className="flex-1" asChild>
                            <Link
                              href={item.demoUrl ?? "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </Link>
                          </Button>
                          {isOwned ? (
                            <Button
                              asChild
                              variant="outline"
                              className="flex-1"
                            >
                              <Link href="/dashboard">Owned</Link>
                            </Button>
                          ) : (
                            <Button
                              className="flex-1"
                              asChild
                              variant={
                                Number(item.price) === 0 ? "outline" : "default"
                              }
                            >
                              <Link href={`/nextjs-templates/${item.slug}`}>
                                {Number(item.price) === 0 ? "Free" : `Buy Now`}
                              </Link>
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
