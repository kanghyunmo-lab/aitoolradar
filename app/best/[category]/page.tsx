import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategorySlugs } from "@/lib/queries/tools";
import CategoryToolList from "@/components/CategoryToolList";

export async function generateStaticParams() {
  try {
    const slugs = await getCategorySlugs();
    return slugs.map((slug) => ({ category: slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const year = new Date().getFullYear();

  const { category } = await getToolsByCategory(categorySlug).catch(() => ({
    tools: [],
    category: null,
  }));

  if (!category) {
    // Fallback for when DB isn't connected
    const name = categorySlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      title: `Best ${name} in ${year}`,
      description: `Compare the best ${name.toLowerCase()} with honest reviews and pricing data. Find the perfect tool for your needs.`,
    };
  }

  return {
    title: `Best ${category.name} in ${year} - Top Picks & Reviews`,
    description:
      category.meta_description ||
      `Compare the best ${category.name.toLowerCase()} with honest reviews and pricing data. Find the perfect tool for your needs.`,
    alternates: {
      canonical: `/best/${categorySlug}`,
    },
    openGraph: {
      title: `Best ${category.name} in ${year} - Top Picks & Reviews`,
      description: `Discover the best ${category.name}. Compare features, pricing, and reviews.`,
      url: `https://www.aitoolradar.net/best/${category.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best ${category.name} in ${year}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  let tools: Awaited<ReturnType<typeof getToolsByCategory>>["tools"] = [];
  let category: Awaited<ReturnType<typeof getToolsByCategory>>["category"] =
    null;

  try {
    const result = await getToolsByCategory(categorySlug);
    tools = result.tools;
    category = result.category;
  } catch {
    // DB not connected - show placeholder
  }

  const year = new Date().getFullYear();
  const displayName = category
    ? category.name
    : categorySlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best ${displayName} in ${year}`,
    description: `Top ${displayName} tools compared`,
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.name,
      url: `https://www.aitoolradar.net/ai-tools/${tool.slug}`,
    })),
  };

  // FAQ JSON-LD for Featured Snippets and AI crawlers
  const faqJsonLd = tools.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the best ${displayName.toLowerCase()} in ${year}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tools[0]
            ? `${tools[0].name} ranks #1 with a score of ${tools[0].rating ?? "N/A"}/10. ${tools[0].short_description}`
            : `Compare our top-rated ${displayName.toLowerCase()} to find the best fit for your needs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are there free ${displayName.toLowerCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tools.filter(t => t.has_free_trial || !t.starting_price).length > 0
            ? `Yes. ${tools.filter(t => t.has_free_trial || !t.starting_price).map(t => t.name).slice(0, 3).join(", ")} all offer free plans or trials.`
            : `Most tools require a paid plan, but free trials are available.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much do ${displayName.toLowerCase()} cost?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tools.find(t => t.starting_price)
            ? `Entry-level plans start at $${Math.min(...tools.filter(t => t.starting_price).map(t => t.starting_price!))}/month.`
            : "Check each tool's pricing page for the latest rates.",
        },
      },
    ],
  } : null;

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <span className="text-gray-200">Best {displayName}</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best {displayName} in {year}
      </h1>
      <p className="mt-3 text-lg text-gray-400">
        {category?.description ||
          `Compare the top ${displayName.toLowerCase()} to find the perfect solution for your needs. Updated with the latest pricing and features for ${year}.`}
      </p>

      {/* Tool Listings with Filters */}
      {tools.length > 0 ? (
        <CategoryToolList tools={tools} />
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center">
          <p className="text-gray-400">No tools found in this category yet.</p>
          <p className="mt-2 text-sm text-gray-500">
            Connect Supabase and add tools with this category to see them here.
          </p>
        </div>
      )}

      {/* Quick Stats Bar */}
      {tools.length > 0 && (
        <div className="mt-10 grid grid-cols-3 gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">{tools.length}</p>
            <p className="text-xs text-gray-400 mt-1">Tools Compared</p>
          </div>
          <div className="text-center border-x border-gray-800">
            <p className="text-2xl font-extrabold text-white">
              {tools.filter(t => t.has_free_trial).length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Free Trials Available</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">
              ${tools.some(t => t.starting_price) ? Math.min(...tools.filter(t => t.starting_price).map(t => t.starting_price!)) : 'N/A'}
            </p>
            <p className="text-xs text-gray-400 mt-1">Lowest Starting Price</p>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-16 rounded-xl bg-gray-900/30 border border-gray-800 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          How to Choose the Right{" "}
          {displayName.replace(/^(Best |AI )/i, "")}
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            Choosing the best {displayName.toLowerCase()} depends on your
            specific needs, budget, and technical requirements. Here are the key
            factors to consider:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-white">Output Quality:</strong> How good is the AI&apos;s output
              for your specific use case?
            </li>
            <li>
              <strong className="text-white">Pricing:</strong> Does the tool fit within your budget?
              Consider free trials before committing.
            </li>
            <li>
              <strong className="text-white">Integrations:</strong> Does it connect with your existing
              tools and workflow?
            </li>
            <li>
              <strong className="text-white">Ease of Use:</strong> How steep is the learning curve?
            </li>
            <li>
              <strong className="text-white">Support:</strong> What level of customer support is
              available?
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section - Content + Schema */}
      {tools.length > 0 && (
        <section className="mt-12 rounded-xl border border-gray-800 bg-gray-900/30 p-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                What is the best {displayName.toLowerCase()} in {year}?
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Based on our testing and user ratings, <strong>{tools[0]?.name ?? "the top-rated tool"}</strong> ranks #1 with a score of {tools[0]?.rating ?? "N/A"}/10. {tools[0]?.short_description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                Are there free {displayName.toLowerCase()}?
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {tools.filter(t => t.has_free_trial || !t.starting_price).length > 0
                  ? `Yes — ${tools.filter(t => t.has_free_trial || !t.starting_price).map(t => t.name).slice(0, 3).join(", ")} all offer free plans or trials.`
                  : `Most ${displayName.toLowerCase()} require a paid subscription, but many offer free trials.`}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                How much do {displayName.toLowerCase()} cost?
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {displayName} pricing ranges from free to enterprise plans.
                {tools.find(t => t.starting_price)
                  ? ` Entry-level plans start at $${Math.min(...tools.filter(t => t.starting_price).map(t => t.starting_price!))}/month.`
                  : " Check each tool's pricing page for the latest rates."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Popular Comparisons in this category */}
      {tools.length >= 2 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Comparisons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tools.slice(0, 6).flatMap((toolA, i) =>
              tools.slice(i + 1, i + 2).map(toolB => (
                <a
                  key={`${toolA.slug}-${toolB.slug}`}
                  href={`/compare/${toolA.slug}-vs-${toolB.slug}`}
                  className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:shadow-[0_0_15px_rgba(37,99,235,0.1)] text-sm text-center text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-gray-800 transition-all"
                >
                  {toolA.name} vs {toolB.name}
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </article>
  );
}
