"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Laptop,
  Lock,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../Template/FaqAccordion";
import { Button } from "../ui/button";

export default function LandingPage() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Production Ready",
      description:
        "Launch faster with templates built on best practices and fully ready for deployment.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with Next.js 15 and Tailwind CSS, ensuring smooth performance.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SEO Optimized",
      description:
        "Preconfigured for better rankings with clean code, metadata, and performance boosts.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Fully Customizable",
      description:
        "Easily adapt every section to match your brand and project requirements.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Responsive by Default",
      description:
        "Designed to look stunning on any device, from mobile to desktop.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Built with the latest Next.js & Tailwind CSS standards for long-term maintainability.",
    },
  ];

  const freeComponents = [
    {
      name: "Simple Footer",
      description:
        "Professional footer with organized links, newsletter signup, and social media integration.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/simple-footer.png",
      link: "/nextjs-components/simple-footer",
    },
    {
      name: "Pricing Section",
      description:
        "Modern pricing table with monthly/yearly toggle, popular plan highlighting, and FAQ section.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/pricing-section.png",
      link: "/nextjs-components/pricing-section",
    },
    {
      name: "Product Card",
      description:
        "E-commerce product card with ratings, pricing, wishlist, and cart functionality.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/product-card.png",
      link: "/nextjs-components/product-card",
    },
  ];

  const templates = [
    {
      name: "LandKit - Next.js Landing Page Starter Kit",
      slug: "landkit-nextjs-landing-page-starter-kit",
      description:
        "A modular Next.js landing page kit designed for startups, SaaS, and makers. Includes 10+ production-ready components styled with Tailwind CSS.",
      category: "Landing Page",
      price: 14.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/Landkit%20Landing%20Page/og-image.png",
      link: "/nextjs-templates/landkit-nextjs-landing-page-starter-kit",
      demoUrl: "https://bloomtpl-landkit-landing-page.vercel.app/",
    },
    {
      name: "ShopBase - Next.js E-commerce Boilerplate",
      slug: "shopbase-nextjs-e-commerce-boilerplate",
      description:
        "Production-ready Next.js e-commerce boilerplate with Stripe, cart, product management, and admin dashboard. Launch your online store in minutes.",
      category: "E-commerce",
      price: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/ShopBase%20Template/og.png",
      link: "/nextjs-templates/shopbase-nextjs-e-commerce-boilerplate",
      demoUrl: "https://bloomtpl-shopbase-template.vercel.app/",
    },
    {
      name: "BlogStarter – Next.js Tailwind CSS Blog Starter Kit",
      slug: "blogstarter-next-js-tailwind-css-blog-starter-kit",
      description:
        "BloomTPL BlogStarter is a modern blog starter kit with Next.js, Sanity.io & Tailwind CSS. Fast, customizable, and production-ready.",
      category: "Blog",
      price: 34.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/blogstarter-starterkit/og.png",
      link: "/nextjs-templates/blogstarter-next-js-tailwind-css-blog-starter-kit",
      demoUrl: "https://bloomtpl-blogstarter-starter-kit.vercel.app/",
    },
    {
      name: "CoreSaaS – Next.js Tailwind CSS SaaS Boilerplate",
      slug: "coresaas-next-js-tailwind-css-saas-boilerplate",
      description:
        "Launch your SaaS faster with a complete starter kit: authentication, Stripe billing, admin dashboard, and user management – built with Next.js and Tailwind CSS.",
      category: "SaaS",
      price: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/coresaas-boilerplate/og.png",
      link: "/nextjs-templates/coresaas-next-js-tailwind-css-saas-boilerplate",
      demoUrl: "https://bloomtpl-coresaas-template.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Colonne texte */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-5xl">
                Premium Next.js Templates, Boilerplates, Starter Kits and
                Components
              </h1>
              <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
                Kickstart your next project with our collection of
                production-ready Next.js templates and free React components.
                Designed with TypeScript and Tailwind CSS, every template is
                responsive, customizable, and built to scale. Optimized for SEO
                and blazing-fast performance, our starter kits help you save
                time, launch faster, and focus on growing your product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/nextjs-templates"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all hover:scale-105 flex items-center"
                >
                  Browse Templates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/nextjs-components"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center"
                >
                  Free Components
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Colonne mockups */}
            <div className="flex-1 relative flex justify-center items-center">
              <Image
                src="/images/banner.png"
                alt="Desktop Banner Image"
                width={800}
                height={640}
                className="shadow-2xl rounded-xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-[43px] font-bold text-gray-900 mb-4 tracking-tight">
              Featured Templates
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore a curated selection of premium Next.js templates designed
              to help you launch faster, save development time, and build
              stunning web apps with ease.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link
                href="/nextjs-templates/category/saas"
                className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition"
              >
                SaaS Templates
              </Link>
              <Link
                href="/nextjs-templates/category/e-commerce"
                className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition"
              >
                E-commerce
              </Link>
              <Link
                href="/nextjs-templates/category/portfolio"
                className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition"
              >
                Portfolios
              </Link>
              <Link
                href="/nextjs-templates/category/blog"
                className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition"
              >
                Blog
              </Link>
              <Link
                href="/nextjs-templates/category/landing-page"
                className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition"
              >
                Landing Pages
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {templates.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
                >
                  <Link
                    href={`/nextjs-templates/${item.slug}`}
                    className="block relative aspect-[1200/630] bg-gray-50 overflow-hidden"
                  >
                    <Image
                      src={item.image || "/images/NoImage.jpg"}
                      alt={`${item.name} main preview`}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      quality={90}
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                      <Link
                        className="text-lg font-semibold mb-2 text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                        href={`/nextjs-templates/${item.slug}`}
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description ||
                          "A beautifully crafted template ready for your next project."}
                      </p>

                      {/* Tech tags + Category */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded font-medium">
                          {item.category.charAt(0).toUpperCase() +
                            item.category.slice(1)}
                        </span>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          Next.js
                        </span>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          Tailwind
                        </span>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          TypeScript
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="default"
                        className="flex-1 p-0"
                      >
                        <Link
                          href={`${item.demoUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center cursor-pointer py-2 font-semibold text-zinc-700"
                        >
                          Live Demo
                        </Link>
                      </Button>

                      <Button
                        variant="outline"
                        className="flex-1 cursor-pointer"
                        size="default"
                      >
                        <Link
                          href={`${item.link}`}
                          className="w-full text-center py-2 font-semibold text-zinc-700"
                        >
                          {item.price === 0
                            ? "Free"
                            : `Buy Now - $${item.price}`}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/nextjs-templates"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              View All Templates
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-[43px] font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Our Templates?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every template is crafted with attention to detail and modern
              development practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Components Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-[43px] font-bold text-gray-900 mb-4 tracking-tight">
              Start Building with Free Components
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful, responsive components built with Tailwind CSS and
              React. Copy the code and paste into your project.
            </p>
          </div>

          {/* Free Components Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {freeComponents.map((component) => (
              <div
                key={component.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 relative flex items-center justify-center">
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  <span className="absolute top-4 left-4 test text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {component.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">FREE</span>
                    <Link
                      href={`${component.link}`}
                      className="test text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/nextjs-components"
              className="test text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors inline-flex items-center mb-4"
            >
              Browse All Free Components
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <p className="text-sm text-gray-500">
              No signup required • Copy & paste ready • Always free
            </p>
          </div>
        </div>
      </section>

      {/* Bundle Promotion Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-200 text-yellow-900 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Special Offer
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Get All Templates in One Powerful Bundle
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Access <strong>8 premium templates</strong> including SaaS,
            eCommerce, Portfolio, Blog & more – all for{" "}
            <strong className="text-green-600">just $49</strong>.
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

      {/* Social Proof Alternative */}
      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-[43px] font-bold text-gray-900 mb-4 tracking-tight">
              Built with Industry Standards
            </h2>
            <p className="text-gray-600">
              Every template follows modern development best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-xl mb-4 mx-auto">
                <Image
                  src="/svg/typescript.svg"
                  alt="TypeScript"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600">
                Type-safe code for better development experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-50 rounded-xl mb-4 mx-auto">
                <Image
                  src="/svg/tailwind.svg"
                  alt="Tailwind CSS"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid styling
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-xl mb-4 mx-auto">
                <Image
                  src="/svg/nextjs-icon.svg"
                  alt="Next.js"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Next.js
              </h3>
              <p className="text-gray-600">
                Latest React framework with App Router
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />

      {/* CTA Section */}
      <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-[43px] font-bold text-gray-900 mb-6 tracking-tight">
            Start Building Your Next Project Today
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Choose from our collection of premium Next.js templates and launch
            faster than ever before
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/nextjs-templates"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group"
            >
              Browse All Templates
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </Link>
            <Link
              href="/nextjs-components"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-red-700 hover:text-red-700 transition-all duration-200"
            >
              Try Free Components
            </Link>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
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
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              TypeScript & Tailwind
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
