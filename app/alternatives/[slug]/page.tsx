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
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <Link href={`/ai-tools/${tool.slug}`} className="hover:text-white transition-colors">
          {tool.name}
        </Link>
        {" / "}
        <span className="text-gray-200">Alternatives</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best {tool.name} Alternatives in {new Date().getFullYear()}
      </h1>
      <p className="mt-3 text-lg text-gray-400">
        Looking for something different from {tool.name}? Here are the top
        alternatives with similar features, often at better prices.
      </p>

      <div className="mt-10 space-y-4">
        {alternatives.length > 0 ? (
          alternatives.map((alt, i) => (
            <ToolCard key={alt.id} tool={alt} rank={i + 1} />
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center">
            <p className="text-gray-400">
              Alternatives are being compiled. Check back soon.
            </p>
          </div>
        )}
      </div>

      <section className="mt-16 rounded-xl bg-gray-900/30 border border-gray-800 p-8">
        <h2 className="text-2xl font-bold text-white">
          Why Consider {tool.name} Alternatives?
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          While <strong className="text-white">{tool.name}</strong> is a solid choice for{" "}
          {tool.category?.name?.toLowerCase() || "AI tasks"}, there are several
          reasons you might want to explore alternatives: different pricing
          structures, specific features you need, better integrations with your
          existing tools, or simply a different approach to the same problem.
        </p>
      </section>
    </article>
  );
}
