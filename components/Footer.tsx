import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/best/ai-writing-tools" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Writing Tools
                </Link>
              </li>
              <li>
                <Link href="/best/ai-image-generators" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Image Generators
                </Link>
              </li>
              <li>
                <Link href="/best/ai-coding-assistants" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Coding Assistants
                </Link>
              </li>
              <li>
                <Link href="/best/ai-video-tools" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Video Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Popular Comparisons</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/compare/chatgpt-vs-claude-ai" className="text-sm text-gray-600 hover:text-gray-900">
                  ChatGPT vs Claude
                </Link>
              </li>
              <li>
                <Link href="/compare/jasper-vs-copy-ai" className="text-sm text-gray-600 hover:text-gray-900">
                  Jasper vs Copy.ai
                </Link>
              </li>
              <li>
                <Link href="/compare/midjourney-vs-dall-e" className="text-sm text-gray-600 hover:text-gray-900">
                  Midjourney vs DALL-E
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-sm text-gray-600 hover:text-gray-900">
                  Our Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm text-gray-600 hover:text-gray-900">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AIToolRadar. All rights reserved.
            Some links on this site are affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
