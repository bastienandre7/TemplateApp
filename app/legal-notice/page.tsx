import LegalNotice from "@/components/LegalNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice – BloomTPL",
  description:
    "Legal information and ownership details regarding the BloomTPL website and its contents.",
  alternates: {
    canonical: "https://bloomtpl.com/legal-notice",
  },
  openGraph: {
    title: "Legal Notice – BloomTPL",
    description:
      "Legal information and ownership details regarding the BloomTPL website and its contents.",
    url: "https://bloomtpl.com/legal-notice",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Legal Notice – BloomTPL",
    description:
      "Read the legal notice and company ownership information of BloomTPL.",
  },
};

export default function LegalNoticePage() {
  return (
    <div className="pt-4">
      <LegalNotice />
    </div>
  );
}
