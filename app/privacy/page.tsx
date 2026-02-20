import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AIToolRadar",
  description: "AIToolRadar's privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        {" / "}
        <span className="text-gray-900">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 20, 2026</p>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>
            AIToolRadar collects information you provide directly to us and information collected
            automatically when you use our website.
          </p>
          <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Log data (IP address, browser type, pages visited, time spent)</li>
            <li>Analytics data via Google Analytics 4 (anonymized)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To improve and optimize our website</li>
            <li>To analyze usage patterns and user behavior</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
          <p>
            We use cookies to understand how visitors interact with our website. You can control
            cookie settings through your browser. Disabling cookies may affect some website
            functionality.
          </p>
          <p className="mt-3">
            We use Google Analytics 4, which uses cookies to collect anonymized usage data.
            You can opt out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites (including affiliate links). We are
            not responsible for the privacy practices of those sites. We encourage you to read the
            privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
          <p>
            We retain analytics data in anonymized form for up to 26 months as per Google
            Analytics default settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data including
            the right to access, correct, or delete your data. To exercise these rights, please
            contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page with an updated date.
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
