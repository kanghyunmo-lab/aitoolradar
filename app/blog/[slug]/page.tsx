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
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            {" / "}
            <span className="text-gray-200">{post.title}</span>
          </nav>

          {/* Post Header */}
          <header className="mb-10 pb-8 border-b border-gray-800">
            {post.category && (
              <span className="mb-3 inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                {post.category}
              </span>
            )}
            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                  AI
                </div>
                <span className="font-bold text-gray-200">{post.author}</span>
              </div>
              <span className="text-gray-300">·</span>
              <span>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-gray-300">·</span>
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
              className="blog-content prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          ) : (
            <p className="text-gray-400">Content coming soon.</p>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl border border-blue-500/30 bg-blue-900/10 p-8 text-center backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[50px] -z-10 rounded-full"></div>
            <h2 className="text-xl font-bold text-white relative z-10">
              Ready to Find Your Perfect AI Tool?
            </h2>
            <p className="mt-2 text-gray-400 relative z-10">
              Browse and compare 177+ AI tools to find the right fit for your
              workflow.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] relative z-10"
            >
              Explore AI Tools &rarr;
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0">
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-base font-bold text-white uppercase tracking-wider">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <div key={related.slug}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors leading-snug"
                    >
                      {related.title}
                    </Link>
                    <p className="mt-1 text-xs text-gray-500">
                      {related.reading_time_minutes} min read
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Tools */}
          <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="mb-4 text-base font-bold text-white uppercase tracking-wider">
              Popular AI Tools
            </h3>
            <div className="space-y-3">
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
                  className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
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
