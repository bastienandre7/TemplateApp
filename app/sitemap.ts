import { client } from "@/sanity/client";
import { PrismaClient } from "@prisma/client";
import type { MetadataRoute } from "next";

const prisma = new PrismaClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.bloomtpl.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal-notice`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Récupère les slugs des templates depuis la base
  const templates = await prisma.template.findMany({
    select: { slug: true, updatedAt: true },
  });

  const templateRoutes = templates.map((template) => ({
    url: `${baseUrl}/template/${template.slug}`,
    lastModified: template.updatedAt || new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Récupère les slugs des blogs depuis Sanity
  const blogPosts = await client.fetch<
    { slug: { current: string }; _updatedAt?: string }[]
  >(`*[_type == "post" && defined(slug.current)]{slug, _updatedAt}`);

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...templateRoutes, ...blogRoutes];
}
