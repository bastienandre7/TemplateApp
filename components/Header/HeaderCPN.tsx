"use client";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import {
  FileText,
  Grid,
  LayoutDashboard,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PromoBanner from "../layout/PromoBanner";
import { Button } from "../ui/button";
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
    { name: "All Access Pass", path: "/all-access-pass" },
    { name: "Next.js Templates", path: "/nextjs-templates" },
    { name: "Components", path: "/nextjs-components" },
    // { name: "AI Builder", path: "/ai-builder" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Docs", path: "/docs" },
    { name: "Contact", path: "/contact" },
  ];

  const templates: {
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "All Templates",
      href: "/nextjs-templates",
      icon: <Grid className="w-6 h-6" />,
      description: "All Next.js templates in one place.",
    },
    {
      title: "SaaS Templates",
      href: "/nextjs-templates/category/saas",
      icon: <LayoutDashboard className="w-6 h-6" />,
      description: "Ready-to-launch SaaS boilerplates.",
    },
    {
      title: "Landing page",
      href: "/nextjs-templates/category/landing-page",
      icon: <Zap className="w-6 h-6" />,
      description: "Modern landing pages for products.",
    },
    {
      title: "Blog Templates",
      href: "/nextjs-templates/category/blog",
      icon: <FileText className="w-6 h-6" />,
      description: "Minimal & fast blog starters.",
    },
    {
      title: "E-Commerce Templates",
      href: "/nextjs-templates/category/e-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Sell products with Next.js.",
    },
    {
      title: "Free Templates",
      href: "/nextjs-templates/category/free",
      icon: <Star className="w-6 h-6" />,
      description: "Free to use, open source.",
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
          ? `fixed top-0 shadow-lg translate-y-0 bg-background`
          : "absolute bg-background"
      }`}
    >
      <PromoBanner />
      <nav className="max-w-7xl mx-auto transition-all duration-300 px-4 sm:px-6 py-4">
        <div className=" w-full flex items-center justify-between">
          <Link href="/" className="hover:bg-white focus:bg-white lg:hidden">
            <Image src="/icons/favicon.ico" alt="Logo" width={32} height={32} />
          </Link>
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} pl-0`}
                  >
                    <Link href="/" className="hover:bg-white focus:bg-white">
                      <Image
                        src="/icons/favicon.ico"
                        alt="Logo"
                        width={32}
                        height={32}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {templates.map((template) => (
                        <ListItem
                          key={template.title}
                          title={template.title}
                          href={template.href}
                          icon={template.icon}
                        >
                          {template.description}
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
                        <NavigationMenuLink asChild>
                          <Link href="/docs">
                            <div className="font-medium">Docs</div>
                            <div className="text-muted-foreground">
                              Find guides, references, and tutorials.
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        {/* <NavigationMenuLink asChild>
                          <Link href="/ai-builder">
                            <div className="font-medium">AI Builder</div>
                            <div className="text-muted-foreground">
                              Create and customize AI components.
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link href="/pricing">
                            <div className="font-medium">Pricing</div>
                            <div className="text-muted-foreground">
                              View our pricing plans and options.
                            </div>
                          </Link>
                        </NavigationMenuLink> */}
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
            <Button
              variant="default"
              className="hidden md:flex ml-2 shadow-[0_0_16px_2px_rgba(139,92,246,0.5)]"
              asChild
            >
              <Link href="/all-access-pass">All Access Pass</Link>
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center py-2 pr-0 w-10 h-10 justify-center text-gray-600 rounded-lg lg:hidden hover:bg-purple-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
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
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <li {...props}>
      <Link
        href={href}
        className="flex items-center gap-2 py-3 px-2 rounded-md hover:bg-muted transition-colors"
      >
        {icon && (
          <span className="flex items-center justify-center shrink-0 p-2">
            <div className="flex items-center justify-center">{icon}</div>
          </span>
        )}
        <div className="flex flex-col flex-1">
          <span className="text-base font-semibold">{title}</span>
          <span className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
}
