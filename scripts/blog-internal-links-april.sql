-- ============================================================
-- AIToolRadar: Internal Link Enhancement (April 2026)
-- 목적: 상위 트래픽 블로그 3개에 워크플로우 내부 링크 추가
-- 방법: 기존 content_html의 </article> 직전에 CTA 섹션 삽입
-- 실행: Supabase SQL Editor → 전체 복사 → Run
-- ============================================================

-- ① chatgpt-vs-claude-vs-gemini (86 views, 32초 → 워크플로우로 연결)
UPDATE blog_posts
SET content_html = replace(
  content_html,
  '</article>',
  '
<section style="margin-top:3rem; padding:1.5rem; border:1px solid #334155; border-radius:12px; background:#0f172a;">
  <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:0.75rem; color:#f1f5f9;">
    Put These AI Tools Into a Real Workflow
  </h2>
  <p style="color:#94a3b8; margin-bottom:1.25rem; font-size:0.95rem;">
    Knowing which AI to use is step one. The real productivity gain comes from combining them into a repeatable production system. These workflows show you exactly how to chain ChatGPT, Claude, and other tools together — step by step.
  </p>
  <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.75rem;">
    <li>
      <a href="/workflows/ai-youtube-video-creation" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b; transition:border-color 0.2s;">
        <span style="font-size:1.25rem;">🎬</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI YouTube Video Creation Workflow</strong>
          <span style="color:#64748b; font-size:0.875rem;">Script → Voiceover → Editing → Upload. The complete 5-step pipeline using ChatGPT + ElevenLabs + Descript.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-content-calendar-automation" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b; transition:border-color 0.2s;">
        <span style="font-size:1.25rem;">📅</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI Content Calendar Automation</strong>
          <span style="color:#64748b; font-size:0.875rem;">Plan a full month of content in under 30 minutes using Claude + Perplexity + n8n.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-faceless-youtube-channel-automation" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b; transition:border-color 0.2s;">
        <span style="font-size:1.25rem;">🤖</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI Faceless YouTube Channel Automation</strong>
          <span style="color:#64748b; font-size:0.875rem;">Build a profitable YouTube channel without ever appearing on camera. Full AI-powered pipeline.</span>
        </span>
      </a>
    </li>
  </ul>
  <p style="margin-top:1.25rem; text-align:center;">
    <a href="/workflows" style="color:#6366f1; font-size:0.9rem; text-decoration:none; font-weight:600;">
      View all 28 AI workflows →
    </a>
  </p>
</section>

</article>'
)
WHERE slug = 'chatgpt-vs-claude-vs-gemini';

-- ② ai-video-editing-tools-compared-2026 (31 views, 34초 → 영상 제작 워크플로우로 연결)
UPDATE blog_posts
SET content_html = replace(
  content_html,
  '</article>',
  '
<section style="margin-top:3rem; padding:1.5rem; border:1px solid #334155; border-radius:12px; background:#0f172a;">
  <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:0.75rem; color:#f1f5f9;">
    See These Editors in Action — Real Production Workflows
  </h2>
  <p style="color:#94a3b8; margin-bottom:1.25rem; font-size:0.95rem;">
    Choosing the right editor is just the start. These step-by-step workflows show you exactly how to use Descript, CapCut, and other tools together in a complete video production pipeline.
  </p>
  <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.75rem;">
    <li>
      <a href="/workflows/ai-youtube-video-creation" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">🎬</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI YouTube Video Creation Workflow</strong>
          <span style="color:#64748b; font-size:0.875rem;">How to combine ElevenLabs voiceover + Descript editing + Surfer SEO into one repeatable pipeline.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-youtube-shorts-creation" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">⚡</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI YouTube Shorts Creation Workflow</strong>
          <span style="color:#64748b; font-size:0.875rem;">Script → AI voice → CapCut editing → viral captions. The full Shorts production pipeline.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-short-form-to-long-form-repurposing" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">🔄</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI Short-Form to Long-Form Repurposing</strong>
          <span style="color:#64748b; font-size:0.875rem;">Turn your best-performing Shorts into full-length YouTube videos with AI research and expansion.</span>
        </span>
      </a>
    </li>
  </ul>
  <p style="margin-top:1.25rem; text-align:center;">
    <a href="/workflows" style="color:#6366f1; font-size:0.9rem; text-decoration:none; font-weight:600;">
      View all 28 AI workflows →
    </a>
  </p>
</section>

</article>'
)
WHERE slug = 'ai-video-editing-tools-compared-2026';

-- ③ best-ai-tools-for-youtubers-2026 (8 views, 1초 → 유튜버 특화 워크플로우로 연결)
UPDATE blog_posts
SET content_html = replace(
  content_html,
  '</article>',
  '
<section style="margin-top:3rem; padding:1.5rem; border:1px solid #334155; border-radius:12px; background:#0f172a;">
  <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:0.75rem; color:#f1f5f9;">
    Ready to Put These Tools to Work?
  </h2>
  <p style="color:#94a3b8; margin-bottom:1.25rem; font-size:0.95rem;">
    The tools above are most powerful when used as part of a structured workflow. These guides show you exactly how to combine them — with real prompts, step-by-step instructions, and pro tips from creators who have tested each pipeline.
  </p>
  <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.75rem;">
    <li>
      <a href="/workflows/ai-youtube-monetization-strategy" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">💰</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI YouTube Monetization Strategy</strong>
          <span style="color:#64748b; font-size:0.875rem;">Go beyond AdSense. Build affiliate income, digital products, and memberships using AI tools.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-youtube-channel-growth-audit" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">📊</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI YouTube Channel Growth Audit</strong>
          <span style="color:#64748b; font-size:0.875rem;">Diagnose exactly why your channel is not growing and generate a 90-day fix plan with AI.</span>
        </span>
      </a>
    </li>
    <li>
      <a href="/workflows/ai-brand-sponsorship-pitch" style="display:flex; align-items:flex-start; gap:0.75rem; text-decoration:none; padding:1rem; background:#1e293b; border-radius:8px; border:1px solid #1e293b;">
        <span style="font-size:1.25rem;">🤝</span>
        <span>
          <strong style="color:#f1f5f9; display:block; margin-bottom:0.2rem;">AI Brand Sponsorship Pitch</strong>
          <span style="color:#64748b; font-size:0.875rem;">Land brand deals by building a media kit and pitch deck that looks like a professional agency created it.</span>
        </span>
      </a>
    </li>
  </ul>
  <p style="margin-top:1.25rem; text-align:center;">
    <a href="/workflows" style="color:#6366f1; font-size:0.9rem; text-decoration:none; font-weight:600;">
      View all 28 AI workflows →
    </a>
  </p>
</section>

</article>'
)
WHERE slug = 'best-ai-tools-for-youtubers-2026';

-- ============================================================
-- 검증: 3개 블로그의 content_html 길이 확인 (링크 추가 후 길어져야 함)
-- ============================================================
SELECT slug, length(content_html) as content_length
FROM blog_posts
WHERE slug IN (
  'chatgpt-vs-claude-vs-gemini',
  'ai-video-editing-tools-compared-2026',
  'best-ai-tools-for-youtubers-2026'
)
ORDER BY slug;
