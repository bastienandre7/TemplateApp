import DocBreadcrump from "@/components/docs/DocBreadcrump";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://bloomtpl.com/docs/base",
  },
};

export default function BaseTemplateDocsPage() {
  return (
    <main className="bg-background pt-32 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <DocBreadcrump
          items={[
            { label: "Home", href: "/" },
            { label: "Documentation", href: "/docs" },
            { label: "Base", href: "/docs/base" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-8 text-gray-900">
          Base Template Documentation
        </h1>
        <p className="mb-6 text-gray-700">
          This guide explains how to install, customize, and deploy a BloomTPL
          base template built with Next.js 15, Tailwind CSS, and shadcn/ui.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">
            1. Installation
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Download the template:</strong> After purchase, download
              the ZIP file and extract it to your workspace.
            </li>
            <li>
              <strong>Install dependencies:</strong>
              <pre className="bg-gray-100 rounded p-2 mt-2 mb-2 text-sm">
                <code>npm install</code>
              </pre>
            </li>
            <li>
              <strong>Start the development server:</strong>
              <pre className="bg-gray-100 rounded p-2 mt-2 mb-2 text-sm">
                <code>npm run dev</code>
              </pre>
              Your app will be running at <code>http://localhost:3000</code>.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">
            2. Customization
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Edit content:</strong> Modify pages in the{" "}
              <code>/app</code> directory and components in{" "}
              <code>/components</code> to update text, images, and layout.
            </li>
            <li>
              <strong>Change styles:</strong> Update Tailwind CSS classes
              directly in your JSX. You can also edit{" "}
              <code>tailwind.config.js</code> to customize your color palette,
              fonts, and breakpoints.
            </li>
            <li>
              <strong>Use shadcn/ui components:</strong> All UI elements use
              shadcn/ui. You can add new components by running:
              <pre className="bg-gray-100 rounded p-2 mt-2 mb-2 text-sm">
                <code>npx shadcn-ui@latest add [component]</code>
              </pre>
              Replace <code>[component]</code> with the desired UI element
              (e.g., <code>button</code>, <code>card</code>).
            </li>
            <li>
              <strong>Update metadata:</strong> Edit <code>app/layout.tsx</code>{" "}
              and page-level <code>metadata</code> for SEO and social sharing.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">
            3. Deployment
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Build your app:</strong>
              <pre className="bg-gray-100 rounded p-2 mt-2 mb-2 text-sm">
                <code>npm run build</code>
              </pre>
            </li>
            <li>
              <strong>Deploy to your preferred platform:</strong> You can deploy
              to platforms like Netlify, AWS Amplify, Render, or your own
              server. Make sure to set <code>NODE_ENV=production</code> and run{" "}
              <code>npm run build</code> before serving.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Troubleshooting & Tips
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              If you see build errors, check your Node.js version (Next.js 15
              requires Node 18+).
            </li>
            <li>
              For shadcn/ui issues, refer to the{" "}
              <a
                href="https://ui.shadcn.com/docs"
                className="text-blue-600 underline"
              >
                official documentation
              </a>
              .
            </li>
            <li>
              For Tailwind CSS customization, see the{" "}
              <a
                href="https://tailwindcss.com/docs"
                className="text-blue-600 underline"
              >
                Tailwind docs
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">
            Need Help?
          </h2>
          <p className="text-gray-700">
            If you have any questions or run into issues, contact our support
            team at{" "}
            <a
              href="mailto:bloomtpl@gmail.com"
              className="text-blue-600 underline"
            >
              bloomtpl@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
