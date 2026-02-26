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
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <span className="text-gray-300">AI Workflows</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-white">
          AI Workflow Guides
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          Stop searching for individual tools. Get the complete AI stack for
          your goal — step-by-step guidance on what to use and when.
        </p>
        <p className="mt-3 text-sm font-bold text-blue-400">
          {workflowList.length} workflows available
        </p>
      </header>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={cat === "All" ? "/workflows" : `/workflows?cat=${encodeURIComponent(cat)}`}
            className="rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 hover:border-blue-500 hover:text-white transition-colors"
          >
            {cat}
            {counts[cat] ? (
              <span className="ml-1.5 text-xs text-gray-500">({counts[cat]})</span>
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
            const allToolsRaw = workflow.steps.flatMap((s) => s.tools);
            const allTools = allToolsRaw.filter((t, idx, self) => self.findIndex(i => i.slug === t.slug) === idx);
            const cat = getCategory(workflow.slug);
            return (
              <Link
                key={workflow.slug}
                href={`/workflows/${workflow.slug}`}
                className="group flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] hover:bg-gray-800 transition-all transition-duration-300 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-blue-600/5 blur-2xl transition-all group-hover:bg-blue-600/10"></div>
                {/* Category badge + steps */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                    {cat}
                  </span>
                  <span className="text-xs text-gray-500">
                    {workflow.steps.length} steps · {allTools.length} tools
                  </span>
                </div>

                {/* Title + tagline */}
                <h2 className="mt-4 text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug relative z-10">
                  {workflow.title}
                </h2>
                <p className="mt-1 text-sm text-gray-400 relative z-10">{workflow.tagline}</p>

                {/* Description */}
                {workflow.description && (
                  <p className="mt-3 text-xs text-gray-500 line-clamp-2 relative z-10">
                    {workflow.description}
                  </p>
                )}

                {/* Tool pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 relative z-10">
                  {allTools.slice(0, 5).map((tool) => (
                    <span
                      key={tool.slug}
                      className="rounded-md border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {allTools.length > 5 && (
                    <span className="rounded-md border border-gray-700 bg-gray-800/50 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                      +{allTools.length - 5} more
                    </span>
                  )}
                </div>

                <span className="mt-5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 relative z-10">
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
