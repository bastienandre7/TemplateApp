import { Button } from "@/components/ui/button";
import { Check, Eye, Monitor, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import FaqAccordion from "./FaqAccordion";
import PaymentMethodSection from "./PaymentMethodSection";
import BundleCTASection from "./details/BundleCTASection";
import DynamicBuyButton from "./details/DynamicBuyButton";
import WhatYouGetSection from "./details/WhatYouGetSection";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  demoUrl: string;
  lemonLink: string;
  features: string[];
  slug: string;
  updated_at: string;
  tech?: string[];
  pages?: string[];
  extras?: string[];
  openGraphImage?: string;
  performanceImage?: string;
}

interface ProductPageProps {
  template: Product;
  purchases: { template: string }[];
}

export default function ProductPage({ template, purchases }: ProductPageProps) {
  return (
    <div className="pt-16 md:pt-4 text-black bg-background min-h-screen">
      <div className="max-w-screen-xl mx-auto px-8 xl:px-4 py-20 sm:py-32">
        {/* Hero Section - Style Clay */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-12 items-center">
            {/* Colonne gauche : Titre + Image + Description */}
            <div className="flex flex-col">
              <h1 className="text-foreground leading-tighter text-3xl md:text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter mb-6">
                {template.name}
              </h1>
              <div
                className="relative w-full aspect-[1200/630] mb-6"
                id="template-image"
              >
                <div className="absolute inset-0 template-background-style rounded-2xl"></div>
                <Image
                  src={template.openGraphImage || "/og-image.png"}
                  alt={template.name}
                  fill
                  className="relative rounded-2xl shadow-xl object-cover"
                  priority
                  sizes="100vw"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Colonne droite : Card boutons + avantages */}
            <div className="flex items-center h-full">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground mb-2">
                    {template.description}
                  </p>
                  {template.demoUrl && (
                    <Button
                      variant="outline"
                      className="w-full min-h-[56px] px-8 py-4 rounded-xl text-lg border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      asChild
                    >
                      <Link href={template.demoUrl} target="_blank">
                        <Eye className="w-5 h-5 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <DynamicBuyButton template={template} purchases={purchases} />
                </div>
                <div className="py-2">
                  <div className="border-t border-gray-200"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="inline-flex w-auto self-start items-center gap-2 bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    <Check className="w-4 h-4" />
                    Instant Access
                  </span>
                  <span className="inline-flex w-auto self-start items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Shield className="w-4 h-4" />
                    Commercial License
                  </span>
                  <span className="inline-flex w-auto self-start items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Zap className="w-4 h-4" />
                    Free Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhatYouGetSection />

        {/* Pages Description */}
        {template.pages && template.pages.length > 0 && (
          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Template Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800">
                {template.pages.map((description, idx) => (
                  <div key={idx} className="mb-4">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technical Specs - Amélioré */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-blue-600" />
                Technical Specifications
              </h2>
            </div>

            <div className="p-8">
              {/* ✅ Performance Image Section */}
              {template.performanceImage && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Lighthouse Performance Score
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                    <div className="flex justify-center">
                      <Image
                        src={template.performanceImage}
                        alt={`${template.name} Lighthouse Performance Report`}
                        width={956}
                        height={118}
                        className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                        loading="lazy"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        ✓ Real Lighthouse Results
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Next.js 15</div>
                  <div className="text-sm text-gray-600">Framework</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold mb-1">TypeScript</div>
                  <div className="text-sm text-gray-600">Language</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Tailwind</div>
                  <div className="text-sm text-gray-600">Styling</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Responsive</div>
                  <div className="text-sm text-gray-600">Design</div>
                </div>
              </div>

              {/* Tech Details */}
              {template.tech && (
                <div className="grid md:grid-cols-2 gap-6">
                  {template.tech.map((tech, i) => {
                    const { title, description } = parseDescriptionText(tech);
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        {template.extras && template.extras.length > 0 && (
          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-50 to-pink-50 px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-violet-600" />
                  Premium Features
                </h2>
                <p className="text-gray-600 mt-2">
                  Everything you need to build a professional application
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {template.extras.map((feature, idx) => {
                    const { title, description } =
                      parseDescriptionText(feature);
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                      >
                        {/* Icône/Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                            {idx + 1}
                          </div>
                        </div>

                        {/* Contenu */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <BundleCTASection />
        <PaymentMethodSection />
        <FaqAccordion />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Start Building Today
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Production-ready code, modern architecture, and everything you
              need to ship fast
            </p>

            <div className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto">
              <DynamicBuyButton template={template} purchases={purchases} />
              {template.demoUrl && (
                <Link
                  href={template.demoUrl}
                  target="_blank"
                  className="flex-1 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full min-h-[56px] px-8 py-4 rounded-2xl text-lg border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-5 h-5" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Instant Download
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                TypeScript Ready
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Next.js 15
              </div>
            </div>
          </div>
        </section>
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
