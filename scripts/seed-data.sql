-- AIToolRadar Seed Data: 10 AI Tools + Categories
-- Run this in Supabase SQL Editor AFTER schema.sql

-- Categories
INSERT INTO categories (id, name, slug, description, meta_description) VALUES
  ('c1000000-0000-0000-0000-000000000001', 'AI Writing Tools', 'ai-writing-tools', 'AI-powered writing assistants for content creation, copywriting, and editing.', 'Compare the best AI writing tools of 2026. Reviews, pricing, and feature comparisons for Jasper, Copy.ai, Writesonic, and more.'),
  ('c1000000-0000-0000-0000-000000000002', 'AI Image Generators', 'ai-image-generators', 'Create stunning images, art, and designs using artificial intelligence.', 'Find the best AI image generators of 2026. Compare Midjourney, DALL-E, Stable Diffusion, and more with pricing and reviews.'),
  ('c1000000-0000-0000-0000-000000000003', 'AI Coding Assistants', 'ai-coding-assistants', 'AI tools that help developers write, debug, and optimize code faster.', 'Compare the best AI coding assistants of 2026. GitHub Copilot, Cursor, Cody, and more reviewed with pricing data.'),
  ('c1000000-0000-0000-0000-000000000004', 'AI Video Tools', 'ai-video-tools', 'Create, edit, and enhance videos with AI-powered tools.', 'Best AI video tools of 2026. Compare Pictory, Synthesia, Runway, and other AI video generators with pricing.'),
  ('c1000000-0000-0000-0000-000000000005', 'AI Automation', 'ai-automation', 'Automate workflows and business processes with AI-powered platforms.', 'Compare the best AI automation tools of 2026. Zapier, Make, n8n reviewed with pricing and integration comparisons.')
ON CONFLICT DO NOTHING;

