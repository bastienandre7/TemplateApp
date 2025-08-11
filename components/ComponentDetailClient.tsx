"use client";

import Link from "next/link";
import { useState } from "react";

// On ne dépend plus de FreeComponent du data local
interface ComponentDetailClientProps {
  component: {
    slug: string;
    name: string;
    description: string;
    category: string;
    image: string;
    demoUrl?: string;
    code?: string;
    // Ajoute d'autres propriétés si besoin (isInteractive, etc.)
  };
}

export default function ComponentDetailClient({
  component: comp,
}: ComponentDetailClientProps) {
  const [copied, setCopied] = useState(false);

  // Utilise directement le code du composant passé en props
  const sourceCode = comp.code
    ? comp.code
        .replace(/\\r/g, "") // supprime tous les \r
        .replace(/\\n/g, "\n") // remplace \n par retour à la ligne
        .replace(/\\\"/g, '"') // remplace \" par "
        .replace(/\\t/g, "\t") // remplace \t par tabulation (optionnel)
    : "";

  const handleCopy = () => {
    // Nettoie le code pour le rendre collable
    const cleanCode = (comp.code ?? "")
      .replace(/\\r/g, "")
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\\t/g, "\t")
      .replace(/\\\//g, "/")
      .replace(/\\'/g, "'");

    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 🎯 Preview via iframe si demoUrl existe
  function PreviewSection() {
    // Utilise comp.demoUrl si présent, sinon construit l'URL avec le slug
    const previewUrl = `https://components-app-delta.vercel.app/${comp.slug}`;

    return (
      <div className="w-full h-full min-h-[400px] relative flex items-center justify-center">
        <iframe
          src={previewUrl}
          className="w-full h-[400px] border-0 rounded-lg bg-white"
          title={`${comp.name} Preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }

  return (
    <div className="pt-32 bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="/nextjs-components"
            className="hover:text-purple-600 transition"
          >
            Components
          </Link>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-gray-900 font-medium">{comp.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{comp.name}</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            {comp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              Responsive
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {comp.category}
            </span>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
              <h3 className="font-semibold text-gray-900">Live Preview</h3>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Interactive
              </div>
            </div>
            <div className="p-8 min-h-[300px] flex items-center justify-center bg-white">
              <PreviewSection />
            </div>
          </div>
        </div>

        {/* Code Section */}
        <div className="mb-12">
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between bg-gray-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm font-mono">
                  {comp.name}.tsx
                </span>
                {sourceCode && (
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Live Code
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                <code>{sourceCode}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Usage Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              How to use
            </h3>
            <ol className="text-sm text-blue-800 space-y-2">
              <li>1. Copy the component code</li>
              <li>2. Paste it into your React/Next.js project</li>
              <li>3. Make sure you have Tailwind CSS configured</li>
              <li>4. Customize colors, spacing, and content as needed</li>
            </ol>
          </div>

          {/* Dependencies */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Dependencies
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  react
                </code>
                <span className="text-gray-500">^18.0.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  tailwindcss
                </code>
                <span className="text-gray-500">^3.0.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/nextjs-components"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Components
            </Link>

            <div className="text-center">
              <p className="text-gray-600 mb-2">Need complete templates?</p>
              <Link
                href="/nextjs-templates"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                View Premium Templates
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
