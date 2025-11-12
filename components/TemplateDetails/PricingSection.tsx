import { Check, Crown, Infinity, Users } from "lucide-react";
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

export default function PricingSection({ variants }: PricingSectionProps) {
  const getDiscountedPrice = (price: number) =>
    price > 0 ? Math.round(price * 0.8 * 100) / 100 : 0;
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
              className={`p-8 bg-white border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Crown className={`w-6 h-6 mb-2`} />
              <div className={`font-bold text-xl mb-2 `}>Solo License</div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                {getDiscountedPrice(variants.solo.price) <
                  variants.solo.price && (
                  <span className="text-2xl text-gray-400 line-through mr-2">
                    ${variants.solo.price}
                  </span>
                )}
                <span>${getDiscountedPrice(variants.solo.price)}</span>
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
            <div
              className={`p-8 bg-primary text-white md:scale-102 border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Users className={`w-6 h-6 mb-2`} />
              <div className={`font-bold text-xl mb-2`}>Studio License</div>
              <div className="text-4xl font-extrabold mb-2 text-gray-100 flex items-center justify-center gap-2">
                {getDiscountedPrice(variants.studio.price) <
                  variants.studio.price && (
                  <span className="text-2xl text-gray-300 line-through mr-2">
                    ${variants.studio.price}
                  </span>
                )}
                <span>${getDiscountedPrice(variants.studio.price)}</span>
                <span className="text-base text-gray-300 font-normal">
                  /Lifetime
                </span>
              </div>
              <PricingBuyButton
                link={variants.studio.link}
                label="Buy Now"
                buttonClass="bg-white text-primary hover:bg-gray-100"
              />
              <ul className="mt-2 text-left text-sm text-gray-100 space-y-3 w-full">
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
              className={`p-8 bg-white border shadow-xl rounded-2xl text-center flex flex-col items-center hover:shadow-2xl transition`}
            >
              <Infinity className={`w-6 h-6 mb-2`} />
              <div className={`font-bold text-xl mb-2`}>Unlimited License</div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 flex items-center justify-center gap-2">
                {getDiscountedPrice(variants.unlimited.price) <
                  variants.unlimited.price && (
                  <span className="text-2xl text-gray-400 line-through mr-2">
                    ${variants.unlimited.price}
                  </span>
                )}
                <span>${getDiscountedPrice(variants.unlimited.price)}</span>
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
    </section>
  );
}
