import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – BloomTPL",
  description:
    "Learn how BloomTPL collects, processes, and protects your personal data across our website, services, and template downloads in accordance with privacy laws.",
  alternates: {
    canonical: "https://bloomtpl.com/legal/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – BloomTPL",
    description:
      "Learn how BloomTPL collects, processes, and protects your personal data across our website, services, and template downloads in accordance with privacy laws.",
    url: "https://bloomtpl.com/legal/privacy-policy",
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
    title: "Privacy Policy – BloomTPL",
    description:
      "Learn how BloomTPL collects, processes, and protects your personal data across our website, services, and template downloads in accordance with privacy laws.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-4">
      <PrivacyPolicy />
    </div>
  );
}
