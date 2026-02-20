import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AIToolRadar",
  description: "AIToolRadar's terms of service. Read our terms before using this website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">Terms of Service</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 20, 2026</p>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
          <p>
            By accessing and using AIToolRadar (&quot;the Site&quot;), you accept and agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not use
            the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Use of the Site</h2>
          <p>AIToolRadar provides information, reviews, and comparisons of AI tools. You agree to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Use the Site for lawful purposes only</li>
            <li>Not reproduce or redistribute our content without permission</li>
            <li>Not attempt to disrupt or damage the Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer of Warranties</h2>
          <p>
            The information on AIToolRadar is provided &quot;as is&quot; without warranty of any
            kind. We make no representations about the accuracy, completeness, or suitability of
            the information for any purpose. AI tool features, pricing, and availability can change
            without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Relationships</h2>
          <p>
            Some links on this Site are affiliate links. Please see our{" "}
            <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">
              Affiliate Disclosure
            </Link>{" "}
            for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            AIToolRadar shall not be liable for any indirect, incidental, special, or consequential
            damages arising from your use of the Site or any tools referenced herein. Your use of
            any AI tool is subject to that tool&apos;s own terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
          <p>
            All content on AIToolRadar, including text, ratings, and comparisons, is the property
            of AIToolRadar unless otherwise stated. You may not reproduce, distribute, or create
            derivative works without explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the Site after
            changes constitutes acceptance of the updated terms.
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
