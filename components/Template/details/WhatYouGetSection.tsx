import { Code, Palette, Zap } from "lucide-react";

export default function WhatYouGetSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What You Get
        </h2>
        <p className="text-xl text-gray-600">
          Everything you need to launch your project
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
          <p className="text-gray-600">
            Production-ready TypeScript code with best practices and
            comprehensive documentation.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Palette className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
          <p className="text-gray-600">
            Beautiful, responsive UI components built with Tailwind CSS and
            modern design principles.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Fast Setup</h3>
          <p className="text-gray-600">
            Get started in minutes with our detailed setup guide and
            pre-configured environment.
          </p>
        </div>
      </div>
    </section>
  );
}
