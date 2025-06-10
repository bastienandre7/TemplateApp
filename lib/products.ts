// lib/products.ts
export const templateData = [
  {
    id: 508811,
    slug: "e-commerce-template",
    name: "E-Commerce Template",
    description:
      "Modern e-commerce template built with Tailwind CSS. Fast, responsive, and perfect for launching your digital store.",
    demoUrl: "https://bloom-ecommerce-template.vercel.app/",
    images: [
      "/images/templates/e-commerce-template/preview-1.png",
      "/images/templates/e-commerce-template/preview-2.png",
      "/images/templates/e-commerce-template/preview-3.png",
      "/images/templates/e-commerce-template/preview-4.png",
    ],
    openGraphImage: "/images/templates/e-commerce-template/og.png",
    category: "E-Commerce",
    pages: ["Home", "Shop", "Product", "Cart", "About", "Contact"],
    tech: ["Next.js 15 (App Router)", "Tailwind CSS 3"],
    extras: [
      "Built for conversion-focused storefronts",
      "Easy to customize with clean component structure",
      "Cart functionality with local storage",
      "Deployment-ready for Vercel",
    ],
  },
  {
    id: 509780,
    slug: "saas-dashboard-template",
    name: "SaaS Dashboard Template",
    description:
      "Modern SaaS dashboard template built with Next.js and Tailwind CSS. Clean, fast, and ideal for launching your next admin panel or internal tool.",
    demoUrl: "https://bloom-dashboard-template.vercel.app/",
    images: [
      "/images/templates/saas-dashboard-template/preview-1.png",
      "/images/templates/saas-dashboard-template/preview-2.png",
      "/images/templates/saas-dashboard-template/preview-3.png",
      "/images/templates/saas-dashboard-template/preview-4.png",
    ],
    openGraphImage: "/images/templates/saas-dashboard-template/og.png",
    category: "Dashboard",
    tech: [
      "Next.js 15 (App Router)",
      "Tailwind CSS 3",
      "Lucide React",
      "Framer Motion",
      "Shadcn UI",
    ],
    pages: ["Home", "Users", "Statistics", "Settings"],
    extras: [
      "Modern dashboard layout with sidebar navigation",
      "User management with search and filtering",
      "Dark/Light mode toggle",
      "Animated charts and statistics",
      "Deployment-ready for Vercel",
    ],
  },
  {
    id: 509512,
    slug: "blog-template",
    name: "Blog Template",
    description:
      "Minimalist blog template built with Next.js and Tailwind CSS. Clean, fast, and perfect for launching your personal blog, journal, or editorial site.",
    demoUrl: "https://bloom-tpl-blog-template.vercel.app/",
    images: [
      "/images/templates/blog-template/preview-1.png",
      "/images/templates/blog-template/preview-2.png",
      "/images/templates/blog-template/preview-3.png",
      "/images/templates/blog-template/preview-4.png",
    ],
    openGraphImage: "/images/templates/blog-template/og.png",
    category: "Blog",
    tech: ["Next.js 15 (App Router)", "Tailwind CSS 3", "Lucide React"],
    pages: ["Home", "Blog (Post)", "Author"],
    extras: [
      "Dynamic routing for posts and authors",
      "Dark mode support",
      "Category filtering via URL params",
      "Deployment-ready for Vercel",
    ],
  },
  {
    id: 529635,
    slug: "developer-portfolio-template",
    name: "Developer Portfolio Template",
    description:
      "A sleek and professional portfolio template built with Next.js 15 and Tailwind CSS. Perfect for developers, freelancers, and indie hackers who want to showcase their work, experience, and skills with style.",
    demoUrl: "https://bloom-tpl-dev-portfolio-template.vercel.app/",
    images: [
      "/images/templates/dev-portfolio-template/preview-1.png",
      "/images/templates/dev-portfolio-template/preview-2.png",
      "/images/templates/dev-portfolio-template/preview-3.png",
      "/images/templates/dev-portfolio-template/preview-4.png",
    ],
    openGraphImage: "/images/templates/dev-portfolio-template/og.png",
    category: "Portfolio",
    tech: ["Next.js 15 (App Router)", "Tailwind CSS 3", "Lucide React"],
    pages: ["Home"],
    extras: [
      "Clean and minimal folder structure",
      "Dark/Light mode toggle with next-themes",
      "Fully responsive across devices",
      "SEO-friendly setup with metadata",
      "Deployment-ready for Vercel",
    ],
  },
  {
    id: 532956,
    slug: "restaurant-template",
    name: "Restaurant Template",
    description:
      "Modern restaurant website template built with Next.js and Tailwind CSS. Perfect for showcasing a menu, taking reservations, and attracting local food lovers.",
    demoUrl: "https://bloom-tpl-restaurant-template.vercel.app/",
    images: [
      "/images/templates/restaurant-template/preview-1.png",
      "/images/templates/restaurant-template/preview-2.png",
      "/images/templates/restaurant-template/preview-3.png",
      "/images/templates/restaurant-template/preview-4.png",
      "/images/templates/restaurant-template/preview-5.png",
    ],
    openGraphImage: "/images/templates/restaurant-template/og.png",
    category: "Restaurant",
    tech: [
      "Next.js 15 (App Router)",
      "Tailwind CSS 3",
      "Framer Motion",
      "Lucide React",
    ],
    pages: ["Home"],
    extras: [
      "Gallery with lightbox image preview",
      "Auto-rotating testimonial carousel",
      "Deployment-ready for Vercel",
    ],
  },
  {
    id: 540440,
    slug: "saas-template",
    name: "SaaS Template",
    description:
      "A modern dark-mode SaaS UI template built with Next.js and Tailwind CSS. Clean, fast, responsive and ready to launch your own SaaS.",
    demoUrl: "https://bloom-tpl-saa-s-template.vercel.app/",
    images: [
      "/images/templates/saas-template/preview-1.png",
      "/images/templates/saas-template/preview-2.png",
      "/images/templates/saas-template/preview-3.png",
      "/images/templates/saas-template/preview-4.png",
      "/images/templates/saas-template/preview-5.png",
    ],
    openGraphImage: "/images/templates/saas-template/og.png",
    category: "SaaS",
    tech: [
      "Next.js 15 (App Router)",
      "Tailwind CSS 3",
      "Framer Motion",
      "Lucide React",
    ],
    pages: [
      "Home",
      "Product",
      "Pricing",
      "Contact",
      "Resources",
      "Legal (Terms, Privacy)",
      "404",
    ],
    extras: [
      "Clean, modular components",
      "Dark mode UI",
      "SEO-ready metadata",
      "Animated sections (Hero, Pricing, FAQ)",
      "Deployment-ready for Vercel",
    ],
  },
];

export function getTemplateBySlug(slug: string) {
  return templateData.find((tpl) => tpl.slug === slug);
}
