"use client";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PromoBanner from "../PromoBanner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import AuthButton from "./sign-in";

export default function HeaderCPN() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isFixed } = useScrollHeader();

  const navLinks = [
    { name: "Templates", path: "/nextjs-templates" },
    { name: "Components", path: "/nextjs-components" },
    { name: "Bundle", path: "/bundle/ultimate" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  const templates: { title: string; href: string; description: string }[] = [
    {
      title: "All Templates",
      href: "/nextjs-templates",
      description:
        "Browse our complete collection of Next.js templates and starter kits for various use cases.",
    },
    {
      title: "LandKit - Next.js Landing Page Starter Kit",
      href: "/nextjs-templates/landkit-nextjs-landing-page-starter-kit",
      description:
        "Complete landing page starter with hero sections, feature grids, and conversion-focused design.",
    },
    {
      title: "ShopBase - Next.js E-commerce Boilerplate",
      href: "/nextjs-templates/shopbase-nextjs-e-commerce-boilerplate",
      description:
        "Full-featured e-commerce solution with product catalog, shopping cart, and payment integration.",
    },
    {
      title: "BlogStarter – Next.js Blog Starter Kit",
      href: "/nextjs-templates/blogstarter-next-js-tailwind-css-blog-starter-kit",
      description:
        "Modern blog template with post management, categories, tags, and responsive design.",
    },
    {
      title: "CoreSaaS – Next.js SaaS Boilerplate",
      href: "/nextjs-templates/coresaas-next-js-tailwind-css-saas-boilerplate",
      description:
        "Complete SaaS starter with authentication, billing, dashboard, and user management.",
    },
    {
      title: "Next.js SaaS Template",
      href: "/nextjs-templates/nextjs-tailwind-css-saas-template",
      description:
        "Clean SaaS landing page with pricing tables, feature highlights, and customer testimonials.",
    },
    {
      title: "Free Next.js Restaurant Template",
      href: "/nextjs-templates/free-nextjs-tailwind-css-restaurant-template",
      description:
        "Restaurant website template with menu display, reservations, and location information.",
    },
    {
      title: "Next.js Developer Portfolio Template",
      href: "/nextjs-templates/nextjs-tailwind-css-developer-portfolio-template",
      description:
        "Professional portfolio template showcasing projects, skills, and contact information.",
    },
    {
      title: "Next.js SaaS Dashboard Template",
      href: "/nextjs-templates/nextjs-tailwind-css-saas-dashboard-template",
      description:
        "Feature-rich dashboard with analytics, charts, tables, and administrative controls.",
    },
    {
      title: "Next.js Blog Template",
      href: "/nextjs-templates/nextjs-tailwind-css-blog-template",
      description:
        "Minimalist blog template with clean typography, search functionality, and SEO optimization.",
    },
    {
      title: "Free Next.js E-Commerce Template",
      href: "/nextjs-templates/free-nextjs-tailwind-css-e-commerce-template",
      description:
        "Open-source e-commerce template with product listings, cart functionality, and checkout flow.",
    },
  ];

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "All Components",
      href: "/nextjs-components",
      description:
        "Beautiful, responsive components built with Tailwind CSS and React. Copy the code and paste into your project.",
    },
    {
      title: "Pricing Section",
      href: "/nextjs-components/pricing-section",
      description:
        "Modern pricing table with monthly/yearly toggle, popular plan highlighting, and FAQ section.",
    },
    {
      title: "Product Card",
      href: "/nextjs-components/product-card",
      description:
        "E-commerce product card with ratings, pricing, wishlist, and cart functionality.",
    },
    {
      title: "Simple Footer",
      href: "/nextjs-components/simple-footer",
      description:
        "Professional footer with organized links, newsletter signup, and social media integration.",
    },
    {
      title: "Simple Header",
      href: "/nextjs-components/simple-header",
      description:
        "Responsive navigation header with mobile menu, smooth animations, and modern styling.",
    },
    {
      title: "Hero Section",
      href: "/nextjs-components/hero-section",
      description:
        "Landing page hero with gradient background, email signup, feature grid, and social proof.",
    },
    {
      title: "Contact Form",
      href: "/nextjs-components/contact-form",
      description:
        "Complete contact form with validation, loading states, and success confirmation page.",
    },
    {
      title: "Smart Loading Button",
      href: "/nextjs-components/smart-loading-button",
      description:
        "Intelligent loading button with progress indication, success states, and error handling.",
    },
    {
      title: "Simple Search Input",
      href: "/nextjs-components/simple-search-input",
      description:
        "Lightweight search component with real-time filtering and dropdown results.",
    },
    {
      title: "Notification Card",
      href: "/nextjs-components/notification-card",
      description:
        "Interactive notification system with auto-dismiss, actions, expandable content, and multiple types.",
    },
    {
      title: "Advanced Button Group",
      href: "/nextjs-components/advanced-button-group",
      description:
        "Animated button group with sliding indicator and multiple states.",
    },
  ];

  return (
    <header
      className={`transform transition-all duration-300 z-50 left-0 right-0 ${
        isFixed
          ? `fixed top-0 shadow-lg translate-y-0 bg-white`
          : "absolute bg-white"
      }`}
    >
      <PromoBanner />
      <nav className="transition-all duration-300 px-6 py-4">
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap">
                BloomTPL
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {templates.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/bundle/ultimate">Bundle</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/docs">Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/#faq">
                            <div className="font-medium">FAQ</div>
                            <div className="text-muted-foreground">
                              Find answers to frequently asked questions.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/license">
                            <div className="font-medium">License</div>
                            <div className="text-muted-foreground">
                              View terms and conditions of use.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/blog">
                            <div className="font-medium">Blog</div>
                            <div className="text-muted-foreground">
                              Read our latest blog posts.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Bouton de connexion et menu mobile */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <AuthButton />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg lg:hidden hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile (liens de navigation) */}
      {isOpen && (
        <div
          className="lg:hidden w-full pt-2 animate-in slide-in-from-top-2 duration-200"
          id="navbar-sticky"
        >
          <div className="flex flex-col p-6 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-xl mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block my-1 py-2 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                  pathname === link.path
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/#faq"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/license"
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/license"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              License
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                pathname === "/blog"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : ""
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
