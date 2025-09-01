import { ArrowUp, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterCPN() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-screen-xl p-6 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative">
                <span className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  BloomTPL
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {/* <Image
                  src="/images/logo/bloom-white.png"
                  alt="logo bloom"
                  height="75"
                  width="241"
                /> */}
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-sm">
              The best Next.js templates for modern web applications.
              <span className="text-purple-400 font-medium">
                Deploy faster, code less.
              </span>
            </p>

            {/* Newsletter signup */}
            {/* <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                Newsletter
              </h3>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Links sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Templates */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Templates
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/nextjs-templates"
                    className="text-gray-400 hover:text-purple-400 transition-colors group flex items-center gap-2"
                  >
                    <span>All Templates</span>
                    <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-0.5 rounded-full">
                      10+
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/saas"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    SaaS Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/e-commerce"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    E-Commerce Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/landing-page"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    Landing Page Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/blog"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    Blog Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/dashboard"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    Dashboard Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/portfolio"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    Portfolio Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-templates/category/restaurant"
                    className="text-gray-400 hover:text-purple-400 transition-colors block"
                  >
                    Restaurant Templates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Components */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Components
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/nextjs-components"
                    className="text-gray-400 hover:text-blue-400 transition-colors group flex items-center gap-2"
                  >
                    <span>All Components</span>
                    <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-0.5 rounded-full">
                      10+
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/pricing-section"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Pricing Section
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/product-card"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Product Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-footer"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Simple Footer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-header"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Simple Header
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/hero-section"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/contact-form"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/smart-loading-button"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Smart Loading Button
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/simple-search-input"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Simple Search Input
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/notification-card"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Notification Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs-components/advanced-button-group"
                    className="text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    Advanced Button Group
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Other sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/docs"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/license"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      License
                    </Link>
                  </li>
                </ul>

                {/* Social Media */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Follow us
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://x.com/BloomTPL"
                      className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow BloomTPL on Twitter"
                    >
                      <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                        <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm">Twitter</span>
                    </a>
                    <a
                      href="https://www.instagram.com/bloomtpl/"
                      className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow BloomTPL on Instagram"
                    >
                      <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-pink-500/10 transition-colors">
                        <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                  Legal
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund-policy"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-of-use"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/legal-notice"
                      className="text-gray-400 hover:text-white transition-colors"
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">
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
                className="p-2 bg-gray-800/50 hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all hover:scale-105 group"
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
