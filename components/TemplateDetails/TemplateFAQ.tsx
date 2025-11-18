"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TemplateFAQ() {
  return (
    <section id="faq">
      <div className="max-w-3xl mx-auto">
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
        <div className="">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I use templates for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Yes, all templates can be used for personal and commercial
                projects, with unlimited installs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                How do I install a template?
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
              value="item-3"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I customize the templates?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Absolutely! All templates use Tailwind CSS and are fully
                customizable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Are updates included?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                Yes, you get free lifetime updates for all purchased templates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                What’s included with my purchase?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                You receive the full source code, documentation, and access to
                future updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200">
                Can I use the templates for client work?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                Yes, you can use them for unlimited client and personal
                projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border-b border-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-black hover:text-gray-700 px-8 py-6 hover:bg-gray-50 transition-all duration-200 ease-in-out">
                Do templates include documentation?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out">
                Yes, each template comes with a quick start guide and
                documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
