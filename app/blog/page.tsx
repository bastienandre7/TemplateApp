import HeaderCPN from "@/components/Header/HeaderCPN";
import { client } from "@/sanity/client";
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

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="pt-4 bg-neutral-50 text-gray-900 min-h-screen">
      <HeaderCPN />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-blue-900">
          Blog
        </h1>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-50 group"
            >
              <Link
                href={`/blog/${post.slug.current}`}
                className="block p-4 sm:p-6"
              >
                {post.image?.asset?.url && (
                  <div className="overflow-hidden rounded-lg mb-4">
                    <Image
                      src={post.image.asset.url}
                      alt={post.title}
                      width={1000}
                      height={400}
                      loading="lazy"
                      className="w-full h-40 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:underline mb-2 text-blue-800">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.description}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  {post.author?.name && (
                    <>
                      <span className="font-medium">{post.author.name}</span>
                      <span>•</span>
                    </>
                  )}
                  <span>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : ""}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
