import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/types";

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) return null;
  return data;
}

export async function getBlogSlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("is_published", true);
  return data?.map((p) => p.slug) ?? [];
}

export async function getRecentBlogPosts(limit = 3): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(limit);
  return data ?? [];
}
