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
      title: "Next.js Templates – Explore All Categories",
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

  return <CategoryPage products={templates} category={unslugify(category)} />;
}

function unslugify(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
