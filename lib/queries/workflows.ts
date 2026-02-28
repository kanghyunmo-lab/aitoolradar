import { createClient } from "@/lib/supabase/server";
import type { Workflow } from "@/lib/types";

export async function getAllWorkflows(): Promise<Workflow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("workflows")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getWorkflowBySlug(slug: string): Promise<Workflow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("workflows")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) return null;
  return data;
}

export async function getWorkflowSlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("workflows")
    .select("slug")
    .eq("is_published", true);
  return data?.map((w) => w.slug) ?? [];
}

export async function getRecentWorkflows(limit = 3): Promise<Workflow[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("workflows")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: true })
    .limit(limit);
  return data ?? [];
}
