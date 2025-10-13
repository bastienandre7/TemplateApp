import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BundleCTASection() {
  return (
    <section className="mb-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl p-8 lg:p-12 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Special Bundle Offer
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Get All Templates in One Bundle
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Access <strong>8 premium templates</strong> including SaaS,
            eCommerce, Portfolio & more – all for <strong>just $49</strong>.
          </p>

          <Link
            href="/bundle/ultimate"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            View the Bundle
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
