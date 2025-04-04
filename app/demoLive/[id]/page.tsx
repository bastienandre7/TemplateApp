"use client";

import DemoViewer from "@/components/Demo/DemoOverlay";
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
}

export default function TemplatePage() {
  const { id } = useParams();
  const [template, setTemplate] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
        const found = data.find((t) => t.id.toString() === id);
        setTemplate(found || null);
      } catch (err) {
        console.error("Erreur chargement template:", err);
        setTemplate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [id]);

  if (loading) {
    return <p className="text-center p-6">Loading...</p>;
  }

  if (!template) {
    return <p className="text-center text-red-500 p-6">Template not found.</p>;
  }

  return <DemoViewer template={template} />;
}
