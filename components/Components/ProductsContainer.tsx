"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  demoUrl?: string;
  lemonLink: string;
  type: "template" | "component";
}

type Purchase = {
  template: string;
};

export default function ProductsContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [progress, setProgress] = useState(0);
  const [ownedTemplates, setOwnedTemplates] = useState<string[]>([]);
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
        const componentsOnly = data.filter(
          (item: Product) => item.type === "component"
        );
        setProducts(componentsOnly);
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

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {progress > 0 && (
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((pack) => {
            const isOwned = ownedTemplates.includes(pack.name);

            return (
              <li key={pack.id}>
                <div className="group block overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-[350px] sm:h-[250px] overflow-hidden">
                    <Image
                      src={pack.imageUrl}
                      alt={pack.name}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-200">
                      {pack.name}
                      {isOwned && (
                        <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Owned
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {pack.description || "Component Pack"}
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500">Built with</span>
                      <Image
                        src="/images/logo/nextLogo.png"
                        alt="Next.js"
                        width={20}
                        height={20}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline">
                        <Link href={`/demoLive/${pack.id}`}>Live Démo</Link>
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
                              window.location.href = pack.lemonLink;
                            }
                          }}
                        >
                          Buy Now - {pack.price} €
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}