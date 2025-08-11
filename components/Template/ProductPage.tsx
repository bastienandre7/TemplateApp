"use client";

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
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.email) {
      fetch("/api/purchases")
        .then((res) => res.json())
        .then((data: Purchase[]) => {
          const owned = data.map((purchase) => purchase.template);
          setOwnedTemplates(owned);
        })
        .catch((error) => {
          console.error("Error retrieving purchases:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [session, status]);

  const isOwned = ownedTemplates.includes(template.name);

  // Affichage conditionnel pour éviter l'hydratation mismatch
  const renderActionButton = () => {
    if (isLoading || status === "loading") {
      return (
        <Button
          disabled
          className="px-8 py-4 rounded-xl text-lg bg-gray-400 text-white min-h-[48px] min-w-[48px] shadow-md opacity-60"
        >
          Loading...
        </Button>
      );
    }

    if (isOwned) {
      return (
        <Link href="/dashboard">
          <Button className="px-8 py-4 rounded-xl text-lg bg-purple-600 hover:bg-purple-700 text-white min-h-[48px] min-w-[48px] shadow-md">
            Owned
          </Button>
        </Link>
      );
    }

    return (
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
        className="px-8 py-4 rounded-xl text-lg bg-violet-800 hover:bg-violet-900 text-white min-h-[48px] min-w-[48px] shadow-md"
      >
        {template.price === 0 ? "Get FREE" : `Buy Now - ${template.price}€`}
      </Button>
    );
  };

  return (
    <div className="pt-4 bg-white text-black min-h-screen">
      <div className="max-w-screen-xl mx-auto px-8 xl:px-4 py-20 sm:py-32 space-y-20">
        <div className="text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              {template.name}
            </h1>

            <div className="text-2xl sm:text-3xl font-medium text-gray-600 mt-2">
              <span className="text-purple-600">Premium</span> Next.js &
              Tailwind CSS Template
            </div>

            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              {template.description}
            </p>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Production Ready
            </span>
            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
              <svg
                className="w-3 h-3 mr-1"
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
            </span>
            <span className="inline-flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Lifetime Updates
            </span>
            <span className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Best Quality
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {template.demoUrl && (
              <Link
                href={`${template.demoUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:shadow-lg min-h-[56px]"
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </Button>
              </Link>
            )}

            {renderActionButton()}
          </div>
        </div>

        {/* Gallery Section */}
        {template.images && template.images.length > 0 && (
          <div className="mt-16">
            <ProductGallery images={template.images} />
          </div>
        )}

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What&apos;s Inside This Template
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and launch your Next.js project with
              confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Pages Included Card */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50/30 border border-purple-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      Pages Included
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-purple-600">
                        {template.pages?.length || 0}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        responsive pages
                      </span>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {template.pages?.map((page, i) => (
                    <div
                      key={i}
                      className="flex items-center group/item hover:translate-x-2 transition-transform duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-medium group-hover/item:text-purple-700 transition-colors duration-200">
                        {page}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">
                        Modern & proven technologies
                      </span>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {template.tech?.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center group/item hover:translate-x-2 transition-transform duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-medium group-hover/item:text-blue-700 transition-colors duration-200">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Extras Card */}
            <div className="group relative bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      Extras Included
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">
                        Bonus features & tools
                      </span>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {template.extras?.map((extra, i) => (
                    <div
                      key={i}
                      className="flex items-center group/item hover:translate-x-2 transition-transform duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-medium group-hover/item:text-emerald-700 transition-colors duration-200">
                        {extra}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Always Up-to-Date Card */}
            <div className="group relative bg-gradient-to-br from-white to-amber-50/30 border border-amber-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      Always Up-to-Date
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">
                        Latest Next.js version
                      </span>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                    <span className="text-gray-700 font-medium">
                      Last updated:
                    </span>
                    <span className="text-amber-700 font-bold">
                      {new Date(template.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Built with the latest version of Next.js and all
                    dependencies are up-to-date for optimal performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✨ Production-Ready Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    SEO Optimized
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Mobile First
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    TypeScript Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to launch with this template?
          </p>
          {renderActionButton()}
        </div>
      </div>
    </div>
  );
}
