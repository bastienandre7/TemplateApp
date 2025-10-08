import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BloomTPL – Get in Touch",
  description:
    "Need help or have questions about our templates or services? Contact the BloomTPL team and we’ll respond promptly to support your Next.js project.",
  alternates: {
    canonical: "https://bloomtpl.com/contact",
  },
  openGraph: {
    title: "Contact BloomTPL – Get in Touch",
    description:
      "Need help or have questions about our templates or services? Contact the BloomTPL team and we’ll respond promptly to support your Next.js project.",
    url: "https://bloomtpl.com/contact",
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
    title: "Contact BloomTPL – Get in Touch",
    description:
      "Need help or have questions about our templates or services? Contact the BloomTPL team and we’ll respond promptly to support your Next.js project.",
  },
};

export default function page() {
  return <Contact />;
}
