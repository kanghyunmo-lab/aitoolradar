import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug, getBlogSlugs, getRecentBlogPosts } from "@/lib/queries/blog";
import type { BlogPost } from "@/lib/types";

// 새 글 추가 시 온디맨드 렌더링 허용 (재배포 없이 새 슬러그 지원)
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug).catch(() => null);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description:
      post.meta_description || post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.meta_description || post.excerpt || undefined,
      url: `https://www.aitoolradar.net/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: [post.author],
      images: post.cover_image_url
        ? [{ url: post.cover_image_url }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description || post.excerpt || "",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  // Related posts (recent, excluding current)
  let relatedPosts: BlogPost[] = [];
  try {
    const recent = await getRecentBlogPosts(4);
    relatedPosts = recent.filter((p) => p.slug !== post!.slug).slice(0, 3);
  } catch {
    // ignore
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt,
    url: `https://www.aitoolradar.net/blog/${post.slug}`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AIToolRadar",
      url: "https://www.aitoolradar.net",
    },
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
        {/* Main Content */}
        <article>
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            {" / "}
            <span className="text-gray-900">{post.title}</span>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            {post.category && (
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide text-blue-600">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.reading_time_minutes} min read</span>
            </div>
          </header>

          {/* Cover Image */}
          {post.cover_image_url && (
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="mb-8 w-full rounded-xl object-cover"
            />
          )}

          {/* Article Body */}
          {post.content_html ? (
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          ) : (
            <p className="text-gray-500">Content coming soon.</p>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl bg-blue-50 border border-blue-100 p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Ready to Find Your Perfect AI Tool?
            </h2>
            <p className="mt-2 text-gray-600">
              Browse and compare 177+ AI tools to find the right fit for your
              workflow.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Explore AI Tools &rarr;
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0">
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="mb-4 text-base font-bold text-gray-900">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <div key={related.slug}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="text-sm font-medium text-gray-800 hover:text-blue-600 leading-snug"
                    >
                      {related.title}
                    </Link>
                    <p className="mt-1 text-xs text-gray-400">
                      {related.reading_time_minutes} min read
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Tools */}
          <div className="mt-6 rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4 text-base font-bold text-gray-900">
              Popular AI Tools
            </h3>
            <div className="space-y-2">
              {[
                { name: "Jasper AI", slug: "jasper" },
                { name: "Copy.ai", slug: "copy-ai" },
                { name: "ChatGPT", slug: "chatgpt" },
                { name: "Midjourney", slug: "midjourney" },
                { name: "GitHub Copilot", slug: "github-copilot" },
              ].map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/ai-tools/${tool.slug}`}
                  className="block text-sm text-gray-700 hover:text-blue-600"
                >
                  {tool.name} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
