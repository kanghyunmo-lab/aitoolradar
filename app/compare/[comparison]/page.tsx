import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getComparisonTools, getPopularComparisons } from "@/lib/queries/tools";
import type { AiTool } from "@/lib/types";
import AffiliateCTA from "@/components/AffiliateCTA";

function parseComparison(comparison: string): {
  slugA: string;
  slugB: string;
} | null {
  // Normalize to lowercase and trim to handle case-insensitive URLs
  const normalized = comparison.toLowerCase().trim();
  const vsIdx = normalized.indexOf("-vs-");
  if (vsIdx === -1) return null;
  const slugA = normalized.slice(0, vsIdx);
  const slugB = normalized.slice(vsIdx + 4);
  if (!slugA || !slugB) return null;
  return { slugA, slugB };
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

  // Helper function: Generate dynamic, data-driven description
  function buildDescription(a: AiTool | null, b: AiTool | null): string {
    if (!a || !b) return "Compare AI tools side by side.";

    // Rating comparison line
    const ratingLine =
      a.rating && b.rating
        ? `${a.name} scores ${a.rating}/10 vs ${b.name}'s ${b.rating}/10. `
        : "";

    // Pricing comparison line
    const priceLine = (() => {
      const aPrice = a.starting_price ? `$${a.starting_price}/mo` : "Free";
      const bPrice = b.starting_price ? `$${b.starting_price}/mo` : "Free";
      if (aPrice === bPrice) return `Both start at ${aPrice}. `;
      return `${a.name} from ${aPrice}, ${b.name} from ${bPrice}. `;
    })();

    // Winner determination line
    const winnerLine = (() => {
      if (!a.rating || !b.rating) return "";
      const winner = a.rating > b.rating ? a : b;
      const loser = winner === a ? b : a;
      return `${winner.name} edges out ${loser.name} overall. `;
    })();

    // Combine and truncate to 160 chars for SEO
    const combined = `${ratingLine}${priceLine}${winnerLine}Compare features, pros & cons side by side.`;
    return combined.slice(0, 160);
  }

  const description = buildDescription(toolA, toolB);
  const title = `${toolA.name} vs ${toolB.name} (2026): Which Is Better?`;

  return {
    title,
    description,
    alternates: {
      canonical: `/compare/${comparison}`,
    },
    openGraph: {
      title,
      description: `${toolA.name} (${toolA.rating ?? "N/A"}/10) vs ${toolB.name} (${toolB.rating ?? "N/A"}/10). Compare pricing, features, and ratings.`,
      url: `https://www.aitoolradar.net/compare/${toolA.slug}-vs-${toolB.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${toolA.name} vs ${toolB.name} (2026)`,
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
    <tr className="border-b border-gray-800 hover:bg-white/5 transition-colors">
      <td className="py-3 pr-4 text-sm font-medium text-gray-400">{label}</td>
      <td className="py-3 px-4 text-sm text-gray-300">{valueA}</td>
      <td className="py-3 pl-4 text-sm text-gray-300">{valueB}</td>
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

  // Redirect non-normalized URLs to canonical lowercase form
  const normalizedSlug = `${parsed.slugA}-vs-${parsed.slugB}`;
  if (comparison !== normalizedSlug) {
    redirect(`/compare/${normalizedSlug}`);
  }

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

  // BreadcrumbList JSON-LD for structured data / SEO
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aitoolradar.net' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.aitoolradar.net/compare' },
      { '@type': 'ListItem', position: 3, name: `${toolA.name} vs ${toolB.name}`, item: `https://www.aitoolradar.net/compare/${toolA.slug}-vs-${toolB.slug}` },
    ],
  };

  // FAQPage JSON-LD for AI crawlers (ChatGPT, Perplexity) and Featured Snippets
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${toolA.name} better than ${toolB.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result
            ? `${result.winner.name} is generally considered better, scoring ${result.winner.rating}/10 compared to the alternative.`
            : `Both ${toolA.name} and ${toolB.name} are strong tools. Your choice depends on your specific workflow needs.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does ${toolA.name} cost compared to ${toolB.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${toolA.name} starts at ${toolA.starting_price ? `$${toolA.starting_price}/month` : 'Free'}. ${toolB.name} starts at ${toolB.starting_price ? `$${toolB.starting_price}/month` : 'Free'}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${toolA.name} have a free trial?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${toolA.name} ${toolA.has_free_trial ? 'offers a free trial' : 'does not currently offer a free trial'}. ${toolB.name} ${toolB.has_free_trial ? 'offers a free trial' : 'does not currently offer a free trial'}.`,
        },
      },
    ],
  };

  // ItemList JSON-LD for structured comparison data
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${toolA.name} vs ${toolB.name} Comparison`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: toolA.name,
        url: `https://www.aitoolradar.net/ai-tools/${toolA.slug}`,
        description: toolA.short_description || `${toolA.name} is an AI tool.`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: toolB.name,
        url: `https://www.aitoolradar.net/ai-tools/${toolB.slug}`,
        description: toolB.short_description || `${toolB.name} is an AI tool.`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD: BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* JSON-LD: FAQPage for AI crawlers and Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* JSON-LD: ItemList for structured comparison data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <span className="text-gray-200">
          {toolA.name} vs {toolB.name}
        </span>
      </nav>

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="mt-3 text-lg text-gray-400">
        A comprehensive comparison to help you choose the right AI tool in 2026.
      </p>

      {/* Winner Banner */}
      {result && (
        <div className="mt-8 rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-6 text-center backdrop-blur-sm">
          <p className="text-sm font-bold tracking-wider text-yellow-500 uppercase">
            Our Pick
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            {result.winner.name}
          </p>
          <p className="mt-2 text-sm text-gray-300">{result.reason}</p>
          {result.winner.affiliate_url && (
            <AffiliateCTA
              href={result.winner.affiliate_url}
              toolName={result.winner.name}
              toolSlug={result.winner.slug}
              placement="winner_banner"
              className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              Try {result.winner.name} &rarr;
            </AffiliateCTA>
          )}
        </div>
      )}

      {/* Comparison Table */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">
          Feature Comparison
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/50">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-800 bg-gray-800/50">
                <th className="py-3 pr-4 pl-4 text-left text-sm font-bold text-gray-400">
                  Feature
                </th>
                <th className="py-3 px-4 text-left text-sm font-bold text-white">
                  {toolA.name}
                </th>
                <th className="py-3 pl-4 text-left text-sm font-bold text-white">
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
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <h2 className="text-xl font-bold text-white">{toolA.name}</h2>
          <p className="mt-2 text-sm text-gray-400">
            {toolA.short_description}
          </p>
          {toolA.pros && toolA.pros.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider">Pros</h3>
              <ul className="mt-3 space-y-2">
                {toolA.pros.map((p, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-green-500 font-bold">+</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolA.cons && toolA.cons.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">Cons</h3>
              <ul className="mt-3 space-y-2">
                {toolA.cons.map((c, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 font-bold">-</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolA.affiliate_url && (
            <AffiliateCTA
              href={toolA.affiliate_url}
              toolName={toolA.name}
              toolSlug={toolA.slug}
              placement="pros_cons"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
            >
              Try {toolA.name} &rarr;
            </AffiliateCTA>
          )}
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <h2 className="text-xl font-bold text-white">{toolB.name}</h2>
          <p className="mt-2 text-sm text-gray-400">
            {toolB.short_description}
          </p>
          {toolB.pros && toolB.pros.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider">Pros</h3>
              <ul className="mt-3 space-y-2">
                {toolB.pros.map((p, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-green-500 font-bold">+</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolB.cons && toolB.cons.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">Cons</h3>
              <ul className="mt-3 space-y-2">
                {toolB.cons.map((c, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 font-bold">-</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {toolB.affiliate_url && (
            <AffiliateCTA
              href={toolB.affiliate_url}
              toolName={toolB.name}
              toolSlug={toolB.slug}
              placement="pros_cons"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
            >
              Try {toolB.name} &rarr;
            </AffiliateCTA>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-12 rounded-xl bg-gray-900/30 border border-gray-800 p-8">
        <h2 className="text-xl font-bold text-white">
          {toolA.name} vs {toolB.name}: The Bottom Line
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Both {toolA.name} and {toolB.name} are powerful AI tools, but they
          serve slightly different needs. <strong className="text-white">{toolA.name}</strong> excels at{" "}
          {toolA.pros?.[0]?.toLowerCase() || "its core features"}, while{" "}
          <strong className="text-white">{toolB.name}</strong> stands out for{" "}
          {toolB.pros?.[0]?.toLowerCase() || "its unique capabilities"}.
        </p>
        <p className="mt-3 text-gray-400 leading-relaxed">
          Your choice should depend on your specific requirements, budget, and
          the features that matter most to your workflow.
        </p>
      </section>
    </article>
  );
}
