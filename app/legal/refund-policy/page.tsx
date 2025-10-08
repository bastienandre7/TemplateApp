import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy – BloomTPL",
  description:
    "Read BloomTPL’s refund policy to understand when refunds are granted and when they are not. Clear guidelines for product issues, technical support, and fair use.",
  alternates: {
    canonical: "https://bloomtpl.com/refund-policy",
  },
  openGraph: {
    title: "Refund Policy – BloomTPL",
    description:
      "Read BloomTPL’s refund policy to understand when refunds are granted and when they are not. Clear guidelines for product issues, technical support, and fair use.",
    url: "https://bloomtpl.com/refund-policy",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – Modern Next.js Templates",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Refund Policy – BloomTPL",
    description:
      "Read BloomTPL’s refund policy to understand when refunds are granted and when they are not. Clear guidelines for product issues, technical support, and fair use.",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-20 py-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-20">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
        <p className="text-gray-600 mb-12">
          At <span className="font-semibold">BloomTPL</span>, we want you to
          feel confident when purchasing our templates. Since our products are{" "}
          <strong>digital and delivered instantly</strong>, refunds are only
          granted in specific situations.
        </p>

        {/* 24h Refund Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            ✅ You can request a refund within 24 hours if:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              You have a valid reason (such as technical issues or the template
              not working as described).
            </li>
            <li>
              The product you purchased has stopped functioning as described and
              our support team cannot provide a working solution.
            </li>
            <li>Unauthorized use or fraudulent payment has been detected.</li>
          </ul>
        </section>

        {/* Not Eligible Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            ❌ Refunds will not be granted if:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              You open a dispute or chargeback{" "}
              <strong>before contacting our support team</strong>.
            </li>
            <li>
              You are unable to install or configure the template due to lack of
              technical skills.
            </li>
            <li>You change your mind after completing the purchase.</li>
            <li>You decide not to use the product anymore.</li>
            <li>The product has been downloaded or used extensively.</li>
            <li>You request a refund after 24 hours of your purchase.</li>
          </ul>
        </section>

        {/* Commitment */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            💬 Our Commitment
          </h3>
          <p className="text-gray-700">
            We want you to love your template. If for any reason you’re not
            satisfied, you can request a refund within 24 hours of your purchase
            — no questions asked. Before considering a refund, we encourage you
            to reach out to our{" "}
            <span className="font-semibold">support team</span> at{" "}
            <a
              href="mailto:bloomtpl@gmail.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              bloomtpl@gmail.com
            </a>
            . We are always happy to help you with installation, configuration,
            or any technical issues you may encounter. Our goal is to make sure
            you can use and enjoy your template as intended.
          </p>
        </section>
      </div>
    </main>
  );
}
