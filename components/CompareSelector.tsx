"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { AiTool, Category } from "@/lib/types";

interface Props {
  categories: Category[];
  tools: AiTool[];
}

export default function CompareSelector({ categories, tools }: Props) {
  const router = useRouter();

  const firstCatId = categories[0]?.id ?? "";
  const [activeCatId, setActiveCatId] = useState(firstCatId);
  const [toolA, setToolA] = useState<AiTool | null>(null);
  const [toolB, setToolB] = useState<AiTool | null>(null);

  const categoryTools = useMemo(
    () => tools.filter((t) => t.category_id === activeCatId),
    [tools, activeCatId]
  );

  const canCompare = toolA && toolB && toolA.slug !== toolB.slug;

  function handleCatChange(id: string) {
    setActiveCatId(id);
    setToolA(null);
    setToolB(null);
  }

  return (
    <div className="mt-6">
      {/* Shared Category Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCatChange(cat.id)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${activeCatId === cat.id
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Two Panels */}
      <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
        <ToolPanel
          label="Tool A"
          accentColor="blue"
          tools={categoryTools}
          selected={toolA}
          onSelect={setToolA}
          excludeSlug={toolB?.slug}
        />

        <div className="flex shrink-0 items-center justify-center sm:pt-10">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 text-xs font-bold text-gray-400 shadow-sm">
            VS
          </div>
        </div>

        <ToolPanel
          label="Tool B"
          accentColor="purple"
          tools={categoryTools}
          selected={toolB}
          onSelect={setToolB}
          excludeSlug={toolA?.slug}
        />
      </div>

      {/* CTA */}
      <div className="mt-5 flex flex-col items-center gap-1.5">
        {canCompare ? (
          <button
            onClick={() =>
              router.push(`/compare/${toolA.slug}-vs-${toolB.slug}`)
            }
            className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Compare {toolA.name} vs {toolB.name} &rarr;
          </button>
        ) : (
          <p className="text-sm text-gray-400">
            {!toolA && !toolB
              ? "Select one tool from each panel to compare"
              : !toolA
                ? "Select a tool from the left panel"
                : !toolB
                  ? "Select a tool from the right panel"
                  : "Please select two different tools"}
          </p>
        )}

        {(toolA || toolB) && (
          <p className="text-xs text-gray-400">
            <span className="font-medium text-blue-600">
              {toolA?.name ?? "?"}
            </span>
            {" vs "}
            <span className="font-medium text-purple-600">
              {toolB?.name ?? "?"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-component: single panel ─── */

interface PanelProps {
  label: string;
  accentColor: "blue" | "purple";
  tools: AiTool[];
  selected: AiTool | null;
  onSelect: (tool: AiTool) => void;
  excludeSlug?: string;
}

function ToolPanel({
  label,
  accentColor,
  tools,
  selected,
  onSelect,
  excludeSlug,
}: PanelProps) {
  const filteredTools = tools.filter((t) => t.slug !== excludeSlug);

  const headerBg =
    accentColor === "blue" ? "bg-blue-600" : "bg-purple-600";
  const border =
    accentColor === "blue" ? "border-blue-500/30" : "border-purple-500/30";
  const selectedRow =
    accentColor === "blue"
      ? "bg-blue-900/30 text-blue-300 font-bold"
      : "bg-purple-900/30 text-purple-300 font-bold";

  return (
    <div className={`min-w-0 flex-1 overflow-hidden rounded-xl border-2 ${border}`}>
      {/* Header */}
      <div className={`${headerBg} px-3 py-2`}>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
          {label}
        </p>
        <p className="truncate text-sm font-bold text-white">
          {selected ? `✓ ${selected.name}` : "Not selected"}
        </p>
      </div>

      {/* Tool List */}
      <ul className="max-h-60 divide-y divide-gray-800/50 overflow-y-auto">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <li key={tool.id}>
              <button
                onClick={() => onSelect(tool)}
                className={`w-full px-3 py-2.5 text-left text-sm transition-colors ${selected?.id === tool.id
                    ? selectedRow
                    : "text-gray-300 hover:bg-gray-800/50"
                  }`}
              >
                <span className="block truncate">{tool.name}</span>
                {tool.rating != null && (
                  <span className="text-[11px] text-gray-500">
                    ★ {tool.rating}
                  </span>
                )}
              </button>
            </li>
          ))
        ) : (
          <li className="py-8 text-center text-sm text-gray-400">
            No tools in this category.
          </li>
        )}
      </ul>
    </div>
  );
}
