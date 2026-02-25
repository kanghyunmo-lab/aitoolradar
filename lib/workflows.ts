export interface WorkflowTool {
  name: string;
  slug: string; // maps to /ai-tools/[slug]
}

export interface WorkflowStep {
  step: number;
  goal: string;
  tools: WorkflowTool[];
}

export interface Workflow {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  searchKeywords: string[];
  purchaseIntent: "high" | "medium";
  steps: WorkflowStep[];
  relatedSlugs: string[];
}

export const workflows: Workflow[] = [
  {
    slug: "ai-youtube-video-creation",
    title: "AI YouTube Video Creation",
    tagline: "Script to Upload Pipeline",
    description:
      "Create a complete YouTube video using AI — from keyword research and scripting to AI avatars, auto-captions, and short clips. No camera or studio required.",
    searchKeywords: [
      "ai youtube video creation workflow",
      "make youtube videos with ai step by step",
      "ai tools for faceless youtube channel",
    ],
    purchaseIntent: "high",
    steps: [
      {
        step: 1,
        goal: "Keyword Research & Script Writing",
        tools: [
          { name: "ChatGPT", slug: "chatgpt" },
          { name: "Frase", slug: "frase" },
        ],
      },
      {
        step: 2,
        goal: "AI Voiceover Generation",
        tools: [{ name: "ElevenLabs", slug: "elevenlabs" }],
      },
      {
        step: 3,
        goal: "AI Avatar Video Generation",
        tools: [
          { name: "Synthesia", slug: "synthesia" },
          { name: "HeyGen", slug: "heygen" },
        ],
      },
      {
        step: 4,
        goal: "Video Editing & Auto Captions",
        tools: [{ name: "Descript", slug: "descript" }],
      },
      {
        step: 5,
        goal: "Short Clips & SEO Optimization",
        tools: [
          { name: "Opus Clip", slug: "opus-clip" },
          { name: "Surfer SEO", slug: "surfer-seo" },
        ],
      },
    ],
    relatedSlugs: [
      "ai-podcast-production-workflow",
      "ai-social-media-content-repurposing",
      "ai-online-course-creation",
    ],
  },
  {
    slug: "ai-podcast-production-workflow",
    title: "AI Podcast Production",
    tagline: "From Script to Publish",
    description:
      "Produce a professional podcast episode end-to-end with AI — scripting, voice synthesis, background music, noise removal, and short-form promo clips.",
    searchKeywords: [
      "ai podcast production workflow",
      "how to make a podcast with ai tools",
      "ai tools for podcast creation",
    ],
    purchaseIntent: "high",
    steps: [
      {
        step: 1,
        goal: "Episode Research & Script Writing",
        tools: [
          { name: "ChatGPT", slug: "chatgpt" },
          { name: "Claude AI", slug: "claude-ai" },
        ],
      },
      {
        step: 2,
        goal: "AI Voiceover & Narration",
        tools: [
          { name: "ElevenLabs", slug: "elevenlabs" },
          { name: "Murf AI", slug: "murf-ai" },
        ],
      },
      {
        step: 3,
        goal: "Background Music Generation",
        tools: [
          { name: "Suno AI", slug: "suno-ai" },
          { name: "Beatoven AI", slug: "beatoven-ai" },
        ],
      },
      {
        step: 4,
        goal: "Audio Editing & Noise Removal",
        tools: [{ name: "Descript", slug: "descript" }],
      },
      {
        step: 5,
        goal: "Short Clips & Social Promotion",
        tools: [
          { name: "Opus Clip", slug: "opus-clip" },
          { name: "Canva AI", slug: "canva" },
        ],
      },
    ],
    relatedSlugs: [
      "ai-youtube-video-creation",
      "ai-social-media-content-repurposing",
      "ai-online-course-creation",
    ],
  },
  {
    slug: "ai-online-course-creation",
    title: "AI Online Course Creation",
    tagline: "From Idea to Launch",
    description:
      "Build and launch a complete online course with AI — curriculum design, auto-generated slides, AI avatar lectures, voiceover, and promotional videos.",
    searchKeywords: [
      "ai online course creation workflow",
      "create online course with ai tools",
      "ai tools for course creators",
    ],
    purchaseIntent: "high",
    steps: [
      {
        step: 1,
        goal: "Curriculum Design & Script Writing",
        tools: [
          { name: "ChatGPT", slug: "chatgpt" },
          { name: "Claude AI", slug: "claude-ai" },
        ],
      },
      {
        step: 2,
        goal: "Auto-Generate Lecture Slides",
        tools: [
          { name: "Gamma", slug: "gamma" },
          { name: "Beautiful.ai", slug: "beautiful-ai" },
        ],
      },
      {
        step: 3,
        goal: "AI Avatar Lecture Videos",
        tools: [
          { name: "Synthesia", slug: "synthesia" },
          { name: "HeyGen", slug: "heygen" },
        ],
      },
      {
        step: 4,
        goal: "Voiceover & Audio Editing",
        tools: [
          { name: "ElevenLabs", slug: "elevenlabs" },
          { name: "Descript", slug: "descript" },
        ],
      },
      {
        step: 5,
        goal: "Promo Video & Thumbnail",
        tools: [
          { name: "Canva AI", slug: "canva" },
          { name: "InVideo AI", slug: "invideo-ai" },
        ],
      },
    ],
    relatedSlugs: [
      "ai-youtube-video-creation",
      "ai-podcast-production-workflow",
      "ai-seo-blog-content-creation",
    ],
  },
  {
    slug: "ai-seo-blog-content-creation",
    title: "AI SEO Blog Content Creation",
    tagline: "Research to Publish",
    description:
      "Write search-optimized blog posts from scratch using AI — keyword research, outline, first draft, SEO scoring, grammar check, and cover image generation.",
    searchKeywords: [
      "ai seo blog writing workflow",
      "ai tools for seo content creation step by step",
      "best ai workflow for blog posts",
    ],
    purchaseIntent: "high",
    steps: [
      {
        step: 1,
        goal: "Keyword Research & Competitor Analysis",
        tools: [
          { name: "Semrush", slug: "semrush" },
          { name: "Frase", slug: "frase" },
        ],
      },
      {
        step: 2,
        goal: "Outline & First Draft",
        tools: [
          { name: "ChatGPT", slug: "chatgpt" },
          { name: "Writesonic", slug: "writesonic" },
        ],
      },
      {
        step: 3,
        goal: "SEO Score Optimization",
        tools: [{ name: "Surfer SEO", slug: "surfer-seo" }],
      },
      {
        step: 4,
        goal: "Grammar & Readability Check",
        tools: [{ name: "Grammarly", slug: "grammarly" }],
      },
      {
        step: 5,
        goal: "Cover Image Generation",
        tools: [
          { name: "Canva AI", slug: "canva" },
          { name: "Adobe Firefly", slug: "adobe-firefly" },
        ],
      },
    ],
    relatedSlugs: [
      "ai-social-media-content-repurposing",
      "ai-online-course-creation",
      "ai-youtube-video-creation",
    ],
  },
  {
    slug: "ai-social-media-content-repurposing",
    title: "AI Social Media Content Repurposing",
    tagline: "One Piece of Content → Every Platform",
    description:
      "Turn a single blog post or video into social captions, carousels, short-form clips, and scheduled posts across every platform — all with AI.",
    searchKeywords: [
      "ai content repurposing workflow",
      "repurpose blog to social media with ai",
      "ai tools for social media content automation",
    ],
    purchaseIntent: "high",
    steps: [
      {
        step: 1,
        goal: "Extract Script from Blog or Video",
        tools: [
          { name: "ChatGPT", slug: "chatgpt" },
          { name: "Descript", slug: "descript" },
        ],
      },
      {
        step: 2,
        goal: "Auto-Generate Captions & Hashtags",
        tools: [
          { name: "Claude AI", slug: "claude-ai" },
          { name: "Copy.ai", slug: "copy-ai" },
        ],
      },
      {
        step: 3,
        goal: "Image & Carousel Design",
        tools: [
          { name: "Canva AI", slug: "canva" },
          { name: "Adobe Firefly", slug: "adobe-firefly" },
        ],
      },
      {
        step: 4,
        goal: "Short-Form Video Clips",
        tools: [
          { name: "Opus Clip", slug: "opus-clip" },
          { name: "InVideo AI", slug: "invideo-ai" },
        ],
      },
      {
        step: 5,
        goal: "Schedule & Auto-Publish",
        tools: [{ name: "n8n", slug: "n8n" }],
      },
    ],
    relatedSlugs: [
      "ai-youtube-video-creation",
      "ai-podcast-production-workflow",
      "ai-seo-blog-content-creation",
    ],
  },
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getAllWorkflowSlugs(): string[] {
  return workflows.map((w) => w.slug);
}
