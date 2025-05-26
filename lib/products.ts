// lib/products.ts
export const templateData = [
  {
    id: 508811,
    slug: "e-commerce-template",
    name: "E-Commerce Template",
    description:
      "Modern e-commerce template built with Tailwind CSS. Fast, responsive, and perfect for launching your digital store.",
    features: [
      "Modern homepage with hero banner, categories, best sellers, and newsletter signup.",
      "Shop page with filters by category and price sorting.",
      "Optimized product page with image gallery and quantity management in cart.",
      "Fully responsive design with smooth animations (built with Tailwind CSS)",
      "Clean, reusable components and production-ready code.",
    ],
    tech: ["Next.js"],
    demoUrl: "https://bloom-ecommerce-template.vercel.app/",
    images: [
      "/images/templates/e-commerce-template/preview-1.png",
      "/images/templates/e-commerce-template/preview-2.png",
      "/images/templates/e-commerce-template/preview-3.png",
    ],
  },
  {
    id: 509780,
    slug: "saas-dashboard-template",
    name: "SaaS Dashboard Template",
    description:
      "Modern SaaS dashboard template built with Next.js and Tailwind CSS. Clean, fast, and ideal for launching your next admin panel or internal tool.",
    features: [
      "Modern dashboard layout with sidebar navigation and topbar actions.",
      "Fully responsive UI with smooth transitions using Framer Motion.",
      "Reusable cards and chart-ready sections for metrics and insights.",
      "Dark mode–ready components, styled with Tailwind CSS and shadcn/ui.",
      "Reusable cards and chart-ready sections for metrics and insights.",
    ],
    tech: ["Next.js"],
    demoUrl: "https://bloom-dashboard-template.vercel.app/",
    images: [
      "/images/templates/saas-dashboard-template/preview-1.png",
      "/images/templates/saas-dashboard-template/preview-2.png",
      "/images/templates/saas-dashboard-template/preview-3.png",
    ],
  },
  {
    id: 509512,
    slug: "blog-template",
    name: "Blog Template",
    description:
      "Minimalist blog template built with Next.js and Tailwind CSS. Clean, fast, and perfect for launching your personal blog, journal, or editorial site.",
    features: [
      "Elegant blog layout with category filtering and author pages.",
      "Fully responsive design with smooth UI transitions.",
      "Dynamic post routing and SEO-friendly structure.",
      "Dark mode support, styled exclusively with Tailwind CSS.",
      "Clean and scalable file organization, ready for CMS or markdown integration.",
    ],
    tech: ["Next.js"],
    demoUrl: "https://bloom-tpl-blog-template.vercel.app/",
    images: [
      "/images/templates/blog-template/preview-1.png",
      "/images/templates/blog-template/preview-2.png",
      "/images/templates/blog-template/preview-3.png",
    ],
  },
  {
    id: 529635,
    slug: "developer-portfolio-template",
    name: "Developer Portfolio Template",
    description:
      "A sleek and professional portfolio template built with Next.js 15 and Tailwind CSS. Perfect for developers, freelancers, and indie hackers who want to showcase their work, experience, and skills with style.",
    features: [
      "Modern developer portfolio layout with about, experience, skills, and projects.",
      "Fully responsive design with clean mobile and desktop experience.",
      "Animated skill bars triggered on scroll using Framer Motion.",
      "Dark mode support, styled exclusively with Tailwind CSS.",
      "Contact section with working form and social media links.",
      "Optimized structure for customization and deployment on Vercel.",
    ],
    tech: ["Next.js"],
    demoUrl: "https://bloom-tpl-dev-portfolio-template.vercel.app/",
    images: [
      "/images/templates/dev-portfolio-template/preview-1.png",
      "/images/templates/dev-portfolio-template/preview-2.png",
      "/images/templates/dev-portfolio-template/preview-3.png",
    ],
  },
];

export function getTemplateBySlug(slug: string) {
  return templateData.find((tpl) => tpl.slug === slug);
}
