import type { Metadata } from "next";
import Link from "next/link";
import { getAllWorkflows } from "@/lib/queries/workflows";
import type { Workflow } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Workflow Guides: Automation Step-by-Step | AIToolRadar",
  description:
    "Step-by-step AI automation workflows for content creators, marketers, SEO bloggers, and businesses. Find the exact tool stack for your goal.",
  alternates: { canonical: "/workflows" },
  openGraph: {
    title: "AI Workflow Guides | AIToolRadar",
    description:
      "Step-by-step AI automation workflows for creators, marketers, and entrepreneurs.",
    url: "https://www.aitoolradar.net/workflows",
    type: "website",
  },
};

const CATEGORIES = [
  {
    key: "Content Creation",
    label: "📹 Content Creation",
    description: "YouTube, podcasts, video, shorts",
    color: "blue",
  },
  {
    key: "Marketing",
    label: "📣 Marketing",
    description: "Email, social media, ads, campaigns",
    color: "purple",
  },
  {
    key: "SEO & Blogging",
    label: "🔍 SEO & Blogging",
    description: "Keyword research, blog writing, optimization",
    color: "green",
  },
  {
    key: "Business",
    label: "💼 Business",
    description: "Productivity, sales, reporting, automation",
    color: "orange",
  },
  {
    key: "E-commerce",
    label: "🛒 E-commerce",
    description: "Product descriptions, customer service, listings",
    color: "pink",
  },
];

const COLOR_MAP: Record<string, { badge: string; border: string; glow: string }> = {
  blue:   { badge: "bg-blue-500/10 text-blue-400",   border: "border-blue-500/40", glow: "bg-blue-600/10" },
  purple: { badge: "bg-purple-500/10 text-purple-400", border: "border-purple-500/40", glow: "bg-purple-600/10" },
  green:  { badge: "bg-green-500/10 text-green-400",  border: "border-green-500/40", glow: "bg-green-600/10" },
  orange: { badge: "bg-orange-500/10 text-orange-400", border: "border-orange-500/40", glow: "bg-orange-600/10" },
  pink:   { badge: "bg-pink-500/10 text-pink-400",    border: "border-pink-500/40", glow: "bg-pink-600/10" },
};

function getCategory(slug: string): string {
  if (
    slug.includes("youtube") || slug.includes("podcast") ||
    slug.includes("music") || slug.includes("video") ||
    slug.includes("ugc") || slug.includes("shorts") ||
    slug.includes("thumbnail") || slug.includes("script") ||
    slug.includes("creator") || slug.includes("faceless")
  ) return "Content Creation";

  if (
    slug.includes("blog") || slug.includes("seo") ||
    slug.includes("keyword") || slug.includes("content-writing") ||
    slug.includes("article") || slug.includes("copywriting")
  ) return "SEO & Blogging";

  if (
    slug.includes("social") || slug.includes("personal-brand") ||
    slug.includes("repurpos") || slug.includes("email") ||
    slug.includes("newsletter") || slug.includes("ad") ||
    slug.includes("campaign") || slug.includes("marketing")
  ) return "Marketing";

  if (
    slug.includes("ecommerce") || slug.includes("product") ||
    slug.includes("shopify") || slug.includes("listing") ||
    slug.includes("customer-service")
  ) return "E-commerce";

  if (
    slug.includes("course") || slug.includes("book") ||
    slug.includes("real-estate") || slug.includes("cold-email") ||
    slug.includes("sales") || slug.includes("customer") ||
    slug.includes("business") || slug.includes("report") ||
    slug.includes("productivity")
  ) return "Business";

  return "Business";
}

function getCategoryColor(key: string): string {
  const cat = CATEGORIES.find((c) => c.key === key);
  return cat?.color ?? "blue";
}

