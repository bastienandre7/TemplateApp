import Docs from "@/components/Docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation – How to Use BloomTPL Templates",
  description:
    "Learn how to install, customize, and launch your project with BloomTPL templates. Step-by-step guides and best practices included.",
  alternates: {
    canonical: "https://www.bloomtpl.com/docs",
  },
  openGraph: {
    title: "Documentation – How to Use BloomTPL Templates",
    description:
      "Step-by-step documentation to help you make the most of your BloomTPL templates. Setup, customization, deployment, and more.",
    url: "https://www.bloomtpl.com/docs",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Documentation – How to Use BloomTPL Templates",
    description:
      "Official BloomTPL docs to help you install, customize, and launch your Next.js templates efficiently.",
  },
};

export default function Page() {
  return <Docs />;
}
