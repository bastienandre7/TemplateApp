import DynamicBuyButton from "@/components/TemplateDetails/DynamicBuyButton";
import FaqAccordion from "@/components/TemplateDetails/FaqAccordion";
import PaymentMethodSection from "@/components/TemplateDetails/PaymentMethodSection";
import PricingSection from "@/components/TemplateDetails/PricingSection";
import ProjectStructureModal from "@/components/TemplateDetails/ProjectStructureModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  CalendarCheck,
  Check,
  Eye,
  Monitor,
  Smartphone,
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
    solo: Variant;
    studio: Variant;
    unlimited: Variant;
    [key: string]: Variant;
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
  console.log("Categories:", template.categories);

  return (
    <div className="pt-16 md:pt-4 text-black bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        {/* Hero Section - Style Clay */}
        <section className="mb-16 max-w-4xl mx-auto">
          {/* Titre */}
          <h1 className="text-foreground leading-tighter text-3xl md:text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter mb-4">
            {template.name}
          </h1>

          {template.categories &&
            Array.isArray(template.categories) &&
            template.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {template.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="capitalize">
                    {cat}
                  </Badge>
                ))}
              </div>
            )}

          {/* Image */}
          <div className="w-full aspect-[16/9] md:aspect-[1200/630] relative mb-6">
            <Image
              src={template.openGraphImage || "/og-image.png"}
              alt={template.name}
              fill
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl object-cover"
              priority
              sizes="100vw"
              fetchPriority="high"
            />
          </div>

          {/* Card informations et actions */}
          <div className="border border-gray-200 rounded-xl md:rounded-2xl shadow-sm p-4 sm:p-6">
            <div className="max-w-4xl">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {template.description}
              </p>

              {/* Boutons - side by side sur desktop */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {template.demoUrl && (
                  <Button
                    variant="outline"
                    className="w-full sm:flex-1 h-[50px] px-6 text-base sm:text-lg bg-white hover:bg-gray-50 transition"
                    asChild
                  >
                    <Link href={template.demoUrl} target="_blank">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                <div className="w-full sm:flex-1">
                  <DynamicBuyButton template={template} purchases={purchases} />
                </div>
              </div>

              <Separator className="my-6" />

              {/* Infos - horizontal sur desktop */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>Built with Next.js</span>
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>
                    Last update:{" "}
                    {new Date(template.updated_at).toLocaleDateString()}
                  </span>
                </span>

                {template.docLink && (
                  <Link
                    href={template.docLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:underline font-medium"
                  >
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    <span>Documentation</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pages Description */}
        {template.pages && template.pages.length > 0 && (
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="">
              <div className="prose prose-lg max-w-none">
                {template.pages.map((description, idx) => (
                  <div key={idx} className="mb-4">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="my-24 max-w-4xl mx-auto">
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

        <section className="mb-20 max-w-4xl mx-auto">
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

        {template.variants && <PricingSection variants={template.variants} />}
        <PaymentMethodSection />
        <FaqAccordion />

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 text-white mt-0 md:mt-12">
          {/* Glow background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 text-center space-y-10 px-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent">
              Start Building Today
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Production-ready code, modern architecture, and everything you
              need to ship faster.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <DynamicBuyButton template={template} purchases={purchases} />
              {template.demoUrl && (
                <Link
                  href={template.demoUrl}
                  target="_blank"
                  className="flex-1 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full h-[50px] px-8 py-4 text-lg border border-gray-600 text-gray-800 hover:bg-white/10 hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>

            {/* Small highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 pt-8">
              {[
                { color: "bg-green-400", label: "Instant Download" },
                { color: "bg-blue-400", label: "TypeScript Ready" },
                { color: "bg-purple-400", label: "Next.js 15" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${item.color} rounded-full`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
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
