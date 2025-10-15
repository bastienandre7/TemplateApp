"use client";

import Link from "next/link";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  slug?: string;
  categories?: string[];
  categoriesSlugs?: string[];
  openGraphImage?: string;
  description?: string;
  created_at?: string; // <-- Ajoute cette ligne si ce n'est pas déjà fait
};

export default function SearchModal({ products }: { products: Product[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Extraire toutes les catégories uniques avec leur slug
  const allCategories = Array.from(
    new Map(
      products
        .flatMap((p) =>
          (p.categories || []).map((cat, i) => ({
            name: cat,
            slug:
              p.categoriesSlugs?.[i] || cat.toLowerCase().replace(/\s+/g, "-"),
          }))
        )
        .map((cat) => [cat.slug, cat])
    ).values()
  );

  // Filtrer les catégories selon la recherche
  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );

  // Filtrer les templates selon la recherche
  const filteredTemplates = products
    .filter(
      (tpl) =>
        tpl.name.toLowerCase().includes(query.toLowerCase()) ||
        (tpl.categories &&
          tpl.categories.some((cat) =>
            cat.toLowerCase().includes(query.toLowerCase())
          )) ||
        (tpl.description &&
          tpl.description.toLowerCase().includes(query.toLowerCase()))
    )
    .sort(
      (a, b) =>
        new Date(b.created_at || "").getTime() -
        new Date(a.created_at || "").getTime()
    );

  return (
    <>
      {/* Bouton qui ouvre le modal */}
      <div className="mx-auto max-w-lg mb-16">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-left text-gray-600 hover:border-gray-300 transition"
        >
          <svg
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="flex-1">Search templates…</span>
          <kbd className="hidden sm:inline bg-gray-100 px-2 py-1 rounded text-xs text-gray-500">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Overlay + Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-5xl h-auto max-h-[90vh] p-8 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              {" "}
              {/* Input recherche */}
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {/* Bouton de fermeture */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-2 rounded-full transition pl-4 py-3 mb-6"
                aria-label="Close"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Catégories (uniquement si recherche) */}
              {query.length > 0 && filteredCategories.length > 0 && (
                <>
                  <div className="mb-2">
                    <hr className="border-gray-200 mb-2" />
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 pl-1">
                      Categories
                    </div>
                  </div>
                  {filteredCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/nextjs-templates/category/${cat.slug}`}
                        className="block px-4 py-3 rounded-lg hover:bg-purple-50 font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        All <span className="capitalize">{cat.name}</span>{" "}
                        templates
                      </Link>
                    </li>
                  ))}
                </>
              )}

              {/* Templates */}
              <div className="mt-4 mb-2">
                <hr className="border-gray-200 mb-2" />
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 pl-1">
                  Templates
                </div>
              </div>
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map((tpl) => (
                  <li key={tpl.id}>
                    <Link
                      href={`/nextjs-templates/${tpl.slug}`}
                      className="flex items-center gap-6 px-2 py-3 rounded-lg hover:bg-gray-50 text-gray-800 font-medium transition"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-[96px] h-[50px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 aspect-[1200/630] flex items-center justify-center">
                        {tpl.openGraphImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={tpl.openGraphImage}
                            alt={tpl.name}
                            className="object-cover w-full h-full"
                            style={{ aspectRatio: "1200/630" }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 text-2xl">
                            ?
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">{tpl.name}</div>
                        {tpl.description && (
                          <div className="text-gray-500 text-sm truncate">
                            {tpl.description}
                          </div>
                        )}
                        {tpl.categories && tpl.categories.length > 0 && (
                          <div className="text-xs text-gray-400 mt-1 truncate">
                            {tpl.categories.join(", ")}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-500">No templates found</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
