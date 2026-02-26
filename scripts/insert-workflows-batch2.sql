-- ============================================================
-- AIToolRadar: 추가 워크플로우 10개 INSERT (Batch 2)
-- 기존 5개 워크플로우에 추가할 데이터
-- 실행 방법: Supabase SQL Editor에 전체 복사 붙여넣기 → Run
-- ============================================================

-- ① AI E-commerce Product Description Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-ecommerce-product-descriptions',
  'AI E-commerce Product Descriptions',
  'Keyword to Conversion-Ready Listing',
  'Automate your entire product listing pipeline — from keyword research and competitor analysis to AI-generated descriptions, SEO optimization, and product image creation.',
  '[
    {"step":1,"goal":"Product Keyword & Competitor Analysis","tools":[{"name":"Semrush","slug":"semrush"},{"name":"Ahrefs","slug":"ahrefs"}]},
    {"step":2,"goal":"AI Product Description Generation","tools":[{"name":"Jasper","slug":"jasper"},{"name":"ChatGPT","slug":"chatgpt"}]},
    {"step":3,"goal":"SEO Optimization & Readability","tools":[{"name":"Surfer SEO","slug":"surfer-seo"},{"name":"Grammarly","slug":"grammarly"}]},
    {"step":4,"goal":"Product Image Generation","tools":[{"name":"Adobe Firefly","slug":"adobe-firefly"},{"name":"Canva AI","slug":"canva"}]}
  ]'::jsonb,
  ARRAY['ai-seo-blog-content-creation','ai-social-media-content-repurposing']
);

-- ② AI B2B Cold Email Outreach Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-cold-email-outreach',
  'AI B2B Cold Email Outreach',
  'Prospect to Pipeline on Autopilot',
  'Find high-quality B2B leads, craft personalized email sequences, warm up your inbox, and automate follow-ups — all powered by AI tools.',
  '[
    {"step":1,"goal":"Lead Discovery & Contact Collection","tools":[{"name":"Apollo.io","slug":"apollo-io"},{"name":"Clay","slug":"clay"}]},
    {"step":2,"goal":"Personalized Email Sequence Writing","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Instantly.ai","slug":"instantly-ai"}]},
    {"step":3,"goal":"Email Warmup & Send Automation","tools":[{"name":"Instantly.ai","slug":"instantly-ai"},{"name":"Smartlead","slug":"smartlead"}]},
    {"step":4,"goal":"Response Analysis & Follow-up Automation","tools":[{"name":"Lemlist","slug":"lemlist"},{"name":"n8n","slug":"n8n"}]}
  ]'::jsonb,
  ARRAY['ai-ecommerce-product-descriptions','ai-seo-blog-content-creation']
);

-- ③ AI Sales Deck & Pitch Presentation Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-sales-deck-presentation',
  'AI Sales Deck & Pitch Presentation',
  'Data to Pitch-Ready Slides',
  'Build a compelling sales deck from scratch with AI — market research, auto-generated pitch slides, professional design polish, and presentation rehearsal scripts.',
  '[
    {"step":1,"goal":"Market Research & Data Collection","tools":[{"name":"Perplexity AI","slug":"perplexity-ai"},{"name":"ChatGPT","slug":"chatgpt"}]},
    {"step":2,"goal":"Auto-Generate Pitch Deck","tools":[{"name":"Gamma","slug":"gamma"},{"name":"Tome","slug":"tome"}]},
    {"step":3,"goal":"Design Polish & Branding","tools":[{"name":"Beautiful.ai","slug":"beautiful-ai"},{"name":"Canva AI","slug":"canva"}]},
    {"step":4,"goal":"Presentation Script & Rehearsal","tools":[{"name":"Claude AI","slug":"claude-ai"},{"name":"Notion AI","slug":"notion-ai"}]}
  ]'::jsonb,
  ARRAY['ai-online-course-creation','ai-cold-email-outreach']
);

