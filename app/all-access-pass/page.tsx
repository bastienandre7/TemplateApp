import UltimateBundle from "@/components/AllPass/UltimateBundle";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Access Pass – Premium Next.js Templates | BloomTPL",
  description:
    "Unlock every premium Next.js template with the All Access Pass from BloomTPL. Get instant access to all assets for SaaS, blogs, portfolios, and more.",
  metadataBase: new URL("https://bloomtpl.com"),
  alternates: {
    canonical: "https://bloomtpl.com/all-access-pass",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "All Access Pass – Premium Next.js Templates | BloomTPL",
    description:
      "Unlock every premium Next.js template with the All Access Pass from BloomTPL. Get instant access to all assets for SaaS, blogs, portfolios, and more.",
    url: "https://bloomtpl.com/all-access-pass",
    type: "website",
    siteName: "BloomTPL",
    locale: "en_US",
    images: [
      {
        url: "https://bloomtpl.com/bundle-og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL – All Access Pass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Access Pass – Premium Next.js Templates | BloomTPL",
    description:
      "Unlock every premium Next.js template with the All Access Pass from BloomTPL. Get instant access to all assets for SaaS, blogs, portfolios, and more.",
    images: ["https://bloomtpl.com/bundle-og-image.png"],
  },
  creator: "BloomTPL",
  publisher: "BloomTPL",
};

export default async function AllAccessPassPage() {
  const templates = await prisma.template.findMany({
    where: {
      price: { gt: 0 },
    },
    orderBy: { updatedAt: "desc" },
    select: {
      name: true,
      description: true,
      price: true,
      openGraphImage: true,
      slug: true,
      demoUrl: true,
      extras: true,
      variants: true,
    },
  });

  const bundleTemplates = templates.map((tpl) => {
    let features: string[] = [];
    if (Array.isArray(tpl.extras)) {
      features = tpl.extras.map((f) =>
        typeof f === "string" ? f : JSON.stringify(f)
      );
    } else if (typeof tpl.extras === "string") {
      features = [tpl.extras];
    } else if (tpl.extras && typeof tpl.extras === "object") {
      features = [JSON.stringify(tpl.extras)];
    }

    // Parse variants: keep { price, link } structure
    let parsedVariants: {
      solo?: { price: number; link: string };
      studio?: { price: number; link: string };
      unlimited?: { price: number; link: string };
    } = {};
    if (tpl.variants) {
      try {
        const raw =
          typeof tpl.variants === "string"
            ? JSON.parse(tpl.variants)
            : tpl.variants;
        if (raw && typeof raw === "object") {
          parsedVariants = {
            solo: raw.solo
              ? { price: Number(raw.solo.price), link: raw.solo.link }
              : undefined,
            studio: raw.studio
              ? { price: Number(raw.studio.price), link: raw.studio.link }
              : undefined,
            unlimited: raw.unlimited
              ? { price: Number(raw.unlimited.price), link: raw.unlimited.link }
              : undefined,
          };
        }
      } catch {
        parsedVariants = {};
      }
    }

    return {
      name: tpl.name,
      description: tpl.description ?? "",
      price: tpl.price ? tpl.price / 100 : 0,
      imageUrl: tpl.openGraphImage ?? "/images/NoImage.jpg",
      features,
      slug: tpl.slug,
      demoUrl: tpl.demoUrl ?? "",
      variants: parsedVariants,
    };
  });

  return <UltimateBundle templates={bundleTemplates} />;
}
