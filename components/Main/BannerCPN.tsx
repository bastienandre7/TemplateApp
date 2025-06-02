"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeaderCPN from "../Header/HeaderCPN";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-yellow-100 border-b pt-4">
      <HeaderCPN />
      <div className="mx-auto max-w-screen-xl px-4 py-32 grid place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-center"
        >
          <h1 className="text-4xl text-black font-extrabold sm:text-6xl leading-tight">
            <span className="block">
              Build Faster with Tailwind CSS & Next.js
            </span>
            <span className="text-red-700 py-4 block">
              Premium Web Templates for SaaS, Dashboards & Portfolios
            </span>
          </h1>
          <p className="mt-4 max-w-xl sm:text-lg text-black mx-auto">
            Discover production-ready templates built with{" "}
            <strong>Tailwind CSS</strong> and <strong>Next.js</strong>. Clean
            design, fast performance, and easy customization for developers and
            startups.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Trusted by 500+ developers and indie makers.
          </p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="#templates"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 shadow-md"
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-700 bg-white px-8 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 shadow-sm"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
