"use client";

import DemoViewer from "@/components/Demo/DemoOverlay";
import HeaderCPN from "@/components/Header/HeaderCPN";
import { use, useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  demoUrl: string;
  lemonLink: string;
  slug: string;
}

export default function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [template, setTemplate] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await fetch(`/api/products/slug/${slug}`);
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
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-gray-100 pt-4">
        <HeaderCPN />
        <div className="min-h-screen flex flex-col items-center justify-center text-black">
          <div className="mt-8 animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black" />
          <p className="mt-4 text-gray-800">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="bg-gray-100 pt-4">
        <HeaderCPN />
        <div className="min-h-screen flex flex-col items-center justify-center text-black">
          <div className="mt-8 animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black" />
          <p className="mt-4 text-gray-800">Template not found.</p>
        </div>
      </div>
    );
  }

  return <DemoViewer template={template} />;
}
