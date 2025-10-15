import CategoryPage from "@/components/TemplateCategory/CategoryPage";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Define Product type (adjust fields as needed or import from your types module)
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
  categories: string;
  slug?: string;
  created_at: string;
  openGraphImage?: string;
};

export async function generateStaticParams() {
  const categories = await prisma.template.findMany({
    select: { categoriesSlugs: true },
  });

  const allSlugs = [
    ...new Set(categories.flatMap((tpl) => tpl.categoriesSlugs)),
  ];

  return allSlugs.map((category) => ({ category }));
}

const categoryMeta: Record<string, { title: string; description: string }> = {
  saas: {
    title: "SaaS Next.js Templates – Launch Your Startup Faster",
    description:
      "Browse premium SaaS templates built with Next.js and Tailwind CSS. Includes authentication, billing, and dashboards to help you launch your startup faster.",
  },
  "landing-page": {
    title: "Landing Page Next.js Templates – Modern & Responsive",
    description:
      "Discover modern Next.js landing page templates designed for startups, products, and marketing campaigns. Clean, fast, and fully responsive.",
  },
  blog: {
    title: "Blog Next.js Templates – Minimal & SEO-Friendly",
    description:
      "Minimalist and fast-loading Next.js blog templates perfect for personal blogs, editorial sites, and content-driven projects.",
  },
  portfolio: {
    title: "Portfolio Next.js Templates – Showcase Your Work",
    description:
      "Clean and professional Next.js portfolio templates for developers, designers, and creatives to showcase their work online.",
  },
  "e-commerce": {
    title: "E-Commerce Next.js Templates – Build Modern Online Stores",
    description:
      "Powerful Next.js e-commerce templates with shopping cart, product pages, and checkout features for modern online shops.",
  },
  dashboard: {
    title: "Dashboard Next.js Templates – Admin & Analytics",
    description:
      "Feature-rich Next.js dashboard templates with charts, analytics, and admin panels for SaaS apps and business tools.",
  },
  restaurant: {
    title: "Restaurant Next.js Templates – Menus & Online Ordering",
    description:
      "Elegant and responsive Next.js restaurant templates with menus, reservations, and online ordering features.",
  },
  agency: {
    title: "Agency Next.js Templates – Build Stunning Agency Websites",
    description:
      "Discover professional Next.js templates for agencies and studios. Beautifully designed, responsive, and optimized for showcasing your portfolio and services.",
  },
  free: {
    title: "Free Next.js Templates – High-Quality & Open Source",
    description:
      "Explore our collection of free Next.js templates, built with modern design and best practices in mind.",
  },
};

const seoContent: Record<
  string,
  { h1: string; h2: string; paragraph: string }
