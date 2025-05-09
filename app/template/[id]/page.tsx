"use client";

import HeaderCPN from "@/components/Header/HeaderCPN";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
}

type Purchase = {
  template: string;
};

export default function ProductPage() {
  const { id } = useParams() as { id: string };
  const [template, setTemplate] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [ownedTemplates, setOwnedTemplates] = useState<string[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setTemplate(data);
      } catch (err) {
        console.error("Erreur chargement template:", err);
        setTemplate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [id]);

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

  if (loading) {
    return (
      <div className="bg-zinc-900 pt-4">
        <HeaderCPN />
        <div className="min-h-screen flex flex-col items-center justify-center text-white ">
          <div className="mt-8 animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white" />
          <p className="mt-4 text-gray-400">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="bg-zinc-900 pt-4">
        <HeaderCPN />
        <div className="min-h-screen flex flex-col items-center justify-center text-white ">
          <div className="mt-8 animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white" />
          <p className="mt-4 text-gray-400">Template not found.</p>
        </div>
      </div>
    );
  }

  const isOwned = ownedTemplates.includes(template.name);

  const additionalImages = [1, 2, 3].map(
    (i) => `/images/templates/${template.slug}/preview-${i}.png`
  );

  return (
    <div className="pt-4 bg-zinc-900 text-white min-h-screen">
      <HeaderCPN />
      <div className="max-w-screen-xl mx-auto px-8 py-16 xl:px-4 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-3xl font-bold">
            {template.name} – {template.price}€
          </h1>
          <div className="flex gap-4 mt-4 lg:mt-0">
            {template.demoUrl && (
              <Link href={`/demoLive/${template.id}`}>
                <Button
                  className="border border-gray-400 text-gray-800 px-8 py-6 rounded-xl hover:bg-stone-200 transition"
                  variant="outline"
                >
                  Live Demo
                </Button>
              </Link>
            )}
            {isOwned ? (
              <Link href="/dashboard">
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-xl transition"
                  variant="secondary"
                >
                  Owned
                </Button>
              </Link>
            ) : (
              <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-xl transition"
                onClick={() => {
                  if (!session) {
                    signIn();
                  } else if (session.user?.email) {
                    const email = encodeURIComponent(session.user.email);
                    const url = `${template.lemonLink}?checkout[email]=${email}`;
                    window.location.href = url;
                  }
                }}
              >
                Buy Now
              </Button>
            )}
          </div>
        </div>

        <p className="text-gray-200 mt-4">{template.description}</p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-200">Built with</span>
          <Image
            src="/images/logo/nextLogo.png"
            alt="Next.js"
            width={20}
            height={20}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Image
            src={template.imageUrl || "/images/NoImage.jpg"}
            alt={`${template.name} main preview`}
            width={1000}
            height={1000}
            className="rounded-xl w-full object-cover"
            priority
          />

          {additionalImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${template.name} preview ${i + 1}`}
              width={1000}
              height={1000}
              className="rounded-xl w-full object-cover"
            />
          ))}
        </div>

        {/* Features */}
        <h2 className="text-3xl mt-10">Features :</h2>
        <ul className="list-disc list-inside mt-4 text-gray-200">
          {template.features.map((f, i) => (
            <li key={i} className="pb-2 text-lg">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
