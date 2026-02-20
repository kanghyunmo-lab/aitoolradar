import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AIToolRadar | Honest AI Tool Reviews & Comparisons",
  description:
    "Learn about AIToolRadar — our mission to help you find the right AI tools through honest, data-driven reviews and comparisons.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">About Us</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900">About AIToolRadar</h1>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
          <p>
            AIToolRadar exists to cut through the noise in the rapidly expanding AI tools market.
            We independently research, test, and compare 177+ AI tools to help individuals,
            teams, and businesses make informed decisions without wasting money on the wrong tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What We Do</h2>
          <p>
            The AI tools market is growing faster than anyone can track. New tools launch every
            week, pricing changes constantly, and marketing claims are often misleading. We do the
            heavy lifting so you don&apos;t have to.
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>
              <strong>Comprehensive Database</strong> — We track 177+ AI tools across writing,
              image generation, coding, automation, and more.
            </li>
            <li>
              <strong>Side-by-Side Comparisons</strong> — Compare any two tools on features,
              pricing, pros, and cons.
            </li>
            <li>
              <strong>Category Rankings</strong> — Find the best tools for your specific use case.
            </li>
            <li>
              <strong>Regular Updates</strong> — We keep our data current as tools evolve.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Editorial Standards</h2>
          <p>
            We maintain strict editorial independence. Our ratings and recommendations are based on
            objective criteria — features, reliability, value for money, and user experience — not
            on affiliate commissions. We participate in affiliate programs to support the site, but
            this never influences our scores or rankings.
          </p>
          <p className="mt-3">
            See our{" "}
            <Link href="/methodology" className="text-blue-600 hover:underline">
              rating methodology
            </Link>{" "}
            and{" "}
            <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">
              affiliate disclosure
            </Link>{" "}
            for full details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Start Exploring</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Browse All AI Tools
            </Link>
            <Link
              href="/blog"
              className="inline-block rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Read Our Blog
            </Link>
          </div>
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
