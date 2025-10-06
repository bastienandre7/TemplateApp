"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Component = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function ComponentsClient({
  components,
}: {
  components: Component[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );

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

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
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
                  href={`/nextjs-components/${comp.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-200"
                >
                  <div className="bg-gray-50 border-b border-gray-100 aspect-video relative overflow-hidden">
                    <Image
                      src={comp.image || "/images/Noimage.jpg"}
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
    </div>
  );
}
