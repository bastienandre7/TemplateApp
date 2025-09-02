"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto pb-14 md:pb-20 lg:pb-24 px-4"
    >
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
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do I install a template after purchase?
          </AccordionTrigger>
          <AccordionContent>
            After purchase, you’ll receive a download link via email and in your
            dashboard. Unzip the project and run <code>npm install</code>{" "}
            followed by <code>npm run dev</code> to get started. More details
            here :{" "}
            <a href="/docs" className="text-blue-500 underline">
              Installation Guide
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Which payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept all major credit, debit cards and PayPal via Lemon
            Squeezy. Payments are secure and processed with SSL encryption.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
          <AccordionContent>
            Due to the digital nature of our products, we do not offer refunds.
            If you have any issues with your download or need help, contact our
            support and we’ll do our best to help.{" "}
            <a href="/refund-policy" className="text-blue-500 underline">
              Refund Policy
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            Can I customize the templates to match my brand?
          </AccordionTrigger>
          <AccordionContent>
            Of course, all templates use Tailwind and a clear structure, so you
            can easily change colors, fonts, sections, and add your own
            components.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            What do I get when I purchase a template?
          </AccordionTrigger>
          <AccordionContent>
            <div className="border rounded-2xl bg-gray-50 p-6">
              <h3 className="text-lg font-semibold mb-4">What you get</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✅</span>
                  <span>
                    Instant access – download your template .zip file right
                    after purchase
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🔄</span>
                  <span>
                    Lifetime updates – get all future improvements for free
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🗂</span>
                  <span>
                    Full source code – clean, production-ready codebase
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">📜</span>
                  <span>
                    Commercial license – use it for personal & client projects
                  </span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            Can I download the templates anytime?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Simply log in to your account, head over to the
            dashboard section, and enjoy instant access to all your templates —
            anytime, day or night.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
