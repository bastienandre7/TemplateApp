import TemplateCard from "@/components/Template/TemplateCard";
import FaqAccordion from "@/components/TemplateDetails/FaqAccordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Download,
  Laptop,
  Lock,
  Shield,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium And Free Next.js Templates | BloomTPL",
  description:
    "Premium And Free Next.js templates for SaaS, e-commerce, and portfolios. Built with Tailwind CSS and TypeScript.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Premium And Free Next.js Templates | BloomTPL",
    description:
      "Premium And Free Next.js templates for SaaS, e-commerce, and portfolios. Built with Tailwind CSS and TypeScript.",
    url: "https://bloomtpl.com",
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
    title: "Premium And Free Next.js Templates | BloomTPL",
    description:
      "Premium And Free Next.js templates for SaaS, e-commerce, and portfolios. Built with Tailwind CSS and TypeScript.",
    images: ["https://bloomtpl.com/og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default function Home() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Production Ready",
      description:
        "Launch faster with templates built on best practices and fully ready for deployment.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with Next.js 15 and Tailwind CSS, ensuring smooth performance.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SEO Optimized",
      description:
        "Preconfigured for better rankings with clean code, metadata, and performance boosts.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Fully Customizable",
      description:
        "Easily adapt every section to match your brand and project requirements.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Responsive by Default",
      description:
        "Designed to look stunning on any device, from mobile to desktop.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Built with the latest Next.js & Tailwind CSS standards for long-term maintainability.",
    },
  ];

  const categories = [
    { name: "SaaS", href: "/nextjs-templates/category/saas" },
    {
      name: "E-commerce",
      href: "/nextjs-templates/category/e-commerce",
    },
    {
      name: "Portfolio",
      href: "/nextjs-templates/category/portfolio",
    },
    { name: "Blog", href: "/nextjs-templates/category/blog" },
    {
      name: "Landing Page",
      href: "/nextjs-templates/category/landing-page",
    },
    { name: "Agency", href: "/nextjs-templates/category/agency" },
    {
      name: "Restaurant",
      href: "/nextjs-templates/category/restaurant",
    },
    {
      name: "Dashboard",
      href: "/nextjs-templates/category/dashboard",
    },
  ];

  const templates = [
    {
      name: "LandKit - Next.js Landing Page Starter Kit",
      slug: "landkit-nextjs-landing-page-starter-kit",
      description:
        "A modular Next.js landing page kit designed for startups, SaaS, and makers. Includes 10+ production-ready components styled with Tailwind CSS.",
      category: "Landing Page",
      price: 19.99,
      discount: 15.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/Landkit%20Landing%20Page/og-image-v2-opti.webp",
      link: "/nextjs-templates/landkit-nextjs-landing-page-starter-kit",
      demoUrl: "https://bloomtpl-landkit-landing-page.vercel.app/",
    },
    {
      name: "ShopBase - Next.js E-commerce Boilerplate",
      slug: "shopbase-nextjs-e-commerce-boilerplate",
      description:
        "Production-ready Next.js e-commerce boilerplate with Stripe, cart, product management, and admin dashboard. Launch your online store in minutes.",
      category: "E-commerce",
      price: 59.99,
      discount: 47.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/ShopBase%20Template/og-image-v2-opti.webp",
      link: "/nextjs-templates/shopbase-nextjs-e-commerce-boilerplate",
      demoUrl: "https://bloomtpl-shopbase-template.vercel.app/",
    },
    {
      name: "BlogStarter – Next.js + Sanity Blog Starter Kit",
      slug: "blogstarter-nextjs-sanity-blog-starter-kit",
      description:
        "BloomTPL BlogStarter is a modern blog starter kit with Next.js, Sanity.io & Tailwind CSS. Fast, customizable, and production-ready.",
      category: "Blog",
      price: 49.99,
      discount: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/blogstarter-starterkit/BlogStarter.png",
      link: "/nextjs-templates/blogstarter-nextjs-sanity-blog-starter-kit",
      demoUrl: "https://bloomtpl-blogstarter-starter-kit.vercel.app/",
    },
    {
      name: "CoreSaaS – Next.js Tailwind CSS SaaS Boilerplate",
      slug: "coresaas-next-js-tailwind-css-saas-boilerplate",
      description:
        "Launch your SaaS faster with a complete starter kit: authentication, Stripe billing, admin dashboard, and user management – built with Next.js and Tailwind CSS.",
      category: "SaaS",
      price: 49.99,
      discount: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/coresaas-boilerplate/og-opti.webp",
      link: "/nextjs-templates/coresaas-next-js-tailwind-css-saas-boilerplate",
      demoUrl: "https://bloomtpl-coresaas-template.vercel.app/",
    },
  ];

  const freeTemplates = [
    {
      name: "BloomShop - Free Next.js Tailwind CSS E-Commerce Template",
      slug: "bloomshop-free-nextjs-tailwind-css-e-commerce-template",
      description:
        "Free modern e-commerce template built with Tailwind CSS. Fast, responsive, and perfect for launching your digital store.",
      category: "E-commerce",
      price: 0.0,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/e-commerce-template/og-2-opti.webp",
      link: "/nextjs-templates/bloomshop-free-nextjs-tailwind-css-e-commerce-template",
      demoUrl: "https://bloomtpl-ecommerce-template.vercel.app/",
    },
    {
      name: "Free Next.js Tailwind CSS Restaurant Template",
      slug: "free-nextjs-tailwind-css-restaurant-template",
      description:
        "Free modern restaurant website template built with Next.js and Tailwind CSS. Perfect for showcasing a menu and attracting local food lovers.",
      category: "Restaurant",
      price: 0.0,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/restaurant-template/og-image-v2-opti.webp",
      link: "/nextjs-templates/free-nextjs-tailwind-css-restaurant-template",
      demoUrl: "https://bloomtpl-restaurant-template.vercel.app/",
    },
    {
      name: "BloomBlog - Free Next.js Tailwind CSS Blog Template",
      slug: "bloomblog-free-nextjs-tailwind-css-blog-template",
      description:
        "Minimalist blog template built with Next.js and Tailwind CSS. Clean, fast, and perfect for launching your personal blog, journal, or editorial site.",
      category: "Blog",
      price: 0.0,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/blog-template/og-opti.webp",
      link: "/nextjs-templates/bloomblog-free-nextjs-tailwind-css-blog-template",
      demoUrl: "https://bloomtpl-blog-template.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background pt-32 pb-12 md:pb-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 pt-20 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
            Build Faster with Premium Next.js Templates
          </h1>

          <p className="max-w-lg text-lg text-muted-foreground mx-auto lg:mx-0">
            Production-ready templates built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>

          <p className="max-w-lg text-base text-muted-foreground/80 mx-auto lg:mx-0 text-center flex">
            Trusted by indie hackers and startups worldwide.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            asChild
            className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-md"
          >
            <Link href="/nextjs-templates">
              Browse Templates
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-background dark:bg-slate-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 text-indigo-600 bg-indigo-50 border-none"
            >
              <Star className="w-4 h-4 mr-2 text-indigo-500" />
              Latest Templates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Handcrafted Next.js Templates
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our latest premium templates — clean design, scalable
              code, and optimized for performance.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant="secondary"
              size="sm"
              className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button key={category.name} variant="outline" size="sm">
                <Link href={category.href}>{category.name}</Link>
              </Button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((template) => (
              <TemplateCard key={template.slug} {...template} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="default"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/nextjs-templates">
                View All Templates
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Download className="w-4 h-4 mr-2" />
              100% Free
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Next.js Templates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with our free, high-quality Next.js templates built
              for speed and flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {freeTemplates.map((template) => (
              <TemplateCard
                key={template.slug}
                id={template.slug}
                name={template.name}
                slug={template.slug}
                description={template.description}
                category={template.category}
                price={template.price}
                imageUrl={template.image}
                demoUrl={template.demoUrl}
              />
            ))}
          </div>
          <Link
            href="/nextjs-templates"
            className="flex justify-center mt-12 underline font-medium"
          >
            Want more? Explore our full collection of premium templates
          </Link>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Templates?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every template is designed for speed, scalability, and seamless
              customization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-xl mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(226,232,240,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,.4)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-600" />
            Save 70% with the All Access Pass
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Get Access to <span className="text-primary">Every Template</span>{" "}
            for One Price
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Unlock <strong>every premium BloomTPL template</strong> — including
            including SaaS, eCommerce, and Portfolio kits — for just{" "}
            <span className="text-slate-900 font-semibold">$59</span>. Lifetime
            access with all future updates included.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/all-access-pass"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-4 text-base font-semibold shadow-sm hover:bg-slate-800 transition-colors"
            >
              Get the All Access Pass
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/nextjs-templates"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 backdrop-blur-sm text-slate-900 px-8 py-4 text-base font-semibold hover:bg-white transition-colors"
            >
              Browse Templates
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Lifetime updates
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Commercial license
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              New templates every month
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-gradient-to-b from-white to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built with Industry Standards
            </h2>
            <p className="text-xl text-muted-foreground">
              Every template follows modern development best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Next.js 15",
                icon: "/svg/nextjs-icon.svg",
                description: "Latest React framework with App Router",
              },
              {
                name: "TypeScript",
                icon: "/svg/typescript.svg",
                description: "Type-safe code for better development experience",
              },
              {
                name: "Tailwind CSS v4",
                icon: "/svg/tailwind.svg",
                description: "Utility-first CSS framework for rapid styling",
              },
            ].map((tech) => (
              <Card
                key={tech.name}
                className="text-center hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-xl mb-4 mx-auto">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={56}
                      height={56}
                      className="w-14 h-14"
                    />
                  </div>
                  <CardTitle className="text-xl">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      <FaqAccordion />

      <section className="py-8 md:py-20 bg-muted/30 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick a premium Next.js template and launch your next project
              today.
            </p>
            <p className="text-muted-foreground">
              Trusted by developers worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/nextjs-templates">
                Browse All Templates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link href="/nextjs-components">Try Free Components</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Instant access. No subscriptions. Lifetime updates.
          </p>
        </div>
      </section>
    </div>
  );
}
