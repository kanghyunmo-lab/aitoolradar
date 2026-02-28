import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getWorkflowBySlug, getWorkflowSlugs, getAllWorkflows } from "@/lib/queries/workflows";
import { getToolBySlug } from "@/lib/queries/tools";
import type { Workflow } from "@/lib/types";
import ToolLogo from "@/components/ToolLogo";
import AffiliateCTA from "@/components/AffiliateCTA";

export async function generateStaticParams() {
  try {
    const slugs = await getWorkflowSlugs();
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
  const workflow = await getWorkflowBySlug(slug);
  if (!workflow) return { title: "Not Found" };

  return {
    title: `${workflow.title} — Step-by-Step AI Tool Stack | AIToolRadar`,
    description: workflow.description ?? undefined,
    alternates: { canonical: `/workflows/${workflow.slug}` },
    openGraph: {
      title: `${workflow.title} | AIToolRadar`,
      description: workflow.description ?? undefined,
      url: `https://www.aitoolradar.net/workflows/${workflow.slug}`,
      type: "article",
    },
  };
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = await getWorkflowBySlug(slug);
  if (!workflow) notFound();

  // Fetch tool data for logos + affiliate links
  const allToolSlugs = workflow.steps.flatMap((s) => s.tools.map((t) => t.slug));
  const uniqueSlugs = [...new Set(allToolSlugs)];
  const toolDataMap: Record<string, Awaited<ReturnType<typeof getToolBySlug>>> = {};

  await Promise.allSettled(
    uniqueSlugs.map(async (toolSlug) => {
      try {
        const tool = await getToolBySlug(toolSlug);
        if (tool) toolDataMap[toolSlug] = tool;
      } catch {
        // Tool not in DB — skip gracefully
      }
    })
  );

  // Related workflows from DB
  let relatedWorkflows: Workflow[] = [];
  if (workflow.related_slugs && workflow.related_slugs.length > 0) {
    try {
      const all = await getAllWorkflows();
      relatedWorkflows = all.filter((w) =>
        workflow.related_slugs!.includes(w.slug)
      );
    } catch {
      // skip
    }
  }

  const totalTools = workflow.steps.flatMap((s) => s.tools).length;

  // HowTo JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${workflow.title}: ${workflow.tagline}`,
    description: workflow.description,
    step: workflow.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.goal,
      text: s.tools.map((t) => t.name).join(", "),
    })),
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <Link href="/workflows" className="hover:text-white transition-colors">AI Workflows</Link>
        {" / "}
        <span className="text-gray-200">{workflow.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-400">
          AI Workflow Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          {workflow.title}
        </h1>
        <p className="mt-1 text-lg font-medium text-gray-400">
          {workflow.tagline}
        </p>
        <p className="mt-4 text-base text-gray-300">{workflow.description}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-400">
            {workflow.steps.length} Steps
          </span>
          <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-sm font-medium text-green-400">
            {totalTools} AI Tools
          </span>
          <span className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 text-sm font-medium text-yellow-400">
            High ROI
          </span>
        </div>
      </header>

      {/* Steps */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6">
          Step-by-Step Workflow
        </h2>
        <div className="space-y-6">
          {workflow.steps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)] text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {step.goal}
                </h3>
              </div>

              {step.description && (
                <p className="mb-4 text-sm text-gray-300 leading-relaxed border-l-2 border-blue-500/40 pl-4">
                  {step.description}
                </p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                {step.tools.map((toolRef) => {
                  const toolData = toolDataMap[toolRef.slug];
                  return (
                    <div
                      key={toolRef.slug}
                      className="flex items-start gap-3 rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:border-gray-600 transition-colors"
                    >
                      {toolData ? (
                        <ToolLogo
                          name={toolData.name}
                          logoUrl={toolData.logo_url}
                          className="h-10 w-10 shrink-0"
                        />
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-700 text-xs font-bold text-gray-300 border border-gray-600">
                          {toolRef.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/ai-tools/${toolRef.slug}`}
                          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                          {toolRef.name}
                        </Link>
                        {toolData?.short_description && (
                          <p className="mt-0.5 text-xs text-gray-400 line-clamp-2">
                            {toolData.short_description}
                          </p>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          <Link
                            href={`/ai-tools/${toolRef.slug}`}
                            className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Review &rarr;
                          </Link>
                          {toolData?.affiliate_url && (
                            <AffiliateCTA
                              href={toolData.affiliate_url}
                              toolName={toolRef.name}
                              toolSlug={toolRef.slug}
                              placement="pros_cons"
                              className="rounded bg-gray-700 border border-gray-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-gray-600 hover:text-white transition-colors"
                            >
                              Try Free &rarr;
                            </AffiliateCTA>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-xl border border-blue-500/30 bg-blue-900/10 p-8 text-center backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[50px] -z-10 rounded-full"></div>
        <h2 className="text-xl font-bold text-white relative z-10">
          Ready to build your AI workflow?
        </h2>
        <p className="mt-2 text-gray-400 relative z-10">
          Compare all {totalTools} tools side by side before you decide.
        </p>
        <Link
          href="/compare"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] relative z-10"
        >
          Compare AI Tools &rarr;
        </Link>
      </div>

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-white mb-4">
            Related Workflows
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedWorkflows.map((related) => (
              <Link
                key={related.slug}
                href={`/workflows/${related.slug}`}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 hover:border-blue-500/50 hover:bg-gray-800 transition-all"
              >
                <p className="text-sm font-bold text-white group-hover:text-blue-400">
                  {related.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">{related.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
