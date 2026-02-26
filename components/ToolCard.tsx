import Link from "next/link";
import type { AiTool } from "@/lib/types";
import ToolLogo from "@/components/ToolLogo";

interface ToolCardProps {
  tool: AiTool;
  rank?: number;
}

export default function ToolCard({ tool, rank }: ToolCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-gray-700">
      {rank && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
          {rank}
        </div>
      )}

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <ToolLogo name={tool.name} logoUrl={tool.logo_url} websiteUrl={tool.website_url} className="h-12 w-12" />
          <div>
            <Link
              href={`/ai-tools/${tool.slug}`}
              className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
            >
              {tool.name}
            </Link>
            {tool.rating && (
              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <span>{"★".repeat(Math.round(tool.rating / 2))}</span>
                <span className="text-gray-400">{tool.rating}/10</span>
              </div>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">{tool.short_description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tool.pricing_model && (
            <span className="rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
              {tool.pricing_model}
            </span>
          )}
          {tool.has_free_trial && (
            <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
              Free Trial
            </span>
          )}
          {tool.starting_price && (
            <span className="text-sm font-medium text-gray-300">
              From ${tool.starting_price}/mo
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/ai-tools/${tool.slug}`}
            className="rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            Read Review
          </Link>
          {tool.affiliate_url && (
            <a
              href={tool.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Try {tool.name}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
