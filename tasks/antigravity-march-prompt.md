# Antigravity 3월 콘텐츠 확장 프롬프트

> 이 프롬프트를 Antigravity에게 전달하세요.
> 결과물: SQL 파일 4개 (주별 1개씩)

---

## 프롬프트 시작

---

당신은 AIToolRadar (https://aitoolradar.net)의 콘텐츠 전문가입니다.
3월 한 달간 **워크플로우 9개 + 블로그 8개**를 작성해야 합니다.

# 배경

AIToolRadar는 **콘텐츠 크리에이터(유튜버)**를 위한 AI 자동화 워크플로우 가이드 사이트입니다.
- 현재 도구 177개, 비교 페이지 1,526개, 워크플로우 16개, 블로그 10개
- 타겟: 유튜버, 콘텐츠 크리에이터
- 핵심 전략: "how to automate [task] with AI" 형태의 검색어 점령

# 최종 산출물

**4개의 SQL 파일**을 작성해주세요:

```
march-week1.sql  →  워크플로우 2개 + 블로그 2개
march-week2.sql  →  워크플로우 3개 + 블로그 2개
march-week3.sql  →  워크플로우 2개 + 블로그 2개
march-week4.sql  →  워크플로우 2개 + 블로그 2개
```

# 스팸 방지 규칙 (반드시 준수)

- 워크플로우: 월 10개 이하 (우리는 9개)
- 블로그: 주 2개 이하 (월 8개)
- 모든 콘텐츠는 **고유한 구조**를 가져야 합니다 (동일 패턴 반복 금지)
- `published_at` 날짜를 주별로 분산 배치하세요

---

# PART 1: 워크플로우 9개

## 기존 16개 (중복 금지)

이미 존재하는 워크플로우 slug 목록입니다. **절대 중복하지 마세요:**

```
ai-youtube-video-creation
ai-podcast-production-workflow
ai-online-course-creation
ai-seo-blog-content-creation
ai-social-media-content-repurposing
ai-ecommerce-product-descriptions
ai-cold-email-outreach
ai-sales-deck-presentation
ai-music-production-content-creators
ai-real-estate-listing-marketing
ai-newsletter-automation
ai-book-writing-self-publishing
ai-video-ad-creative-production
ai-ugc-ad-creation
ai-landing-page-creation
ai-faceless-tiktok-automation
```

## 신규 워크플로우 9개 주제 (확정)

| # | slug | title | 타겟 검색어 |
|---|------|-------|------------|
| 1 | `ai-youtube-shorts-creation` | AI YouTube Shorts Creation | how to make youtube shorts with ai |
| 2 | `ai-thumbnail-ab-testing` | AI YouTube Thumbnail A/B Testing | ai youtube thumbnail generator |
| 3 | `ai-video-translation-dubbing` | AI Video Translation & Dubbing | ai video translation tool |
| 4 | `ai-podcast-to-blog-repurposing` | AI Podcast-to-Blog Repurposing | convert podcast to blog post ai |
| 5 | `ai-instagram-reels-automation` | AI Instagram Reels Automation | ai instagram reels generator |
| 6 | `ai-webinar-creation-promotion` | AI Webinar Creation & Promotion | automate webinar with ai |
| 7 | `ai-youtube-script-seo-optimization` | AI YouTube Script & SEO Optimization | ai youtube script generator |
| 8 | `ai-brand-kit-design-automation` | AI Brand Kit & Design Automation | ai brand kit generator |
| 9 | `ai-affiliate-content-creation` | AI Affiliate Content Creation | ai affiliate marketing content |

## 워크플로우 SQL 형식 (정확히 이 형식을 따르세요)

```sql
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'slug-here',
  'Title Here',
  'Short tagline (1 sentence)',
  true,
  'Description 2-3 sentences. What this workflow does and who it is for.',
  '[
    {
      "step": 1,
      "goal": "Step Title",
      "description": "HTML description here",
      "tools": [{"name": "Tool Name", "slug": "tool-slug"}, {"name": "Tool2", "slug": "tool2-slug"}]
    }
  ]'::jsonb,
  ARRAY['related-slug-1', 'related-slug-2', 'related-slug-3']
);
```

## 워크플로우 콘텐츠 품질 규칙

### description 필드 (각 step 안의 description)

각 step의 description은 **반드시 아래 3가지 요소**를 포함해야 합니다:

1. **구체적인 사용법** — 어떤 도구를 열고, 어디를 클릭하고, 무엇을 입력하는지
2. **실제 프롬프트 예시** — `<em>''프롬프트 내용''</em>` 형식으로
3. **💡 Pro tip** — 실무에서 바로 써먹을 수 있는 팁

### description HTML 형식 예시

```html
Use <strong>ChatGPT</strong> to generate 5 viral hook scripts. Prompt: <em>''Write 5 scroll-stopping 30-second YouTube Shorts scripts about [topic] with a question hook.''</em><br><br>💡 <strong>Pro tip:</strong> Shorts scripts need the hook in the first 2 seconds. Start with a bold question or shocking stat.
```

### 중요 규칙
- HTML 태그 사용: `<strong>`, `<em>`, `<br>`, `<ul>`, `<li>` 허용
- SQL 안에서 작은따옴표(')는 반드시 **두 번**(`''`)으로 이스케이프
- 각 워크플로우는 **3~5 step** (동일 step 수 반복 금지 — 어떤 것은 3개, 어떤 것은 4개, 어떤 것은 5개)
- step별 description은 **최소 50단어 이상**
- 각 step의 tools에 사용하는 도구의 slug는 **반드시** 아래 목록에서 선택

### 사용 가능한 도구 slug 목록 (DB에 존재하는 도구만 사용)

```
chatgpt, claude-ai, gemini, perplexity-ai, frase, semrush, ahrefs,
surfer-seo, jasper, writesonic, copy-ai, rytr, anyword, grammarly,
prowritingaid, elevenlabs, murf-ai, descript, synthesia, heygen,
opus-clip, invideo-ai, canva, midjourney, adobe-firefly, stable-diffusion,
leonardo-ai, gamma, tome, beautiful-ai, notion-ai, n8n, activepieces,
make, zapier, suno-ai, udio, beatoven-ai, soundraw, aiva, lalal-ai,
capcut, pictory, fliki, lumen5, runway-ml, pika, kling-ai
```

> ⚠️ 이 목록에 없는 도구는 사용하지 마세요. slug가 틀리면 사이트에서 링크가 깨집니다.

### related_slugs 규칙
- 기존 16개 + 신규 9개 워크플로우 중에서 **내용이 관련된 3개**를 선택
- 예: `ai-youtube-shorts-creation`의 related_slugs → `ARRAY['ai-youtube-video-creation', 'ai-faceless-tiktok-automation', 'ai-instagram-reels-automation']`

---

# PART 2: 블로그 8개

## 기존 10개 (중복 금지)

```
jasper-vs-copyai-vs-writesonic
free-ai-tools-for-startups-2026
chatgpt-vs-claude-vs-gemini
complete-guide-ai-image-generators
automate-business-with-ai-2026
best-ai-coding-assistants-2026
ai-writing-tools-for-small-business
midjourney-vs-dalle-vs-stable-diffusion
ai-tools-replace-expensive-software
how-to-use-perplexity-ai-research
```

## 신규 블로그 8개 주제 (확정)

| # | slug | title | category | 타겟 검색어 |
|---|------|-------|----------|------------|
| 1 | `how-to-start-faceless-youtube-channel-ai` | How to Start a Faceless YouTube Channel with AI in 2026 | AI Video | faceless youtube channel ai |
| 2 | `best-ai-tools-for-youtubers-2026` | Best AI Tools for YouTubers in 2026: Complete Toolkit | AI Video | best ai tools for youtubers |
| 3 | `ai-video-editing-tools-compared-2026` | AI Video Editing Tools Compared: Descript vs CapCut vs Runway | AI Video | ai video editing tools |
| 4 | `how-to-automate-social-media-with-ai` | How to Automate Social Media Content with AI: Step-by-Step | AI Automation | automate social media ai |
| 5 | `elevenlabs-vs-murf-vs-speechify` | ElevenLabs vs Murf AI vs Speechify: Best AI Voice Generator | AI Audio | best ai voice generator |
| 6 | `ai-thumbnail-design-guide-2026` | AI Thumbnail Design: How to Create Click-Worthy YouTube Thumbnails | AI Design | ai youtube thumbnail |
| 7 | `how-to-repurpose-content-with-ai` | How to Repurpose One Video into 10 Pieces of Content with AI | AI Productivity | repurpose content ai |
| 8 | `ai-seo-tools-for-content-creators` | AI SEO Tools for Content Creators: Rank Your Videos and Blog Posts | AI SEO | ai seo tools content creators |

## 블로그 SQL 형식

```sql
INSERT INTO blog_posts (slug, title, excerpt, meta_description, category, reading_time_minutes, author, is_published, published_at, content_html)
VALUES (
  'slug-here',
  'Title Here',
  'Excerpt 1-2 sentences for the blog listing page.',
  'Meta description for Google search results (max 155 chars).',
  'Category',
  15,
  'AIToolRadar Editorial Team',
  true,
  '2026-03-10T00:00:00Z',
  '<article>
    <p>Opening paragraph...</p>
    <h2>Section Title</h2>
    <p>Content...</p>
    ...
  </article>'
);
```

## 블로그 콘텐츠 품질 규칙

### 1. 구조 (AI 검색 인용 최적화)

```html
<article>
  <p>도입부 (2-3 문단, 독자의 문제를 정의)</p>

  <h2>What Is [Topic]?</h2>
  <p>핵심 정의를 첫 문장에 — AI 검색엔진이 이 문장을 인용합니다</p>

  <h2>질문형 소제목 (How do you...? / What are the best...?)</h2>
  <p>첫 문장에 직접 답변 → 그 후 상세 설명</p>

  <h2>Step-by-Step: How to [Do Something]</h2>
  <ol>
    <li><strong>Step 1: ...</strong> — 설명</li>
    <li><strong>Step 2: ...</strong> — 설명</li>
  </ol>

  <h2>Tool Comparison / Recommendations</h2>
  <table>
    <thead><tr><th>Tool</th><th>Best For</th><th>Price</th></tr></thead>
    <tbody>...</tbody>
  </table>

  <h2>Final Verdict / Conclusion</h2>
  <p>핵심 요약 + CTA</p>
</article>
```

### 2. 필수 요소

- **최소 2,000 단어** (reading_time_minutes = 14~18 사이로 다양하게)
- **내부 링크 5개 이상**: `/ai-tools/[slug]`, `/compare/[a]-vs-[b]`, `/workflows/[slug]`, `/blog/[slug]`
  - 형식: `<a href="/ai-tools/chatgpt">ChatGPT</a>`
  - 비교 링크: `<a href="/compare/jasper-vs-copy-ai">Jasper vs Copy.ai comparison</a>`
  - 워크플로우 링크: `<a href="/workflows/ai-youtube-video-creation">our YouTube video creation workflow</a>`
- **H2 소제목 최소 5개** (질문형 소제목 2개 이상 포함)
- **테이블 또는 리스트 최소 1개**
- **구체적인 프롬프트 예시 최소 2개** (코드 블록 또는 `<em>` 태그로)
- **각 글의 구조를 다르게** — 어떤 글은 비교형, 어떤 글은 튜토리얼형, 어떤 글은 리스트형

### 3. SEO + AI 검색 최적화

- 타겟 키워드를 H1(title), 첫 문단, 하나의 H2에 자연스럽게 포함
- 질문형 H2를 사용 ("How do you automate...?", "What is the best...?")
- 첫 문장에서 핵심 답변을 직접 제시 → AI 검색이 이 문장을 인용
- 경쟁사 사이트(G2, Forbes, PCMag) 언급 금지
- `published_at` 날짜를 주별로 분산 (같은 날 2개 금지)

### 4. 내부 링크 가이드

사용 가능한 도구 페이지 예시:
```
/ai-tools/chatgpt, /ai-tools/claude-ai, /ai-tools/heygen,
/ai-tools/elevenlabs, /ai-tools/descript, /ai-tools/canva,
/ai-tools/midjourney, /ai-tools/jasper, /ai-tools/opus-clip,
/ai-tools/capcut, /ai-tools/runway-ml, /ai-tools/surfer-seo
```

비교 페이지 예시:
```
/compare/chatgpt-vs-claude-ai, /compare/elevenlabs-vs-murf-ai,
/compare/midjourney-vs-stable-diffusion, /compare/descript-vs-capcut,
/compare/jasper-vs-writesonic, /compare/canva-vs-adobe-firefly
```

워크플로우 페이지 예시:
```
/workflows/ai-youtube-video-creation, /workflows/ai-faceless-tiktok-automation,
/workflows/ai-podcast-production-workflow, /workflows/ai-seo-blog-content-creation
```

---

# 주별 배치 계획

## march-week1.sql (3월 1주차)

**워크플로우 2개:**
1. `ai-youtube-shorts-creation` — YouTube Shorts 자동화 (크리에이터 핵심)
2. `ai-thumbnail-ab-testing` — 썸네일 A/B 테스트 (검색량 높음)

**블로그 2개:**
1. `how-to-start-faceless-youtube-channel-ai` — published_at: 2026-03-08
2. `best-ai-tools-for-youtubers-2026` — published_at: 2026-03-10

## march-week2.sql (3월 2주차)

**워크플로우 3개:**
3. `ai-video-translation-dubbing` — 다국어 비디오 번역
4. `ai-podcast-to-blog-repurposing` — 팟캐스트→블로그 변환
5. `ai-instagram-reels-automation` — 인스타 릴스 자동화

**블로그 2개:**
3. `ai-video-editing-tools-compared-2026` — published_at: 2026-03-14
4. `how-to-automate-social-media-with-ai` — published_at: 2026-03-17

## march-week3.sql (3월 3주차)

**워크플로우 2개:**
6. `ai-webinar-creation-promotion` — 웨비나 자동 생성
7. `ai-youtube-script-seo-optimization` — 유튜브 스크립트 SEO

**블로그 2개:**
5. `elevenlabs-vs-murf-vs-speechify` — published_at: 2026-03-21
6. `ai-thumbnail-design-guide-2026` — published_at: 2026-03-24

## march-week4.sql (3월 4주차)

**워크플로우 2개:**
8. `ai-brand-kit-design-automation` — 브랜드 키트 자동화
9. `ai-affiliate-content-creation` — 제휴 마케팅 콘텐츠

**블로그 2개:**
7. `how-to-repurpose-content-with-ai` — published_at: 2026-03-28
8. `ai-seo-tools-for-content-creators` — published_at: 2026-03-31

---

# 체크리스트 (제출 전 확인)

각 SQL 파일 제출 전 아래를 모두 확인하세요:

- [ ] 작은따옴표 이스케이프: `'` → `''` (SQL 안의 모든 텍스트)
- [ ] 도구 slug가 허용 목록에 있는지 확인
- [ ] 워크플로우 step 수가 3~5개이고 각각 다른지 확인
- [ ] 블로그 내부 링크 5개 이상 포함
- [ ] 블로그 최소 2,000 단어
- [ ] published_at 날짜가 같은 날 겹치지 않는지 확인
- [ ] related_slugs가 실제 존재하는 워크플로우 slug인지 확인
- [ ] JSON-LD 추출에 방해되지 않도록 description에서 `<script>` 태그 미사용

---

# 예시 참조

아래는 기존 워크플로우의 실제 SQL 예시입니다. 이 품질 수준을 유지하세요:

```sql
-- 예시: AI Faceless TikTok Automation (3 steps)
INSERT INTO workflows (slug, title, tagline, is_published, description, steps)
VALUES (
  'ai-faceless-tiktok-automation',
  'AI Faceless TikTok Automation',
  'Create a fully automated faceless TikTok channel with AI scripts, voiceovers, and visuals',
  true,
  'Automate a faceless TikTok channel using AI to script, voice, and generate visuals completely hands-off.',
  '[
    {
      "step": 1,
      "goal": "Niche Selection & Scripting",
      "description": "Ask <strong>ChatGPT</strong>: <em>''Write 5 viral 30-sec scripts for a faceless TikTok channel about [niche], focusing on hooks.''</em><br><br>💡 <strong>Pro tip:</strong> Use the free ChatGPT, but format outputs into a table so it''s easy to paste into spreadsheets.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Voiceover Generation",
      "description": "Paste your script into <strong>ElevenLabs</strong> using a mysterious or energetic voice.<br><br>💡 <strong>Pro tip:</strong> The ''Adam'' voice is highly popular for fact-based faceless channels. The free tier gives plenty of characters to test content.",
      "tools": [{"name": "ElevenLabs", "slug": "elevenlabs"}]
    },
    {
      "step": 3,
      "goal": "Visuals & Editing",
      "description": "Use <strong>Canva AI</strong> or <strong>Midjourney</strong> to create engaging background images, and assemble them in <strong>CapCut</strong>. Add auto-captions.<br><br>💡 <strong>Pro tip:</strong> Yellow and white bold captions with a slight shadow keep viewers repeatedly watching.",
      "tools": [{"name": "Canva AI", "slug": "canva"}, {"name": "CapCut", "slug": "capcut"}]
    }
  ]'::jsonb
);
```

---

# 중요 사항

1. **모든 콘텐츠는 영어로 작성**하세요
2. **각 SQL 파일의 맨 위에 주석**으로 파일명과 포함 콘텐츠 목록을 명시하세요
3. **SQL 문법 오류가 없어야** 합니다 — Supabase SQL Editor에서 바로 실행할 수 있어야 합니다
4. 워크플로우의 `created_at`은 자동 생성되므로 별도 지정 불필요
5. 블로그의 `published_at`은 반드시 지정하세요 (위 배치 계획 참조)
6. **한 번에 1개 SQL 파일씩** 제출해주세요 (week1 → week2 → week3 → week4)

## 프롬프트 끝

---
