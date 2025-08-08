import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/dashboard/admin", "/api/"],
    },
    sitemap: "https://bloomtpl.com/sitemap.xml",
  };
}
