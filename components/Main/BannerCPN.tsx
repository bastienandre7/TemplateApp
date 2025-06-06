"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeaderCPN from "../Header/HeaderCPN";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b pt-4">
      <HeaderCPN />
      <div className="mx-auto max-w-screen-lg px-4 py-32 grid place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Premium Next.js Templates & Starter Kits
          </h1>
          <p className="mt-4 max-w-2xl text-center text-gray-800 sm:text-lg mx-auto">
            Launch faster with clean, responsive templates for SaaS, dashboards, portfolios, and more — built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
          </p>
          <p className="mt-4 text-sm text-gray-600">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-md"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-600 bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-sm"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
