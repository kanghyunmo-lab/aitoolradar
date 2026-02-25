import Link from "next/link";
import { getAllTools, getAllCategories } from "@/lib/queries/tools";
import { getRecentBlogPosts } from "@/lib/queries/blog";
import ToolCard from "@/components/ToolCard";
import type { BlogPost } from "@/lib/types";

export default async function Home() {
  const year = new Date().getFullYear();
  let tools: Awaited<ReturnType<typeof getAllTools>> = [];
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];
  let recentPosts: BlogPost[] = [];

  try {
    [tools, categories, recentPosts] = await Promise.all([
      getAllTools(),
      getAllCategories(),
      getRecentBlogPosts(4),
    ]);
  } catch {
    // DB not connected yet - show placeholder content
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Find the Best AI Tool{" "}
          <span className="text-blue-600">for Any Task</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Compare 177+ AI tools with honest reviews, pricing data, and
          side-by-side comparisons. Make the right choice for your business.
        </p>

        {/* Hero Search Bar */}
        <form action="/search" method="GET" className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-md focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              name="q"
              placeholder="Search AI tools... e.g. Jasper, ChatGPT, Midjourney"
              className="flex-1 bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Popular:{" "}
            {["Jasper", "ChatGPT", "Midjourney", "Copy.ai"].map((s, i) => (
              <span key={s}>
                <a href={`/search?q=${s}`} className="hover:text-blue-600 hover:underline">
                  {s}
                </a>
                {i < 3 && <span className="mx-1 text-gray-300">·</span>}
              </span>
            ))}
          </p>
        </form>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/best/ai-writing-tools"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Browse AI Tools
          </Link>
          <Link
            href="/compare"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Compare Tools
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Browse by Category
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/best/${cat.slug}`}
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="text-sm font-medium text-gray-900">
                  {cat.name}
                </span>
              </Link>
            ))
          ) : (
            <>
              {[
                { name: "AI Writing Tools", slug: "ai-writing-tools" },
                { name: "AI Image Generators", slug: "ai-image-generators" },
                { name: "AI Coding Assistants", slug: "ai-coding-assistants" },
                { name: "AI Video Tools", slug: "ai-video-tools" },
                { name: "AI Automation", slug: "ai-automation" },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/best/${cat.slug}`}
                  className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Top Rated Tools */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Top Rated AI Tools {year}
        </h2>
        <div className="mt-6 space-y-4">
          {tools.length > 0 ? (
            tools
              .slice(0, 10)
              .map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} rank={i + 1} />
              ))
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">
                Connect Supabase and seed data to see AI tools here.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                1. Create a Supabase project at supabase.com
                <br />
                2. Run the schema.sql in SQL Editor
                <br />
                3. Add your keys to .env.local
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest AI Tool Guides
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all guides &rarr;
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-1 flex-col p-5">
                  {post.category && (
                    <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 flex-1 text-xs text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SEO Content Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">
            How We Review AI Tools
          </h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              AIToolRadar provides comprehensive, data-driven reviews and
              comparisons of AI tools across all categories. Our methodology
              combines real-world testing, pricing analysis, feature comparison,
              and user feedback to help you make informed decisions.
            </p>
            <p>
              We evaluate each tool on key metrics including ease of use, output
              quality, pricing value, customer support, and integration
              capabilities. Our comparison pages let you see exactly how tools
              stack up against each other.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
