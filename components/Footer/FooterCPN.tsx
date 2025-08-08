import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterCPN() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center group">
              <span className="self-center text-2xl font-bold whitespace-nowrap text-white group-hover:text-purple-400 transition-colors">
                BloomTPL
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              The best Next.js templates for modern web applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Templates
              </h2>
              <ul className="text-gray-400 font-medium text-sm">
                <li className="mb-3">
                  <Link
                    href="/nextjs-templates"
                    className="hover:text-purple-400 transition-colors"
                  >
                    All Templates
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/nextjs-templates/nextjs-tailwind-css-saas-template"
                    className="hover:text-purple-400 transition-colors"
                  >
                    SaaS Template
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/nextjs-templates/nextjs-tailwind-css-e-commerce-template"
                    className="hover:text-purple-400 transition-colors"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/nextjs-templates/nextjs-tailwind-css-blog-template"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Blog Template
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Components
              </h2>
              <ul className="text-gray-400 font-medium text-sm">
                <li className="mb-3">
                  <Link
                    href="/components"
                    className="hover:text-purple-400 transition-colors"
                  >
                    All Components
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/components/contact-form"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact Form
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/components/simple-footer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Simple Footer
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/components/hero-section"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Hero Section
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium text-sm">
                <li className="mb-3">
                  <Link
                    href="/docs"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Docs
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/blog"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/license"
                    className="hover:text-purple-400 transition-colors"
                  >
                    License
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://x.com/BloomTPL"
                    className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bloomtpl/"
                    className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/privacy-policy"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/terms-of-use"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/legal-notice"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2025{" "}
            <Link
              href="/"
              className="hover:text-purple-400 transition-colors text-gray-400"
            >
              BloomTPL™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="text-xs text-gray-500">
              Made with ❤️ for developers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
