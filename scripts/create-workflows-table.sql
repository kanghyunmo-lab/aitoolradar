-- ============================================================
-- AIToolRadar: workflows 테이블 생성 + 초기 데이터 5개 INSERT
-- 실행 방법: Supabase SQL Editor에 전체 복사 붙여넣기 → Run
-- ============================================================

-- 1. 테이블 생성
CREATE TABLE workflows (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug          TEXT UNIQUE NOT NULL,
  title         TEXT NOT NULL,
  tagline       TEXT,
  description   TEXT,
  steps         JSONB NOT NULL,
  related_slugs TEXT[],
  is_published  BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- 2. 초기 데이터 5개 INSERT

INSERT INTO workflows (slug, title, tagline, description, steps, related_slugs) VALUES
(
  'ai-youtube-video-creation',
  'AI YouTube Video Creation',
  'Script to Upload Pipeline',
  'Create a complete YouTube video using AI — from keyword research and scripting to AI avatars, auto-captions, and short clips. No camera or studio required.',
  '[
    {"step":1,"goal":"Keyword Research & Script Writing","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Frase","slug":"frase"}]},
    {"step":2,"goal":"AI Voiceover Generation","tools":[{"name":"ElevenLabs","slug":"elevenlabs"}]},
    {"step":3,"goal":"AI Avatar Video Generation","tools":[{"name":"Synthesia","slug":"synthesia"},{"name":"HeyGen","slug":"heygen"}]},
    {"step":4,"goal":"Video Editing & Auto Captions","tools":[{"name":"Descript","slug":"descript"}]},
    {"step":5,"goal":"Short Clips & SEO Optimization","tools":[{"name":"Opus Clip","slug":"opus-clip"},{"name":"Surfer SEO","slug":"surfer-seo"}]}
  ]'::jsonb,
  ARRAY['ai-podcast-production-workflow','ai-social-media-content-repurposing','ai-online-course-creation']
),
(
  'ai-podcast-production-workflow',
  'AI Podcast Production',
  'From Script to Publish',
  'Produce a professional podcast episode end-to-end with AI — scripting, voice synthesis, background music, noise removal, and short-form promo clips.',
  '[
    {"step":1,"goal":"Episode Research & Script Writing","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Claude AI","slug":"claude-ai"}]},
    {"step":2,"goal":"AI Voiceover & Narration","tools":[{"name":"ElevenLabs","slug":"elevenlabs"},{"name":"Murf AI","slug":"murf-ai"}]},
    {"step":3,"goal":"Background Music Generation","tools":[{"name":"Suno AI","slug":"suno-ai"},{"name":"Beatoven AI","slug":"beatoven-ai"}]},
    {"step":4,"goal":"Audio Editing & Noise Removal","tools":[{"name":"Descript","slug":"descript"}]},
    {"step":5,"goal":"Short Clips & Social Promotion","tools":[{"name":"Opus Clip","slug":"opus-clip"},{"name":"Canva AI","slug":"canva"}]}
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation','ai-social-media-content-repurposing','ai-online-course-creation']
),
(
  'ai-online-course-creation',
  'AI Online Course Creation',
  'From Idea to Launch',
  'Build and launch a complete online course with AI — curriculum design, auto-generated slides, AI avatar lectures, voiceover, and promotional videos.',
  '[
    {"step":1,"goal":"Curriculum Design & Script Writing","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Claude AI","slug":"claude-ai"}]},
    {"step":2,"goal":"Auto-Generate Lecture Slides","tools":[{"name":"Gamma","slug":"gamma"},{"name":"Beautiful.ai","slug":"beautiful-ai"}]},
    {"step":3,"goal":"AI Avatar Lecture Videos","tools":[{"name":"Synthesia","slug":"synthesia"},{"name":"HeyGen","slug":"heygen"}]},
    {"step":4,"goal":"Voiceover & Audio Editing","tools":[{"name":"ElevenLabs","slug":"elevenlabs"},{"name":"Descript","slug":"descript"}]},
    {"step":5,"goal":"Promo Video & Thumbnail","tools":[{"name":"Canva AI","slug":"canva"},{"name":"InVideo AI","slug":"invideo-ai"}]}
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation','ai-podcast-production-workflow','ai-seo-blog-content-creation']
),
(
  'ai-seo-blog-content-creation',
  'AI SEO Blog Content Creation',
  'Research to Publish',
  'Write search-optimized blog posts from scratch using AI — keyword research, outline, first draft, SEO scoring, grammar check, and cover image generation.',
  '[
    {"step":1,"goal":"Keyword Research & Competitor Analysis","tools":[{"name":"Semrush","slug":"semrush"},{"name":"Frase","slug":"frase"}]},
    {"step":2,"goal":"Outline & First Draft","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Writesonic","slug":"writesonic"}]},
    {"step":3,"goal":"SEO Score Optimization","tools":[{"name":"Surfer SEO","slug":"surfer-seo"}]},
    {"step":4,"goal":"Grammar & Readability Check","tools":[{"name":"Grammarly","slug":"grammarly"}]},
    {"step":5,"goal":"Cover Image Generation","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Adobe Firefly","slug":"adobe-firefly"}]}
  ]'::jsonb,
  ARRAY['ai-social-media-content-repurposing','ai-online-course-creation','ai-youtube-video-creation']
),
(
  'ai-social-media-content-repurposing',
  'AI Social Media Content Repurposing',
  'One Piece of Content → Every Platform',
  'Turn a single blog post or video into social captions, carousels, short-form clips, and scheduled posts across every platform — all with AI.',
  '[
    {"step":1,"goal":"Extract Script from Blog or Video","tools":[{"name":"ChatGPT","slug":"chatgpt"},{"name":"Descript","slug":"descript"}]},
    {"step":2,"goal":"Auto-Generate Captions & Hashtags","tools":[{"name":"Claude AI","slug":"claude-ai"},{"name":"Copy.ai","slug":"copy-ai"}]},
    {"step":3,"goal":"Image & Carousel Design","tools":[{"name":"Canva AI","slug":"canva"},{"name":"Adobe Firefly","slug":"adobe-firefly"}]},
    {"step":4,"goal":"Short-Form Video Clips","tools":[{"name":"Opus Clip","slug":"opus-clip"},{"name":"InVideo AI","slug":"invideo-ai"}]},
    {"step":5,"goal":"Schedule & Auto-Publish","tools":[{"name":"n8n","slug":"n8n"}]}
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation','ai-podcast-production-workflow','ai-seo-blog-content-creation']
);

-- 확인용: 데이터가 잘 들어갔는지 조회
SELECT id, slug, title, is_published, created_at FROM workflows ORDER BY created_at;
