import {
  ArrowRight,
  CheckCircle,
  Code,
  CreditCard,
  Download,
  FileText,
  Rocket,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Docs() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Perfect Template",
      description:
        "Browse our curated collection of premium Next.js templates designed for modern web applications.",
      image: "/images/doc/step-1.png",
      icon: ShoppingCart,
      details:
        "Explore templates for SaaS platforms, blogs, portfolios, e-commerce stores, and more. Each template is crafted with the latest technologies and best practices.",
    },
    {
      number: "02",
      title: "Secure Payment Processing",
      description:
        "Complete your purchase safely through our trusted payment partner Lemon Squeezy.",
      image: "/images/doc/step-2.png",
      icon: CreditCard,
      details:
        "Pay securely with credit cards, PayPal, or other supported methods. Instant email confirmation and download access upon successful payment.",
    },
    {
      number: "03",
      title: "Instant Download Access",
      description:
        "Get immediate access to your template files through email and your personal dashboard.",
      image: "/images/doc/step-3.png",
      icon: Download,
      details:
        "Access your purchased templates anytime from your BloomTPL dashboard. Download links are always available for future use.",
    },
    {
      number: "04",
      title: "Quick Setup & Installation",
      description:
        "Install dependencies and start your development server in just a few commands.",
      image: "/images/doc/step-4.png",
      icon: Code,
      details:
        "Unzip, install dependencies with npm/yarn, and run the development server. Full documentation included with every template.",
    },
    {
      number: "05",
      title: "Customize & Deploy",
      description:
        "Personalize your template and deploy to your favorite hosting platform.",
      image: "/images/doc/step-5.png",
      icon: Rocket,
      details:
        "Built for popular platforms like Vercel, Netlify, and others. Easy deployment with optimized configurations included.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6">
              <FileText className="h-3 w-3 lg:h-4 lg:w-4" />
              Documentation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-4">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Get your premium Next.js template up and running in minutes.
              Follow our simple 5-step process from purchase to deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div
                    className={`${isEven ? "lg:col-start-2" : ""} space-y-4 lg:space-y-6 order-2 lg:order-none`}
                  >
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-xl">
                        <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <span className="text-3xl lg:text-4xl font-bold text-gray-600">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
                        {step.description}
                      </p>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {step.details}
                      </p>
                    </div>

                    {step.number === "04" && (
                      <div className="bg-gray-900 rounded-xl p-4 lg:p-6 mt-4 lg:mt-6">
                        <div className="flex items-center gap-2 mb-3 lg:mb-4">
                          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-400 text-xs lg:text-sm ml-2">
                            Terminal
                          </span>
                        </div>
                        <pre className="text-green-400 text-xs lg:text-sm leading-relaxed overflow-x-auto">
                          <code>{`# Install dependencies
npm install

# Run the development server  
npm run dev

# Your app is now running at http://localhost:3000`}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div
                    className={`${isEven ? "lg:col-start-1" : ""} order-1 lg:order-none`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl lg:rounded-2xl blur-2xl lg:blur-3xl"></div>
                      <div className="relative bg-white rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl lg:shadow-2xl border border-gray-100">
                        <Image
                          src={step.image}
                          alt={`Step ${step.number}: ${step.title}`}
                          width={800}
                          height={500}
                          className="rounded-lg lg:rounded-xl w-full h-auto"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6">
            <Zap className="h-3 w-3 lg:h-4 lg:w-4" />
            Quick Reference
          </div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">
            Essential Commands
          </h2>
          <p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8">
            Everything you need to get started with your new template
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6 text-left">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                Install
              </h3>
              <code className="text-green-400 text-xs lg:text-sm break-all">
                npm install
              </code>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6 text-left">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                Development
              </h3>
              <code className="text-green-400 text-xs lg:text-sm break-all">
                npm run dev
              </code>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6 text-left">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                Build
              </h3>
              <code className="text-green-400 text-xs lg:text-sm break-all">
                npm run build
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 xl:p-12">
            <CheckCircle className="h-12 w-12 lg:h-16 lg:w-16 text-white mx-auto mb-4 lg:mb-6" />
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 lg:mb-4">
              You&apos;re All Set!
            </h2>
            <p className="text-purple-100 text-sm lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              You now have everything you need to install, customize, and launch
              your premium Next.js template. Start building something amazing
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Link
                href="/#templates"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl hover:bg-gray-50 transition-colors text-sm lg:text-base"
              >
                Browse Templates
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl hover:bg-purple-800 transition-colors border border-purple-500 text-sm lg:text-base"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
