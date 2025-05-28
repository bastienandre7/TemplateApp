"use client";

import HeaderCPN from "@/components/Header/HeaderCPN";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
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
    <div className="pt-4 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white min-h-screen">
      <HeaderCPN />

      <div className="max-w-screen-xl mx-auto px-8 py-20 xl:px-4 lg:py-28 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {template.name}
          </h1>
          <p className="text-xl text-gray-300">{template.price}€</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {template.demoUrl && (
              <Link href={`/demo/${template.slug}`}>
                <Button
                  className="px-8 py-4 rounded-xl text-lg bg-white text-black hover:bg-gray-200 min-h-[48px] min-w-[48px]"
                  variant="outline"
                >
                  Live Demo
                </Button>
              </Link>
            )}
            {isOwned ? (
              <Link href="/dashboard">
                <Button className="px-8 py-4 rounded-xl text-lg bg-red-500 hover:bg-red-600 text-white min-h-[48px] min-w-[48px]">
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
                className="px-8 py-4 rounded-xl text-lg bg-emerald-500 hover:bg-emerald-600 text-white min-h-[48px] min-w-[48px]"
              >
                Buy Now
              </Button>
            )}
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-center text-lg text-gray-300">
          {template.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Image
            src={template.imageUrl || "/images/NoImage.jpg"}
            alt={`${template.name} main preview`}
            width={1000}
            height={1000}
            className="rounded-2xl shadow-xl w-full object-cover border border-gray-800"
            priority
          />

          {template.images?.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${template.name} preview ${i + 1}`}
              width={1000}
              height={1000}
              className="rounded-2xl shadow-xl w-full object-cover border border-gray-800"
            />
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-gray-200">
            {template.features.map((f, i) => (
              <li
                key={i}
                className="p-6 bg-zinc-800 rounded-xl shadow hover:scale-105 transition transform"
              >
                <span className="text-lg">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}