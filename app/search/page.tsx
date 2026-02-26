import type { Metadata } from "next";
import { searchTools } from "@/lib/queries/tools";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" - AI Tool Search | AIToolRadar` : "Search AI Tools | AIToolRadar",
    description: `Search results for ${q || "AI tools"} on AIToolRadar. Find the best AI tools with honest reviews and pricing.`,
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query.length >= 2 ? await searchTools(query) : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Search Header */}
      <div className="mb-8">
        <form action="/search" method="GET">
          <div className="flex gap-2">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search AI tools..."
              autoFocus
              className="flex-1 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      {query.length >= 2 ? (
        <>
          <p className="mb-6 text-sm text-gray-400">
            {results.length > 0
              ? `${results.length} results for "${query}"`
              : `No results found for "${query}"`}
          </p>
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center">
              <p className="text-gray-400">No tools found for &ldquo;{query}&rdquo;</p>
              <p className="mt-2 text-sm text-gray-500">
                Try a different keyword or{" "}
                <Link href="/" className="text-blue-500 hover:text-blue-400 transition-colors hover:underline">
                  browse all categories
                </Link>
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center">
          <p className="text-gray-400">Enter at least 2 characters to search</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Jasper", "ChatGPT", "Midjourney", "Copy.ai", "Zapier"].map((s) => (
              <Link
                key={s}
                href={`/search?q=${s}`}
                className="rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
