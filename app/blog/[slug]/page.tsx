import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// Génération dynamique des metadata pour SEO/OpenGraph/Twitter
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  if (!post) return {};

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).url()
    : "https://www.bloomtpl.com/images/blog/default-og.jpg";

  return {
    title: `${post.title} | BloomTPL Blog`,
    description:
      post.description ||
      `Read ${post.title} on BloomTPL blog. Learn about Next.js development, template design, and modern web development best practices.`,
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
    alternates: {
      canonical: `https://www.bloomtpl.com/blog/${post.slug.current}`,
    },
    openGraph: {
      title: `${post.title} | BloomTPL Blog`,
      description:
        post.description ||
        `Read ${post.title} on BloomTPL blog. Learn about Next.js development, template design, and modern web development best practices.`,
      url: `https://www.bloomtpl.com/blog/${post.slug.current}`,
      siteName: "BloomTPL",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      section: post.category?.title || "Development",
      tags: ["Next.js", "React", "Templates", "Web Development"],
      images: [
        {
          url: postImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | BloomTPL Blog`,
      description: post.description || `Read ${post.title} on BloomTPL blog.`,
      images: [postImageUrl],
      creator: "@BloomTPL",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  if (!post) return notFound();

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(600).url()
    : null;

  // JSON-LD pour les données structurées
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || `Read ${post.title} on BloomTPL blog.`,
    image: postImageUrl ? [postImageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "BloomTPL Team",
      url: "https://www.bloomtpl.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://www.bloomtpl.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bloomtpl.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.bloomtpl.com/blog/${post.slug.current}`,
    },
    articleSection: post.category?.title || "Development",
    keywords: [
      "Next.js",
      "React",
      "Templates",
      "Web Development",
      "JavaScript",
      "TypeScript",
    ],
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(post.category?.title && {
      about: {
        "@type": "Thing",
        name: post.category.title,
      },
    }),
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <div className="pt-32 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium mb-8 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
              <time className="font-medium">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </time>
              {post.author?.name && (
                <>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>
                    By{" "}
                    <span className="font-medium text-purple-600">
                      {post.author.name}
                    </span>
                  </span>
                </>
              )}
              {post.category?.title && (
                <>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category.title}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {postImageUrl && (
              <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={postImageUrl}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <main className="pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-purple-200 prose-blockquote:bg-purple-50 prose-blockquote:not-italic">
              {Array.isArray(post.body) && <PortableText value={post.body} />}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 text-center">
              <div className="max-w-lg mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Build Something Amazing?
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Skip the design phase and jumpstart your project with our
                  premium Next.js templates. Production-ready, fully
                  customizable, and built with modern best practices.
                </p>

                <Link
                  href="/"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Browse Templates
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
