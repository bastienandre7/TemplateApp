import HeaderCPN from "@/components/Header/HeaderCPN";
import TermsOfUse from "@/components/TermsOfUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – BloomTPL",
  description:
    "Read the terms and conditions for using BloomTPL templates, services, and website.",
  alternates: {
    canonical: "https://bloomtpl.com/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use – BloomTPL",
    description:
      "Read the terms and conditions for using BloomTPL templates, services, and website.",
    url: "https://bloomtpl.com/terms-of-use",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use – BloomTPL",
    description:
      "Review BloomTPL's usage policies and legal conditions for accessing our digital products.",
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
