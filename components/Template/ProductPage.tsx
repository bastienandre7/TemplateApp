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
  tech?: string[];
  pages?: string[];
  extras?: string[];
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
        <div className="text-center space-y-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {template.name} with Next.js and Tailwind CSS
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
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
                className="px-8 py-4 rounded-xl text-lg bg-emerald-500 hover:bg-emerald-600 text-white min-h-[48px] min-w-[48px] shadow-md"
              >
                Buy Now - {template.price} €
              </Button>
            )}
          </div>

          <p className="max-w-2xl mx-auto text-center text-lg text-gray-700">
            {template.description}
          </p>
        </div>

        {template.images && template.images.length > 0 && (
          <ProductGallery images={template.images} />
        )}

        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What’s Inside This Template
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-900 text-base">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Pages Included</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
                {template.pages?.map((page, i) => <li key={i}>{page}</li>)}
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Total: {template.pages?.length || 0} fully responsive pages
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
                {template.tech?.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Extras</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
                {template.extras?.map((extras, i) => <li key={i}>{extras}</li>)}
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Last updated</h3>
              <p className="text-gray-700">
                {new Date(template.updated_at).toLocaleDateString()} — built
                with the latest version of Next.js
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to launch with this template ?
          </p>
          {isOwned ? (
            <Link href="/dashboard">
              <Button className="px-8 py-4 rounded-xl text-lg bg-blue-600 hover:bg-blue-600 text-white min-h-[48px] min-w-[48px] shadow-md">
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
              className="px-8 py-4 rounded-xl text-lg bg-emerald-500 hover:bg-emerald-700 text-white min-h-[48px] min-w-[48px] shadow-md"
            >
              Buy Now - {template.price} €
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
