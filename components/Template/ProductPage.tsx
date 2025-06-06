"use client";

import HeaderCPN from "@/components/Header/HeaderCPN";
import ProductGallery from "@/components/Template/ProductGallery";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  demoUrl: string;
  lemonLink: string;
  features: string[];
  slug: string;
  images?: string[];
  updated_at: string;
}

type Purchase = {
  template: string;
};

interface ProductPageProps {
  template: Product;
}

export default function ProductPage({ template }: ProductPageProps) {
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

  const isOwned = ownedTemplates.includes(template.name);

  return (
    <div className="pt-4 bg-white text-black min-h-screen">
  <HeaderCPN />

  <div className="max-w-screen-xl mx-auto px-8 py-20 xl:px-4 lg:py-28 space-y-20">
    {/* Hero Section */}
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        BloomTPL - Next.js Tailwind CSS {template.name}
      </h1>

      <p className="text-xl text-gray-800 font-medium">{template.price} €</p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {template.demoUrl && (
          <Link href={`/demo/${template.slug}`}>
            <Button
              className="px-8 py-4 rounded-xl text-lg bg-white text-black hover:bg-gray-100 min-h-[48px] min-w-[48px] shadow-md"
              variant="outline"
            >
              Live Demo
            </Button>
          </Link>
        )}

        {isOwned ? (
          <Link href="/dashboard">
            <Button className="px-8 py-4 rounded-xl text-lg bg-blue-600 hover:bg-blue-700 text-white min-h-[48px] min-w-[48px] shadow-md">
              Owned
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => {
              if (!session) {
                signIn();
              } else if (session.user?.email) {
                const email = encodeURIComponent(session.user.email);
                const url = `${template.lemonLink}?checkout[email]=${email}`;
                window.location.href = url;
              }
            }}
            className="px-8 py-4 rounded-xl text-lg bg-emerald-600 hover:bg-emerald-700 text-white min-h-[48px] min-w-[48px] shadow-md"
          >
            Buy Now
          </Button>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Updated on: {new Date(template.updated_at).toLocaleDateString()}</p>
        <p>Built with: Next.js 15</p>
      </div>
    </div>

    <p className="max-w-2xl mx-auto text-center text-lg text-gray-700">
      {template.description}
    </p>

    {template.images && template.images.length > 0 && (
      <ProductGallery images={template.images} />
    )}

    {/* Features Section */}
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Key Features</h2>
      <ul className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-gray-900">
        {template.features.map((f, i) => (
          <li
            key={i}
            className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition transform flex items-start gap-3"
          >
            <span className="mt-1 text-emerald-600">✔️</span>
            <span className="text-base font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
}
