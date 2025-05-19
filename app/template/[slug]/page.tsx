"use client";

import ProductPage from "@/components/ProductPage";
import { use } from "react";


export default function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return <ProductPage slug={slug} />;
}