-- ④ AI Music Production for Content Creators
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-music-production-content-creators',
  'AI Music Production for Content Creators',
  'From Melody to Master Track',
  'Create royalty-free music for your content with AI — compose melodies, add AI vocals, separate stems, and mix your final track without any music theory knowledge.',
  '[
    {"step":1,"goal":"AI Composition & Music Generation","tools":[{"name":"Suno AI","slug":"suno-ai"},{"name":"Udio","slug":"udio"}]},
    {"step":2,"goal":"Vocal & Voice Dubbing","tools":[{"name":"ElevenLabs","slug":"elevenlabs"},{"name":"Murf AI","slug":"murf-ai"}]},
    {"step":3,"goal":"Stem Separation & Remastering","tools":[{"name":"LALAL.AI","slug":"lalal-ai"},{"name":"AIVA","slug":"aiva"}]},
    {"step":4,"goal":"Final Mixing & Export","tools":[{"name":"Descript","slug":"descript"},{"name":"Soundraw","slug":"soundraw"}]}
  ]'::jsonb,
  ARRAY['ai-podcast-production-workflow','ai-youtube-video-creation']
);

-- ⑤ AI Real Estate Listing & Marketing Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-real-estate-listing-marketing',
  'AI Real Estate Listing & Marketing',
  'List, Stage, Market — All with AI',
  'Create professional property listings with AI — generate compelling descriptions, enhance photos, produce walkthrough videos, and automate multi-channel marketing campaigns.',
  '[
    {"step":1,"goal":"Property Description & Marketing Copy","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Anyword","slug":"anyword"}]},
    {"step":2,"goal":"Photo Enhancement & Virtual Staging","tools":[{"name":"Adobe Firefly","slug":"adobe-firefly"},{"name":"Canva AI","slug":"canva"}]},
    {"step":3,"goal":"Property Video Production","tools":[{"name":"InVideo AI","slug":"invideo-ai"},{"name":"HeyGen","slug":"heygen"}]},
    {"step":4,"goal":"Email & Social Marketing Automation","tools":[{"name":"Instantly.ai","slug":"instantly-ai"},{"name":"n8n","slug":"n8n"}]}
  ]'::jsonb,
  ARRAY['ai-ecommerce-product-descriptions','ai-social-media-content-repurposing']
);

-- ⑥ AI Email Newsletter Automation Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-newsletter-automation',
  'AI Email Newsletter Automation',
  'Curate, Write, Send — Zero Manual Work',
  'Run a professional newsletter on autopilot — curate trending content with AI, write engaging copy, design eye-catching layouts, and optimize send times for maximum opens.',
  '[
    {"step":1,"goal":"Content Research & Curation","tools":[{"name":"Perplexity AI","slug":"perplexity-ai"},{"name":"ChatGPT","slug":"chatgpt"}]},
    {"step":2,"goal":"Newsletter Copy Writing","tools":[{"name":"Claude AI","slug":"claude-ai"},{"name":"Jasper","slug":"jasper"}]},
    {"step":3,"goal":"Design & Layout","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Adobe Firefly","slug":"adobe-firefly"}]},
    {"step":4,"goal":"Personalization & A/B Testing","tools":[{"name":"Copy.ai","slug":"copy-ai"},{"name":"Grammarly","slug":"grammarly"}]},
    {"step":5,"goal":"Send Automation & Analytics","tools":[{"name":"n8n","slug":"n8n"},{"name":"Activepieces","slug":"activepieces"}]}
  ]'::jsonb,
  ARRAY['ai-seo-blog-content-creation','ai-social-media-content-repurposing','ai-cold-email-outreach']
);

-- ⑦ AI Book Writing & Self-Publishing Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-book-writing-self-publishing',
  'AI Book Writing & Self-Publishing',
  'From Idea to Published Book',
  'Write and publish your own book using AI — research your niche, outline chapters, draft with AI assistance, edit for polish, design your cover, and launch on Amazon KDP.',
  '[
    {"step":1,"goal":"Idea Research & Market Analysis","tools":[{"name":"Perplexity AI","slug":"perplexity-ai"},{"name":"ChatGPT","slug":"chatgpt"}]},
    {"step":2,"goal":"Outline & Structure Design","tools":[{"name":"Claude AI","slug":"claude-ai"},{"name":"Notion AI","slug":"notion-ai"}]},
    {"step":3,"goal":"AI-Assisted Writing & Drafting","tools":[{"name":"Jasper","slug":"jasper"},{"name":"ChatGPT","slug":"chatgpt"}]},
    {"step":4,"goal":"Editing & Proofreading","tools":[{"name":"Grammarly","slug":"grammarly"},{"name":"ProWritingAid","slug":"prowritingaid"}]},
    {"step":5,"goal":"Book Cover Design","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Midjourney","slug":"midjourney"}]}
  ]'::jsonb,
  ARRAY['ai-seo-blog-content-creation','ai-newsletter-automation']
);