> = {
  saas: {
    h1: "Next.js SaaS Templates Built with Tailwind CSS",
    h2: "Launch your startup faster with complete SaaS boilerplates",
    paragraph: `Browse high-quality SaaS templates built with Next.js 15 and Tailwind CSS. Each template includes authentication, Stripe billing, dashboards, and everything you need to launch a modern SaaS product faster.`,
  },
  "landing-page": {
    h1: "Next.js Landing Page Templates for Startups & Products",
    h2: "Modern, responsive, and optimized for conversions",
    paragraph: `Discover modern Next.js landing page templates designed for startups, apps, and digital products. Built with Tailwind CSS, React, and TypeScript for performance, SEO, and flexibility.`,
  },
  blog: {
    h1: "Next.js Blog Templates for Content Creators",
    h2: "Minimal, SEO-friendly, and lightning fast",
    paragraph: `Explore beautifully designed Next.js blog templates built with Tailwind CSS. Perfect for personal blogs, editorial sites, and content-driven projects — ready to publish instantly.`,
  },
  portfolio: {
    h1: "Next.js Portfolio Templates for Developers & Designers",
    h2: "Showcase your projects and skills in style",
    paragraph: `Clean and modern Next.js portfolio templates built with Tailwind CSS. Ideal for freelancers, developers, and creatives who want to present their work online with a professional touch.`,
  },
  "e-commerce": {
    h1: "Next.js E-Commerce Templates for Online Stores",
    h2: "Sell products faster with modern Next.js shop templates",
    paragraph: `Powerful Next.js e-commerce templates with product pages, cart, and checkout features. Built with Tailwind CSS for speed, responsiveness, and smooth shopping experiences.`,
  },
  dashboard: {
    h1: "Next.js Dashboard Templates for SaaS & Analytics",
    h2: "Build admin panels and dashboards effortlessly",
    paragraph: `Feature-rich Next.js dashboard templates built with Tailwind CSS. Includes charts, analytics, and responsive layouts ideal for SaaS apps, admin panels, and internal tools.`,
  },
  restaurant: {
    h1: "Next.js Restaurant Templates for Modern Food Businesses",
    h2: "Menus, reservations, and online ordering ready to go",
    paragraph: `Elegant Next.js restaurant templates built with Tailwind CSS. Perfect for showcasing your menu, attracting local customers, and taking online reservations easily.`,
  },
  agency: {
    h1: "Next.js Agency Templates for Creative Studios & Agencies",
    h2: "Build stunning agency websites with modern Next.js designs",
    paragraph: `Professional Next.js templates for digital agencies, creative studios, and freelancers. Built with Tailwind CSS for fast performance, elegant layouts, and easy customization to showcase your services and projects.`,
  },

  free: {
    h1: "Free Next.js Templates – Beautiful & Open Source",
    h2: "High-quality designs without paying a cent",
    paragraph: `Explore our collection of free Next.js templates built with Tailwind CSS. Fast, responsive, and perfect for startups, portfolios, and blogs — open source and easy to customize.`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];

  if (!meta) {
    return {
      title:
        "Next.js Templates by Category – SaaS, Blog, Portfolio & More | BloomTPL",
      description:
        "Browse our complete collection of Next.js templates and starter kits for SaaS, blogs, e-commerce, portfolios, dashboards, and more.",
      alternates: {
        canonical: `https://bloomtpl.com/nextjs-templates/category/${category}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://bloomtpl.com/nextjs-templates/category/${category}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://bloomtpl.com/nextjs-templates/category/${category}`,
      siteName: "BloomTPL",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://bloomtpl.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "BloomTPL – Modern Next.js Templates",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["https://bloomtpl.com/og-image.png"],
    },
  };
}

export default async function Category({
  params: paramsPromise,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await paramsPromise;

  const templatesRaw = await prisma.template.findMany({
    where: {
      categoriesSlugs: { has: category },
    },
    orderBy: { updatedAt: "desc" },
  });

  if (!templatesRaw || templatesRaw.length === 0) {
    notFound();
  }

  // Transforme les objets pour matcher le type Product
  const templates: Product[] = templatesRaw.map((tpl) => ({
    id: tpl.id,
    name: tpl.name,
    description: tpl.description ?? "",
    price: tpl.price ?? 0,
    imageUrl:
      tpl.openGraphImage ?? tpl.performanceImage ?? "/images/NoImage.jpg",
    demoUrl: tpl.demoUrl ?? "",
    lemonLink: tpl.lemonLink ?? "",
    type: "template",
    category: tpl.category ?? "",
    categories: Array.isArray(tpl.categories) ? tpl.categories.join(", ") : "",
    slug: tpl.slug,
    created_at: tpl.createdAt ? tpl.createdAt.toISOString() : "",
    openGraphImage: tpl.openGraphImage ?? undefined,
    // Ajoute d'autres champs si besoin
  }));

  const seo = seoContent[category] ?? {
    h1: "Next.js Templates by Category",
    h2: "",
    paragraph: "",
  };

  return (
    <CategoryPage
      products={templates}
      category={unslugify(category)}
      seo={seo}
    />
  );
}

function unslugify(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
