import HeaderCPN from "@/components/Header/HeaderCPN";
import TermsOfUse from "@/components/legal/TermsOfUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – BloomTPL",
  description:
    "Review the terms and conditions for using BloomTPL templates, including licensing, usage rules, account access, and limitations of service or support.",
  alternates: {
    canonical: "https://bloomtpl.com/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use – BloomTPL",
    description:
      "Review the terms and conditions for using BloomTPL templates, including licensing, usage rules, account access, and limitations of service or support.",
    url: "https://bloomtpl.com/terms-of-use",
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
    title: "Terms of Use – BloomTPL",
    description:
      "Review the terms and conditions for using BloomTPL templates, including licensing, usage rules, account access, and limitations of service or support.",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-4">
      <HeaderCPN />
      <TermsOfUse />
    </div>
  );
}
