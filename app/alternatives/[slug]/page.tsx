import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, getToolSlugs, getToolsByCategory } from "@/lib/queries/tools";
import ToolCard from "@/components/ToolCard";

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
  if (!tool) return { title: "Not Found" };

  return {
    title: `Top ${tool.name} Alternatives in 2026 (Cheaper & Better)`,
    description: `Looking for ${tool.name} alternatives? Compare the best options with features, pricing, and honest reviews. Find a better fit for your needs.`,
    alternates: { canonical: `/alternatives/${tool.slug}` },
  };
}

export default async function AlternativesPage({
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

  let alternatives: Awaited<ReturnType<typeof getToolsByCategory>>["tools"] = [];
  if (tool.category) {
    try {
      const result = await getToolsByCategory(tool.category.slug);
      alternatives = result.tools.filter((t) => t.id !== tool!.id);
    } catch {
      // ignore
    }
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <Link href={`/ai-tools/${tool.slug}`} className="hover:text-gray-700">
          {tool.name}
        </Link>
        {" / "}
        <span className="text-gray-900">Alternatives</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Best {tool.name} Alternatives in 2026
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        Looking for something different from {tool.name}? Here are the top
        alternatives with similar features, often at better prices.
      </p>

      <div className="mt-10 space-y-4">
        {alternatives.length > 0 ? (
          alternatives.map((alt, i) => (
            <ToolCard key={alt.id} tool={alt} rank={i + 1} />
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">
              Alternatives are being compiled. Check back soon.
            </p>
          </div>
        )}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Consider {tool.name} Alternatives?
        </h2>
        <p className="mt-4 text-gray-600">
          While {tool.name} is a solid choice for{" "}
          {tool.category?.name?.toLowerCase() || "AI tasks"}, there are several
          reasons you might want to explore alternatives: different pricing
          structures, specific features you need, better integrations with your
          existing tools, or simply a different approach to the same problem.
        </p>
      </section>
    </article>
  );
}
