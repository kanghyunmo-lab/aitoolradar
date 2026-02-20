import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Rating Methodology | AIToolRadar",
  description:
    "How AIToolRadar rates and ranks AI tools. Our transparent scoring system explained.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">Our Methodology</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900">Our Rating Methodology</h1>
      <p className="mt-4 text-lg text-gray-600">
        How we evaluate and score 177+ AI tools to give you honest, actionable comparisons.
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
          <p>
            Each AI tool on AIToolRadar is evaluated on a 10-point scale across multiple
            dimensions. Our ratings reflect real-world usability and value, not marketing claims.
            Ratings are updated when tools release significant updates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Evaluation Criteria</h2>

          <div className="space-y-5">
            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">1</span>
                <h3 className="font-semibold text-gray-900">Features & Capabilities (30%)</h3>
              </div>
              <p className="mt-2 text-sm">
                Breadth and depth of features, quality of output, unique capabilities, and how
                well the tool delivers on its core promise.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">2</span>
                <h3 className="font-semibold text-gray-900">Value for Money (25%)</h3>
              </div>
              <p className="mt-2 text-sm">
                Pricing relative to features offered, free tier availability, and whether the tool
                delivers measurable ROI for its target users.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">3</span>
                <h3 className="font-semibold text-gray-900">Ease of Use (20%)</h3>
              </div>
              <p className="mt-2 text-sm">
                Onboarding experience, user interface quality, learning curve, and how quickly a
                new user can get productive results.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">4</span>
                <h3 className="font-semibold text-gray-900">Reliability & Support (15%)</h3>
              </div>
              <p className="mt-2 text-sm">
                Uptime, output consistency, quality of customer support, documentation, and
                community resources.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">5</span>
                <h3 className="font-semibold text-gray-900">Integrations & Ecosystem (10%)</h3>
              </div>
              <p className="mt-2 text-sm">
                API availability, integrations with popular tools, and how well the tool fits
                into existing workflows.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Rating Scale</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Score</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["9.0 – 10", "Exceptional — best-in-class tool we highly recommend"],
                  ["7.0 – 8.9", "Very Good — strong tool with minor limitations"],
                  ["5.0 – 6.9", "Good — solid for specific use cases"],
                  ["3.0 – 4.9", "Fair — notable limitations worth considering"],
                  ["Below 3.0", "Poor — significant issues, limited recommendation"],
                ].map(([score, desc]) => (
                  <tr key={score}>
                    <td className="px-4 py-3 font-medium text-gray-900">{score}</td>
                    <td className="px-4 py-3 text-gray-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Independence & Transparency</h2>
          <p>
            Our ratings are determined independently of any affiliate relationships. A tool we earn
            a commission on is evaluated by the same criteria as a tool we don&apos;t. We publish
            our full{" "}
            <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">
              affiliate disclosure
            </Link>{" "}
            so you always know where we have financial relationships.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          ← Back to AIToolRadar
        </Link>
      </div>
    </main>
  );
}
