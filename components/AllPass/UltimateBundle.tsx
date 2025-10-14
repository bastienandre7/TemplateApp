"use client";

import { Check, Package, TrendingUp, Zap } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface BundleTemplate {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  features: string[];
  slug: string;
  demoUrl?: string;
  variants?: {
    solo?: { price: number; link: string };
    studio?: { price: number; link: string };
    unlimited?: { price: number; link: string };
  };
}

export default function UltimateBundle({
  templates,
}: {
  templates: BundleTemplate[];
}) {
  const { data: session } = useSession();
  const router = useRouter();

  const totalValue = templates.reduce(
    (sum, template) => sum + Number(template.price),
    0
  );
  const bundlePrice = 49.99;

  const bundlePrices = {
    solo: 49.99,
    studio: 99.99,
    unlimited: 349.99,
  };

  const totalSolo = templates.reduce(
    (sum, tpl) =>
      sum +
      (tpl.variants?.solo?.price && typeof tpl.variants.solo.price === "number"
        ? tpl.variants.solo.price
        : 0),
    0
  );
  const totalStudio = templates.reduce(
    (sum, tpl) =>
      sum +
      (tpl.variants?.studio?.price &&
      typeof tpl.variants.studio.price === "number"
        ? tpl.variants.studio.price
        : 0),
    0
  );
  const totalUnlimited = templates.reduce(
    (sum, tpl) =>
      sum +
      (tpl.variants?.unlimited?.price &&
      typeof tpl.variants.unlimited.price === "number"
        ? tpl.variants.unlimited.price
        : 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative mx-auto">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 pt-40">
          {/* Subtle grid / lines background */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(226,232,240,.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,.5)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
              All Access Pass
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Get lifetime access to every BloomTPL template — current and
              future. Build faster, smarter, and launch with premium-quality
              Next.js templates.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors"
              >
                View Pricing
              </a>
              <a
                href="#templates"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 backdrop-blur-sm text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-white transition-colors"
              >
                Explore Templates
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-700">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">+10</span>
                <span className="text-sm text-slate-500">
                  Premium Templates
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">Lifetime</span>
                <span className="text-sm text-slate-500">Free Updates</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">∞</span>
                <span className="text-sm text-slate-500">
                  Unlimited Projects
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">1 Pass</span>
                <span className="text-sm text-slate-500">
                  Access Everything
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mb-20 max-w-6xl mx-auto px-4 sm:px-6 pt-12"
        >
          <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">
            Pass License Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-t border-slate-200 text-sm sm:text-base text-center">
              <thead>
                <tr className="text-slate-600 text-sm uppercase tracking-wide">
                  <th className="py-3 px-4 text-left"></th>
                  <th className="py-3 px-4 font-semibold text-yellow-700">
                    Solo
                  </th>
                  <th className="py-3 px-4 font-semibold text-blue-700">
                    Studio
                  </th>
                  <th className="py-3 px-4 font-semibold text-purple-700">
                    Unlimited
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 border-b border-slate-200">
                {/* Prices */}
                <tr>
                  <td className="py-4 px-4 text-left font-medium text-slate-700">
                    Pass Price
                  </td>
                  <td className="py-4 px-4 font-semibold text-yellow-600">
                    ${bundlePrices.solo}{" "}
                    <span className="text-slate-400 line-through text-sm">
                      ${totalSolo.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-semibold text-blue-600">
                    ${bundlePrices.studio}{" "}
                    <span className="text-slate-400 line-through text-sm">
                      ${totalStudio.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-semibold text-purple-600">
                    ${bundlePrices.unlimited}{" "}
                    <span className="text-slate-400 line-through text-sm">
                      ${totalUnlimited.toFixed(2)}
                    </span>
                  </td>
                </tr>

                {/* Use in Projects */}
                <tr>
                  <td className="py-4 px-4 text-left font-medium text-slate-700">
                    Use in Projects
                  </td>
                  <td className="py-4 px-4">1 per Template</td>
                  <td className="py-4 px-4">5 per Template</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Unlimited
                  </td>
                </tr>

                {/* Lifetime Updates */}
                <tr>
                  <td className="py-4 px-4 text-left font-medium text-slate-700">
                    Lifetime Updates
                  </td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                </tr>

                {/* Commercial Use */}
                <tr>
                  <td className="py-4 px-4 text-left font-medium text-slate-700">
                    Commercial Use
                  </td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                </tr>

                {/* Priority Support */}
                <tr>
                  <td className="py-4 px-4 text-left font-medium text-slate-700">
                    Priority Support
                  </td>
                  <td className="py-4 px-4 text-slate-400">—</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                  <td className="py-4 px-4 text-green-500 font-semibold">✔</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td className="py-4 px-4 font-semibold text-yellow-600">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        if (!session) {
                          router.push("/auth/signin");
                        } else {
                          const email = encodeURIComponent(
                            session.user?.email ?? ""
                          );
                          window.location.href = `https://bloom-tpl.lemonsqueezy.com/buy/a266262f-0b9f-4692-b8b5-f8c9dabc0344?enabled=933614&checkout[email]=${email}`;
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </td>
                  <td className="py-4 px-4 font-semibold text-blue-600">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        if (!session) {
                          router.push("/auth/signin");
                        } else {
                          const email = encodeURIComponent(
                            session.user?.email ?? ""
                          );
                          window.location.href = `https://bloom-tpl.lemonsqueezy.com/buy/b45896dd-eac8-41a5-ab5f-3f64ca165651?enabled=1039636&checkout[email]=${email}`;
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </td>
                  <td className="py-4 px-4 font-semibold text-purple-600">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        if (!session) {
                          router.push("/auth/signin");
                        } else {
                          const email = encodeURIComponent(
                            session.user?.email ?? ""
                          );
                          window.location.href = `https://bloom-tpl.lemonsqueezy.com/buy/9e6757ce-9042-4c94-a8b5-1b1ebb1da01f?enabled=1039637&checkout[email]=${email}`;
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            All licenses include instant access to all templates and future
            releases.
          </p>
        </section>

        {/* What's Included */}
        <section
          id="templates"
          className="mb-24 max-w-7xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              What&apos;s Inside the Bundle?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All premium templates worth ${totalValue.toFixed(2)}, yours for
              just ${bundlePrice}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.slug}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {template.imageUrl && (
                  <Image
                    src={template.imageUrl}
                    alt={template.name}
                    width={400}
                    height={128}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      href={`/nextjs-templates/${template.slug}`}
                      className="text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                    >
                      {template.name}
                    </Link>
                  </div>
                  <p
                    className="text-slate-600 mb-4"
                    style={{ minHeight: "56px", display: "block" }} // Ajuste la hauteur selon tes besoins
                  >
                    {template.description}
                  </p>
                </div>
                <div className="mt-auto flex">
                  <Button variant="default" className="flex-1" asChild>
                    <Link href={template.demoUrl ?? "#"} target="_blank">
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 relative overflow-hidden my-8">
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              BONUS
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Future Templates
            </h3>
            <p className="text-slate-600 mb-4">
              All upcoming templates included forever
            </p>
            <div className="text-lg font-bold text-green-600">FREE</div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
            Why Choose the Ultimate Bundle?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Launch 10x Faster
              </h3>
              <p className="text-slate-600">
                Skip months of development with production-ready templates. From
                idea to launch in days, not months.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Everything Included
              </h3>
              <p className="text-slate-600">
                Authentication, payments, dashboards, responsive design – every
                feature you need is already built.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Commercial License
              </h3>
              <p className="text-slate-600">
                Use in unlimited commercial projects. Build for clients, launch
                SaaS products, create agencies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I get lifetime access to all templates?",
                a: "Yes! One payment gives you lifetime access to all current templates plus any future ones we release.",
              },
              {
                q: "Can I use these for client projects?",
                a: "Absolutely! The commercial license allows unlimited use in client projects, SaaS products, and any commercial venture.",
              },
              {
                q: "How often do you release new templates?",
                a: "We typically release 2-3 new templates per month, all included free in your bundle.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="relative py-24 border-t border-slate-200">
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(226,232,240,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,.4)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Ready to Access Everything?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Unlock every BloomTPL template — present and future — with one
              purchase. Lifetime updates, unlimited projects, full commercial
              rights.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-4 text-base font-semibold shadow-sm hover:bg-slate-800 transition-colors"
              >
                Get the All Access Pass
              </Link>
              <Link
                href="#templates"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 backdrop-blur-sm text-slate-900 px-8 py-4 text-base font-semibold hover:bg-white transition-colors"
              >
                Browse Templates
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Lifetime updates included
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Unlimited commercial use
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                New templates every month
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
