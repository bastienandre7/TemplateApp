"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <section id="faq" className="max-w-4xl mx-auto pt-16 pb-32 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">FAQ – BloomTPL</h2>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is BloomTPL?</AccordionTrigger>
          <AccordionContent>
            BloomTPL offers a carefully curated collection of high-quality,
            production-ready Next.js and Tailwind CSS templates for SaaS
            applications, dashboards, portfolios, landing pages, and more.
            Perfect for developers who want to build faster with a clean,
            responsive foundation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are the templates free to use?</AccordionTrigger>
          <AccordionContent>
            We offer both free and premium templates. You can filter and explore
            all options directly on the homepage, and choose the ones that best
            suit your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I use these templates for commercial projects?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! All BloomTPL templates can be used for personal or
            commercial projects with unlimited installations — no restrictions
            on how many projects you build.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer support or updates?</AccordionTrigger>
          <AccordionContent>
            Yes — premium templates include free lifetime updates and priority
            support. Free templates come with community support and bug fixes
            whenever possible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
