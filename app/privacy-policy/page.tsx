import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – BloomTPL",
  description:
    "Understand how BloomTPL collects, uses, and protects your data when you use our site and services.",
  alternates: {
    canonical: "https://bloomtpl.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – BloomTPL",
    description:
      "Understand how BloomTPL collects, uses, and protects your data when you use our site and services.",
    url: "https://bloomtpl.com/privacy-policy",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – BloomTPL",
    description:
      "Learn about BloomTPL's data privacy practices and how your information is handled.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-4">
      <PrivacyPolicy />
    </div>
  );
}
