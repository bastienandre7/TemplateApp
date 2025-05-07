import HeaderCPN from "@/components/Header/HeaderCPN";
import Image from "next/image";
import Link from "next/link";

export default function WhyUseTemplatePage() {
  return (
    <div className="pt-4 bg-neutral-800 text-white">
      <HeaderCPN />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* 📸 Image de couverture */}
        <div className="overflow-hidden rounded-lg mb-8">
          <Image
            src="/images/blog/why-use-template.jpg"
            alt="Why use a template"
            width={1000}
            height={600}
            className="w-full h-64 sm:h-80 object-cover rounded-lg"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Why use a template instead of building from scratch?
        </h1>
        <p className="text-gray-300 mb-8">
          Discover the key benefits of using templates for your next web
          project.
        </p>

        <div className="space-y-6 prose prose-neutral">
          <p>
            You have a product idea. You want to launch fast. But building
            everything from scratch? That’s a guaranteed way to burn time,
            energy, and money before you even validate anything.
          </p>

          <p>
            Whether you&apos;re creating a SaaS, an online store, a personal
            portfolio or a landing page, starting with a high-quality template
            can save you **weeks of work** — and put you on the fast track to
            results.
          </p>

          <h2 className="font-semibold">1. Launch faster</h2>
          <p>
            Building from scratch is time-consuming. With a template, you get a
            polished design, responsive layout, and production-ready code — all
            done for you. Instead of spending weeks setting up the basics,
            you&apos;re shipping in days.
          </p>

          <h2 className="font-semibold">2. Battle-tested UX and UI</h2>
          <p>
            A good template isn’t just pretty — it’s designed to convert. From
            navigation to CTAs, every element follows modern best practices to
            help your users take action.
          </p>

          <h2 className="font-semibold">3. Lower your costs</h2>
          <p>
            Hiring a designer and developer to build your site from scratch can
            cost thousands. A premium template gives you **80% of the work** for
            **less than 1% of the price**. That’s money you can reinvest in
            marketing, product or content.
          </p>

          <h2 className="font-semibold">4. Focus on what matters</h2>
          <p>
            You didn’t start your business to tweak CSS or debug layout issues.
            Templates let you focus on your product, your messaging, and your
            customers — not reinventing the UI wheel.
          </p>

          <h2 className="font-semibold">5. Ready to scale</h2>
          <p>
            All templates from <strong>bloomtpl.com</strong> are built with
            clean, modular code using modern tech like
            <strong> Next.js </strong> and <strong>Tailwind CSS</strong>. That
            means you&apos;re starting on a solid foundation that can grow with your
            business.
          </p>

          <h2>But… won’t my site look like everyone else’s?</h2>
          <p>
            Not if you customize it. Templates are your starting point — not the
            finish line. With your content, branding, and product, you’ll still
            build something uniquely yours.
          </p>

          <h2>Choose quality. Choose speed. Choose results.</h2>
          <p>
            If you’re serious about launching your project efficiently and
            professionally, don’t waste time starting from scratch.
            <br />
            Browse our collection of{" "}
            <Link href="/#templates" className="font-semibold">ready-to-use templates</Link> and find the
            perfect fit for your vision.
          </p>

          <p>
            Every template is crafted to help you go live faster and look
            great doing it.
            <br />
            <Link href="/#templates" className="text-blue-600 underline">
              Get started today.
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
