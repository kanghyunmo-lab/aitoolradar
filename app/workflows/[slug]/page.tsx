import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getWorkflowBySlug, getAllWorkflowSlugs, workflows } from "@/lib/workflows";
import { getToolBySlug } from "@/lib/queries/tools";
import ToolLogo from "@/components/ToolLogo";
import AffiliateCTA from "@/components/AffiliateCTA";

export function generateStaticParams() {
  return getAllWorkflowSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);
  if (!workflow) return { title: "Not Found" };

  return {
    title: `${workflow.title} — Step-by-Step AI Tool Stack | AIToolRadar`,
    description: workflow.description,
    alternates: { canonical: `/workflows/${workflow.slug}` },
    openGraph: {
      title: `${workflow.title} | AIToolRadar`,
      description: workflow.description,
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
  const workflow = getWorkflowBySlug(slug);
  if (!workflow) notFound();

  // Fetch tool data for each step (for logos + affiliate links)
  const allToolSlugs = workflow.steps.flatMap((s) => s.tools.map((t) => t.slug));
  const uniqueSlugs = [...new Set(allToolSlugs)];
  const toolDataMap: Record<string, Awaited<ReturnType<typeof getToolBySlug>>> = {};

  await Promise.allSettled(
    uniqueSlugs.map(async (toolSlug) => {
      try {
        const tool = await getToolBySlug(toolSlug);
        if (tool) toolDataMap[toolSlug] = tool;
      } catch {
        // Tool not found in DB — gracefully skip
      }
    })
  );

  // Related workflows
  const relatedWorkflows = workflow.relatedSlugs
    .map((s) => workflows.find((w) => w.slug === s))
    .filter(Boolean);

  const totalTools = workflow.steps.flatMap((s) => s.tools).length;

  // JSON-LD HowTo schema
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
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <Link href="/workflows" className="hover:text-gray-700">AI Workflows</Link>
        {" / "}
        <span className="text-gray-900">{workflow.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          AI Workflow Guide
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {workflow.title}
        </h1>
        <p className="mt-1 text-lg font-medium text-gray-500">
          {workflow.tagline}
        </p>
        <p className="mt-4 text-base text-gray-600">{workflow.description}</p>

        {/* Stats bar */}
        <div className="mt-6 flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            {workflow.steps.length} Steps
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
            {totalTools} AI Tools
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
            High ROI
          </span>
        </div>
      </header>

      {/* Steps */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Step-by-Step Workflow
        </h2>
        <div className="space-y-6">
          {workflow.steps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              {/* Step header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  {step.goal}
                </h3>
              </div>

              {/* Tools for this step */}
              <div className="grid gap-3 sm:grid-cols-2">
                {step.tools.map((toolRef) => {
                  const toolData = toolDataMap[toolRef.slug];
                  return (
                    <div
                      key={toolRef.slug}
                      className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4"
                    >
                      {toolData ? (
                        <ToolLogo
                          name={toolData.name}
                          logoUrl={toolData.logo_url}
                          className="h-10 w-10 shrink-0"
                        />
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-xs font-bold text-gray-600">
                          {toolRef.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/ai-tools/${toolRef.slug}`}
                          className="text-sm font-semibold text-gray-900 hover:text-blue-600"
                        >
                          {toolRef.name}
                        </Link>
                        {toolData?.short_description && (
                          <p className="mt-0.5 text-xs text-gray-500 line-clamp-2">
                            {toolData.short_description}
                          </p>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          <Link
                            href={`/ai-tools/${toolRef.slug}`}
                            className="text-xs font-medium text-blue-600 hover:text-blue-700"
                          >
                            View Review &rarr;
                          </Link>
                          {toolData?.affiliate_url && (
                            <AffiliateCTA
                              href={toolData.affiliate_url}
                              toolName={toolRef.name}
                              toolSlug={toolRef.slug}
                              placement="pros_cons"
                              className="rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700"
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
      <div className="mt-12 rounded-xl border-2 border-blue-100 bg-blue-50 p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Ready to build your AI workflow?
        </h2>
        <p className="mt-2 text-gray-600">
          Compare all {totalTools} tools side by side before you decide.
        </p>
        <Link
          href="/compare"
          className="mt-4 inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700"
        >
          Compare AI Tools &rarr;
        </Link>
      </div>

      {/* Related Workflows */}
      {relatedWorkflows.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Related Workflows
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedWorkflows.map((related) => (
              <Link
                key={related!.slug}
                href={`/workflows/${related!.slug}`}
                className="rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-bold text-gray-900 hover:text-blue-600">
                  {related!.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">{related!.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
