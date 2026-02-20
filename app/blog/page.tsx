import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/queries/blog";
import type { BlogPost } from "@/lib/types";

// 항상 최신 DB 데이터로 렌더링 (SSR)
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "AI Tools Blog: Guides, Reviews & Comparisons | AIToolRadar",
  description:
    "In-depth guides, comparisons, and reviews of the best AI tools. Learn how to use AI to grow your business, save time, and reduce costs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AI Tools Blog | AIToolRadar",
    description:
      "In-depth guides, comparisons, and reviews of the best AI tools for business.",
    url: "https://www.aitoolradar.net/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await getAllBlogPosts();
  } catch {
    // DB not connected — show empty state
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "AIToolRadar Blog",
            url: "https://www.aitoolradar.net/blog",
            description:
              "In-depth guides and comparisons of the best AI tools for business.",
          }),
        }}
      />

      {/* Header */}
      <header className="mb-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" / "}
          <span className="text-gray-900">Blog</span>
        </nav>
        <h1 className="text-4xl font-extrabold text-gray-900">
          AI Tools Blog
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          In-depth guides, comparisons, and reviews to help you find the right
          AI tools for your business.
        </p>
      </header>

      {/* Post Grid */}
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              {post.cover_image_url && (
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="h-44 w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                {post.category && (
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {post.category}
                  </span>
                )}
                <h2 className="text-lg font-bold text-gray-900 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && (
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>{post.reading_time_minutes} min read</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
