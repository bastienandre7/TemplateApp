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

const licenseIcons = {
  solo: <Crown className="w-6 h-6 text-yellow-500 mb-2" />,
  studio: <Users className="w-6 h-6 text-blue-500 mb-2" />,
  unlimited: <Infinity className="w-6 h-6 text-purple-700 mb-2" />,
};

export default function PricingSection({ variants }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="py-12">
      <div className="">
        <div className="text-center pb-6">
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
            <div className="p-8 bg-white border border-yellow-300 shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition">
              {licenseIcons.solo}
              <div className="font-bold text-xl mb-2 text-yellow-700">
                Solo License
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                ${variants.solo.price}
                <span className="text-base text-muted-foreground font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton link={variants.solo.link} label="Buy Now" />
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
            <div className="p-8 bg-white border border-blue-300 shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition">
              {licenseIcons.studio}
              <div className="font-bold text-xl mb-2 text-blue-700">
                Studio License
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                ${variants.studio.price}
                <span className="text-base text-muted-foreground font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton link={variants.studio.link} label="Buy Now" />
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
            <div className="p-8 bg-white border border-purple-300 shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition">
              {licenseIcons.unlimited}
              <div className="font-bold text-xl mb-2 text-purple-700">
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
        <div className="inline-flex items-center gap-2 px-6 py-5 rounded-full bg-white shadow-lg">
          <span className="text-lg font-semibold">
            Get this template{" "}
            <span className="font-bold">plus every other template</span> with
            the{" "}
            <Link
              href="/bundle/ultimate"
              className="underline font-bold hover:text-yellow-300 transition"
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
