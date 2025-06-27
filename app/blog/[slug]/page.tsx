import HeaderCPN from "@/components/Header/HeaderCPN";
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
    title: `${post.title} | BloomTPL`,
    description: post.description || "",
    openGraph: {
      title: `${post.title} | BloomTPL`,
      description: post.description || "",
      url: `https://www.bloomtpl.com/blog/${post.slug.current}`,
      type: "article",
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
      title: `${post.title} | BloomTPL`,
      description: post.description || "",
      images: [postImageUrl],
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

  return (
    <div className="pt-4 bg-white text-gray-800 min-h-screen">
      <HeaderCPN />
      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-6 flex flex-col gap-4">
        <Link
          href="/blog"
          className="hover:underline text-xs text-blue-600 mb-2"
        >
          ← Back to posts
        </Link>
        {postImageUrl && (
          <div className="w-full overflow-hidden rounded-xl mb-4">
            <Image
              src={postImageUrl}
              alt={post.title}
              width={1200}
              height={600}
              priority
              className="w-full h-40 sm:h-56 md:h-72 object-cover"
              sizes="(max-width: 640px) 100vw, 700px"
            />
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-blue-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
          <span>
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : ""}
          </span>
          {post.author?.name && (
            <>
              <span>•</span>
              <span>By {post.author.name}</span>
            </>
          )}
          {post.category?.title && (
            <>
              <span>•</span>
              <span>{post.category.title}</span>
            </>
          )}
        </div>
        <div className="prose prose-blue prose-sm sm:prose-base md:prose-lg max-w-none mb-8 text-gray-800">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
        <div className="mt-8 flex flex-col items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl p-5 sm:p-6 shadow-sm">
          <strong className="text-base sm:text-lg text-blue-900">
            🚀 Boost your next project with a premium template!
          </strong>
          <span className="text-gray-700 mb-2 text-sm sm:text-base">
            Choose speed. Choose quality. Choose{" "}
            <span className="font-semibold text-blue-700">BloomTPL</span>.
          </span>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded transition-colors text-sm sm:text-base"
          >
            Browse templates now →
          </Link>
        </div>
      </main>
    </div>
  );
}
