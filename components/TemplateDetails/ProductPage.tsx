import DynamicBuyButton from "@/components/TemplateDetails/DynamicBuyButton";
import FaqAccordion from "@/components/TemplateDetails/FaqAccordion";
import PaymentMethodSection from "@/components/TemplateDetails/PaymentMethodSection";
import ProjectStructureModal from "@/components/TemplateDetails/ProjectStructureModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CalendarCheck,
  Check,
  Eye,
  Monitor,
  Palette,
  Smartphone,
  SquareCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  demoUrl: string;
  lemonLink: string;
  slug: string;
  updated_at: string;
  tech?: string[];
  pages?: string[];
  extras?: string[];
  openGraphImage?: string;
  performanceImage?: string;
  docLink?: string;
  structure?: string;
  variants?: {
    free?: Variant;
    premium?: Variant;
  };
  categories?: string[];
}

interface Variant {
  price: number;
  link: string;
}

interface ProductPageProps {
  template: Product;
  purchases: { template: string }[];
}

export default function ProductPage({ template, purchases }: ProductPageProps) {
  return (
    <div className="pt-16 md:pt-4 text-black bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32">
        {/* Hero Section - Style Clay */}
        <section className="relative mb-24 max-w-5xl mx-auto">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

          {/* Title + badges */}
          <div className="text-center">
            <h1 className="text-foreground text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {template.name}
            </h1>

            {template.categories &&
              Array.isArray(template.categories) &&
              template.categories.length > 0 && (
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {" "}
                  {template.categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant="secondary"
                      className="capitalize bg-primary/10 text-primary border-none"
                    >
                      {cat}
                    </Badge>
                  ))}{" "}
                </div>
              )}

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {template.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 max-w-2xl mx-auto mb-4">
              {template.demoUrl && (
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-4 text-lg h-[50px]
             border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  asChild
                >
                  <Link
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Live Preview
                  </Link>
                </Button>
              )}

              <DynamicBuyButton template={template} purchases={purchases} />
            </div>
          </div>

          {/* Image showcase */}
          <div className="w-full aspect-[1200/630] relative mb-10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition" />
            <Image
              src={template.openGraphImage || "/og-image.png"}
              alt={template.name}
              fill
              className="rounded-2xl shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              // 100vw sur mobile, 90vw sur tablette, 800px max sur desktop
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="mt-16 mb-24 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Colonne gauche — About */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              About this Template
            </h2>

            {template.pages && template.pages.length > 0 && (
              <div className="prose prose-gray max-w-none">
                {template.pages.map((description, idx) => (
                  <div key={idx} className="mb-4">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Colonne droite — Tech Info */}
          <aside className="flex flex-col gap-4">
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/60">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Tech Information
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-primary" />
                  <span>Built with Next.js</span>
                </li>

                <li className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-primary" />
                  <span>
                    Updated {new Date(template.updated_at).toLocaleDateString()}
                  </span>
                </li>

                {template.docLink && (
                  <li>
                    <Link
                      href={template.docLink}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>Documentation</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/60">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <SquareCheck className="w-4 h-4 text-green-500" /> SEO
                  Optimized
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> Lightning Fast
                </li>
                <li className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-red-500" /> Fully
                  Customizable
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-500" /> Responsive by
                  Default
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="my-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Features & What’s Included
            </h2>
            <p className="text-gray-600 mt-3">
              Everything you get with this template — production-ready pages, UI
              components, and full documentation to help you launch faster.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {template.extras?.map((feature, idx) => {
              const { title, description } = parseDescriptionText(feature);
              return (
                <div
                  key={idx}
                  className="p-5 border border-gray-200 shadow-sm rounded-2xl bg-white hover:bg-gray-50 transition"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={template.docLink || "#"}
              className="text-sm text-indigo-600 underline"
              target={template.docLink ? "_blank" : undefined}
            >
              Quick install & usage guide
            </Link>

            {template.structure && (
              <ProjectStructureModal structure={template.structure} />
            )}
          </div>
        </section>

        <section className="mb-20 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-gray-200 bg-gray-100/40 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-10 pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-indigo-600" />
                Technical Specifications
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl">
                Key technologies, framework versions, and verified performance
                results that power this template.
              </p>
            </div>

            <div className="p-8">
              {template.performanceImage && (
                <div className="mb-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Lighthouse Performance Score
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50/50 rounded-2xl p-6 border border-green-100/70">
                    <div className="flex justify-center">
                      <Image
                        src={template.performanceImage}
                        alt={`${template.name} Lighthouse Performance Report`}
                        width={956}
                        height={118}
                        className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                        loading="lazy"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        ✓ Verified Lighthouse Results
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech stack badges */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    label: "Framework",
                    value: "Next.js",
                    icon: (
                      <Image
                        src="/svg/nextjs-icon.svg"
                        alt="Next.js"
                        width={32}
                        height={32}
                        className="mx-auto mb-2"
                      />
                    ),
                  },
                  {
                    label: "Language",
                    value: "TypeScript",
                    icon: (
                      <Image
                        src="/svg/typescript.svg"
                        alt="TypeScript"
                        width={32}
                        height={32}
                        className="mx-auto mb-2"
                      />
                    ),
                  },
                  {
                    label: "Styling",
                    value: "Tailwind CSS",
                    icon: (
                      <Image
                        src="/svg/tailwind.svg"
                        alt="Tailwind CSS"
                        width={32}
                        height={32}
                        className="mx-auto mb-2"
                      />
                    ),
                  },
                  {
                    label: "Design",
                    value: "Responsive",
                    icon: (
                      <Smartphone className="mx-auto mb-2 w-8 h-8 text-slate-500" />
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center p-5 bg-white/60 border border-gray-200 rounded-2xl hover:bg-white/80 transition-colors"
                  >
                    {item.icon}
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>

              {template.tech && (
                <div className="grid md:grid-cols-2 gap-6">
                  {template.tech.map((tech, i) => {
                    const { title, description } = parseDescriptionText(tech);
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-5 bg-white/60 border border-gray-200 rounded-2xl hover:bg-white/80 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {getTechIcon(title)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        <PaymentMethodSection />
        <FaqAccordion />
      </div>
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--primary-foreground)_r_g_b_/_0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--primary-foreground)_r_g_b_/_0.075)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-foreground/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-foreground/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Start Building with This Template?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Get instant access to a production-ready Next.js template — fully
              customizable, beautifully designed, and built to help you launch
              faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                variant="secondary"
                className="w-full px-8 py-4 text-lg h-[50px] bg-white"
                asChild
              >
                <Link href={template.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </Link>
              </Button>
              <DynamicBuyButton template={template} purchases={purchases} />
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Instant download. Lifetime updates included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const parseDescriptionText = (text: string) => {
  const colonIndex = text.indexOf(" : ");
  if (colonIndex === -1) {
    return { title: text, description: "" };
  }

  const title = text.substring(0, colonIndex).replace(/\*\*/g, "");
  const description = text.substring(colonIndex + 3);

  return { title, description };
};

function getTechIcon(title: string) {
  const key = title.toLowerCase();
  if (key.includes("next.js"))
    return (
      <Image src="/svg/nextjs-icon.svg" alt="Next.js" width={30} height={30} />
    );
  if (key.includes("tailwind"))
    return (
      <Image
        src="/svg/tailwind.svg"
        alt="Tailwind CSS"
        width={30}
        height={30}
      />
    );
  if (key.includes("lucid"))
    return (
      <Image
        src="/images/logo/lucid-react.png"
        alt="Lucid"
        width={30}
        height={30}
      />
    );
  if (key.includes("shadcn"))
    return (
      <Image
        src="/svg/shadcn.svg"
        className="bg-black rounded-md"
        alt="ShadCN"
        width={30}
        height={30}
      />
    );
  if (key.includes("motion"))
    return (
      <Image
        src="/images/logo/motion.png"
        alt="Motion"
        className="rounded-md"
        width={30}
        height={30}
      />
    );
  if (key.includes("prisma"))
    return <Image src="/svg/prisma.svg" alt="Prisma" width={30} height={30} />;
  if (key.includes("stripe"))
    return <Image src="/svg/stripe.svg" alt="Stripe" width={30} height={30} />;
  if (key.includes("nextauth"))
    return (
      <Image
        src="/images/logo/nextAuth.png"
        alt="Lucid"
        width={30}
        height={30}
      />
    );
  if (key.includes("sanity"))
    return (
      <Image
        src="/images/logo/sanity.avif"
        className="rounded-md"
        alt="Sanity"
        width={30}
        height={30}
      />
    );

  return <Check className="w-4 h-4 text-indigo-600" />;
}
