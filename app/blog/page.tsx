import HeaderCPN from "@/components/Header/HeaderCPN";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BloomTPL Blog – Tips, Guides & Inspiration for Web Developers",
  description:
    "Explore the latest blog articles from BloomTPL. Discover tips on web development, design systems, template usage, and more.",
  alternates: {
    canonical: "https://bloomtpl.com/blog",
  },
  openGraph: {
    title: "BloomTPL Blog – Tips, Guides & Inspiration for Web Developers",
    description:
      "Read articles on Next.js, Tailwind CSS, and building web apps faster with templates. Updated regularly by BloomTPL.",
    url: "https://bloomtpl.com/blog",
    siteName: "BloomTPL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomTPL Blog – Tips, Guides & Inspiration for Web Developers",
    description:
      "Stay updated with the BloomTPL blog. Learn how to build, ship, and scale websites with high-quality templates.",
  },
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "why-use-template",
    title: "Why use a template instead of building from scratch?",
    description:
      "Discover the key benefits of using templates for your next web project.",
    date: "2025-05-05",
    image: "/images/blog/why-use-template.jpg",
  },
];

export default function BlogPage() {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-4 bg-neutral-100 text-gray-800">
      <HeaderCPN />
      <main className="max-w-4xl mx-auto px-6 py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="space-y-6">
          {sortedPosts.map((post) => (
            <li key={post.slug} className="border-b pb-10">
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl font-semibold group-hover:underline mb-1">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <p className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
