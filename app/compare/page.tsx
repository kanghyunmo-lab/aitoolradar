import type { Metadata } from "next";
import Link from "next/link";
import { getPopularComparisons, getAllCategories } from "@/lib/queries/tools";

export const metadata: Metadata = {
  title: "AI Tool Comparisons - Compare Side by Side | AIToolRadar",
  description:
    "Compare AI tools side by side. Honest feature, pricing, and pros & cons comparisons to help you pick the right tool.",
  alternates: { canonical: "/compare" },
};

export default async function ComparePage() {
  let comparisons: Awaited<ReturnType<typeof getPopularComparisons>> = [];

  try {
    comparisons = await getPopularComparisons();
  } catch {
    // DB not connected
  }

  // Show up to 60 comparisons on this page
  const featured = comparisons.slice(0, 60);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        {" / "}
        <span className="text-gray-900">Compare</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Compare AI Tools Side by Side
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        {comparisons.length > 0
          ? `${comparisons.length.toLocaleString()} comparisons available. Pick any two tools to see a detailed breakdown.`
          : "Browse head-to-head AI tool comparisons with pricing, features, and honest reviews."}
      </p>

      {/* Comparison Grid */}
      {featured.length > 0 ? (
        <>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={`${c.slugA}-${c.slugB}`}
                href={`/compare/${c.slugA}-vs-${c.slugB}`}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-900 truncate">
                  {c.nameA}
                </span>
                <span className="mx-2 shrink-0 text-xs font-bold text-gray-400">
                  vs
                </span>
                <span className="font-medium text-gray-900 truncate text-right">
                  {c.nameB}
                </span>
              </Link>
            ))}
          </div>

          {comparisons.length > 60 && (
            <p className="mt-8 text-center text-sm text-gray-400">
              Showing 60 of {comparisons.length.toLocaleString()} comparisons.
              Use the search bar to find specific tools.
            </p>
          )}
        </>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">No comparisons available yet.</p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm text-blue-600 hover:underline"
          >
            Browse AI Tools →
          </Link>
        </div>
      )}
    </div>
  );
}
