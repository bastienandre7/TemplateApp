import BannerCPN from "@/components/Main/BannerCPN";
import MainContainer from "@/components/Main/MainContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
  description:
    "Launch faster with clean, responsive templates for SaaS, dashboards, portfolios, and more — built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://www.bloomtpl.com"),
  alternates: {
    canonical: "https://www.bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
    description:
      "Launch faster with premium Tailwind CSS & Next.js templates. Ideal for SaaS products, dashboards, and developer portfolios. Built to be clean and ready.",
    url: "https://www.bloomtpl.com",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL - Free & Premium Next.js Templates & Starter Kits",
    description:
      "Launch faster with premium Tailwind CSS & Next.js templates. Ideal for SaaS products, dashboards, and developer portfolios. Built to be clean and ready.",
    images: ["https://www.bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="min-h-screen bg-white">
      <BannerCPN />
      <MainContainer products={data} />
      <section className="max-w-2xl mx-auto mt-16 mb-32 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">FAQ – BloomTPL</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">What is BloomTPL?</h3>
            <p>
              BloomTPL offers a curated collection of free and premium Next.js &
              Tailwind CSS templates for SaaS, dashboards, portfolios, and more.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Are the templates free to use?</h3>
            <p>
              Some templates are free, and some are premium. You can filter and
              browse all available options on the homepage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Can I use these templates for commercial projects?
            </h3>
            <p>
              Yes! All templates can be used for personal and commercial
              projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
