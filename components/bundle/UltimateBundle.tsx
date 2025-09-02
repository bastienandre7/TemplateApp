"use client";

import {
  ArrowRight,
  Check,
  Clock,
  Package,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { signIn, useSession } from "next-auth/react";

export default function UltimateBundle() {
  const { data: session } = useSession();

  const templates = [
    {
      name: "LandKit",
      description: "Next.js Landing Page Starter Kit with 10+ components",
      price: "13",
      features: ["Next.js", "Tailwind CSS", "TypeScript", "10+ Components"],
    },
    {
      name: "ShopBase",
      description: "Complete e-commerce boilerplate with Stripe integration",
      price: "29",
      features: [
        "Stripe Integration",
        "Product Management",
        "Admin Dashboard",
        "Cart System",
      ],
    },
    {
      name: "BlogStarter",
      description: "Next.js blog starter kit powered by Sanity.io",
      price: "29",
      features: [
        "Sanity.io CMS",
        "SEO Optimized",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      name: "CoreSaaS",
      description: "Complete SaaS starter kit with authentication & billing",
      price: "29",
      features: [
        "Authentication",
        "Stripe Billing",
        "Admin Dashboard",
        "User Management",
      ],
    },
    {
      name: "SaaS Dark Template",
      description: "Modern dark-mode SaaS UI template",
      price: "19",
      features: ["Dark Mode", "Modern UI", "Responsive", "Fast Performance"],
    },
    {
      name: "Portfolio Template",
      description: "Professional developer portfolio template",
      price: "13",
      features: [
        "Next.js 15",
        "Professional Design",
        "Showcase Projects",
        "Contact Forms",
      ],
    },
    {
      name: "Dashboard Template",
      description: "Modern SaaS dashboard for admin panels",
      price: "13",
      features: [
        "Admin Panel",
        "Data Visualization",
        "User Management",
        "Clean UI",
      ],
    },
    {
      name: "Blog Template",
      description: "Minimalist blog template for personal sites",
      price: "19",
      features: [
        "Minimalist Design",
        "Fast Loading",
        "SEO Ready",
        "Mobile First",
      ],
    },
  ];

  const totalValue = templates.reduce(
    (sum, template) => sum + parseFloat(template.price.replace("€", "")),
    0
  );
  const bundlePrice = 49;
  const bundlePriceWithDiscount = bundlePrice * 0.5;

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto">
        {/* Hero Section */}
        <section className="text-center pt-32 mb-24 transition-all duration-1000 px-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Most Popular Bundle
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
            The Ultimate
            <br />
            <span className="text-blue-600">Developer Bundle</span>
          </h1>

          <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Launch faster with <strong>8 premium templates</strong> designed to
            help you build modern web applications. Everything you need to start
            your next project.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto mb-8 border">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-500 line-through mb-1">
                Regular Price: ${totalValue.toFixed(2)}
              </div>
              <div className="text-sm text-slate-500 mb-2">
                Bundle Price: ${bundlePrice}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ${bundlePriceWithDiscount.toFixed(2)}
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                Code BLOOM50: Save 50%
              </div>
            </div>

            <button
              onClick={() => {
                if (!session) {
                  signIn();
                } else if (session.user?.email) {
                  const email = encodeURIComponent(session.user.email);
                  const url = `https://bloom-tpl.lemonsqueezy.com/buy/a266262f-0b9f-4692-b8b5-f8c9dabc0344?checkout[email]=${email}`;
                  window.location.href = url;
                }
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Get the Bundle Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4" />
                Lifetime Updates
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Instant access
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-24 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              What&apos;s Inside the Bundle?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              8 premium templates worth {totalValue.toFixed(2)}€, yours for just{" "}
              {bundlePriceWithDiscount.toFixed(2)}€
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div
                key={template.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {template.name}
                  </h3>
                  <div className="text-lg font-bold text-blue-600">
                    ${template.price}
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{template.description}</p>
                <div className="space-y-2">
                  {template.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 relative overflow-hidden my-8">
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              BONUS
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Future Templates
            </h3>
            <p className="text-slate-600 mb-4">
              All upcoming templates included forever
            </p>
            <div className="text-lg font-bold text-green-600">FREE</div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-24 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
            Why Choose the Ultimate Bundle?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Launch 10x Faster
              </h3>
              <p className="text-slate-600">
                Skip months of development with production-ready templates. From
                idea to launch in days, not months.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Everything Included
              </h3>
              <p className="text-slate-600">
                Authentication, payments, dashboards, responsive design – every
                feature you need is already built.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Commercial License
              </h3>
              <p className="text-slate-600">
                Use in unlimited commercial projects. Build for clients, launch
                SaaS products, create agencies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I get lifetime access to all templates?",
                a: "Yes! One payment gives you lifetime access to all current templates plus any future ones we release.",
              },
              {
                q: "Can I use these for client projects?",
                a: "Absolutely! The commercial license allows unlimited use in client projects, SaaS products, and any commercial venture.",
              },
              {
                q: "How often do you release new templates?",
                a: "We typically release 2-3 new templates per month, all included free in your bundle.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center pb-32 max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join developers who chose to build faster and smarter
              </p>

              <div className="mb-6">
                <div className="text-sm opacity-75 line-through mb-1">
                  Regular Price: ${totalValue.toFixed(2)}
                </div>
                <div className="text-sm opacity-75 mb-1">
                  Bundle: ${bundlePrice}
                </div>
                <div className="text-3xl font-bold mb-2">
                  Only ${bundlePriceWithDiscount.toFixed(2)}
                </div>
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Code BLOOM50: 50% OFF
                </div>
              </div>

              <button
                onClick={() => {
                  if (!session) {
                    signIn();
                  } else if (session.user?.email) {
                    const email = encodeURIComponent(session.user.email);
                    const url = `https://bloom-tpl.lemonsqueezy.com/buy/a266262f-0b9f-4692-b8b5-f8c9dabc0344?checkout[email]=${email}`;
                    window.location.href = url;
                  }
                }}
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-4"
              >
                Get Instant Access – ${bundlePriceWithDiscount.toFixed(2)}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Instant download
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Unlimited Project Usage
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Lifetime updates
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
