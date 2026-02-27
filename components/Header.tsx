"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/best/ai-writing-tools", label: "Writing" },
  { href: "/best/ai-image-generators", label: "Image" },
  { href: "/best/ai-coding-assistants", label: "Coding" },
  { href: "/best/ai-video-tools", label: "Video" },
  { href: "/best/ai-automation", label: "Automation" },
  { href: "/workflows", label: "Workflows" },
  { href: "/blog", label: "Blog", highlight: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-800 bg-[#0B0F19]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
            AI
          </div>
          <span className="text-xl font-bold text-white">ToolRadar</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight
                  ? "text-sm font-semibold text-blue-400 hover:text-blue-300"
                  : "text-sm font-medium text-gray-300 hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
          <form action="/search" method="GET">
            <div className="flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-1.5 focus-within:border-blue-500 focus-within:bg-gray-800 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                name="q"
                placeholder="Search tools..."
                className="w-32 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Mobile: Search + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/search"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-400 hover:text-white"
            aria-label="Search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-800 bg-[#0B0F19] px-4 pb-6 md:hidden">
          <ul className="mt-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-800 ${
                    link.highlight ? "text-blue-400 hover:text-blue-300" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <form action="/search" method="GET" className="mt-4">
            <div className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 focus-within:border-blue-500">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                name="q"
                placeholder="Search tools..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
