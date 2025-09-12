"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BloomTPL templates
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                What is BloomTPL?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                BloomTPL offers a carefully curated collection of high-quality,
                production-ready Next.js and Tailwind CSS templates for SaaS
                applications, dashboards, portfolios, landing pages, and more.
                Perfect for developers who want to build faster with a clean,
                responsive foundation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Are the templates free to use?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                We offer both free and premium templates. You can filter and
                explore all options directly on the homepage, and choose the
                ones that best suit your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I use these templates for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Absolutely! All BloomTPL templates can be used for personal or
                commercial projects with unlimited installations — no
                restrictions on how many projects you build.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Do you offer support or updates?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Yes — premium templates include free lifetime updates and
                priority support. Free templates come with community support and
                bug fixes whenever possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                How do I install a template after purchase?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                After purchase, you&apos;ll receive a download link via email
                and in your dashboard. Unzip the project and run{" "}
                <code className="px-2 py-1 bg-gray-100 rounded-md font-mono text-sm">
                  npm install
                </code>{" "}
                followed by{" "}
                <code className="px-2 py-1 bg-gray-100 rounded-md font-mono text-sm">
                  npm run dev
                </code>{" "}
                to get started. More details here:{" "}
                <a
                  href="/docs"
                  className="text-blue-600 hover:text-blue-700 underline transition-colors"
                >
                  Installation Guide
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Which payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                We accept all major credit cards, debit cards and PayPal via
                Lemon Squeezy. All payments are secure and processed with SSL
                encryption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Due to the digital nature of our products, we do not offer
                refunds. If you have any issues with your download or need help,
                contact our support and we&apos;ll do our best to help.{" "}
                <a
                  href="/refund-policy"
                  className="text-blue-600 hover:text-blue-700 underline transition-colors"
                >
                  Refund Policy
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I customize the templates to match my brand?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Of course! All templates use Tailwind CSS with a clear
                structure, so you can easily change colors, fonts, sections, and
                add your own components to match your brand perfectly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                What do I get when I purchase a template?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-black mb-6">
                    What&apos;s included in your purchase
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">
                          Instant Access
                        </div>
                        <div className="text-sm text-gray-600">
                          Download immediately after purchase
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm">∞</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">
                          Lifetime Updates
                        </div>
                        <div className="text-sm text-gray-600">
                          Get all future improvements for free
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 text-sm">⚡</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">
                          Production Ready
                        </div>
                        <div className="text-sm text-gray-600">
                          Clean, optimized codebase
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-sm">⚖</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">
                          Commercial License
                        </div>
                        <div className="text-sm text-gray-600">
                          Use for personal & client projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I download the templates anytime?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Absolutely! Simply log in to your account, head over to the
                dashboard section, and enjoy instant access to all your
                templates — anytime, day or night.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
