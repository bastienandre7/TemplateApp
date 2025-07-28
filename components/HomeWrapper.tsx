"use client";

import BannerCPN from "@/components/Template/BannerCPN";
import MainContainer from "@/components/Template/MainContainer";
import { useState } from "react";

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

export default function HomeWrapper({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen">
      <BannerCPN onSearch={handleSearch} />
      <MainContainer
        products={products}
        searchQuery={searchQuery}
        onClearSearch={handleClearSearch}
      />
    </div>
  );
}
