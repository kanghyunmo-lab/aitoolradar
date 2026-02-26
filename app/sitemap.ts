import type { MetadataRoute } from "next";

const BASE_URL = "https://www.aitoolradar.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/workflows`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/methodology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();

  // Tool pages + comparison pages
  let toolPages: MetadataRoute.Sitemap = [];
  try {
    const { data: tools } = await supabase
      .from("ai_tools")
      .select("slug, updated_at");

    if (tools) {
      toolPages = tools.flatMap((tool) => [
        {
          url: `${BASE_URL}/ai-tools/${tool.slug}`,
          lastModified: new Date(tool.updated_at),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        },
        {
          url: `${BASE_URL}/pricing/${tool.slug}`,
          lastModified: new Date(tool.updated_at),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        },
        {
          url: `${BASE_URL}/alternatives/${tool.slug}`,
          lastModified: new Date(tool.updated_at),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        },
      ]);

      // Comparison pages: same-category pairs
      const { data: toolsWithCategory } = await supabase
        .from("ai_tools")
        .select("slug, category_id")
        .order("rating", { ascending: false });

      if (toolsWithCategory) {
        const byCategory = new Map<string, string[]>();
        for (const tool of toolsWithCategory) {
          if (!tool.category_id) continue;
          const key = String(tool.category_id);
          if (!byCategory.has(key)) byCategory.set(key, []);
          byCategory.get(key)!.push(tool.slug);
        }
        for (const slugs of byCategory.values()) {
          for (let i = 0; i < slugs.length; i++) {
            for (let j = i + 1; j < slugs.length; j++) {
              toolPages.push({
                url: `${BASE_URL}/compare/${slugs[i]}-vs-${slugs[j]}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.7,
              });
            }
          }
        }
      }
    }
  } catch {
    // DB error
  }

  // Category pages
  let categoryPages: MetadataRoute.Sitemap = [];
  try {
    const { data: categories } = await supabase
      .from("categories")
      .select("slug");
    if (categories) {
      categoryPages = categories.map((cat) => ({
        url: `${BASE_URL}/best/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      }));
    }
  } catch {
    // DB error
  }

  // Blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("is_published", true);
    if (posts) {
      blogPages = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }));
    }
  } catch {
    // DB error
  }

  // Workflow pages
  let workflowPages: MetadataRoute.Sitemap = [];
  try {
    const { data: wflows } = await supabase
      .from("workflows")
      .select("slug, created_at")
      .eq("is_published", true);
    if (wflows) {
      workflowPages = wflows.map((w) => ({
        url: `${BASE_URL}/workflows/${w.slug}`,
        lastModified: new Date(w.created_at),
        changeFrequency: "monthly" as const,
        priority: 0.85,
      }));
    }
  } catch {
    // DB error
  }

  return [
    ...staticPages,
    ...categoryPages,
    ...workflowPages,
    ...blogPages,
    ...toolPages,
  ];
}
