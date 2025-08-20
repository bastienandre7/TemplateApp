"use client";

import ProductGallery from "@/components/Template/ProductGallery";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PaymentMethodSection from "./PaymentMethodSection";

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
        className="px-8 py-4 rounded-xl text-lg bg-blue-500 hover:bg-blue-600 text-white min-h-[56px] min-w-[48px] shadow-md w-full cursor-pointer"
      >
        {template.price === 0 ? "Get FREE" : `Buy Now - ${template.price}€`}
      </Button>
    );
  };

  return (
    <div className="pt-16 md:pt-4 bg-white text-black min-h-screen">
      <div className="max-w-screen-xl mx-auto px-8 xl:px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Main Title */}
            <div>
              <h1 className="mb-4 text-xl font-bold leading-tight text-black xs:text-2xl sm:text-3xl md:text-[34px] lg:text-3xl xl:text-[40px]">
                {template.name}
              </h1>

              <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-800 leading-relaxed">
                {template.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 my-4">
              {template.demoUrl && (
                <Link
                  href={`${template.demoUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:shadow-lg min-h-[56px] w-full w-full cursor-pointer"
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
            <div className="mt-6">
              <ProductGallery images={template.images} />
              <div className="py-4 flex flex-col md:flex-row justify-between gap-2">
                <div className="flex items-center">
                  Built with Next.js{" "}
                  <Image
                    src="/images/logo/nextLogo.png"
                    alt="nextLogo"
                    height="20"
                    width="20"
                    className="ml-2"
                  />
                </div>
                <div>
                  Last Updated :{" "}
                  {new Date(template.updated_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-12 pt-8">
            <div className="">
              {template.pages?.map((description, idx) => {
                return (
                  <div className="mb-4" key={idx}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto py-2">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Key Features
              </h2>

              <ul className="space-y-6 list-disc list-inside leading-relaxed">
                {template.extras?.map((feature, idx) => {
                  const { title, description } = parseDescriptionText(feature);
                  return (
                    <li key={idx}>
                      <span className="font-semibold">{title}:</span>{" "}
                      <span className="text-gray-700">{description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {template.tech?.map((tech, i) => {
                  const { title, description } = parseDescriptionText(tech);
                  return (
                    <div
                      key={i}
                      className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 py-12 w-full bg-gradient-to-br from-yellow-50 to-orange-100 border border-yellow-200 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-200 text-yellow-900 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Special Offer
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get All Templates in One Powerful Bundle
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Access <strong>8 premium templates</strong> including SaaS,
              eCommerce, Portfolio, Blog & more – all for{" "}
              <strong className="text-green-600">just 39.99€</strong> with code{" "}
              <code className="font-semibold">BLOOM50</code>.
            </p>

            <Link
              href="/bundle/ultimate"
              className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-600 transition-all hover:scale-105 shadow-lg"
            >
              View the Bundle
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Lifetime access
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Future templates included
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Commercial license
              </div>
            </div>
          </div>
        </section>

        <PaymentMethodSection />

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to launch with this template?
          </p>
          <div>{renderActionButton()}</div>
        </div>
      </div>
    </div>
  );
}

const parseDescriptionText = (text: string) => {
  const colonIndex = text.indexOf(" : ");
  if (colonIndex === -1) {
    return { title: text, description: "" };
  }

  const title = text.substring(0, colonIndex).replace(/\*\*/g, "");
  const description = text.substring(colonIndex + 3);

  return { title, description };
};