-- AI Writing Tools
INSERT INTO ai_tools (name, slug, logo_url, website_url, short_description, long_description, category_id, pricing_model, starting_price, has_free_trial, affiliate_url, affiliate_program, commission_type, commission_rate, features, pros, cons, rating, monthly_visits, founded_year, meta_description, content_html) VALUES
(
  'Jasper',
  'jasper',
  'https://logo.clearbit.com/jasper.ai',
  'https://jasper.ai',
  'AI writing assistant for marketing teams. Generate blog posts, ads, emails, and social media content at scale.',
  NULL,
  'c1000000-0000-0000-0000-000000000001',
  'paid',
  49,
  true,
  'https://jasper.ai?via=aitoolradar',
  'direct',
  'recurring',
  '30% recurring',
  '{"blog_posts": true, "ad_copy": true, "email": true, "social_media": true, "seo_mode": true, "brand_voice": true, "templates": true, "api_access": true}',
  ARRAY['Excellent for marketing content', 'Brand voice customization', '50+ content templates', 'Team collaboration features', 'SEO optimization mode'],
  ARRAY['Higher price than competitors', 'Learning curve for beginners', 'Output can be generic without customization'],
  8.5,
  5200000,
  2021,
  'Jasper AI review for 2026. Pricing starts at $49/mo. Best for marketing teams needing AI-powered content creation with brand voice control.',
  '<h2>What is Jasper?</h2><p>Jasper (formerly Jarvis) is one of the most popular AI writing tools, specifically designed for marketing teams and content creators. It uses advanced language models to generate blog posts, ad copy, emails, social media content, and more.</p><h2>Key Features</h2><p>Jasper stands out with its Brand Voice feature, which learns your company''s tone and style to produce on-brand content consistently. The platform offers 50+ templates for different content types, an SEO mode for optimized blog posts, and team collaboration tools.</p><h2>Who Is Jasper Best For?</h2><p>Jasper is ideal for marketing teams and agencies that need to produce large volumes of content while maintaining brand consistency. It''s particularly strong for ad copy, blog posts, and email marketing.</p>'
),
(
  'Copy.ai',
  'copy-ai',
  'https://logo.clearbit.com/copy.ai',
  'https://copy.ai',
  'AI-powered copywriting tool for sales and marketing. Generate workflows, emails, and GTM content automatically.',
  NULL,
  'c1000000-0000-0000-0000-000000000001',
  'freemium',
  49,
  true,
  'https://copy.ai?via=aitoolradar',
  'direct',
  'recurring',
  '45% recurring',
  '{"blog_posts": true, "ad_copy": true, "email": true, "social_media": true, "workflows": true, "crm_integration": true, "templates": true, "api_access": true}',
  ARRAY['Generous free plan available', 'Excellent workflow automation', '45% recurring affiliate commission', 'CRM and sales tool integrations', 'Easy to use interface'],
  ARRAY['Free plan has word limits', 'Less customization than Jasper', 'Workflow features require paid plan'],
  8.2,
  3800000,
  2020,
  'Copy.ai review for 2026. Free plan available, paid from $49/mo. AI copywriting with workflow automation for sales and marketing teams.',
  '<h2>What is Copy.ai?</h2><p>Copy.ai is an AI copywriting platform that has evolved from a simple text generator into a comprehensive go-to-market content platform. It combines AI writing with workflow automation to help sales and marketing teams scale their content operations.</p><h2>Key Features</h2><p>The standout feature is Copy.ai''s Workflows, which automate entire content creation processes. It integrates with popular CRM and sales tools, making it easy to generate personalized outreach at scale.</p><h2>Who Is Copy.ai Best For?</h2><p>Copy.ai is best for sales teams and small businesses that want AI writing with a generous free tier. Its workflow automation makes it particularly valuable for outbound sales content.</p>'
),
(
  'Writesonic',
  'writesonic',
  'https://logo.clearbit.com/writesonic.com',
  'https://writesonic.com',
  'AI writing platform with built-in SEO tools, fact-checking, and multi-language support for content marketers.',
  NULL,
  'c1000000-0000-0000-0000-000000000001',
  'freemium',
  19,
  true,
  'https://writesonic.com?via=aitoolradar',
  'direct',
  'recurring',
  '30% recurring',
  '{"blog_posts": true, "ad_copy": true, "email": true, "social_media": true, "seo_mode": true, "fact_checking": true, "multilingual": true, "api_access": true}',
  ARRAY['Very affordable starting price', 'Built-in fact-checking', 'Supports 25+ languages', 'SEO optimization included', 'Chatsonic AI chatbot'],
  ARRAY['Free plan is very limited', 'Quality varies by language', 'UI can feel cluttered'],
  7.8,
  2900000,
  2021,
  'Writesonic review 2026. From $19/mo with free plan. AI writing with SEO tools, fact-checking, and 25+ language support.',
  '<h2>What is Writesonic?</h2><p>Writesonic is an AI writing platform that combines content generation with SEO optimization and fact-checking capabilities. It supports over 25 languages and offers Chatsonic, an AI chatbot alternative.</p><h2>Key Features</h2><p>Writesonic''s key differentiator is its built-in fact-checking system that verifies AI-generated claims against real sources. Combined with SEO tools and multilingual support, it''s a comprehensive content platform.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- AI Image Generators
INSERT INTO ai_tools (name, slug, logo_url, website_url, short_description, long_description, category_id, pricing_model, starting_price, has_free_trial, affiliate_url, affiliate_program, commission_type, commission_rate, features, pros, cons, rating, monthly_visits, founded_year, meta_description, content_html) VALUES
(
  'Midjourney',
  'midjourney',
  'https://logo.clearbit.com/midjourney.com',
  'https://midjourney.com',
  'Leading AI image generator known for stunning artistic quality. Create photorealistic and artistic images from text prompts.',
  NULL,
  'c1000000-0000-0000-0000-000000000002',
  'paid',
  10,
  false,
  NULL,
  NULL,
  NULL,
  NULL,
  '{"text_to_image": true, "image_editing": true, "upscaling": true, "variations": true, "style_transfer": true, "batch_generation": true}',
  ARRAY['Highest quality artistic output', 'Excellent for creative projects', 'Active community for inspiration', 'Very affordable entry price', 'Consistent style quality'],
  ARRAY['No free plan', 'Discord-based interface (web beta)', 'Learning prompt engineering takes time', 'Commercial licensing unclear for some plans'],
  9.2,
  15000000,
  2022,
  'Midjourney review 2026. Starting at $10/mo. The leading AI image generator for stunning artistic and photorealistic images.',
  '<h2>What is Midjourney?</h2><p>Midjourney is widely considered the gold standard for AI image generation. Known for its exceptional artistic quality and unique aesthetic, it produces some of the most visually stunning AI-generated images available.</p>'
),
(
  'DALL-E 3',
  'dall-e',
  'https://logo.clearbit.com/openai.com',
  'https://openai.com/dall-e-3',
  'OpenAI''s AI image generator integrated with ChatGPT. Generate and edit images with natural language instructions.',
  NULL,
  'c1000000-0000-0000-0000-000000000002',
  'freemium',
  20,
  true,
  NULL,
  NULL,
  NULL,
  NULL,
  '{"text_to_image": true, "image_editing": true, "chatgpt_integration": true, "natural_language": true, "api_access": true}',
  ARRAY['Integrated with ChatGPT', 'Best text rendering in images', 'Natural language editing', 'API available for developers', 'Free tier through ChatGPT'],
  ARRAY['Less artistic than Midjourney', 'Content restrictions are strict', 'Slower generation speed', 'Limited style control'],
  8.0,
  50000000,
  2023,
  'DALL-E 3 review 2026. Free via ChatGPT, API from $20/mo. OpenAI''s image generator with the best text rendering and ChatGPT integration.',
  '<h2>What is DALL-E 3?</h2><p>DALL-E 3 is OpenAI''s latest image generation model, deeply integrated with ChatGPT. It excels at understanding complex prompts and is the best AI model for rendering text within images accurately.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- AI Coding Assistants
INSERT INTO ai_tools (name, slug, logo_url, website_url, short_description, long_description, category_id, pricing_model, starting_price, has_free_trial, affiliate_url, affiliate_program, commission_type, commission_rate, features, pros, cons, rating, monthly_visits, founded_year, meta_description, content_html) VALUES
(
  'GitHub Copilot',
  'github-copilot',
  'https://logo.clearbit.com/github.com',
  'https://github.com/features/copilot',
  'AI pair programmer by GitHub. Autocomplete code, generate functions, and write tests directly in your IDE.',
  NULL,
  'c1000000-0000-0000-0000-000000000003',
  'paid',
  10,
  true,
  'https://github.com/features/copilot',
  NULL,
  NULL,
  NULL,
  '{"code_completion": true, "multi_language": true, "ide_integration": true, "chat": true, "test_generation": true, "documentation": true}',
  ARRAY['Best IDE integration', 'Supports all major languages', 'Excellent code completion', 'Chat mode for explanations', 'Free for students and open source'],
  ARRAY['Requires GitHub account', 'Privacy concerns with code', 'Can suggest incorrect patterns', 'Limited to code tasks'],
  8.8,
  20000000,
  2021,
  'GitHub Copilot review 2026. $10/mo. The most popular AI coding assistant with deep IDE integration and multi-language support.',
  '<h2>What is GitHub Copilot?</h2><p>GitHub Copilot is the most widely adopted AI coding assistant, powered by OpenAI''s models. It integrates directly into VS Code, JetBrains, and other IDEs to provide real-time code suggestions, completions, and even entire functions.</p>'
),
(
  'Cursor',
  'cursor',
  'https://logo.clearbit.com/cursor.com',
  'https://cursor.com',
  'AI-first code editor built for speed. Edit code with natural language, generate entire features, and debug with AI assistance.',
  NULL,
  'c1000000-0000-0000-0000-000000000003',
  'freemium',
  20,
  true,
  'https://cursor.com?via=aitoolradar',
  'direct',
  'one-time',
  '$100/referral',
  '{"code_completion": true, "multi_language": true, "natural_language_editing": true, "chat": true, "codebase_understanding": true, "multi_file_editing": true}',
  ARRAY['Full codebase understanding', 'Natural language code editing', 'Multi-file editing support', 'Built-in terminal and chat', 'VS Code compatible extensions'],
  ARRAY['Higher price than Copilot', 'Separate editor (not a plugin)', 'Can be resource-intensive', 'Newer with smaller community'],
  9.0,
  8000000,
  2023,
  'Cursor review 2026. Free plan available, Pro from $20/mo. AI-first code editor with codebase understanding and natural language editing.',
  '<h2>What is Cursor?</h2><p>Cursor is an AI-first code editor that goes beyond autocomplete. It understands your entire codebase, lets you edit code with natural language instructions, and can generate entire features across multiple files simultaneously.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- AI Video Tools
INSERT INTO ai_tools (name, slug, logo_url, website_url, short_description, long_description, category_id, pricing_model, starting_price, has_free_trial, affiliate_url, affiliate_program, commission_type, commission_rate, features, pros, cons, rating, monthly_visits, founded_year, meta_description, content_html) VALUES
(
  'Pictory',
  'pictory',
  'https://logo.clearbit.com/pictory.ai',
  'https://pictory.ai',
  'Turn blog posts and scripts into engaging videos automatically. AI-powered video creation for content marketers.',
  NULL,
  'c1000000-0000-0000-0000-000000000004',
  'paid',
  23,
  true,
  'https://pictory.ai?via=aitoolradar',
  'direct',
  'one-time',
  '$100/sale',
  '{"text_to_video": true, "blog_to_video": true, "auto_captions": true, "stock_footage": true, "branding": true, "templates": true}',
  ARRAY['Easy blog-to-video conversion', 'Large stock footage library', 'Automatic captions and subtitles', 'Brand kit customization', 'No video editing skills needed'],
  ARRAY['Limited creative control', 'Stock footage can feel generic', 'Longer videos need manual editing', 'No AI avatar feature'],
  7.5,
  1200000,
  2020,
  'Pictory review 2026. From $23/mo with free trial. Turn blog posts into videos with AI. Best for content marketers and social media.',
  '<h2>What is Pictory?</h2><p>Pictory is an AI video creation platform that specializes in turning written content into engaging videos. It''s designed for content marketers who want to repurpose blog posts, articles, and scripts into video format without any editing skills.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- AI Automation
INSERT INTO ai_tools (name, slug, logo_url, website_url, short_description, long_description, category_id, pricing_model, starting_price, has_free_trial, affiliate_url, affiliate_program, commission_type, commission_rate, features, pros, cons, rating, monthly_visits, founded_year, meta_description, content_html) VALUES
(
  'Zapier',
  'zapier',
  'https://logo.clearbit.com/zapier.com',
  'https://zapier.com',
  'Connect 7,000+ apps and automate workflows without coding. The most popular automation platform for businesses.',
  NULL,
  'c1000000-0000-0000-0000-000000000005',
  'freemium',
  29.99,
  true,
  'https://zapier.com?via=aitoolradar',
  'direct',
  'recurring',
  '20% recurring',
  '{"app_integrations": true, "no_code": true, "multi_step": true, "filters": true, "ai_actions": true, "tables": true, "interfaces": true}',
  ARRAY['7,000+ app integrations', 'No coding required', 'AI-powered actions', 'Reliable and battle-tested', 'Excellent documentation'],
  ARRAY['Gets expensive at scale', 'Complex workflows can be slow', 'Limited free plan (100 tasks/mo)', 'Some integrations lack depth'],
  8.7,
  12000000,
  2011,
  'Zapier review 2026. Free plan available, paid from $29.99/mo. Automate workflows across 7,000+ apps with no coding.',
  '<h2>What is Zapier?</h2><p>Zapier is the world''s most popular workflow automation platform. It connects over 7,000 apps and services, allowing businesses to automate repetitive tasks without writing any code. From simple two-step automations to complex multi-step workflows, Zapier handles it all.</p>'
),
(
  'Make',
  'make',
  'https://logo.clearbit.com/make.com',
  'https://make.com',
  'Visual automation platform for complex workflows. More powerful and affordable alternative to Zapier for advanced users.',
  NULL,
  'c1000000-0000-0000-0000-000000000005',
  'freemium',
  10.59,
  true,
  'https://make.com?via=aitoolradar',
  'direct',
  'recurring',
  '20% recurring',
  '{"app_integrations": true, "no_code": true, "visual_builder": true, "branching": true, "error_handling": true, "api_calls": true, "data_transformation": true}',
  ARRAY['Much cheaper than Zapier', 'Visual workflow builder', 'Advanced branching and logic', 'Better error handling', '1,000+ integrations'],
  ARRAY['Steeper learning curve', 'Fewer integrations than Zapier', 'Documentation could be better', 'Can be overwhelming for beginners'],
  8.4,
  6500000,
  2016,
  'Make (formerly Integromat) review 2026. Free plan available, from $10.59/mo. Visual automation platform with advanced workflow capabilities.',
  '<h2>What is Make?</h2><p>Make (formerly Integromat) is a visual automation platform that allows users to build complex workflows with a drag-and-drop interface. It''s known for being significantly more affordable than Zapier while offering more advanced features like branching, error handling, and data transformation.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- Pricing Plans (중복 방지: 해당 tool의 같은 plan_name이 없을 때만 삽입)
INSERT INTO pricing_plans (tool_id, plan_name, monthly_price, annual_price, features, limits)
SELECT t.id, v.plan_name, v.monthly_price, v.annual_price, v.features, v.limits
FROM (VALUES
  -- Jasper
  ('jasper', 'Creator', 49::DECIMAL, 468::DECIMAL, ARRAY['1 Brand Voice', '1 user', 'SEO mode', 'Browser extension', '50+ templates'], '{"words_per_month": "unlimited"}'::JSONB),
  ('jasper', 'Pro', 69::DECIMAL, 660::DECIMAL, ARRAY['3 Brand Voices', '5 users', 'Everything in Creator', 'Collaboration tools', 'Analytics'], '{"words_per_month": "unlimited"}'::JSONB),
  ('jasper', 'Business', NULL, NULL, ARRAY['Unlimited Brand Voices', 'Unlimited users', 'API access', 'Custom AI models', 'SSO', 'Dedicated support'], '{"words_per_month": "unlimited"}'::JSONB),
  -- Copy.ai
  ('copy-ai', 'Free', 0::DECIMAL, 0::DECIMAL, ARRAY['1 user', '2,000 words/month', 'Chat interface', 'Basic templates'], '{"words_per_month": 2000}'::JSONB),
  ('copy-ai', 'Starter', 49::DECIMAL, 432::DECIMAL, ARRAY['1 user', 'Unlimited words', 'All templates', 'Priority support'], '{"words_per_month": "unlimited"}'::JSONB),
  ('copy-ai', 'Advanced', 249::DECIMAL, 2388::DECIMAL, ARRAY['5 users', 'Workflows', 'CRM integration', 'API access', 'Custom templates'], '{"words_per_month": "unlimited"}'::JSONB),
  -- Zapier
  ('zapier', 'Free', 0::DECIMAL, 0::DECIMAL, ARRAY['100 tasks/month', '5 Zaps', '15-min update time', 'Single-step Zaps'], '{"tasks_per_month": 100}'::JSONB),
  ('zapier', 'Starter', 29.99::DECIMAL, 239.88::DECIMAL, ARRAY['750 tasks/month', '20 Zaps', '15-min update', 'Multi-step Zaps', 'Filters'], '{"tasks_per_month": 750}'::JSONB),
  ('zapier', 'Professional', 73.50::DECIMAL, 588::DECIMAL, ARRAY['2,000 tasks/month', 'Unlimited Zaps', '2-min update', 'Auto replay', 'Custom logic'], '{"tasks_per_month": 2000}'::JSONB),
  -- GitHub Copilot
  ('github-copilot', 'Individual', 10::DECIMAL, 100::DECIMAL, ARRAY['Code completion', 'Chat', 'CLI assistance', 'Multi-IDE support'], '{}'::JSONB),
  ('github-copilot', 'Business', 19::DECIMAL, 228::DECIMAL, ARRAY['Everything in Individual', 'Organization management', 'Policy controls', 'Audit logs'], '{}'::JSONB),
  ('github-copilot', 'Enterprise', 39::DECIMAL, 468::DECIMAL, ARRAY['Everything in Business', 'Custom models', 'Knowledge bases', 'Advanced security'], '{}'::JSONB),
  -- Cursor
  ('cursor', 'Hobby', 0::DECIMAL, 0::DECIMAL, ARRAY['2,000 completions/month', '50 slow premium requests', 'Basic chat'], '{"completions_per_month": 2000}'::JSONB),
  ('cursor', 'Pro', 20::DECIMAL, 192::DECIMAL, ARRAY['Unlimited completions', '500 fast premium requests', 'Unlimited slow requests'], '{"fast_requests": 500}'::JSONB),
  ('cursor', 'Business', 40::DECIMAL, 384::DECIMAL, ARRAY['Everything in Pro', 'Admin dashboard', 'SAML SSO', 'Usage analytics'], '{"fast_requests": 500}'::JSONB)
) AS v(slug, plan_name, monthly_price, annual_price, features, limits)
JOIN ai_tools t ON t.slug = v.slug
WHERE NOT EXISTS (
  SELECT 1 FROM pricing_plans pp
  WHERE pp.tool_id = t.id AND pp.plan_name = v.plan_name
);
