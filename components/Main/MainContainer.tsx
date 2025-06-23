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
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  const filteredItems = [...products]
    .filter((p) => !selectedCategory || p.category === selectedCategory)
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
    <div id="templates" className="w-full mx-auto text-black px-4 md:py-8">
      <div className="py-8 max-w-screen-lg mx-auto">
        <div className="flex gap-4 mb-4 text-black">
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <SelectTrigger className="w-[180px]" aria-label="Sort templates">
              Sort
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="asc">Rising price</SelectItem>
              <SelectItem value="desc">Descending price</SelectItem>
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
                className="w-[180px]"
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

        <div className="grid gap-8 md:grid-cols-2">
          {filteredItems.map((item) => {
            const isOwned = ownedTemplates.includes(item.name);

            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden transition hover:shadow-2xl hover:border-indigo-200"
              >
                <Link
                  href={`/template/${item.slug}`}
                  className="block relative aspect-[1200/630] bg-gray-100"
                >
                  <Image
                    src={
                      item.openGraphImage ||
                      item.imageUrl ||
                      "/images/NoImage.jpg"
                    }
                    alt={`${item.name} main preview`}
                    fill
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <span className="absolute top-4 left-4 bg-white/80 text-xs text-indigo-700 font-semibold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                  {new Date().getTime() - new Date(item.created_at).getTime() <
                    14 * 24 * 60 * 60 * 1000 && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-blue-400 text-white text-sm px-3 py-1 rounded-full shadow-lg font-bold border-2 border-white z-10">
                      NEW
                    </span>
                  )}
                  {isOwned && (
                    <span className="absolute bottom-4 right-4 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full shadow">
                      Owned
                    </span>
                  )}
                </Link>

                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <Link href={`/template/${item.slug}`}>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-indigo-700 transition">
                        {item.name}
                      </h2>
                    </Link>
                    <p className="text-gray-700 text-base mb-4 line-clamp-3">
                      {item.description ||
                        "No description available for this template."}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                        Next.js
                      </span>
                      <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button
                      asChild
                      variant="outline"
                      className="min-h-[44px] min-w-[44px] px-4 py-2 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <Link
                        href={`${item.demoUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </Button>

                    {isOwned ? (
                      <Button
                        asChild
                        variant="secondary"
                        className="min-h-[44px] min-w-[44px] px-4 py-2 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/dashboard">Owned</Link>
                      </Button>
                    ) : (
                      <Button
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
                        className="min-h-[44px] min-w-[44px] px-4 py-2 hover:scale-105 hover:shadow-xl transition-all duration-300 bg-indigo-600 text-white"
                      >
                        {item.price === 0
                          ? "FREE"
                          : `Buy Now - ${item.price} €`}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
