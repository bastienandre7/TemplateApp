import ComponentsClient from "@/components/components/ComponentsClient";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Next.js & Tailwind CSS Components Library | BloomTPL",
  description:
    "Beautiful, responsive components built with Tailwind CSS and React. Copy the code and paste into your project. 100% free.",
  keywords: [
    "nextjs",
    "react",
    "components",
    "tailwind",
    "free",
    "ui",
    "library",
  ],
  alternates: {
    canonical: "https://bloomtpl.com/nextjs-components",
  },
  openGraph: {
    title: "Free Next.js Components | BloomTPL",
    description:
      "Beautiful, responsive components built with Tailwind CSS and React. Copy the code and paste into your project.",
    type: "website",
    url: "https://bloomtpl.com/nextjs-components",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Next.js Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Next.js Components | BloomTPL",
    description:
      "Beautiful, responsive components built with Tailwind CSS and React.",
    images: ["/images/og-components.jpg"],
  },
};

export default async function ComponentsPage() {
  const data = await prisma.component.findMany();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-40 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-4xl">
            Free Next.js & Tailwind CSS Components Library
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Beautiful, responsive components built with{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span> and{" "}
            <span className="text-primary font-semibold">React</span>. Copy the
            code and paste into your project.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              100% Free
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copy & Paste
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Tailwind CSS
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              TypeScript Ready
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-purple-800 mb-2">
              🎉 Want more? Check out our{" "}
              <span className="font-semibold">Premium Templates</span>
            </p>
            <Link
              href="/nextjs-templates"
              className="text-purple-600 hover:text-purple-700 font-medium text-sm"
            >
              View Templates →
            </Link>
          </div>
        </div>
      </div>

      <ComponentsClient components={data} />

      {/* Bottom CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Than Components?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our premium Next.js templates with complete designs,
            authentication, and more.
          </p>
          <Button variant="default" asChild>
            <Link
              href="/nextjs-templates"
              className="inline-flex items-center gap-2 px-10 py-6 rounded-xl font-semibold text-lg"
            >
              View Premium Templates
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
