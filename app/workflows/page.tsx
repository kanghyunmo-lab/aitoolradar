import type { Metadata } from "next";
import Link from "next/link";
import { getAllWorkflows } from "@/lib/queries/workflows";
import type { Workflow } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Workflow Guides: Step-by-Step Tool Stacks | AIToolRadar",
  description:
    "Discover the best AI tool combinations for every task. Step-by-step workflow guides for YouTube, podcasting, SEO blogging, online courses, and more.",
  alternates: { canonical: "/workflows" },
  openGraph: {
    title: "AI Workflow Guides | AIToolRadar",
    description:
      "Step-by-step AI tool stacks for creators, marketers, and entrepreneurs.",
    url: "https://www.aitoolradar.net/workflows",
    type: "website",
  },
};

export default async function WorkflowsPage() {
  let workflowList: Workflow[] = [];
  try {
    workflowList = await getAllWorkflows();
  } catch {
    // DB error — show empty state
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
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          AI Workflow Guides
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Stop searching for individual tools. Get the complete AI stack for
          your goal — with step-by-step guidance on what to use and when.
        </p>
      </header>

      {/* Workflow Grid */}
      {workflowList.length === 0 ? (
        <p className="text-gray-500">No workflows yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {workflowList.map((workflow) => {
            const totalTools = workflow.steps.flatMap((s) => s.tools).length;
            return (
              <Link
                key={workflow.slug}
                href={`/workflows/${workflow.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {workflow.steps.length} Steps · {totalTools} Tools
                    </span>
                    <h2 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                      {workflow.title}
                    </h2>
                    <p className="text-sm text-gray-500">{workflow.tagline}</p>
                  </div>
                  <span className="ml-4 mt-1 text-gray-400 group-hover:text-blue-500 text-xl">
                    &rarr;
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  {workflow.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {workflow.steps.flatMap((s) => s.tools).slice(0, 5).map((tool) => (
                    <span
                      key={tool.slug}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {totalTools > 5 && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                      +{totalTools - 5} more
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
