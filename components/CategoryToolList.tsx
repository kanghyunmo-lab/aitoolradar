"use client";
import { useState } from "react";
import type { AiTool } from "@/lib/types";
import ToolCard from "@/components/ToolCard";

type Filter = "all" | "free" | "paid" | "trial";

export default function CategoryToolList({ tools }: { tools: AiTool[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = tools.filter((tool) => {
    if (filter === "all") return true;
    if (filter === "free") {
      const model = tool.pricing_model?.toLowerCase() ?? "";
      return model.includes("free") && !tool.starting_price;
    }
    if (filter === "paid") return !!tool.starting_price && tool.starting_price > 0;
    if (filter === "trial") return tool.has_free_trial;
    return true;
  });

  const buttons: { label: string; value: Filter; count: number }[] = [
    { label: "All", value: "all", count: tools.length },
    {
      label: "Free",
      value: "free",
      count: tools.filter((t) => {
        const model = t.pricing_model?.toLowerCase() ?? "";
        return model.includes("free") && !t.starting_price;
      }).length,
    },
    {
      label: "Paid",
      value: "paid",
      count: tools.filter((t) => !!t.starting_price && t.starting_price > 0).length,
    },
    {
      label: "Free Trial",
      value: "trial",
      count: tools.filter((t) => t.has_free_trial).length,
    },
  ];

  return (
    <>
      {/* Filters */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === btn.value
                ? "bg-blue-600 text-white"
                : "border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {btn.label}
            {btn.count > 0 && (
              <span
                className={`ml-1.5 text-xs ${
                  filter === btn.value ? "text-blue-100" : "text-gray-400"
                }`}
              >
                {btn.count}
              </span>
            )}
          </button>
        ))}
        <span className="ml-auto text-sm text-gray-400">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Tool Listings */}
      <div className="mt-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} rank={i + 1} />
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">No tools match this filter.</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Show all tools
            </button>
          </div>
        )}
      </div>
    </>
  );
}
