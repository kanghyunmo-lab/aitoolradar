/**
 * import-blog-posts.js
 * 블로그 글 10개를 Supabase blog_posts 테이블에 자동 입력
 *
 * 실행 방법:
 *   node scripts/import-blog-posts.js
 *
 * 사전 준비:
 *   1. Supabase SQL Editor에서 create-blog-table.sql 실행 완료
 *   2. .env.local 에 NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 설정
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ---------- 환경변수 로드 ----------
function loadEnv() {
  const envPath = path.join(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) {
    console.error("❌ .env.local 파일을 찾을 수 없습니다.");
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length > 0) {
      process.env[key.trim()] = rest.join("=").trim();
    }
  }
}

loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Supabase 환경변수가 없습니다. .env.local을 확인하세요.");
  process.exit(1);
}

// ---------- 블로그 글 메타데이터 ----------
const BLOG_POSTS = [
  {
    slug: "jasper-vs-copyai-vs-writesonic",
    title: "Jasper vs Copy.ai vs Writesonic: Which AI Writing Tool is Best in 2026?",
    excerpt:
      "We spent three weeks testing Jasper, Copy.ai, and Writesonic across real marketing tasks. Here's the practical breakdown of which tool actually delivers.",
    meta_description:
      "Jasper vs Copy.ai vs Writesonic: an in-depth 2026 comparison of the top AI writing tools. Features, pricing, and which one is right for your team.",
    category: "AI Writing",
    reading_time_minutes: 16,
    file: "blog-01-jasper-vs-copyai-vs-writesonic.html",
  },
  {
    slug: "free-ai-tools-for-startups-2026",
    title: "Best Free AI Tools for Startups in 2026",
    excerpt:
      "A curated list of the best free AI tools that actually work for early-stage startups — no credit card required to get value.",
    meta_description:
      "Discover the best free AI tools for startups in 2026. From writing to design to automation — build your AI stack without breaking the bank.",
    category: "AI Productivity",
    reading_time_minutes: 15,
    file: "blog-02-free-ai-tools-for-startups.html",
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini: The Ultimate AI Chatbot Comparison (2026)",
    excerpt:
      "The three dominant AI assistants have grown apart in 2026. We compare ChatGPT, Claude, and Gemini across real-world tasks to help you pick the right one.",
    meta_description:
      "ChatGPT vs Claude vs Gemini: a detailed 2026 comparison. We tested all three on writing, coding, and reasoning tasks to find the best AI chatbot.",
    category: "AI Chatbots",
    reading_time_minutes: 17,
    file: "blog-03-chatgpt-vs-claude-vs-gemini.html",
  },
  {
    slug: "complete-guide-ai-image-generators",
    title: "Complete Guide to AI Image Generators: From Beginner to Pro (2026)",
    excerpt:
      "Everything you need to know about AI image generators — how they work, which one to choose, and how to write prompts that actually get results.",
    meta_description:
      "The complete 2026 guide to AI image generators. Learn how Midjourney, DALL-E 3, and Stable Diffusion work, and how to create stunning AI art.",
    category: "AI Image",
    reading_time_minutes: 16,
    file: "blog-04-complete-guide-ai-image-generators.html",
  },
  {
    slug: "automate-business-with-ai-2026",
    title: "How to Automate Your Business with AI in 2026: A Step-by-Step Guide",
    excerpt:
      "A practical guide to identifying which parts of your business are ready for AI automation — and the tools that make it happen without a technical team.",
    meta_description:
      "Learn how to automate your business with AI in 2026. A step-by-step guide covering Zapier, Make, and AI workflow automation for any business size.",
    category: "AI Automation",
    reading_time_minutes: 16,
    file: "blog-05-automate-business-with-ai.html",
  },
  {
    slug: "best-ai-coding-assistants-2026",
    title: "Best AI Coding Assistants for Developers in 2026",
    excerpt:
      "GitHub Copilot, Cursor, and Tabnine have all matured significantly. We break down which AI coding tool will actually make you a faster developer.",
    meta_description:
      "The best AI coding assistants in 2026 reviewed and compared. GitHub Copilot vs Cursor vs Tabnine — which one should developers use?",
    category: "AI Coding",
    reading_time_minutes: 16,
    file: "blog-06-best-ai-coding-assistants.html",
  },
  {
    slug: "ai-writing-tools-for-small-business",
    title: "AI Writing Tools for Small Business: Save 10+ Hours Per Week",
    excerpt:
      "Small business owners are saving 10+ hours a week with AI writing tools. Here's exactly which tools to use and how to implement them in your workflow.",
    meta_description:
      "Best AI writing tools for small business owners in 2026. Practical guide to saving time on content, emails, and marketing with AI tools.",
    category: "AI Writing",
    reading_time_minutes: 15,
    file: "blog-07-ai-writing-tools-small-business.html",
  },
  {
    slug: "midjourney-vs-dalle-vs-stable-diffusion",
    title: "Midjourney vs DALL-E 3 vs Stable Diffusion: Which AI Art Generator Should You Use?",
    excerpt:
      "Midjourney, DALL-E 3, and Stable Diffusion each excel at different things. We tested all three to show you exactly when to use which tool.",
    meta_description:
      "Midjourney vs DALL-E 3 vs Stable Diffusion compared in 2026. Quality, pricing, and use cases — find the best AI art generator for your needs.",
    category: "AI Image",
    reading_time_minutes: 16,
    file: "blog-08-midjourney-vs-dalle-vs-stable-diffusion.html",
  },
  {
    slug: "ai-tools-replace-expensive-software",
    title: "10 AI Tools That Actually Replace Expensive Software in 2026",
    excerpt:
      "Why pay $500/month for enterprise software when AI tools can do the same job for $20? Here are 10 expensive tools with legitimate AI replacements.",
    meta_description:
      "10 AI tools that replace expensive software in 2026. Cut your software costs dramatically with these AI-powered alternatives.",
    category: "AI Productivity",
    reading_time_minutes: 16,
    file: "blog-09-ai-tools-replace-expensive-software.html",
  },
  {
    slug: "how-to-use-perplexity-ai-research",
    title: "How to Use Perplexity AI for Research: The Complete Guide (2026)",
    excerpt:
      "Perplexity AI has become the go-to research tool for professionals who need accurate, cited answers fast. Here's how to use it like an expert.",
    meta_description:
      "Complete guide to using Perplexity AI for research in 2026. Tips, prompts, and workflows to get the most out of the best AI research tool.",
    category: "AI Research",
    reading_time_minutes: 15,
    file: "blog-10-how-to-use-perplexity-ai-research.html",
  },
];

// ---------- HTML 파일에서 content_html 추출 ----------
function extractContent(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  // 주석 제거 후 전체 HTML을 content로 사용
  const withoutComment = raw.replace(/<!--[\s\S]*?-->/, "").trim();
  return withoutComment;
}

// ---------- Supabase REST API 호출 ----------
function supabaseUpsert(data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const url = new URL(`${SUPABASE_URL}/rest/v1/blog_posts`);

    const options = {
      hostname: url.hostname,
      path: url.pathname + "?on_conflict=slug",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
    };

    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => (responseData += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ ok: true });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ---------- 메인 실행 ----------
async function main() {
  const blogDir = path.join(__dirname, "blog-posts");
  console.log("🚀 블로그 글 10개 Supabase 업로드 시작...\n");

  for (const post of BLOG_POSTS) {
    const filePath = path.join(blogDir, post.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  파일 없음: ${post.file}`);
      continue;
    }

    const content_html = extractContent(filePath);
    const payload = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content_html,
      meta_description: post.meta_description,
      author: "AIToolRadar Editorial Team",
      category: post.category,
      reading_time_minutes: post.reading_time_minutes,
      is_published: true,
      published_at: "2026-02-20T00:00:00Z",
    };

    try {
      await supabaseUpsert(payload);
      console.log(`✅ 업로드 완료: ${post.slug}`);
    } catch (err) {
      console.error(`❌ 실패: ${post.slug}\n   ${err.message}`);
    }
  }

  console.log("\n🎉 완료! Supabase blog_posts 테이블을 확인하세요.");
}

main();
