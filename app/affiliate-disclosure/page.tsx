import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | AIToolRadar",
  description:
    "AIToolRadar participates in affiliate programs. Learn how we earn commissions and how it affects our reviews.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 20, 2026</p>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Transparency</h2>
          <p>
            AIToolRadar is committed to full transparency with our readers. This page explains how
            we earn revenue and how that may affect the content on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Links</h2>
          <p>
            Some of the links on AIToolRadar are affiliate links. This means that if you click on a
            link and then purchase or sign up for a product or service, we may earn a commission at
            no extra cost to you.
          </p>
          <p className="mt-3">
            We participate in affiliate programs including but not limited to:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Jasper AI Affiliate Program</li>
            <li>Copy.ai Affiliate Program</li>
            <li>Writesonic Affiliate Program</li>
            <li>Other AI tool affiliate programs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How This Affects Our Reviews</h2>
          <p>
            We only recommend products and services that we genuinely believe provide value to our
            readers. Our editorial opinions are our own and are not influenced by affiliate
            relationships. We maintain strict editorial standards to ensure our reviews and
            comparisons are honest, accurate, and helpful.
          </p>
          <p className="mt-3">
            Tools are rated based on objective criteria including features, pricing, ease of use,
            and real-world performance — not on commission rates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">FTC Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission&apos;s guidelines (16 CFR Part 255),
            we disclose that affiliate links are present on this website. The footer of every page
            on AIToolRadar includes a notice that some links are affiliate links.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or editorial policies,
            please feel free to contact us. We value your trust and are happy to provide
            clarification.
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