-- ⑧ AI Video Ad Creative Production Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-video-ad-creative-production',
  'AI Video Ad Creative Production',
  'Script to Scroll-Stopping Ad',
  'Produce high-converting video ads for Meta, TikTok, and YouTube with AI — from ad script generation to AI avatars, auto-editing, and creative variation testing.',
  '[
    {"step":1,"goal":"Ad Concept & Script Generation","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Jasper","slug":"jasper"}]},
    {"step":2,"goal":"AI Video & Avatar Generation","tools":[{"name":"HeyGen","slug":"heygen"},{"name":"Synthesia","slug":"synthesia"}]},
    {"step":3,"goal":"Video Editing & Auto Captions","tools":[{"name":"Descript","slug":"descript"},{"name":"Opus Clip","slug":"opus-clip"}]},
    {"step":4,"goal":"Thumbnail & Visual Assets","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Adobe Firefly","slug":"adobe-firefly"}]},
    {"step":5,"goal":"Creative Variations & A/B Testing","tools":[{"name":"InVideo AI","slug":"invideo-ai"},{"name":"Copy.ai","slug":"copy-ai"}]}
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation','ai-ecommerce-product-descriptions','ai-social-media-content-repurposing']
);

-- ⑨ AI UGC Ad Creation Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-ugc-ad-creation',
  'AI UGC Ad Creation',
  'Authentic-Looking Ads Without Creators',
  'Create user-generated-content style ads without hiring creators — AI writes the hook, generates avatar spokespeople, edits the video, and produces multiple variations for testing.',
  '[
    {"step":1,"goal":"Product Analysis & Hook Writing","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Claude AI","slug":"claude-ai"}]},
    {"step":2,"goal":"AI Avatar UGC Video Generation","tools":[{"name":"HeyGen","slug":"heygen"},{"name":"Synthesia","slug":"synthesia"}]},
    {"step":3,"goal":"Video Editing & Caption Overlay","tools":[{"name":"Descript","slug":"descript"},{"name":"Canva AI","slug":"canva"}]},
    {"step":4,"goal":"Creative Variation & Scaling","tools":[{"name":"InVideo AI","slug":"invideo-ai"},{"name":"Copy.ai","slug":"copy-ai"}]}
  ]'::jsonb,
  ARRAY['ai-video-ad-creative-production','ai-ecommerce-product-descriptions','ai-social-media-content-repurposing']
);

-- ⑩ AI Landing Page Creation & Optimization Workflow
INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-landing-page-creation',
  'AI Landing Page Creation & Optimization',
  'Copy to Conversion in Hours',
  'Build high-converting landing pages with AI — write persuasive copy, generate hero visuals, design responsive pages, and optimize for maximum conversions with AI-powered testing.',
  '[
    {"step":1,"goal":"Persuasive Copy & Headlines","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Jasper","slug":"jasper"}]},
    {"step":2,"goal":"Hero Image & Visual Generation","tools":[{"name":"Midjourney","slug":"midjourney"},{"name":"Adobe Firefly","slug":"adobe-firefly"}]},
    {"step":3,"goal":"Page Design & Layout","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Beautiful.ai","slug":"beautiful-ai"}]},
    {"step":4,"goal":"SEO & Copy Optimization","tools":[{"name":"Surfer SEO","slug":"surfer-seo"},{"name":"Grammarly","slug":"grammarly"}]},
    {"step":5,"goal":"Analytics & Conversion Tracking","tools":[{"name":"n8n","slug":"n8n"},{"name":"Activepieces","slug":"activepieces"}]}
  ]'::jsonb,
  ARRAY['ai-ecommerce-product-descriptions','ai-seo-blog-content-creation','ai-cold-email-outreach']
);

-- 확인용: 전체 워크플로우 조회
SELECT id, slug, title, is_published, created_at FROM workflows ORDER BY created_at;
