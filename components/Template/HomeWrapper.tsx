"use client";

import BannerCPN from "@/components/Template/BannerCPN";
import MainContainer from "@/components/Template/MainContainer";
import { Suspense } from "react";

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

export default function HomeWrapper({ products }: { products: Product[] }) {
  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-0">
      <BannerCPN products={products} />
      <Suspense fallback={<div className="text-gray-500">Loading...</div>}>
        <MainContainer products={products} />
      </Suspense>
    </div>
  );
}
