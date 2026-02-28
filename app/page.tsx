import type { Metadata } from "next";
import Link from "next/link";
import { getAllTools, getAllCategories } from "@/lib/queries/tools";
import { getRecentBlogPosts } from "@/lib/queries/blog";
import { getRecentWorkflows } from "@/lib/queries/workflows";
import ToolCard from "@/components/ToolCard";
import VSWidget from "@/components/VSWidget";
import type { BlogPost, Workflow } from "@/lib/types";

export const metadata: Metadata = {
  title: "AIToolRadar - Compare 177+ AI Tools | Honest Reviews & Pricing 2026",
  description: "Compare 177+ AI tools side by side. Honest reviews, real pricing, and AI workflow guides to find the perfect tool for writing, coding, video, SEO, and more.",
  alternates: {
    canonical: "https://www.aitoolradar.net",
  },
  openGraph: {
    title: "AIToolRadar - Compare 177+ AI Tools | Honest Reviews & Pricing 2026",
    description: "Compare 177+ AI tools side by side. Honest reviews, real pricing, and AI workflow guides.",
    url: "https://www.aitoolradar.net",
  },
};

export default async function Home() {
  const year = new Date().getFullYear();
  let tools: Awaited<ReturnType<typeof getAllTools>> = [];
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];
  let recentPosts: BlogPost[] = [];
  let recentWorkflows: Workflow[] = [];

  try {
    [tools, categories, recentPosts, recentWorkflows] = await Promise.all([
      getAllTools(),
      getAllCategories(),
      getRecentBlogPosts(4),
      getRecentWorkflows(3),
    ]);
  } catch {
    // DB not connected yet - show placeholder content
  }

  return (
    <div className="bg-[#0B0F19] min-h-screen font-sans selection:bg-blue-500/30">
      {/* 
        ========================================
        PREMIUM HERO SECTION (Dark & Modern)
        ========================================
      */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:py-32">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[300px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute top-[100px] left-[20%] h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Trust Badge / Stat Badge */}
          <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-full border border-gray-700 bg-gray-800/50 px-5 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              177+ Tools
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              1,526+ Comparisons
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
              15 Workflow Guides
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI Workflow Guides <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              for Content Creators
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Step-by-step AI automation guides for YouTubers and content creators. Find the right tools, build faster workflows, and spend less time on repetitive tasks.
          </p>

          {/* Interactive VS Widget */}
          <VSWidget availableTools={tools.map(t => ({ name: t.name, slug: t.slug }))} />

          <div className="mt-8 flex justify-center">
            <Link
              href="/compare"
              className="rounded-full border border-gray-700 bg-gray-800/80 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-700 hover:border-blue-500/50"
            >
              Browse all tool comparisons &rarr;
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-sm font-medium text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Step-by-step Guides
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Real Tool Stacks
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save Hours Every Week
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        PRIORITIZED WORKFLOW SECTION 
        ========================================
      */}
      <section className="relative border-t border-gray-800 bg-[#0B0F19] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                For Creators
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white">
                AI Automation Workflows
              </h2>
              <p className="mt-2 text-gray-400">
                Step-by-step guides to automate your YouTube and content creation process with AI.
              </p>
            </div>
            <Link
              href="/workflows"
              className="group flex items-center gap-2 rounded-xl bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              View all Guides
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentWorkflows.map((workflow) => (
              <Link
                key={workflow.slug}
                href={`/workflows/${workflow.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-blue-600/10 blur-2xl transition-all group-hover:bg-blue-600/20"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                      ⚡ {workflow.steps.length} Steps
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {workflow.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {workflow.tagline}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {workflow.steps.flatMap((s) => s.tools).slice(0, 3).map((tool) => (
                    <span
                      key={tool.slug}
                      className="rounded-lg border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {workflow.steps.flatMap((s) => s.tools).length > 3 && (
                    <span className="rounded-lg border border-gray-700 bg-gray-800/50 px-2.5 py-1 text-xs font-medium text-gray-500">
                      +{workflow.steps.flatMap((s) => s.tools).length - 3}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        CATEGORIES (Modern Card Tags)
        ========================================
      */}
      <section className="border-t border-gray-800 bg-[#0B0F19] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Explore by Category
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/best/${cat.slug}`}
                  className="rounded-xl border border-gray-800 bg-gray-900 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                >
                  {cat.name}
                </Link>
              ))
            ) : (
              // Fallback
              ["AI Writing Tools", "AI Image Generators", "AI Coding Assistants", "AI Video Generators"].map((name) => (
                <div key={name} className="rounded-xl border border-gray-800 bg-gray-900 px-6 py-3 text-sm font-medium text-gray-300">
                  {name}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        TOP RATED TOOLS (Dark Mode Variants)
        ========================================
      */}
      <section className="border-t border-gray-800 bg-[#0B0F19] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white text-center sm:text-left">
            Top Rated AI Tools {year}
          </h2>
          <div className="mt-10 grid gap-6">
            {tools.length > 0 ? (
              tools.slice(0, 5).map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} rank={i + 1} />
              ))
            ) : (
              <div className="text-center text-gray-500 py-12">Loading tools...</div>
            )}

            <div className="mt-6 flex justify-center">
              <Link
                href="/best/ai-writing-tools"
                className="rounded-xl border border-gray-700 bg-gray-800 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-700"
              >
                View all Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
        ========================================
        LATEST BLOG POSTS (내부링크 + SEO)
        ========================================
      */}
      {recentPosts.length > 0 && (
        <section className="border-t border-gray-800 bg-[#0B0F19] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">Latest AI Tool Guides</h2>
                <p className="mt-2 text-gray-400">In-depth comparisons and guides to help you decide.</p>
              </div>
              <Link
                href="/blog"
                className="group flex items-center gap-2 rounded-xl bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                View all Posts
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:bg-gray-800/80"
                >
                  {post.category && (
                    <span className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-400">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold text-white line-clamp-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-auto pt-4 text-xs text-gray-500">{post.reading_time_minutes} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*
        ========================================
        SEO TEXT (Dark Mode)
        ========================================
      */}
      <section className="border-t border-gray-800 bg-gray-950 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-white">
            Data-Driven AI Tool Comparisons
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            AIToolRadar provides comprehensive, data-driven reviews and comparisons of AI tools across all categories.
            Our methodology combines real-world testing, pricing analysis, and feature comparison to help you make informed decisions in the fast-paced AI market.
          </p>
        </div>
      </section>
    </div>
  );
}
