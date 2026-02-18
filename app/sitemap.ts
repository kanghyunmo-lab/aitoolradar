import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aitoolradar.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic pages from DB
  let toolPages: MetadataRoute.Sitemap = [];
  let categoryPages: MetadataRoute.Sitemap = [];

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();

    // Tool pages
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

      // Comparison pages: top 10 per category, same-category pairs only
      // C(10,2) = 45 pairs per category × ~10 categories = ~450 pages (manageable)
      const { data: toolsWithCategory } = await supabase
        .from("ai_tools")
        .select("slug, category_id")
        .order("rating", { ascending: false });

      if (toolsWithCategory) {
        // Group tools by category_id, keeping top 10 per category
        const byCategory = new Map<string, string[]>();
        for (const tool of toolsWithCategory) {
          if (!tool.category_id) continue;
          const key = String(tool.category_id);
          if (!byCategory.has(key)) byCategory.set(key, []);
          const list = byCategory.get(key)!;
          if (list.length < 10) list.push(tool.slug);
        }

        // Generate all pairs within each category
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

    // Category pages
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
    // DB not connected
  }

  return [...staticPages, ...categoryPages, ...toolPages];
}
