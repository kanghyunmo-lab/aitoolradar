import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getComparisonTools, getPopularComparisons } from "@/lib/queries/tools";
import type { AiTool } from "@/lib/types";

function parseComparison(comparison: string): {
  slugA: string;
  slugB: string;
} | null {
  const parts = comparison.split("-vs-");
  if (parts.length !== 2) return null;
  return { slugA: parts[0], slugB: parts[1] };
}

export async function generateStaticParams() {
  try {
    const comparisons = await getPopularComparisons();
    return comparisons.map((c) => ({
      comparison: `${c.slugA}-vs-${c.slugB}`,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison } = await params;
  const parsed = parseComparison(comparison);
  if (!parsed) return { title: "Comparison Not Found" };

  const { toolA, toolB } = await getComparisonTools(
    parsed.slugA,
    parsed.slugB
  ).catch(() => ({ toolA: null, toolB: null }));

  if (!toolA || !toolB) return { title: "Comparison Not Found" };

  return {
    title: `${toolA.name} vs ${toolB.name} (2026): Which Is Better?`,
    description: `Detailed comparison of ${toolA.name} vs ${toolB.name}. Compare features, pricing, pros & cons to find the best tool for your needs in 2026.`,
    alternates: {
      canonical: `/compare/${comparison}`,
    },
  };
}

function ComparisonRow({
  label,
  valueA,
  valueB,
}: {
  label: string;
  valueA: React.ReactNode;
  valueB: React.ReactNode;
}) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 pr-4 text-sm font-medium text-gray-500">{label}</td>
      <td className="py-3 px-4 text-sm text-gray-900">{valueA}</td>
      <td className="py-3 pl-4 text-sm text-gray-900">{valueB}</td>
    </tr>
  );
}

function getWinner(
  toolA: AiTool,
  toolB: AiTool
): { winner: AiTool; reason: string } | null {
  if (!toolA.rating || !toolB.rating) return null;
  if (toolA.rating === toolB.rating) return null;
  const winner = toolA.rating > toolB.rating ? toolA : toolB;
  return {
    winner,
    reason: `${winner.name} scores higher with a rating of ${winner.rating}/10`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const parsed = parseComparison(comparison);
  if (!parsed) notFound();

  let toolA: AiTool | null = null;
  let toolB: AiTool | null = null;

  try {
    const result = await getComparisonTools(parsed.slugA, parsed.slugB);
    toolA = result.toolA;
    toolB = result.toolB;
  } catch {
    notFound();
  }

  if (!toolA || !toolB) notFound();

  const result = getWinner(toolA, toolB);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">
          {toolA.name} vs {toolB.name}
        </span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        A comprehensive comparison to help you choose the right AI tool in 2026.
      </p>

      {/* Winner Banner */}
      {result && (
        <div className="mt-8 rounded-xl bg-yellow-50 border border-yellow-200 p-6 text-center">
          <p className="text-sm font-medium text-yellow-600 uppercase">
            Our Pick
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {result.winner.name}
          </p>
          <p className="mt-1 text-sm text-gray-600">{result.reason}</p>
          {result.winner.affiliate_url && (
            <a
              href={result.winner.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Try {result.winner.name} &rarr;
            </a>
          )}
        </div>
      )}

      {/* Comparison Table */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">
          Feature Comparison
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-left text-sm font-semibold text-gray-500">
                  Feature
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                  {toolA.name}
                </th>
                <th className="py-3 pl-4 text-left text-sm font-semibold text-gray-900">
                  {toolB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow
                label="Rating"
                valueA={
                  toolA.rating ? `${toolA.rating}/10` : "N/A"
                }
                valueB={
                  toolB.rating ? `${toolB.rating}/10` : "N/A"
                }
              />
              <ComparisonRow
                label="Pricing Model"
                valueA={toolA.pricing_model || "N/A"}
                valueB={toolB.pricing_model || "N/A"}
              />
              <ComparisonRow
                label="Starting Price"
                valueA={
                  toolA.starting_price
                    ? `$${toolA.starting_price}/mo`
                    : "Free"
                }
                valueB={
                  toolB.starting_price
                    ? `$${toolB.starting_price}/mo`
                    : "Free"
                }
              />
              <ComparisonRow
                label="Free Trial"
                valueA={toolA.has_free_trial ? "Yes" : "No"}
                valueB={toolB.has_free_trial ? "Yes" : "No"}
              />
              <ComparisonRow
                label="Founded"
                valueA={toolA.founded_year || "N/A"}
                valueB={toolB.founded_year || "N/A"}
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons Side by Side */}
      <section className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{toolA.name}</h2>
          <p className="mt-2 text-sm text-gray-600">
            {toolA.short_description}
          </p>
          {toolA.pros && toolA.pros.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-green-700">Pros</h3>
              <ul className="mt-2 space-y-1">
                {toolA.pros.map((p, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    + {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolA.cons && toolA.cons.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-red-700">Cons</h3>
              <ul className="mt-2 space-y-1">
                {toolA.cons.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    - {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolA.affiliate_url && (
            <a
              href={toolA.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Try {toolA.name} &rarr;
            </a>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">{toolB.name}</h2>
          <p className="mt-2 text-sm text-gray-600">
            {toolB.short_description}
          </p>
          {toolB.pros && toolB.pros.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-green-700">Pros</h3>
              <ul className="mt-2 space-y-1">
                {toolB.pros.map((p, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    + {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolB.cons && toolB.cons.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-red-700">Cons</h3>
              <ul className="mt-2 space-y-1">
                {toolB.cons.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    - {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolB.affiliate_url && (
            <a
              href={toolB.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Try {toolB.name} &rarr;
            </a>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          {toolA.name} vs {toolB.name}: The Bottom Line
        </h2>
        <p className="mt-4 text-gray-600">
          Both {toolA.name} and {toolB.name} are powerful AI tools, but they
          serve slightly different needs. {toolA.name} excels at{" "}
          {toolA.pros?.[0]?.toLowerCase() || "its core features"}, while{" "}
          {toolB.name} stands out for{" "}
          {toolB.pros?.[0]?.toLowerCase() || "its unique capabilities"}.
        </p>
        <p className="mt-3 text-gray-600">
          Your choice should depend on your specific requirements, budget, and
          the features that matter most to your workflow.
        </p>
      </section>
    </article>
  );
}
