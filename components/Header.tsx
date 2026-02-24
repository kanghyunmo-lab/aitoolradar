import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
            AI
          </div>
          <span className="text-xl font-bold text-gray-900">
            ToolRadar
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/best/ai-writing-tools"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Writing
          </Link>
          <Link
            href="/best/ai-image-generators"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Image
          </Link>
          <Link
            href="/best/ai-coding-assistants"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Coding
          </Link>
          <Link
            href="/best/ai-video-tools"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Video
          </Link>
          <Link
            href="/best/ai-automation"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Automation
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Blog
          </Link>
          <form action="/search" method="GET">
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 focus-within:border-blue-400 focus-within:bg-white">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                name="q"
                placeholder="Search tools..."
                className="w-32 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
