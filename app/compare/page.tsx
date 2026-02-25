import type { Metadata } from "next";
import Link from "next/link";
import { getAllTools, getAllCategories } from "@/lib/queries/tools";
import CompareSelector from "@/components/CompareSelector";

export const metadata: Metadata = {
  title: "Compare AI Tools Side by Side | AIToolRadar",
  description:
    "Compare any two AI tools side by side. Select tools by category and see features, pricing, and honest reviews.",
  alternates: { canonical: "/compare" },
};

export default async function ComparePage() {
  let tools: Awaited<ReturnType<typeof getAllTools>> = [];
  let categories: Awaited<ReturnType<typeof getAllCategories>> = [];

  try {
    [tools, categories] = await Promise.all([
      getAllTools(),
      getAllCategories(),
    ]);
  } catch {
    // DB not connected
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        {" / "}
        <span className="text-gray-900">Compare</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Compare AI Tools Side by Side
      </h1>
      <p className="mt-2 text-base text-gray-600">
        Pick a category, select{" "}
        <span className="font-medium text-blue-600">Tool A</span> and{" "}
        <span className="font-medium text-purple-600">Tool B</span>, then
        click Compare to see the full breakdown.
      </p>

      {categories.length > 0 ? (
        <CompareSelector categories={categories} tools={tools} />
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">No tool data available.</p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm text-blue-600 hover:underline"
          >
            Back to Home &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
