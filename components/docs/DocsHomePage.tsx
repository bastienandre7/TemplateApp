import Link from "next/link";

export default function DocsHomePage() {
  const categories = [
    {
      title: "Base Templates",
      description:
        "Next.js + Tailwind CSS + shadcn/ui\nFor landing pages, portfolios, and static sites.",
      href: "/docs/base",
    },
    {
      title: "SaaS Templates",
      description:
        "Next.js + Tailwind CSS + shadcn/ui + Prisma + NextAuth + Stripe\nFor SaaS apps with authentication and billing.",
      href: "/docs/saas",
    },
    {
      title: "CMS Templates",
      description:
        "Next.js + Tailwind CSS + shadcn/ui + Sanity.io\nFor content-driven sites and blogs.",
      href: "/docs/cms",
    },
  ];

  return (
    <main className="pt-32 bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          BloomTPL Documentation
        </h1>
        <p className="text-gray-600 mb-12 text-center">
          Welcome to the BloomTPL Documentation — find setup guides, environment
          configuration, and customization tips for all template types.
        </p>
        <div className="grid grid-cols-1 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
