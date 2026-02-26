import type { Metadata } from "next";
import Link from "next/link";
import { getAllWorkflows } from "@/lib/queries/workflows";
import type { Workflow } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Workflow Guides: Step-by-Step Tool Stacks | AIToolRadar",
  description:
    "Discover the best AI tool combinations for every task. Step-by-step workflow guides for YouTube, podcasting, SEO blogging, online courses, e-commerce, and more.",
  alternates: { canonical: "/workflows" },
  openGraph: {
    title: "AI Workflow Guides | AIToolRadar",
    description:
      "Step-by-step AI tool stacks for creators, marketers, and entrepreneurs.",
    url: "https://www.aitoolradar.net/workflows",
    type: "website",
  },
};

// 슬러그 키워드 기반으로 카테고리 자동 분류
function getCategory(slug: string): string {
  if (slug.includes("youtube") || slug.includes("podcast") || slug.includes("music") || slug.includes("video") || slug.includes("ugc")) return "Content Creation";
  if (slug.includes("blog") || slug.includes("social") || slug.includes("personal-brand") || slug.includes("repurpos")) return "Marketing";
  if (slug.includes("course") || slug.includes("book")) return "Education";
  if (slug.includes("ecommerce") || slug.includes("real-estate") || slug.includes("cold-email") || slug.includes("sales") || slug.includes("customer")) return "Business";
  return "Other";
}

const CATEGORIES = ["All", "Content Creation", "Marketing", "Education", "Business"];

export default async function WorkflowsPage() {
  let workflowList: Workflow[] = [];
  try {
    workflowList = await getAllWorkflows();
  } catch {
    // DB error
  }

  // 카테고리별 개수
  const counts: Record<string, number> = { All: workflowList.length };
  for (const w of workflowList) {
    const cat = getCategory(w.slug);
    counts[cat] = (counts[cat] ?? 0) + 1;
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">AI Workflows</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          AI Workflow Guides
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Stop searching for individual tools. Get the complete AI stack for
          your goal — step-by-step guidance on what to use and when.
        </p>
        <p className="mt-2 text-sm font-medium text-blue-600">
          {workflowList.length} workflows available
        </p>
      </header>

      {/* Category Filter (static — JS-free, URL param 방식) */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={cat === "All" ? "/workflows" : `/workflows?cat=${encodeURIComponent(cat)}`}
            className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            {cat}
            {counts[cat] ? (
              <span className="ml-1.5 text-xs text-gray-400">({counts[cat]})</span>
            ) : null}
          </Link>
        ))}
      </div>

      {/* Workflow Grid */}
      {workflowList.length === 0 ? (
        <p className="text-gray-500">No workflows yet. Check back soon!</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {workflowList.map((workflow) => {
            const allTools = workflow.steps.flatMap((s) => s.tools);
            const cat = getCategory(workflow.slug);
            return (
              <Link
                key={workflow.slug}
                href={`/workflows/${workflow.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                {/* Category badge + steps */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                    {cat}
                  </span>
                  <span className="text-xs text-gray-400">
                    {workflow.steps.length} steps · {allTools.length} tools
                  </span>
                </div>

                {/* Title + tagline */}
                <h2 className="mt-3 text-base font-bold text-gray-900 group-hover:text-blue-600 leading-snug">
                  {workflow.title}
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">{workflow.tagline}</p>

                {/* Description */}
                {workflow.description && (
                  <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                    {workflow.description}
                  </p>
                )}

                {/* Tool pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {allTools.slice(0, 5).map((tool) => (
                    <span
                      key={tool.slug}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {allTools.length > 5 && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-400">
                      +{allTools.length - 5} more
                    </span>
                  )}
                </div>

                <span className="mt-4 text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  View workflow &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
