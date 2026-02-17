import Link from "next/link";
import type { AiTool } from "@/lib/types";

interface ToolCardProps {
  tool: AiTool;
  rank?: number;
}

export default function ToolCard({ tool, rank }: ToolCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
      {rank && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
          {rank}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-center gap-3">
          {tool.logo_url && (
            <img
              src={tool.logo_url}
              alt={`${tool.name} logo`}
              className="h-10 w-10 rounded-lg object-contain"
            />
          )}
          <div>
            <Link
              href={`/ai-tools/${tool.slug}`}
              className="text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              {tool.name}
            </Link>
            {tool.rating && (
              <div className="flex items-center gap-1 text-sm text-yellow-600">
                <span>{"★".repeat(Math.round(tool.rating / 2))}</span>
                <span className="text-gray-500">{tool.rating}/10</span>
              </div>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600">{tool.short_description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {tool.pricing_model && (
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
              {tool.pricing_model}
            </span>
          )}
          {tool.has_free_trial && (
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              Free Trial
            </span>
          )}
          {tool.starting_price && (
            <span className="text-sm text-gray-500">
              From ${tool.starting_price}/mo
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          <Link
            href={`/ai-tools/${tool.slug}`}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Read Review
          </Link>
          {tool.affiliate_url && (
            <a
              href={tool.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Try {tool.name} &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
