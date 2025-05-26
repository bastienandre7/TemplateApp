import Link from "next/link";
import HeaderCPN from "../Header/HeaderCPN";

export default function BannerCPN() {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-yellow-100 border-b pt-4">
      <HeaderCPN />
      <div className="mx-auto max-w-screen-xl px-4 py-32 grid place-items-center">
        <div className="w-full text-center">
          <h1 className="text-4xl text-black font-extrabold sm:text-6xl">
            Tailwind Templates for SaaS, Dashboards, Portfolios & More
            <strong className="font-extrabold text-red-700 sm:block py-4">
              Premium Next.js Designs by BloomTPL
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-lg text-black mx-auto">
            Build faster with BloomTPL. Explore high-quality Tailwind CSS
            templates for SaaS applications, admin dashboards, and developer
            portfolios — all built with Next.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              className="block rounded-md bg-red-700 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-600 sm:w-auto"
              href="#templates"
            >
              Explore Templates
            </Link>
            <Link
              className="block bg-white rounded-md px-12 py-3 text-sm font-medium text-red-700 shadow-sm hover:bg-gray-100 sm:w-auto"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
