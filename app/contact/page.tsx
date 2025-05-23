import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BloomTPL – Get in Touch",
  description:
    "Have questions or need help? Contact the BloomTPL team and we'll get back to you shortly.",
  alternates: {
    canonical: "https://bloomtpl.com/contact",
  },
  openGraph: {
    title: "Contact BloomTPL – Get in Touch",
    description:
      "Have questions or need help? Contact the BloomTPL team and we'll get back to you shortly.",
    url: "https://bloomtpl.com/contact",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact BloomTPL – Get in Touch",
    description:
      "Reach out to the BloomTPL team with your questions, feedback or support needs.",
  },
};

export default function page() {
  return <Contact />;
}
