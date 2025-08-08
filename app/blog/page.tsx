import { client } from "@/sanity/client";
import { type Metadata } from "next";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image{
    asset->{url}
  },
  description,
  author->{name}
}`;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Blog - Next.js Templates & Web Development | BloomTPL",
  description:
    "Read blog posts about Next.js, web development trends, and UI design. Learn from expert tips, guides, and tutorials by BloomTPL.",
  alternates: {
    canonical: "https://bloomtpl.com/blog",
  },
  openGraph: {
    title: "Blog - Next.js Templates & Web Development | BloomTPL",
    description:
      "Read blog posts about Next.js, web development trends, and UI design. Learn from expert tips, guides, and tutorials by BloomTPL.",
    url: "https://bloomtpl.com/blog",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bloomtpl.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BloomTPL Blog - Next.js Templates & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Next.js Templates & Web Development | BloomTPL",
    description:
      "Read blog posts about Next.js, web development trends, and UI design. Learn from expert tips, guides, and tutorials by BloomTPL.",
    images: ["https://bloomtpl.com/og-image.png"],
    creator: "@BloomTPL",
  },
};

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  // JSON-LD pour les données structurées
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BloomTPL Blog",
    description:
      "Read blog posts about Next.js, web development trends, and UI design. Learn from expert tips, guides, and tutorials by BloomTPL.",
    url: "https://bloomtpl.com/blog",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://bloomtpl.com/blog",
    },
    publisher: {
      "@type": "Organization",
      name: "BloomTPL",
      url: "https://bloomtpl.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bloomtpl.com/logo.png",
      },
    },
    inLanguage: "en-US",
    ...(posts.length > 0 && {
      blogPost: posts.slice(0, 5).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description || `Read ${post.title} on BloomTPL blog.`,
        url: `https://bloomtpl.com/blog/${post.slug.current}`,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author?.name || "BloomTPL Team",
        },
        publisher: {
          "@type": "Organization",
          name: "BloomTPL",
        },
        image: post.image?.asset?.url ? [post.image.asset.url] : undefined,
      })),
    }),
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-8">
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Latest Articles
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                BloomTPL
              </span>{" "}
              Blog
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the latest trends, tutorials, and insights about Next.js
              development, template design, and modern web development.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <main className="pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No articles yet
                  </h3>
                  <p className="text-gray-600">
                    Check back soon for the latest articles and tutorials.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post._id}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-200 hover:shadow-xl"
                  >
                    <Link href={`/blog/${post.slug.current}`} className="block">
                      {post.image?.asset?.url && (
                        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                          <Image
                            src={post.image.asset.url}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                          {post.author?.name && (
                            <>
                              <span className="font-medium text-purple-600">
                                {post.author.name}
                              </span>
                              <span>•</span>
                            </>
                          )}
                          <time>
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )
                              : ""}
                          </time>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h2>

                        {post.description && (
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {post.description}
                          </p>
                        )}

                        <div className="mt-4 inline-flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700 transition-colors duration-200">
                          Read more
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
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
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
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
