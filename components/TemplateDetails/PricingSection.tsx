import { Check, Crown, Infinity, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import PricingBuyButton from "./PricingBuyButton";

interface Variant {
  price: number;
  link: string;
}

interface Variants {
  free?: Variant;
  premium?: Variant;
}

interface PricingSectionProps {
  variants: Variants;
}

export default function PricingSection({ variants }: PricingSectionProps) {
  const variantCount = [variants.free, variants.premium].filter(Boolean).length;

  const gridCols =
    variantCount === 1
      ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
      : "grid-cols-1 lg:grid-cols-3";

  return (
    <section id="pricing-section" className="py-12">
      <div className="">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Launch Faster with a One-Time License
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick the plan that fits your goals.
            <br />
            <span className="text-primary font-semibold">
              Instant access, lifetime updates, no recurring costs.
            </span>
          </p>
        </div>
        <div className={`grid ${gridCols} gap-8`}>
          {variants.free && (
            <div
              className={`p-8 bg-white border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Crown className={`w-6 h-6 mb-2`} />
              <div className={`font-bold text-xl mb-2 `}>Free License</div>
              <p className="text-muted-foreground mb-4 text-xs">
                Get the clean, production-grade frontend of the template —
                perfect for learning, experimenting, or kickstarting small
                projects.
              </p>
              <p className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                $0
              </p>
              <PricingBuyButton link={variants.free.link} label="Download" />
              <ul className="mt-2 text-left text-sm text-gray-700 space-y-3 w-full">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Instant Access to
                  Template
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Full Source Code
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Commercial License
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Use on Unlimited
                  Projects Included
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Email Support
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Lifetime Free
                  Updates
                </li>
              </ul>
            </div>
          )}
          {variants.premium && (
            <div
              className={`p-8 bg-chart-2 text-white md:scale-105 border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Users className={`w-6 h-6 mb-2`} />
              <div className={`font-bold text-xl mb-2`}>Premium License</div>
              <p className="text-white mb-4 text-xs">
                The complete production-ready starter kit with backend,
                authentication, billing, and everything needed to launch a real
                SaaS/product.
              </p>
              <p className="text-4xl font-extrabold mb-2 text-gray-100 flex items-center justify-center gap-2">
                ${variants.premium.price}
              </p>
              <PricingBuyButton
                link={variants.premium.link}
                label="Buy Now"
                buttonClass="bg-white text-primary hover:bg-gray-100"
              />
              <ul className="mt-2 text-left text-sm text-white space-y-3 w-full">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Instant Access to
                  Template
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Full Source Code
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Commercial License
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Use on Unlimited
                  Projects Included
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Premium Features
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Email Support
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Lifetime Free
                  Updates
                </li>
              </ul>
            </div>
          )}

          <div
            className={`p-8 bg-white border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
          >
            <Infinity className={`w-6 h-6 mb-2`} />
            <div className={`font-bold text-xl mb-2`}>All-Access Pass</div>
            <p className="text-muted-foreground mb-4 text-xs">
              Unlock the full BloomTPL library — including all current and
              future templates — with lifetime updates and unlimited usage
              rights.
            </p>
            <p className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
              $149 one-time
            </p>
            <Button
              variant="default"
              className="w-full py-6 my-4 font-semibold text-lg cursor-pointer bg-chart-2"
              asChild
            >
              <Link href="/all-access-pass">Buy Now</Link>
            </Button>
            <ul className="mt-2 text-left text-sm text-gray-700 space-y-3 w-full">
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> Instant Access to all
                premium templates
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> Access to all future
                releases
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> One-time payment, no
                subscriptions
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> Unlimited projects
                (personal & commercial)
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> Lifetime updates &
                improvements
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> All assets, components
                & pages included
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" /> Lifetime Free Updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
