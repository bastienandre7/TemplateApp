"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Component = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function ComponentsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );
  const [mounted, setMounted] = useState(false);
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les composants depuis l'API
  useEffect(() => {
    setMounted(true);
    fetch("/api/components")
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
        setLoading(false);
      });
  }, []);

  // Catégories dynamiques depuis la DB
  const categories = Array.from(new Set(components.map((c) => c.category))).map(
    (cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: components.filter((c) => c.category === cat).length,
    })
  );

  const filteredComponents =
    selectedCategory === "all"
      ? components
      : components.filter((comp) => comp.category === selectedCategory);

  if (!mounted || loading) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Free Next.js Components
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Beautiful, responsive components built with{" "}
              <span className="text-red-600 font-semibold">Tailwind CSS</span>{" "}
              and <span className="text-red-600 font-semibold">React</span>.
              Copy the code and paste into your project.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-40 pb-16 components-background-style">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Free Next.js Components
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Beautiful, responsive components built with{" "}
            <span className="text-red-700 font-semibold">Tailwind CSS</span> and{" "}
            <span className="text-red-700 font-semibold">React</span>. Copy the
            code and paste into your project.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              100% Free
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copy & Paste
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Tailwind CSS
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              TypeScript Ready
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-purple-800 mb-2">
              🎉 Want more? Check out our{" "}
              <span className="font-semibold">Premium Templates</span>
            </p>
            <Link
              href="/nextjs-templates"
              className="text-purple-600 hover:text-purple-700 font-medium text-sm"
            >
              View Templates →
            </Link>
          </div>
        </div>
      </div>

      {/* Filters dynamiques */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === "all"
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All ({components.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category.value
                  ? "bg-red-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
          {categories.length === 0 && (
            <div className="text-gray-500 text-sm">
              Categories will appear as components are added
            </div>
          )}
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {filteredComponents.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {selectedCategory === "all"
                  ? "Components Coming Soon"
                  : `No ${selectedCategory} components yet`}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedCategory === "all"
                  ? "We're working hard to bring you amazing free components. Check back soon!"
                  : `We're working on ${selectedCategory} components. Try another category or check back soon!`}
              </p>
              <div className="flex gap-2 justify-center">
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition"
                  >
                    View All Components
                  </button>
                )}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Explore Templates
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
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === "all"
                  ? `${filteredComponents.length} Free Components`
                  : `${filteredComponents.length} ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Components`}
              </h2>
              <p className="text-gray-600">
                Click on any component to view the code and copy it to your
                project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/components/${comp.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-200"
                >
                  <div className="bg-gray-50 border-b border-gray-100 aspect-video relative overflow-hidden">
                    <Image
                      src={comp.image}
                      alt={comp.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-200"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition flex-1">
                        {comp.name}
                      </h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium ml-2 flex-shrink-0 capitalize">
                        {comp.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {comp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-red-600 font-medium hover:underline">
                        View Code →
                      </p>
                      <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                        Free
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Than Components?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our premium Next.js templates with complete designs,
            authentication, and more.
          </p>
          <Link
            href="/nextjs-templates"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition text-lg"
          >
            View Premium Templates
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
