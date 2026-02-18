import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, getToolSlugs } from "@/lib/queries/tools";

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

  return {
    title: `${tool.name} Review 2026: Pricing, Features & Alternatives`,
    description:
      tool.meta_description ||
      `Comprehensive review of ${tool.name}. Compare pricing, features, pros & cons with alternatives. Updated for 2026.`,
    alternates: {
      canonical: `/ai-tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} Review 2026: Pricing, Features & Alternatives`,
      description: tool.meta_description || tool.short_description || undefined,
      url: `https://www.aitoolradar.net/ai-tools/${tool.slug}`,
      type: 'article',
      images: tool.logo_url ? [{ url: tool.logo_url, width: 400, height: 400 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review 2026`,
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
    offers: tool.starting_price ? {
      '@type': 'Offer',
      price: tool.starting_price,
      priceCurrency: 'USD',
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 100,
    },
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        {tool.category && (
          <>
            <Link
              href={`/best/${tool.category.slug}`}
              className="hover:text-gray-700"
            >
              {tool.category.name}
            </Link>
            {" / "}
          </>
        )}
        <span className="text-gray-900">{tool.name}</span>
      </nav>

      {/* Header */}
      <header className="flex items-start gap-6">
        {tool.logo_url && (
          <img
            src={tool.logo_url}
            alt={`${tool.name} logo`}
            className="h-16 w-16 rounded-xl object-contain"
          />
        )}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {tool.name} Review 2026
          </h1>
          <p className="mt-2 text-lg text-gray-600">{tool.short_description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {tool.rating && (
              <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-700">
                {"★".repeat(Math.round(tool.rating / 2))} {tool.rating}/10
              </span>
            )}
            {tool.pricing_model && (
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                {tool.pricing_model}
              </span>
            )}
            {tool.has_free_trial && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Free Trial Available
              </span>
            )}
          </div>
        </div>
      </header>

      {/* CTA */}
      {tool.affiliate_url && (
        <div className="mt-8 rounded-xl bg-blue-50 p-6 text-center">
          <a
            href={tool.affiliate_url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Try {tool.name} Free &rarr;
          </a>
          {tool.starting_price && (
            <p className="mt-2 text-sm text-gray-600">
              Starting from ${tool.starting_price}/month
            </p>
          )}
        </div>
      )}

      {/* Quick Summary */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {tool.pros && tool.pros.length > 0 && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-lg font-bold text-green-800">Pros</h2>
            <ul className="mt-3 space-y-2">
              {tool.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                  <span className="mt-0.5 text-green-500">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        )}
        {tool.cons && tool.cons.length > 0 && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-bold text-red-800">Cons</h2>
            <ul className="mt-3 space-y-2">
              {tool.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                  <span className="mt-0.5 text-red-500">-</span>
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
          <h2 className="text-2xl font-bold text-gray-900">
            {tool.name} Pricing Plans
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.pricing_plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.plan_name}
                </h3>
                <div className="mt-2">
                  {plan.monthly_price !== null ? (
                    <p className="text-2xl font-bold text-gray-900">
                      ${plan.monthly_price}
                      <span className="text-sm font-normal text-gray-500">
                        /month
                      </span>
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">
                      Contact Sales
                    </p>
                  )}
                  {plan.annual_price !== null && (
                    <p className="text-sm text-gray-500">
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
                      <li key={i} className="text-sm text-gray-600">
                        &#10003; {f}
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
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: tool.content_html }}
          />
        </section>
      )}

      {/* Related Links - Internal Link Section for SEO */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Explore More</h3>
        <div className="flex flex-wrap gap-3">
          <a href={`/alternatives/${tool.slug}`} className="px-4 py-2 bg-white border rounded-lg hover:shadow text-sm">
            Best {tool.name} Alternatives &rarr;
          </a>
          <a href={`/pricing/${tool.slug}`} className="px-4 py-2 bg-white border rounded-lg hover:shadow text-sm">
            {tool.name} Pricing Plans &rarr;
          </a>
          {tool.category?.slug && (
            <a href={`/best/${tool.category.slug}`} className="px-4 py-2 bg-white border rounded-lg hover:shadow text-sm">
              Best {tool.category.name} Tools &rarr;
            </a>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      {tool.affiliate_url && (
        <div className="mt-12 rounded-xl border-2 border-blue-100 bg-blue-50 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Ready to try {tool.name}?
          </h2>
          <p className="mt-2 text-gray-600">
            {tool.has_free_trial
              ? "Start your free trial today. No credit card required."
              : `Plans start at $${tool.starting_price}/month.`}
          </p>
          <a
            href={tool.affiliate_url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Get Started with {tool.name} &rarr;
          </a>
        </div>
      )}
    </article>
  );
}
