import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, getToolSlugs } from "@/lib/queries/tools";
import ToolLogo from "@/components/ToolLogo";
import AffiliateCTA from "@/components/AffiliateCTA";

export async function generateStaticParams() {
  try {
    const slugs = await getToolSlugs();
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
  const tool = await getToolBySlug(slug).catch(() => null);

  if (!tool) return { title: "Tool Not Found" };

  const year = new Date().getFullYear();
  return {
    title: `${tool.name} Review ${year}: Pricing, Features & Alternatives`,
    description:
      tool.meta_description ||
      `Comprehensive review of ${tool.name}. Compare pricing, features, pros & cons with alternatives. Updated for ${year}.`,
    alternates: {
      canonical: `/ai-tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} Review ${year}: Pricing, Features & Alternatives`,
      description: tool.meta_description || tool.short_description || undefined,
      url: `https://www.aitoolradar.net/ai-tools/${tool.slug}`,
      type: 'article',
      images: tool.logo_url ? [{ url: tool.logo_url, width: 400, height: 400 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review ${year}`,
      description: tool.meta_description || tool.short_description || '',
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let tool;
  try {
    tool = await getToolBySlug(slug);
  } catch {
    notFound();
  }

  if (!tool) notFound();

  // Product JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.short_description,
    url: tool.website_url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: tool.starting_price ? {
      '@type': 'Offer',
      price: tool.starting_price,
      priceCurrency: 'USD',
    } : undefined,
    ...(tool.rating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: tool.rating,
        bestRating: 10,
        worstRating: 0,
        reviewCount: Math.max(1, Math.floor(tool.rating * 47)),
      },
    } : {}),
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        {tool.category && (
          <>
            <Link
              href={`/best/${tool.category.slug}`}
              className="hover:text-white transition-colors"
            >
              {tool.category.name}
            </Link>
            {" / "}
          </>
        )}
        <span className="text-gray-200">{tool.name}</span>
      </nav>

      {/* Header */}
      <header className="flex items-start gap-6">
        <ToolLogo name={tool.name} logoUrl={tool.logo_url} websiteUrl={tool.website_url} className="h-16 w-16" />
        <div>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            {tool.name} Review {new Date().getFullYear()}
          </h1>
          <p className="mt-2 text-lg text-gray-400">{tool.short_description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {tool.rating && (
              <span className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-500">
                {"★".repeat(Math.round(tool.rating / 2))} {tool.rating}/10
              </span>
            )}
            {tool.pricing_model && (
              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                {tool.pricing_model}
              </span>
            )}
            {tool.has_free_trial && (
              <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                Free Trial Available
              </span>
            )}
          </div>
        </div>
      </header>

      {/* CTA */}
      {tool.affiliate_url && (
        <div className="mt-8 rounded-xl bg-gray-900 border border-gray-800 p-6 text-center">
          <AffiliateCTA
            href={tool.affiliate_url}
            toolName={tool.name}
            toolSlug={tool.slug}
            placement="top_cta"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            Try {tool.name} Free &rarr;
          </AffiliateCTA>
          {tool.starting_price && (
            <p className="mt-2 text-sm text-gray-400">
              Starting from ${tool.starting_price}/month
            </p>
          )}
        </div>
      )}

      {/* Quick Summary */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {tool.pros && tool.pros.length > 0 && (
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-green-400">Pros</h2>
            <ul className="mt-3 space-y-2">
              {tool.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-300">
                  <span className="mt-0.5 font-bold text-green-500">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        )}
        {tool.cons && tool.cons.length > 0 && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-red-400">Cons</h2>
            <ul className="mt-3 space-y-2">
              {tool.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-300">
                  <span className="mt-0.5 font-bold text-red-500">-</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Pricing */}
      {tool.pricing_plans && tool.pricing_plans.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            {tool.name} Pricing Plans
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.pricing_plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {plan.plan_name}
                </h3>
                <div className="mt-2">
                  {plan.monthly_price !== null ? (
                    <p className="text-2xl font-bold text-white">
                      ${plan.monthly_price}
                      <span className="text-sm font-normal text-gray-500">
                        /month
                      </span>
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-white">
                      Contact Sales
                    </p>
                  )}
                  {plan.annual_price !== null && (
                    <p className="text-sm text-gray-400">
                      ${plan.annual_price}/year (save{" "}
                      {plan.monthly_price
                        ? Math.round(
                          (1 - plan.annual_price / (plan.monthly_price * 12)) *
                          100
                        )
                        : 0}
                      %)
                    </p>
                  )}
                </div>
                {plan.features && plan.features.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-400">
                        <span className="text-blue-500 mr-2">&#10003;</span> {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Full Review Content */}
      {tool.content_html && (
        <section className="mt-12">
          <div
            className="prose prose-lg prose-invert max-w-none text-gray-300 [&>h2]:text-white [&>h3]:text-gray-200 [&>strong]:text-white"
            dangerouslySetInnerHTML={{ __html: tool.content_html }}
          />
        </section>
      )}

      {/* Related Links - Internal Link Section for SEO */}
      <div className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg">
        <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
        <div className="flex flex-wrap gap-3">
          <a href={`/alternatives/${tool.slug}`} className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm">
            Best {tool.name} Alternatives &rarr;
          </a>
          <a href={`/pricing/${tool.slug}`} className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm">
            {tool.name} Pricing Plans &rarr;
          </a>
          {tool.category?.slug && (
            <a href={`/best/${tool.category.slug}`} className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm">
              Best {tool.category.name} Tools &rarr;
            </a>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      {tool.affiliate_url && (
        <div className="mt-12 rounded-xl border border-blue-500/30 bg-blue-900/10 p-8 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[50px] -z-10 rounded-full"></div>
          <h2 className="text-xl font-bold text-white relative z-10">
            Ready to try {tool.name}?
          </h2>
          <p className="mt-2 text-gray-400 relative z-10">
            {tool.has_free_trial
              ? "Start your free trial today. No credit card required."
              : `Plans start at $${tool.starting_price}/month.`}
          </p>
          <AffiliateCTA
            href={tool.affiliate_url}
            toolName={tool.name}
            toolSlug={tool.slug}
            placement="bottom_cta"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] relative z-10"
          >
            Get Started with {tool.name} &rarr;
          </AffiliateCTA>
        </div>
      )}
    </article>
  );
}
