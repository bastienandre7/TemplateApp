import { ArrowUp, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterCPN() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-blue-100/20" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-purple-200/50 to-transparent" /> */}

      <div className="relative mx-auto w-full max-w-screen-xl px-4 sm:px-6 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col items-start gap-4">
              <Link
                href="/"
                className="bg-white rounded-xl p-2 shadow hover:shadow-lg transition"
              >
                <Image
                  src="/icons/favicon.ico"
                  alt="BloomTPL Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </Link>

              <p className="text-gray-700 leading-relaxed max-w-sm text-base">
                The best Next.js templates for modern web applications.
                <br />
                <span className="inline-flex items-center gap-2 text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-lg mt-2">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-1"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  Deploy faster, code less.
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wide">
                Your Feedback
              </h3>
              <a
                href="https://fr.trustpilot.com/review/bloomtpl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-4 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Review us on
                <Image
                  src="/svg/trustpilot-logo-white-icon.svg"
                  alt="Trustpilot"
                  width={100}
                  height={25}
                  className="inline-block"
                />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Templates */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Templates
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/nextjs-templates"
                    className="text-gray-600 hover:text-purple-400 transition-colors group flex items-center gap-2"
                  >
                    <span>All Templates</span>
                    <span className="bg-purple-600/20 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                      10+
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/saas"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    SaaS Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/e-commerce"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    E-Commerce Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/landing-page"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Landing Page Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/blog"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Blog Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/dashboard"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Dashboard Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/portfolio"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Portfolio Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/restaurant"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Restaurant Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/agency"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Agency Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/free"
                    className="text-gray-600 hover:text-purple-400 transition-colors block"
                  >
                    Free Templates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Components */}
            {/* <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Components
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/nextjs-components"
                    className="text-gray-600 hover:text-blue-400 transition-colors group flex items-center gap-2"
                  >
                    <span>All Components</span>
                    <span className="bg-blue-600/20 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                      10+
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/pricing-section"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Pricing Section
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/product-card"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Product Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-footer"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Simple Footer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-header"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Simple Header
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/hero-section"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/contact-form"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/smart-loading-button"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Smart Loading Button
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-search-input"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Simple Search Input
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/notification-card"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Notification Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/advanced-button-group"
                    className="text-gray-600 hover:text-blue-400 transition-colors block"
                  >
                    Advanced Button Group
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Resources & Other sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Resources */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/docs"
                      className="text-gray-600 hover:text-green-400 transition-colors"
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-green-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-600 hover:text-green-400 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/license"
                      className="text-gray-600 hover:text-green-400 transition-colors"
                    >
                      License
                    </Link>
                  </li>
                </ul>

                {/* Social Media */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Follow us
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://x.com/BloomTPL"
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-400 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow BloomTPL on Twitter"
                    >
                      <div className="p-2 bg-gray-200/50 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                        <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide">
                  Legal
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="/legal/privacy-policy"
                      className="text-gray-600 hover:underline transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/legal/refund-policy"
                      className="text-gray-600 hover:underline transition-colors"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/legal/terms-of-use"
                      className="text-gray-600 hover:underline transition-colors"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/legal/legal-notice"
                      className="text-gray-600 hover:underline transition-colors"
                    >
                      Legal Notice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-600">
                © 2025{" "}
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors font-medium"
                >
                  BloomTPL™
                </Link>
                . All Rights Reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500 flex items-center gap-2">
                <span className="animate-pulse">❤️</span>
                Made with love for developers
              </span>

              <button
                onClick={scrollToTop}
                className="p-2  hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500/50 rounded-lg text-gray-800 hover:text-purple-400 transition-all hover:scale-105 group"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
