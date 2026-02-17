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
  if (!tool) return { title: "Pricing Not Found" };

  return {
    title: `${tool.name} Pricing 2026: Plans, Costs & Free Trial Info`,
    description: `Complete ${tool.name} pricing breakdown for 2026. Compare all plans, features, and find out if the free trial is worth it.`,
    alternates: { canonical: `/pricing/${tool.slug}` },
  };
}

export default async function PricingPage({
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

  const plans = tool.pricing_plans ?? [];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <Link href={`/ai-tools/${tool.slug}`} className="hover:text-gray-700">
          {tool.name}
        </Link>
        {" / "}
        <span className="text-gray-900">Pricing</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {tool.name} Pricing in 2026
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        Everything you need to know about {tool.name}&apos;s pricing plans,
        features included in each tier, and whether it&apos;s worth the
        investment.
      </p>

      {/* Pricing Cards */}
      {plans.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 ${
                i === 1
                  ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200"
                  : "border-gray-200"
              }`}
            >
              {i === 1 && (
                <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold text-gray-900">
                {plan.plan_name}
              </h2>
              <div className="mt-3">
                {plan.monthly_price !== null ? (
                  <>
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${plan.monthly_price}
                    </span>
                    <span className="text-gray-500">/month</span>
                    {plan.annual_price !== null && (
                      <p className="mt-1 text-sm text-gray-500">
                        or ${plan.annual_price}/year
                      </p>
                    )}
                  </>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">
                    Contact Sales
                  </span>
                )}
              </div>
              {plan.features && plan.features.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {tool.affiliate_url && (
                <a
                  href={tool.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`mt-6 block w-full rounded-lg py-2.5 text-center text-sm font-medium ${
                    i === 1
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">
            Pricing information for {tool.name} is being updated.
          </p>
        </div>
      )}

      {/* FAQ Section for SEO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">
          {tool.name} Pricing FAQ
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900">
              Does {tool.name} offer a free plan?
            </h3>
            <p className="mt-1 text-gray-600">
              {tool.pricing_model === "freemium" || tool.pricing_model === "free"
                ? `Yes, ${tool.name} offers a free plan with limited features.`
                : `${tool.name} does not offer a permanent free plan, but ${
                    tool.has_free_trial
                      ? "they do offer a free trial period."
                      : "you can contact their sales team for a demo."
                  }`}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Is {tool.name} worth the price?
            </h3>
            <p className="mt-1 text-gray-600">
              {tool.name} offers competitive pricing for its feature set.
              {plans.length > 0 && plans[0].monthly_price
                ? ` Starting at $${plans[0].monthly_price}/month, it provides good value for ${
                    tool.category?.name?.toLowerCase() || "AI tools"
                  }.`
                : ""}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