export default async function WorkflowsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat: selectedCat } = await searchParams;

  let workflowList: Workflow[] = [];
  try {
    workflowList = await getAllWorkflows();
  } catch {
    // DB error
  }

  // 카테고리별 분류
  const grouped: Record<string, Workflow[]> = {};
  for (const w of workflowList) {
    const cat = getCategory(w.slug);
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(w);
  }

  // 필터링
  const filtered = selectedCat
    ? workflowList.filter((w) => getCategory(w.slug) === selectedCat)
    : workflowList;

  const counts: Record<string, number> = { All: workflowList.length };
  for (const cat of CATEGORIES) {
    counts[cat.key] = grouped[cat.key]?.length ?? 0;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <span className="text-gray-300">AI Workflows</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400 mb-4">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Automation Guides
        </div>
        <h1 className="text-4xl font-extrabold text-white">
          AI Workflow Guides
        </h1>
        <p className="mt-3 text-lg text-gray-400 max-w-2xl">
          Stop searching for individual tools. Get the complete AI automation stack for your goal — step-by-step, category by category.
        </p>
        <p className="mt-3 text-sm font-bold text-blue-400">
          {workflowList.length} workflows across {CATEGORIES.length} categories
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        <Link
          href="/workflows"
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
            !selectedCat
              ? "bg-blue-600 border-blue-500 text-white"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white"
          }`}
        >
          All
          <span className="ml-1.5 text-xs opacity-70">({counts.All})</span>
        </Link>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCat === cat.key;
          const colors = COLOR_MAP[cat.color];
          return (
            <Link
              key={cat.key}
              href={`/workflows?cat=${encodeURIComponent(cat.key)}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                isActive
                  ? `${colors.badge} ${colors.border}`
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat.label}
              {counts[cat.key] ? (
                <span className="ml-1.5 text-xs opacity-70">({counts[cat.key]})</span>
              ) : null}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      {workflowList.length === 0 ? (
        <p className="text-gray-500">No workflows yet. Check back soon!</p>
      ) : selectedCat ? (
        /* 특정 카테고리 선택 시: 필터된 그리드 */
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${COLOR_MAP[getCategoryColor(selectedCat)]?.badge}`}>
              {CATEGORIES.find((c) => c.key === selectedCat)?.label}
            </span>
            <span className="text-sm text-gray-400">
              {CATEGORIES.find((c) => c.key === selectedCat)?.description}
            </span>
          </div>
          <WorkflowGrid workflows={filtered} grouped={grouped} />
        </div>
      ) : (
        /* 전체 보기: 카테고리별 섹션 */
        <div className="space-y-14">
          {CATEGORIES.map((cat) => {
            const workflows = grouped[cat.key] ?? [];
            if (workflows.length === 0) return null;
            const colors = COLOR_MAP[cat.color];
            return (
              <section key={cat.key}>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-bold ${colors.badge.split(" ")[1]}`}>
                      {cat.label}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{cat.description}</p>
                  </div>
                  {workflows.length > 4 && (
                    <Link
                      href={`/workflows?cat=${encodeURIComponent(cat.key)}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      View all {workflows.length} &rarr;
                    </Link>
                  )}
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {workflows.slice(0, 3).map((workflow) => (
                    <WorkflowCard key={workflow.slug} workflow={workflow} catColor={cat.color} catKey={cat.key} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}

function WorkflowGrid({ workflows }: { workflows: Workflow[]; grouped: Record<string, Workflow[]> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {workflows.map((workflow) => {
        const catKey = getCategory(workflow.slug);
        const catColor = CATEGORIES.find((c) => c.key === catKey)?.color ?? "blue";
        return (
          <WorkflowCard key={workflow.slug} workflow={workflow} catColor={catColor} catKey={catKey} />
        );
      })}
    </div>
  );
}

function WorkflowCard({
  workflow,
  catColor,
  catKey,
}: {
  workflow: Workflow;
  catColor: string;
  catKey: string;
}) {
  const colors = COLOR_MAP[catColor];
  const allToolsRaw = workflow.steps.flatMap((s) => s.tools);
  const allTools = allToolsRaw.filter(
    (t, idx, self) => self.findIndex((i) => i.slug === t.slug) === idx
  );

  return (
    <Link
      href={`/workflows/${workflow.slug}`}
      className={`group flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:${colors.border} hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-gray-800 transition-all relative overflow-hidden`}
    >
      <div className={`absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full ${colors.glow} blur-2xl transition-all group-hover:opacity-150`} />

      {/* Category badge + steps */}
      <div className="flex items-center justify-between relative z-10">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
          {catKey}
        </span>
        <span className="text-xs text-gray-500">
          {workflow.steps.length} steps · {allTools.length} tools
        </span>
      </div>

      {/* Title + tagline */}
      <h2 className="mt-4 text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug relative z-10">
        {workflow.title}
      </h2>
      <p className="mt-1 text-sm text-gray-400 relative z-10 line-clamp-2">{workflow.tagline}</p>

      {/* Tool pills */}
      <div className="mt-5 flex flex-wrap gap-1.5 relative z-10">
        {allTools.slice(0, 4).map((tool) => (
          <span
            key={tool.slug}
            className="rounded-md border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
          >
            {tool.name}
          </span>
        ))}
        {allTools.length > 4 && (
          <span className="rounded-md border border-gray-700 bg-gray-800/50 px-2.5 py-0.5 text-xs font-medium text-gray-500">
            +{allTools.length - 4} more
          </span>
        )}
      </div>

      <span className="mt-5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 relative z-10">
        View workflow &rarr;
      </span>
    </Link>
  );
}
