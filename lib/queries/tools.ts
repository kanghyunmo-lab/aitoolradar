import { createClient } from "@/lib/supabase/server";
import type { AiTool, Category } from "@/lib/types";

export async function getAllTools(): Promise<AiTool[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("ai_tools")
    .select("*, category:categories(*), pricing_plans(*)")
    .order("rating", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getToolBySlug(slug: string): Promise<AiTool | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("ai_tools")
    .select("*, category:categories(*), pricing_plans(*)")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

export async function getToolsByCategory(
  categorySlug: string
): Promise<{ tools: AiTool[]; category: Category | null }> {
  const supabase = await createClient();

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", categorySlug)
    .single();

  if (!category) return { tools: [], category: null };

  const { data: tools } = await supabase
    .from("ai_tools")
    .select("*, category:categories(*), pricing_plans(*)")
    .eq("category_id", category.id)
    .order("rating", { ascending: false });

  return { tools: tools ?? [], category };
}

export async function getToolSlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("ai_tools").select("slug");
  return data?.map((t) => t.slug) ?? [];
}

export async function getAllCategories(): Promise<Category[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("categories")
    .select("*")
    .order("name");
  return data ?? [];
}

export async function getCategorySlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("categories").select("slug");
  return data?.map((c) => c.slug) ?? [];
}

export async function getComparisonTools(
  slugA: string,
  slugB: string
): Promise<{ toolA: AiTool | null; toolB: AiTool | null }> {
  const supabase = await createClient();

  const [resA, resB] = await Promise.all([
    supabase
      .from("ai_tools")
      .select("*, category:categories(*), pricing_plans(*)")
      .eq("slug", slugA)
      .single(),
    supabase
      .from("ai_tools")
      .select("*, category:categories(*), pricing_plans(*)")
      .eq("slug", slugB)
      .single(),
  ]);

  return {
    toolA: resA.data ?? null,
    toolB: resB.data ?? null,
  };
}

export async function getPopularComparisons(): Promise<
  Array<{ slugA: string; slugB: string; nameA: string; nameB: string }>
> {
  const supabase = await createClient();

  // Fetch all tools ordered by rating; we group by category client-side
  // to pick top 10 per category for broader coverage across all 177 tools
  const { data: tools } = await supabase
    .from("ai_tools")
    .select("slug, name, category_id")
    .order("rating", { ascending: false });

  if (!tools || tools.length < 2) return [];

  // Build per-category map (all tools, not limited)
  const byCategory = new Map<
    string,
    Array<{ slug: string; name: string }>
  >();
  for (const tool of tools) {
    if (!tool.category_id) continue;
    const key = String(tool.category_id);
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key)!.push({ slug: tool.slug, name: tool.name });
  }

  // Generate same-category comparison pairs for all tools
  const comparisons: Array<{
    slugA: string;
    slugB: string;
    nameA: string;
    nameB: string;
  }> = [];

  for (const catTools of byCategory.values()) {
    for (let i = 0; i < catTools.length; i++) {
      for (let j = i + 1; j < catTools.length; j++) {
        comparisons.push({
          slugA: catTools[i].slug,
          slugB: catTools[j].slug,
          nameA: catTools[i].name,
          nameB: catTools[j].name,
        });
      }
    }
  }

  return comparisons;
}
