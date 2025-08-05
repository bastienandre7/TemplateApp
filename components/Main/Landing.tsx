"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../Template/FaqAccordion";

export default function LandingPage() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Production Ready",
      description:
        "All templates are built with industry best practices and ready for deployment",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized for performance with Next.js, Tailwind CSS, and modern web standards",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SEO Optimized",
      description:
        "Built-in SEO optimizations to help your projects rank better in search engines",
    },
  ];

  const freeComponents = [
    {
      name: "Simple Footer",
      description:
        "Professional footer with organized links, newsletter signup, and social media integration.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/simple-footer.png",
      link: "/components/simple-footer",
    },
    {
      name: "Pricing Section",
      description:
        "Modern pricing table with monthly/yearly toggle, popular plan highlighting, and FAQ section.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/pricing-section.png",
      link: "/components/pricing-section",
    },
    {
      name: "Product Card",
      description:
        "E-commerce product card with ratings, pricing, wishlist, and cart functionality.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/product-card.png",
      link: "/components/product-card",
    },
  ];

  const templates = [
    {
      name: "ShopBase - Next.js E-commerce Boilerplate",
      category: "E-commerce",
      price: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/ShopBase%20Template/preview-1.png",
      features: ["Product Catalog", "Shopping Cart", "Checkout", "Admin Panel"],
      link: "/template/shopbase-nextjs-e-commerce-boilerplate",
    },
    {
      name: "BlogStarter – Next.js Tailwind CSS Blog Starter Kit",
      category: "Blog",
      price: 34.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/blogstarter-starterkit/preview-1-Ut1IqfyifGCJjOwKTY24nvq0VeytLw.png",
      features: [
        "Sanity CMS integration",
        "Dark mode",
        "Pre-built author and category pages",
        "Responsive Design",
      ],
      link: "/template/blogstarter-next-js-tailwind-css-blog-starter-kit",
    },
    {
      name: "CoreSaaS – Next.js Tailwind CSS SaaS Starter Kit & Boilerplate",
      category: "SaaS",
      price: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/coresaas-boilerplate/preview-1-YllIsxFDT84vIBXLZP9vYY0gsVNJ03.png",
      features: [
        "Authentication",
        "Stripe integration",
        "Admin dashboard",
        "Dark Mode",
      ],
      link: "/template/coresaas-next-js-tailwind-css-saas-starter-kit-boilerplate",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              10+ Premium Templates Available
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Premium Next.js Templates for Modern Web Apps
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Kickstart your next project with our collection of
              production-ready Next.js templates and free React components.
              Built with TypeScript, Tailwind CSS, and optimized for SEO and
              performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/template"
                className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-all hover:scale-105 flex items-center"
              >
                Browse Templates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/components"
                className="bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-all hover:scale-105 flex items-center"
              >
                Free Components
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Templates?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4 mr-2" />
              100% Free Components
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Building with Free Components
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  <span className="absolute top-4 left-4 bg-emerald-400 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                    <span className="text-2xl font-bold text-emerald-400">
                      FREE
                    </span>
                    <Link
                      href={`${component.link}`}
                      className="bg-emerald-400 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition-colors"
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
              href="/components"
              className="bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-colors inline-flex items-center mb-4"
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

      {/* Templates Preview */}
      <section id="templates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Templates
            </h2>
            <p className="text-xl text-gray-600">
              Complete solutions for your next big project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative border-b">
                  <Image
                    src={template.image || "/images/NoImage.jpg"}
                    alt={`${template.name} main preview`}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    quality={90}
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {template.category}
                  </span>
                  {template.price === 0 && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FREE
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={template.link} className="hover:underline">
                      {template.name}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      {template.price === 0 ? "FREE" : `${template.price}€`}
                    </span>
                    <Link
                      href={`${template.link}`}
                      className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      {template.price === 0 ? "Get Free" : "Buy Now"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/template"
              className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors inline-flex items-center"
            >
              View All Templates
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bundle Promotion Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-100">
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

      {/* Social Proof Alternative */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with Industry Standards
            </h2>
            <p className="text-xl text-gray-600">
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
      <section className="py-24 bg-radial from-[#c2bbf0] from-50% to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-800 mb-10">
            Join thousands of developers who trust our templates for their
            projects
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/template"
              className="bg-white text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors border"
            >
              Browse Templates
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
