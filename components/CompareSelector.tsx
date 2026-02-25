"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { AiTool, Category } from "@/lib/types";

interface Props {
  categories: Category[];
  tools: AiTool[];
}

const LEFT = {
  header: "bg-blue-600 text-white",
  border: "border-blue-200",
  tabActive: "bg-blue-600 text-white",
  tabIdle: "text-gray-600 hover:text-blue-700 hover:bg-blue-50",
  toolSelected: "border-blue-500 bg-blue-50 ring-2 ring-blue-400",
};

const RIGHT = {
  header: "bg-purple-600 text-white",
  border: "border-purple-200",
  tabActive: "bg-purple-600 text-white",
  tabIdle: "text-gray-600 hover:text-purple-700 hover:bg-purple-50",
  toolSelected: "border-purple-500 bg-purple-50 ring-2 ring-purple-400",
};

export default function CompareSelector({ categories, tools }: Props) {
  const router = useRouter();

  const firstCatId = categories[0]?.id ?? "";
  const [leftCatId, setLeftCatId] = useState(firstCatId);
  const [rightCatId, setRightCatId] = useState(firstCatId);
  const [toolA, setToolA] = useState<AiTool | null>(null);
  const [toolB, setToolB] = useState<AiTool | null>(null);

  const leftTools = useMemo(
    () => tools.filter((t) => t.category_id === leftCatId),
    [tools, leftCatId]
  );
  const rightTools = useMemo(
    () => tools.filter((t) => t.category_id === rightCatId),
    [tools, rightCatId]
  );

  const canCompare = toolA && toolB && toolA.slug !== toolB.slug;

  return (
    <div className="mt-10">
      {/* Two Panels */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        {/* Left Panel */}
        <div className="flex-1">
          <ToolPanel
            label="첫 번째 도구"
            accent={LEFT}
            categories={categories}
            tools={leftTools}
            activeCatId={leftCatId}
            onCatChange={(id) => { setLeftCatId(id); setToolA(null); }}
            selected={toolA}
            onSelect={setToolA}
            excludeSlug={toolB?.slug}
          />
        </div>

        {/* VS Badge */}
        <div className="flex items-center justify-center py-2 lg:py-0 lg:pt-16">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-bold text-gray-500 shadow-sm">
            VS
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          <ToolPanel
            label="두 번째 도구"
            accent={RIGHT}
            categories={categories}
            tools={rightTools}
            activeCatId={rightCatId}
            onCatChange={(id) => { setRightCatId(id); setToolB(null); }}
            selected={toolB}
            onSelect={setToolB}
            excludeSlug={toolA?.slug}
          />
        </div>
      </div>

      {/* Compare CTA */}
      <div className="mt-8 flex flex-col items-center gap-2">
        {canCompare ? (
          <button
            onClick={() =>
              router.push(`/compare/${toolA.slug}-vs-${toolB.slug}`)
            }
            className="rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            {toolA.name} vs {toolB.name} 비교하기 →
          </button>
        ) : (
          <p className="text-sm text-gray-400">
            {!toolA && !toolB
              ? "양쪽 패널에서 도구를 하나씩 선택하세요"
              : !toolA
              ? "왼쪽에서 도구를 선택하세요"
              : !toolB
              ? "오른쪽에서 도구를 선택하세요"
              : "같은 도구는 비교할 수 없습니다"}
          </p>
        )}

        {/* Current selection summary */}
        {(toolA || toolB) && (
          <p className="text-xs text-gray-400">
            {toolA ? (
              <span className="text-blue-600 font-medium">{toolA.name}</span>
            ) : (
              <span>?</span>
            )}
            {" "}vs{" "}
            {toolB ? (
              <span className="text-purple-600 font-medium">{toolB.name}</span>
            ) : (
              <span>?</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-component: single panel ─── */

interface PanelProps {
  label: string;
  accent: typeof LEFT;
  categories: Category[];
  tools: AiTool[];
  activeCatId: string;
  onCatChange: (id: string) => void;
  selected: AiTool | null;
  onSelect: (tool: AiTool) => void;
  excludeSlug?: string;
}

function ToolPanel({
  label,
  accent,
  categories,
  tools,
  activeCatId,
  onCatChange,
  selected,
  onSelect,
  excludeSlug,
}: PanelProps) {
  const filteredTools = tools.filter((t) => t.slug !== excludeSlug);

  return (
    <div className={`overflow-hidden rounded-2xl border-2 ${accent.border}`}>
      {/* Header */}
      <div className={`${accent.header} px-4 py-3`}>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
          {label}
        </p>
        {selected ? (
          <p className="mt-0.5 text-lg font-bold">✓ {selected.name}</p>
        ) : (
          <p className="mt-0.5 text-sm opacity-60">선택 안 됨</p>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-gray-100 bg-gray-50 px-2 py-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCatChange(cat.id)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeCatId === cat.id ? accent.tabActive : accent.tabIdle
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-2 gap-2 p-3">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => onSelect(tool)}
              className={`rounded-lg border px-3 py-2.5 text-left transition-all ${
                selected?.id === tool.id
                  ? accent.toolSelected
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <span className="block truncate text-sm font-medium text-gray-900">
                {tool.name}
              </span>
              {tool.rating != null && (
                <span className="text-xs text-gray-400">
                  ★ {tool.rating}
                </span>
              )}
            </button>
          ))
        ) : (
          <p className="col-span-2 py-8 text-center text-sm text-gray-400">
            이 카테고리에 도구가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
