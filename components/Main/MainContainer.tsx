"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  features: string[];
  slug?: string;
  tech: string[];
};

type Purchase = {
  template: string;
};

const techLogos: { [key: string]: string } = {
  "Next.js": "/images/logo/nextLogo.png",
  "Vue.js": "/images/logo/vueLogo.png",
  React: "/images/logo/reactLogo.png",
  Svelte: "/images/logo/svelteLogo.png",
  "Tailwind CSS": "/images/logo/tailwindLogo.png",
};

export default function MainContainer() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [ownedTemplates, setOwnedTemplates] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    setProgress(10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 10;
        clearInterval(interval);
        return prev;
      });
    }, 100);

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const templatesOnly = data.filter(
          (item: Product) => item.type === "template"
        );
        setProducts(templatesOnly);
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      });
  }, []);

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

  const techs = Array.from(
    new Set(products.flatMap((p) => p.tech).filter(Boolean))
  );

  const filteredItems = [...products]
    .filter((p) => !selectedTech || p.tech.includes(selectedTech))
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

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
              <SelectItem value="asc">Rising price</SelectItem>
              <SelectItem value="desc">Descending price</SelectItem>
            </SelectContent>
          </Select>

          {techs.length > 0 && (
            <Select
              value={selectedTech ?? "all"}
              onValueChange={(value) =>
                setSelectedTech(value === "all" ? null : value)
              }
            >
              <SelectTrigger
                className="w-[180px]"
                aria-label="Filter templates by technology"
              >
                {selectedTech || "All technologies"}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All technologies</SelectItem>
                {techs.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    <div className="flex items-center gap-2">
                      {techLogos[tech] && (
                        <Image
                          src={techLogos[tech]}
                          alt={tech}
                          width={16}
                          height={16}
                        />
                      )}
                      {tech}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="space-y-8">
          {progress > 0 && (
            <div className="mb-4">
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {filteredItems.map((item) => {
            const isOwned = ownedTemplates.includes(item.name);

            return (
              <div
                key={item.id}
                className="hover:bg-gray-50 transition flex flex-col sm:flex-row items-center sm:items-center p-4 border rounded-lg shadow gap-4"
              >
                <div className="flex-1 w-full p-0 sm:p-4">
                  <Link href={`/template/${item.slug}`} className="cursor-pointer">
                    <h2 className="text-xl font-bold">
                      {item.name}
                      {isOwned && (
                        <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Owned
                        </span>
                      )}
                    </h2>
                    <p className="text-sm text-gray-800 mt-2">
                      {item.description ||
                        "No description available for this template."}
                    </p>

                    {Array.isArray(item.tech) && item.tech.length > 0 && (
                      <div className="flex items-center gap-2 mt-4">
                        <p className="text-sm">Build with : </p>
                        {item.tech.map((tech) => (
                          <div key={tech} className="flex items-center gap-1">
                            {techLogos[tech] && (
                              <Image
                                src={techLogos[tech]}
                                alt={tech}
                                width={20}
                                height={20}
                              />
                            )}
                            <span className="text-sm text-gray-700">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold mt-4 mb-2">
                        Features:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                        {item.features
                          .slice(0, 2)
                          .map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                          ))}
                        {item.features.length > 2 && (
                          <li className="italic">
                            ...and {item.features.length - 2} more
                          </li>
                        )}
                      </ul>
                    </div>
                  </Link>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="min-h-[48px] min-w-[48px] px-4 py-3 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/demo/${item.slug}`}>Live Demo</Link>
                    </Button>

                    {isOwned ? (
                      <Button
                        asChild
                        variant="secondary"
                        className="min-h-[48px] min-w-[48px] px-4 py-3 hover:scale-105 hover:shadow-xl transition-all duration-300"
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
                        className="min-h-[48px] min-w-[48px] px-4 py-3 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        Buy Now - {item.price} €
                      </Button>
                    )}
                  </div>
                </div>

                <Link href={`/template/${item.slug}`} className="cursor-pointer">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    priority
                    className="w-full sm:w-72 h-auto object-cover rounded-lg border"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
