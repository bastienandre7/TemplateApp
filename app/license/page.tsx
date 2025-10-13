import { Button } from "@/components/ui/button";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "License Agreement - Templates Usage Rights | BloomTPL",
  description:
    "Learn about usage rights for BloomTPL templates, including commercial use, redistribution, and modification rules.",
  alternates: {
    canonical: "https://bloomtpl.com/license",
  },
  openGraph: {
    title: "License Agreement - Templates Usage Rights | BloomTPL",
    description:
      "Learn about usage rights for BloomTPL templates, including commercial use, redistribution, and modification rules.",
    url: "https://bloomtpl.com/license",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL License Agreement OG Image",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "License Agreement - Templates Usage Rights | BloomTPL",
    description:
      "Learn about usage rights for BloomTPL templates, including commercial use, redistribution, and modification rules.",
    creator: "@BloomTPL",
    images: ["https://bloomtpl.com/og/license.jpg"],
  },
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-8">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Legal Information
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Template <span className="text-primary">License</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Clear and fair licensing terms for all BloomTPL templates.
            Understand your rights and get the most out of your purchase.
          </p>
        </div>
      </div>

      {/* License Content */}
      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quick Summary */}
            <div className="mb-12 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                What You Can Do
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-green-800 border-collapse">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-2 px-4 font-semibold text-left">
                        License Type
                      </th>
                      <th className="py-2 px-4 font-semibold text-left">
                        Allowed Projects
                      </th>
                      <th className="py-2 px-4 font-semibold text-left">
                        Commercial Use
                      </th>
                      <th className="py-2 px-4 font-semibold text-left">
                        Client Work
                      </th>
                      <th className="py-2 px-4 font-semibold text-left">
                        Lifetime Updates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 font-bold text-yellow-700">
                        Solo
                      </td>
                      <td className="py-2 px-4">1 project</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-bold text-blue-700">
                        Studio
                      </td>
                      <td className="py-2 px-4">Up to 5 projects</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-bold text-purple-700">
                        Unlimited
                      </td>
                      <td className="py-2 px-4">Unlimited projects</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                      <td className="py-2 px-4">✔️</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed License Terms */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                BloomTPL License Agreement
              </h2>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    1. License Grant
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By purchasing a BloomTPL template, you are granted a{" "}
                    <strong>non-exclusive, worldwide license</strong> to use,
                    modify, and distribute the template according to the terms
                    outlined below.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This license is perpetual and does not expire. You can use
                    the template for as long as you need, on as many projects as
                    you want.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Permitted Uses
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      ✅ You MAY:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Use the template for personal and commercial projects
                      </li>
                      <li>• Modify, customize, and create derivative works</li>
                      <li>
                        • Use for client work and charge for your services
                      </li>
                      <li>• Use for SaaS applications and products</li>
                      <li>
                        • Use for websites, web applications, and mobile apps
                      </li>
                      <li>• Remove or modify BloomTPL branding/credits</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Restrictions
                  </h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-red-900 mb-3">
                      ❌ You MAY NOT:
                    </h4>
                    <ul className="space-y-2 text-red-800">
                      <li>
                        • Resell, redistribute, or sublicense the original
                        template files
                      </li>
                      <li>
                        • Share your BloomTPL account credentials with others
                      </li>
                      <li>
                        • Create competing template marketplaces using our
                        templates
                      </li>
                      <li>• Claim ownership of the original template design</li>
                      <li>
                        • Use templates to create substantially similar
                        competing products
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    4. Support & Updates
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your license includes <strong>lifetime access</strong> to
                    template updates and improvements. You&apos;ll be notified
                    when updates are available through your BloomTPL account.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Technical support is provided through our documentation and
                    support channels for legitimate questions about template
                    usage.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5. Liability & Warranty
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Templates are provided &quot;as is&quot; without warranty of
                    any kind. BloomTPL shall not be liable for any damages
                    arising from the use of our templates. You use our templates
                    at your own risk.
                  </p>
                </section>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-primary/10 border border-primary rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions About Licensing?
              </h3>
              <p className="text-gray-700 mb-4">
                If you have specific questions about how you can use BloomTPL
                templates, or need clarification on any licensing terms,
                we&apos;re here to help.
              </p>
              <Button variant="default" asChild>
                <Link href="/contact" className="inline-flex items-center">
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-2"
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
