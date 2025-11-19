import DynamicBuyButton from "@/components/TemplateDetails/DynamicBuyButton";
import PaymentMethodSection from "@/components/TemplateDetails/PaymentMethodSection";
import ProjectStructureModal from "@/components/TemplateDetails/ProjectStructureModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Monitor, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import HeroCtaButtons from "./HeroCtaButtons";
import TemplateFAQ from "./TemplateFAQ";

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
  content?: string[];
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
    <div className="pt-4 text-black bg-background min-h-screen">
      <div className="pt-32">
        <section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1.6fr] gap-12 items-start w-full mx-auto border-b py-12 md:py-20">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {template.categories?.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="capitalize bg-primary/10 text-primary border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="mb-4 text-foreground text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  {template.name}
                </h1>

                <p className="text-xl text-muted-foreground mb-6">
                  {template.description}
                </p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl text-primary">
                    {template.price === 0 ? "FREE" : `$${template.price}`}
                  </span>
                  {template.price > 0 && (
                    <span className="text-muted-foreground">
                      one-time payment
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <DynamicBuyButton template={template} purchases={purchases} />
                  {template.demoUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:flex-1 h-[50px]"
                      asChild
                    >
                      <Link
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" />
                        Live Preview
                      </Link>
                    </Button>
                  )}
                </div>

                <div className="flex flex-row gap-8 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-green-600" />
                    <span>Lifetime access & updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-green-600" />
                    <span>Money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-green-600" />
                    <span>Use in unlimited projects</span>
                  </div>
                </div>
              </div>

              {/* Right: Preview */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border shadow-2xl">
                  <Image
                    src={template.openGraphImage || "/og-image.png"}
                    alt={template.name}
                    className="w-full object-cover"
                    style={{ aspectRatio: "1200/630" }}
                    width={1200}
                    height={630}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-24 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-12">
          {/* Colonne principale */}
          <div>
            <h2 className="text-xl font-medium text-black mb-8">
              About This Template
            </h2>
            {template.pages && template.pages.length > 0 && (
              <div className="prose prose-gray max-w-none text-muted-foreground font-thin">
                {template.pages.map((description, idx) => (
                  <div key={idx} className="mb-4">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Aside */}
          <aside className="flex flex-col gap-6">
            {/* Liste des pages (depuis content) */}
            {template.content && template.content.length > 0 && (
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/60">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Pages Included
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                  {template.content.map((page, idx) => (
                    <li key={idx}>{page}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/60">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Resources
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {template.docLink && (
                  <li>
                    <Link
                      href={template.docLink}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      Documentation
                    </Link>
                  </li>
                )}
                <li>
                  {template.structure && (
                    <ProjectStructureModal structure={template.structure} />
                  )}
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="mt-24 bg-muted/30 border-t border-b border-gray-200 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Features & What’s Included
              </h2>
              <p className="text-gray-600 mt-3">
                Everything you get with this template — production-ready pages,
                UI components, and full documentation to help you launch faster.
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
                    <div className="flex items-start gap-3 mb-2">
                      <Check className="w-5 h-5 text-green-600 mb-3" />
                      <h3 className="text-base text-gray-900">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-12">
                <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-gray-900">
                  <Monitor className="w-6 h-6 text-primary" />
                  Technical Specifications
                </h2>
                <p className="text-muted-foreground">
                  Built with modern technologies and optimized for performance
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-stretch gap-4 mb-12">
                {[
                  ...(template.tech || []).map((tech, i) => {
                    const { title } = parseDescriptionText(tech);
                    return (
                      <div
                        key={title + i}
                        className="flex flex-col items-center justify-center text-center p-6 bg-card border rounded-xl hover:shadow-md transition-shadow w-[min(100%,220px)] flex-1"
                      >
                        <div className="mb-3 flex justify-center">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto">
                            {getTechIcon(title)}
                          </div>
                        </div>
                        <div className="text-foreground">{title}</div>
                      </div>
                    );
                  }),
                  <div
                    key="responsive"
                    className="flex flex-col items-center justify-center text-center p-6 bg-card border rounded-xl hover:shadow-md transition-shadow w-[min(100%,220px)] flex-1"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto">
                        <Smartphone className="mx-auto w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="text-foreground">Responsive</div>
                  </div>,
                ]}
              </div>

              {template.performanceImage && (
                <div className="mt-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold">
                      Lighthouse Performance Score
                    </h3>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-primary/5 rounded-xl p-6 border">
                    <div className="flex justify-center">
                      <Image
                        src={template.performanceImage}
                        alt={`${template.name} Lighthouse Performance Report`}
                        className="rounded-lg border max-w-full h-auto"
                        width={956}
                        height={118}
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        ✓ Verified Lighthouse Results
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <TemplateFAQ />
        <PaymentMethodSection />
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
            <HeroCtaButtons template={template} />
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
  if (key.includes("react"))
    return <Image src="/svg/react.svg" alt="React" width={30} height={30} />;
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
