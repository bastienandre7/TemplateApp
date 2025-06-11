import Image from "next/image";
import Link from "next/link";
import HeaderCPN from "./Header/HeaderCPN";

export default function Docs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pt-4">
      <HeaderCPN />
      <main className="flex-1 px-4 sm:px-8 py-8 w-full max-w-4xl mx-auto mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">How It Works</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            A step-by-step guide to purchase, download, and install your
            template.
          </p>
        </div>

        {/* Step 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Choose a Template
          </h2>
          <Image
            src="/images/doc/step-1.png"
            alt="Choosing a template on homepage"
            width={1000}
            height={600}
            priority
            className="rounded-xl mb-4 shadow-lg"
          />
          <p className="text-gray-700 text-base">
            Browse our homepage and select the template that fits your project —
            SaaS, blog, portfolio, or e-commerce.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Secure Payment via Lemon Squeezy
          </h2>
          <Image
            src="/images/doc/step-2.png"
            alt="Checkout with Lemon Squeezy"
            width={1000}
            height={600}
            className="rounded-xl mb-4 shadow-lg"
          />
          <p className="text-gray-700 text-base">
            Login and proceed to checkout using Lemon Squeezy. You can pay with
            credit card, Paypal, and more. After purchase, you&apos;ll receive
            an instant download link by email.
          </p>
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Download Your Files
          </h2>
          <Image
            src="/images/doc/step-3.png"
            alt="Download link email"
            width={1000}
            height={600}
            className="rounded-xl mb-4 shadow-lg"
          />
          <p className="text-gray-700 text-base">
            You can access your purchased templates from the download email or
            directly in your dashboard on BloomTPL by clicking on &quot;My
            Account&quot;.
          </p>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Install the Template
          </h2>
          <Image
            src="/images/doc/step-4.png"
            alt="Opening template in VS Code"
            width={1000}
            height={600}
            className="rounded-xl mb-4 shadow-lg"
          />
          <p className="text-gray-700 text-base mb-4">
            Unzip the downloaded archive and open the project in your code
            editor.
          </p>
          <div className="bg-white border rounded-lg overflow-auto p-4">
            <pre className="text-sm text-gray-800">
              <code>{`# Install dependencies
npm install

# Run the development server
npm run dev`}</code>
            </pre>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Customize and Deploy
          </h2>
          <Image
            src="/images/doc/step-5.png"
            alt="Deployed site screenshot"
            width={1000}
            height={600}
            className="rounded-xl mb-4 shadow-lg"
          />
          <p className="text-gray-700 text-base">
            Personalize your template with your branding, content, and features.
            Then, deploy it using platforms like Vercel, Netlify, or your
            preferred hosting service.
          </p>
        </section>
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re all set!
          </h2>
          <p className="text-gray-700 text-base mb-6">
            You now have everything you need to install, customize, and launch
            your template. If you have any questions, feel free to reach out.
          </p>
          <Link
            href="/#templates"
            className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Browse More Templates →
          </Link>
        </section>
      </main>
    </div>
  );
}
