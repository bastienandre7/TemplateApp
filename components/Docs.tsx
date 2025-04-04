import HeaderCPN from "./Header/HeaderCPN";

export default function Docs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pt-4">
      <HeaderCPN />
      <main className="flex-1 px-4 sm:px-8 py-8 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Everything you need to get started with our application.
          </p>
        </div>

        {/* Section Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Welcome to our application documentation. Whether you&apos;re a new
            user or an expert, you&apos;ll find all the information you need to
            get the most out of our product.
          </p>
        </section>

        {/* Section Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h2>
          <p className="text-gray-700 mb-4 text-base">
            Follow these steps to install and configure the application:
          </p>
          <div className="bg-white border rounded-lg overflow-auto p-4">
            <pre className="text-sm text-gray-800">
              <code>{`# Step 1: Install dependencies
npm install

# Step 2: Start the application
npm start`}</code>
            </pre>
          </div>
        </section>

        {/* Section How to Use Templates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use the Templates
          </h2>
          <p className="text-gray-700 mb-4 text-base">
            Once you download a template, unzip the archive. You&apos;ll find a
            complete project with a{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">README.md</code>{" "}
            file to guide you. If the template is based on Next.js:
          </p>
          <div className="bg-white border rounded-lg overflow-auto p-4 mb-4">
            <pre className="text-sm text-gray-800">
              <code>{`# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 to view the template`}</code>
            </pre>
          </div>
          <p className="text-gray-700 text-base">
            You can then customize the styles, components, and logic based on
            your needs. Most templates come with Tailwind CSS and Shadcn/ui
            preconfigured.
          </p>
        </section>

        {/* Section How to Use Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use the Components
          </h2>
          <p className="text-gray-700 mb-4 text-base">
            All component packs come with a set of prebuilt React components
            using Tailwind CSS and often Shadcn/ui. To use a component:
          </p>
          <div className="bg-white border rounded-lg overflow-auto p-4 mb-4">
            <pre className="text-sm text-gray-800">
              <code>{`# Example usage in your own project

// 1. Copy the component code (e.g., Button.tsx)
// 2. Paste it into your components folder
// 3. Import and use it in your pages:

import Button from '@/components/Button';

export default function Page() {
  return <Button>Click me</Button>;
}`}</code>
            </pre>
          </div>
          <p className="text-gray-700 text-base">
            Make sure Tailwind CSS and its configuration are properly set up.
            Most components follow a standard design system so they&apos;re easy
            to integrate and customize.
          </p>
        </section>

        {/* Section FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                How can I update the application?
              </h3>
              <p className="text-gray-700 mt-2 text-base">
                To update the application, run the following command:
                <code className="bg-gray-100 px-2 py-1 rounded ml-2">
                  npm update
                </code>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
