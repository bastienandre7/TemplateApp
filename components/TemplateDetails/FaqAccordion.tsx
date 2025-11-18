"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto">
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
        <div className="overflow-hidden">
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                What is BloomTPL?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                BloomTPL is a platform offering high-quality, ready-to-use
                templates for Next.js and Tailwind CSS, designed to help you
                build web projects faster.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
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
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                How do I purchase a template?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Simply click the “Purchase” button on the template page and
                follow the secure checkout process via Lemon Squeezy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Which payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                We accept all major credit/debit cards and PayPal via Lemon
                Squeezy. All payments are secure and processed with SSL
                encryption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Refunds are available within 24 hours if you encounter a real
                issue we can&apos;t resolve.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-lg text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                How do I access my purchased templates?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                After purchase, your templates are available for download in
                your dashboard and via email.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
