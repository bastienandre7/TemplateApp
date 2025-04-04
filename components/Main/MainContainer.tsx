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
};

type Purchase = {
  template: string;
};

export default function MainContainer() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [products, setProducts] = useState<Product[]>([]);
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

  const filteredItems = [...products].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div id="templates" className="w-full mx-auto text-black px-4 md:px-0">
      <div className="py-8 max-w-screen-lg mx-auto">
        <div className="flex gap-4 mb-4 text-black">
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <SelectTrigger className="w-[180px]">Sort</SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Rising price</SelectItem>
              <SelectItem value="desc">Descending price</SelectItem>
            </SelectContent>
          </Select>
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
                className="flex flex-col sm:flex-row items-center sm:items-center p-4 border rounded-lg shadow gap-4"
              >
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-bold">
                    {item.name} - {item.price} €
                    {isOwned && (
                      <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Owned
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description
                      ?.split(/\. |\n/)
                      .filter((sentence) => !/démo|preview/i.test(sentence))
                      .join(". ")}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">Built with</span>
                    <Image
                      src="/images/logo/nextLogo.png"
                      alt="Next.js"
                      width={20}
                      height={20}
                    />
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <Button variant="outline">
                      <Link href={`/demoLive/${item.id}`}>Live Démo</Link>
                    </Button>
                    {isOwned ? (
                      <Button variant="secondary" asChild>
                        <Link href="/dashboard">Owned</Link>
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          if (!session) {
                            signIn();
                          } else {
                            window.location.href = item.lemonLink;
                          }
                        }}
                      >
                        Buy Now
                      </Button>
                    )}
                  </div>
                </div>

                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="w-full sm:w-72 h-auto object-cover rounded-lg border"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
