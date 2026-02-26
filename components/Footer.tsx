import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/best/ai-writing-tools" className="text-sm text-gray-400 hover:text-white">
                  AI Writing Tools
                </Link>
              </li>
              <li>
                <Link href="/best/ai-image-generators" className="text-sm text-gray-400 hover:text-white">
                  AI Image Generators
                </Link>
              </li>
              <li>
                <Link href="/best/ai-coding-assistants" className="text-sm text-gray-400 hover:text-white">
                  AI Coding Assistants
                </Link>
              </li>
              <li>
                <Link href="/best/ai-video-tools" className="text-sm text-gray-400 hover:text-white">
                  AI Video Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Popular Comparisons</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/compare/chatgpt-vs-claude-ai" className="text-sm text-gray-400 hover:text-white">
                  ChatGPT vs Claude
                </Link>
              </li>
              <li>
                <Link href="/compare/jasper-vs-copy-ai" className="text-sm text-gray-400 hover:text-white">
                  Jasper vs Copy.ai
                </Link>
              </li>
              <li>
                <Link href="/compare/midjourney-vs-dall-e" className="text-sm text-gray-400 hover:text-white">
                  Midjourney vs DALL-E
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/workflows" className="text-sm text-gray-400 hover:text-white">
                  AI Workflows
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-sm text-gray-400 hover:text-white">
                  Our Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm text-gray-400 hover:text-white">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AIToolRadar. All rights reserved.
            Some links on this site are affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
