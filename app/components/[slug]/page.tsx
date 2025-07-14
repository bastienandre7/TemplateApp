"use client";

import HeaderCPN from "@/components/Header/HeaderCPN";
import { components } from "@/data/components";
import { notFound } from "next/navigation";
import { use, useState } from "react";

export default function ComponentDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(props.params);

  const [copied, setCopied] = useState(false);

  const comp = components.find((c) => c.slug === slug);

  if (!comp) return notFound();

  const handleCopy = () => {
    navigator.clipboard.writeText(comp.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="pt-20">
      <HeaderCPN />
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-xl font-bold mb-4">{comp.name}</h1>
        <div className="mb-4">{comp.preview}</div>
        <div className="mb-2 text-gray-500">{comp.description}</div>
        <div className="relative bg-gray-50 border rounded p-4 mb-4">
          <pre className="text-xs overflow-x-auto">{comp.code}</pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
