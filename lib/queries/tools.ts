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
  const { data: tools } = await supabase
    .from("ai_tools")
    .select("slug, name, category_id")
    .order("rating", { ascending: false })
    .limit(20);

  if (!tools || tools.length < 2) return [];

  // Generate comparison pairs from top tools in same category
  const comparisons: Array<{
    slugA: string;
    slugB: string;
    nameA: string;
    nameB: string;
  }> = [];

  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      if (tools[i].category_id === tools[j].category_id) {
        comparisons.push({
          slugA: tools[i].slug,
          slugB: tools[j].slug,
          nameA: tools[i].name,
          nameB: tools[j].name,
        });
      }
    }
  }

  return comparisons;
}
