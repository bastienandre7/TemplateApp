"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../TemplateDetails/FaqAccordion";
import { Button } from "../ui/button";

export default function LandingPage() {
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

  const freeComponents = [
    {
      name: "Simple Footer",
      description:
        "Professional footer with organized links, newsletter signup, and social media integration.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/simple-footer.png",
      link: "/nextjs-components/simple-footer",
    },
    {
      name: "Pricing Section",
      description:
        "Modern pricing table with monthly/yearly toggle, popular plan highlighting, and FAQ section.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/pricing-section.png",
      link: "/nextjs-components/pricing-section",
    },
    {
      name: "Product Card",
      description:
        "E-commerce product card with ratings, pricing, wishlist, and cart functionality.",
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/components/product-card.png",
      link: "/nextjs-components/product-card",
    },
  ];

  const templates = [
    {
      name: "LandKit - Next.js Landing Page Starter Kit",
      slug: "landkit-nextjs-landing-page-starter-kit",
      description:
        "A modular Next.js landing page kit designed for startups, SaaS, and makers. Includes 10+ production-ready components styled with Tailwind CSS.",
      category: "Landing Page",
      price: 14.99,
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
      price: 39.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/ShopBase%20Template/og-image-v2-opti.webp",
      link: "/nextjs-templates/shopbase-nextjs-e-commerce-boilerplate",
      demoUrl: "https://bloomtpl-shopbase-template.vercel.app/",
    },
    {
      name: "BlogStarter – Next.js Tailwind CSS Blog Starter Kit",
      slug: "blogstarter-next-js-tailwind-css-blog-starter-kit",
      description:
        "BloomTPL BlogStarter is a modern blog starter kit with Next.js, Sanity.io & Tailwind CSS. Fast, customizable, and production-ready.",
      category: "Blog",
      price: 34.99,
      image:
        "https://9hn0rhd8ibpivln7.public.blob.vercel-storage.com/templates/blogstarter-starterkit/og-image-v2-opti.webp",
      link: "/nextjs-templates/blogstarter-next-js-tailwind-css-blog-starter-kit",
      demoUrl: "https://bloomtpl-blogstarter-starter-kit.vercel.app/",
    },
    {
      name: "CoreSaaS – Next.js Tailwind CSS SaaS Boilerplate",
      slug: "coresaas-next-js-tailwind-css-saas-boilerplate",
      description:
        "Launch your SaaS faster with a complete starter kit: authentication, Stripe billing, admin dashboard, and user management – built with Next.js and Tailwind CSS.",
      category: "SaaS",
      price: 39.99,
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
      {/* Hero Section */}
      <section className="bg-background relative overflow-hidden pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Next.js Templates
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  Build Faster with
                  <span className="text-primary"> Premium Templates</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Kickstart your next project with our collection of
                  production-ready Next.js templates and free React components.
                  Built with TypeScript, Tailwind CSS, and modern best
                  practices.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/nextjs-templates">
                    Browse Templates
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/nextjs-components">
                    Free Components
                    <Download className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Production Ready
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  TypeScript & Tailwind
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Lifetime Updates
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative">
                <Image
                  src="/images/banner-opti.webp"
                  alt="Desktop Banner Image"
                  width={800}
                  height={640}
                  className="shadow-2xl rounded-2xl transform hover:rotate-0 transition-transform duration-500"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Templates Section */}
      <section className="py-8 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Latest Templates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Next.js Templates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our newest premium Next.js templates built with modern
              best practices
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              key="All"
              variant="default"
              size="sm"
              className="text-sm font-medium"
              asChild
            >
              <Link href="/">All</Link>
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="text-sm font-medium"
                asChild
              >
                <Link href={category.href}>{category.name}</Link>
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[1200/630] relative bg-gray-50">
                  <Image
                    src={template.image || "/images/NoImage.jpg"}
                    alt={`${template.name} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-1">
                    <Link
                      href={`/nextjs-templates/${template.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {template.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link href={template.link}>Buy Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/nextjs-templates">
                View All Templates
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Next.js Components Section */}
      <section className="py-8 md:py-20 bg-muted/30">
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
              Download our free, fully responsive Next.js templates built with
              Tailwind CSS and React.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {freeTemplates.map((template, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[1200/630] relative bg-gray-50">
                  <Image
                    src={template.image || "/images/NoImage.jpg"}
                    alt={`${template.name} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-1">
                    <Link
                      href={`/nextjs-templates/${template.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {template.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link href={template.link}>Free</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Templates?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every template is crafted with attention to detail and modern
              development practices
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
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(226,232,240,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,.4)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-600" />
            Limited Time Offer
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Get Access to <span className="text-slate-700">Every Template</span>{" "}
            for One Price
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Unlock <strong>all premium BloomTPL templates</strong> — including
            SaaS, eCommerce, Portfolio, and more — for{" "}
            <span className="text-slate-900 font-semibold">$49.99</span>.
            Lifetime access, future updates included.
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

      {/* Free Components Section */}
      <section className="py-8 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Download className="w-4 h-4 mr-2" />
              100% Free
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Next.js Components
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beautiful, responsive components built with Tailwind CSS and
              React. Copy the code and paste into your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {freeComponents.map((component) => (
              <Card
                key={component.name}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative bg-gradient-to-br from-green-100 to-blue-100">
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    FREE
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>

                <CardFooter className="flex items-center">
                  <Button asChild>
                    <Link className="w-full" href={component.link}>
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/nextjs-components">
                Browse All Free Components
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No signup required • Copy & paste ready • Always free
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 md:py-20 bg-background">
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
                name: "Next.js",
                icon: "/svg/nextjs-icon.svg",
                description: "Latest React framework with App Router",
              },
              {
                name: "TypeScript",
                icon: "/svg/typescript.svg",
                description: "Type-safe code for better development experience",
              },
              {
                name: "Tailwind CSS",
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

      {/* CTA Section */}
      <section className="py-8 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Start Building Your Next Project Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of premium Next.js templates and launch
              faster than ever before
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
        </div>
      </section>
    </div>
  );
}
