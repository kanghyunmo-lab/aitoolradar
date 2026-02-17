import Link from "next/link";
import { getAllTools, getAllCategories } from "@/lib/queries/tools";
import ToolCard from "@/components/ToolCard";

export default async function Home() {
  let tools: Awaited<ReturnType<typeof getAllTools>> = [];
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];

  try {
    [tools, categories] = await Promise.all([
      getAllTools(),
      getAllCategories(),
    ]);
  } catch {
    // DB not connected yet - show placeholder content
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Find the Best AI Tool{" "}
          <span className="text-blue-600">for Any Task</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Compare 500+ AI tools with honest reviews, pricing data, and
          side-by-side comparisons. Make the right choice for your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/best/ai-writing-tools"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Browse AI Tools
          </Link>
          <Link
            href="/compare/chatgpt-vs-claude"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Compare Tools
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Browse by Category
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/best/${cat.slug}`}
                className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="text-sm font-medium text-gray-900">
                  {cat.name}
                </span>
              </Link>
            ))
          ) : (
            <>
              {[
                { name: "AI Writing Tools", slug: "ai-writing-tools" },
                { name: "AI Image Generators", slug: "ai-image-generators" },
                { name: "AI Coding Assistants", slug: "ai-coding-assistants" },
                { name: "AI Video Tools", slug: "ai-video-tools" },
                { name: "AI Automation", slug: "ai-automation" },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/best/${cat.slug}`}
                  className="rounded-xl border border-gray-200 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Top Rated Tools */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Top Rated AI Tools 2026
        </h2>
        <div className="mt-6 space-y-4">
          {tools.length > 0 ? (
            tools
              .slice(0, 10)
              .map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} rank={i + 1} />
              ))
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">
                Connect Supabase and seed data to see AI tools here.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                1. Create a Supabase project at supabase.com
                <br />
                2. Run the schema.sql in SQL Editor
                <br />
                3. Add your keys to .env.local
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">
            How We Review AI Tools
          </h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              AIToolRadar provides comprehensive, data-driven reviews and
              comparisons of AI tools across all categories. Our methodology
              combines real-world testing, pricing analysis, feature comparison,
              and user feedback to help you make informed decisions.
            </p>
            <p>
              We evaluate each tool on key metrics including ease of use, output
              quality, pricing value, customer support, and integration
              capabilities. Our comparison pages let you see exactly how tools
              stack up against each other.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
