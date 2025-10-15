"use client";

import SearchModal from "./SearchModal";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  demoUrl?: string;
  lemonLink: string;
  type: "template" | "component";
  category: string;
  slug?: string;
  created_at: string;
  openGraphImage?: string;
  categories: string[];
};

export default function HeroBanner({ products }: { products: Product[] }) {
  return (
    <section
      className="relative pt-24"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="relative pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:pt-20">
          <div className="text-left md:text-center">
            <h1 className="text-foreground mb-4 text-4xl font-semibold leading-tight tracking-tight text-balance lg:text-5xl lg:leading-[1.1]">
              Best Free & Premium Next.js Templates Built with Tailwind CSS
            </h1>

            <h2 className="text-foreground/90 mb-6 text-xl font-medium tracking-tight text-balance lg:text-2xl">
              Next.js 15 Templates for SaaS, Blogs, Portfolios, and E-Commerce
            </h2>

            <p className="mx-auto max-w-3xl text-muted-foreground mb-10 leading-relaxed font-normal">
              Whether you&apos;re building a SaaS app, a portfolio, or an online
              store, our collection of Next.js templates gives you
              production-ready designs built with Tailwind CSS, React, and
              TypeScript. Each template is optimized for performance, SEO, and
              easy customization — so you can focus on launching faster.
              Discover both free and premium Next.js 15 templates tailored for
              developers, startups, and agencies.
            </p>

            <SearchModal products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
