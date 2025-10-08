import { Check, Shield, X, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - AI Component Builder | BloomTPL",
  description:
    "Choose your AI Component Builder plan. Free tier with 1 request per day or Pro plan at $9.99/month with 100 daily requests and 7-day free trial.",
  keywords: [
    "pricing",
    "AI component builder",
    "subscription",
    "Next.js generator",
    "React components",
    "pro plan",
  ],
  alternates: {
    canonical: "https://bloomtpl.com/pricing",
  },
  openGraph: {
    title: "Pricing - AI Component Builder | BloomTPL",
    description:
      "Choose your AI Component Builder plan. Free tier with 1 request per day or Pro plan at $9.99/month with 100 daily requests and 7-day free trial.",
    url: "https://bloomtpl.com/pricing",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-pricing.png", // Crée cette image ou utilise /og-image.png
        alt: "AI Component Builder Pricing Plans",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - AI Component Builder | BloomTPL",
    description:
      "Choose your AI Component Builder plan. Free tier with 1 request per day or Pro plan at $9.99/month with 100 daily requests and 7-day free trial.",
    images: ["/images/og-pricing.png"],
    creator: "@BloomTPL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Component Builder",
    description: "AI-powered React component generation service",
    provider: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://bloomtpl.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Component Builder Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "USD",
          description: "1 AI request per day",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "9.99",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "9.99",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
          description: "100 AI requests per day with 7-day free trial",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  return (
    <>
      <div className="min-h-screen py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 mt-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start building React components with AI. Choose the plan that fits
              your development needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Plan
                </h2>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">
                  Perfect for trying out the AI builder
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">1 AI request per day</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Next.js 15 components</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">TypeScript support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tailwind CSS styling</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Copy to clipboard</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">Priority support</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">
                    Advanced component library
                  </span>
                </li>
              </ul>

              <Link href="/ai-builder" className="block">
                <button className="w-full bg-gray-100 text-gray-800 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Start Free
                </button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-indigo-200 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-xl">
                Most Popular
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Pro Plan
                </h2>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-indigo-600">
                    $9.99
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium inline-block mb-2">
                  🎉 7-day free trial
                </div>
                <p className="text-gray-600">
                  For serious developers and teams
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">
                    100 AI requests per day
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Next.js 15 components</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">TypeScript support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tailwind CSS styling</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Copy to clipboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Advanced component library
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Cancel anytime</span>
                </li>
              </ul>

              <a href="https://bloom-tpl.lemonsqueezy.com/buy/a626e413-5644-48ad-a65b-e5b398d145b7">
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start 7-Day Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our AI Builder?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate production-ready components in seconds with our
                  advanced AI
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <p className="text-gray-600">
                  All components follow Next.js 15 and React best practices with
                  TypeScript
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-600">
                  Every component is mobile-first and fully responsive with
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Can I cancel my Pro subscription anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. No
                  questions asked, no cancellation fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2">
                  What happens after my free trial ends?
                </h3>
                <p className="text-gray-600">
                  After your 7-day free trial, you&apos;ll be automatically
                  charged $9.99/month unless you cancel before the trial ends.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Do requests reset daily?
                </h3>
                <p className="text-gray-600">
                  Yes, your daily request limit resets every 24 hours at
                  midnight UTC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
