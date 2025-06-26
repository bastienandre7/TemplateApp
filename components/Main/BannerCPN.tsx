"use client";

import Link from "next/link";
import HeaderCPN from "../Header/HeaderCPN";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b pt-4">
      <HeaderCPN />
      <div className="mx-auto max-w-screen-lg px-4 py-24 sm:py-32 grid place-items-center">
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 drop-shadow-md">
            Free & Premium Next.js Templates & Starter Kits for Modern Web Apps
          </h1>
          <p className="mt-6 max-w-3xl text-center text-gray-800 mx-auto">
            Discover a curated collection of premium and free Next.js templates
            to launch your SaaS apps, dashboards, portfolios, and more. All
            templates are handcrafted with Tailwind CSS and optimized for
            performance, accessibility, and ease of customization. Whether
            you&apos;re building a startup or a side project, BloomTPL helps you
            move faster with clean and modern design.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs text-gray-600 bg-white/80 px-3 py-1 rounded-full shadow">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Trusted by developers and indie makers
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-gray-600 bg-white/80 px-3 py-1 rounded-full shadow">
              <svg
                className="w-4 h-4 text-indigo-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12l2 2 4-4"
                />
              </svg>
              Lifetime updates
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="#templates"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg"
            >
              Browse Templates
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-indigo-600 bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
