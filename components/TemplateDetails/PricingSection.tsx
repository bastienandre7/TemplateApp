import { Check, Crown, Infinity, Users } from "lucide-react";
import Link from "next/link";
import PricingBuyButton from "./PricingBuyButton";

interface Variant {
  price: number;
  link: string;
}

interface Variants {
  solo?: Variant;
  studio?: Variant;
  unlimited?: Variant;
}

interface PricingSectionProps {
  variants: Variants;
}

// styles pour chaque licence (utilise les couleurs de la card)
const licenseStyles = {
  solo: {
    iconClass: "text-yellow-500",
    borderClass: "border-yellow-300",
    titleClass: "text-yellow-700",
    buttonClass: "bg-yellow-600 text-white hover:bg-yellow-700",
  },
  studio: {
    iconClass: "text-blue-500",
    borderClass: "border-blue-300",
    titleClass: "text-blue-700",
    buttonClass: "bg-blue-600 text-white hover:bg-blue-700",
  },
  unlimited: {
    iconClass: "text-purple-700",
    borderClass: "border-purple-300",
    titleClass: "text-purple-700",
    buttonClass: "bg-purple-600 text-white hover:bg-purple-700",
  },
};

export default function PricingSection({ variants }: PricingSectionProps) {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solo License */}
          {variants.solo && (
            <div
              className={`p-8 bg-white border ${licenseStyles.solo.borderClass} shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Crown
                className={`w-6 h-6 ${licenseStyles.solo.iconClass} mb-2`}
              />
              <div
                className={`font-bold text-xl mb-2 ${licenseStyles.solo.titleClass}`}
              >
                Solo License
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                ${variants.solo.price}
                <span className="text-base text-muted-foreground font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton
                link={variants.solo.link}
                label="Buy Now"
                buttonClass={licenseStyles.solo.buttonClass}
              />
              <ul className="mt-2 text-left text-sm text-gray-700 space-y-3 w-full">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Instant Access to
                  Template
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Commercial License
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Use on{" "}
                  <span className="font-semibold ml-1">1 Project</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Premium Features
                  Included
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Next.js / Tailwind
                  CSS Files
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
          {/* Studio License */}
          {variants.studio && (
            <div
              className={`p-8 bg-gradient-to-br from-blue-50 to-white md:scale-105 ring-2 ring-blue-300 border ${licenseStyles.studio.borderClass} shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Users
                className={`w-6 h-6 ${licenseStyles.studio.iconClass} mb-2`}
              />
              <div
                className={`font-bold text-xl mb-2 ${licenseStyles.studio.titleClass}`}
              >
                Studio License
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                ${variants.studio.price}
                <span className="text-base text-muted-foreground font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton
                link={variants.studio.link}
                label="Buy Now"
                buttonClass={licenseStyles.studio.buttonClass}
              />
              <ul className="mt-2 text-left text-sm text-gray-700 space-y-3 w-full">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Instant Access to
                  Template
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Commercial License
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Use on{" "}
                  <span className="font-semibold ml-1">5 Projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Premium Features
                  Included
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Next.js / Tailwind
                  CSS Files
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
          {/* Unlimited License */}
          {variants.unlimited && (
            <div
              className={`p-8 bg-white border ${licenseStyles.unlimited.borderClass} shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Infinity
                className={`w-6 h-6 ${licenseStyles.unlimited.iconClass} mb-2`}
              />
              <div
                className={`font-bold text-xl mb-2 ${licenseStyles.unlimited.titleClass}`}
              >
                Unlimited License
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                ${variants.unlimited.price}
                <span className="text-base text-muted-foreground font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton
                link={variants.unlimited.link}
                label="Buy Unlimited"
                buttonClass={licenseStyles.unlimited.buttonClass}
              />
              <ul className="mt-2 text-left text-sm text-gray-700 space-y-3 w-full">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Instant Access to
                  Template
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Commercial License
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Use on{" "}
                  <span className="font-semibold ml-1">Unlimited Projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Premium Features
                  Included
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" /> Next.js / Tailwind
                  CSS Files
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
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-5 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-lg text-gray-900 border border-gray-200">
          <span>
            Get this template plus every other template with the{" "}
            <Link
              href="/bundle/ultimate"
              className="underline font-semibold hover:text-yellow-600 transition"
            >
              All-Access Pass
            </Link>{" "}
            →
          </span>
          <span className="text-base font-medium opacity-90">
            Save over <span className="font-bold">90%</span> with All-Access
            Pass
          </span>
        </div>
      </div>
    </section>
  );
}
