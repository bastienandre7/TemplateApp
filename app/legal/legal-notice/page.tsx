import LegalNotice from "@/components/legal/LegalNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice – BloomTPL",
  description:
    "Find legal details, copyright ownership, and contact information regarding the BloomTPL brand, website, and all template-related content and assets.",
  alternates: {
    canonical: "https://bloomtpl.com/legal-notice",
  },
  openGraph: {
    title: "Legal Notice – BloomTPL",
    description:
      "Find legal details, copyright ownership, and contact information regarding the BloomTPL brand, website, and all template-related content and assets.",
    url: "https://bloomtpl.com/legal-notice",
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
    title: "Legal Notice – BloomTPL",
    description:
      "Find legal details, copyright ownership, and contact information regarding the BloomTPL brand, website, and all template-related content and assets.",
  },
};

export default function LegalNoticePage() {
  return (
    <div className="pt-4">
      <LegalNotice />
    </div>
  );
}
