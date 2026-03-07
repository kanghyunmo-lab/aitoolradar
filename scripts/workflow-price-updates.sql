-- ==========================================
-- workflow-price-updates.sql
-- Add pricing info to all 9 March workflows
-- Injects "<br><strong>Pricing:</strong> ..." before each Pro tip
-- ==========================================

-- 1. ai-youtube-shorts-creation (4 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        steps,
        '{0,description}',
        to_jsonb(replace(steps->0->>'description',
          '💡',
          '<br><strong>Pricing:</strong> Claude AI — Free / $20/mo Pro<br><br>💡'))
      ),
      '{1,description}',
      to_jsonb(replace(steps->1->>'description',
        '💡',
        '<br><strong>Pricing:</strong> ElevenLabs — Free 10K chars / $5/mo Starter / $22/mo Creator<br><br>💡'))
    ),
    '{2,description}',
    to_jsonb(replace(steps->2->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Midjourney — $10/mo Basic / $30/mo Standard<br><br>💡'))
  ),
  '{3,description}',
  to_jsonb(replace(steps->3->>'description',
    '💡',
    '<br><strong>Pricing:</strong> CapCut — Free / $7.99/mo Pro<br><br>💡'))
)
WHERE slug = 'ai-youtube-shorts-creation';

-- 2. ai-thumbnail-ab-testing (3 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      steps,
      '{0,description}',
      to_jsonb(replace(steps->0->>'description',
        '💡',
        '<br><strong>Pricing:</strong> Midjourney — $10/mo Basic / $30/mo Standard<br><br>💡'))
    ),
    '{1,description}',
    to_jsonb(replace(steps->1->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Canva — Free / $13/mo Pro<br><br>💡'))
  ),
  '{2,description}',
  to_jsonb(replace(steps->2->>'description',
    '💡',
    '<br><strong>Pricing:</strong> ChatGPT — Free / $20/mo Plus<br><br>💡'))
)
WHERE slug = 'ai-thumbnail-ab-testing';

-- 3. ai-video-translation-dubbing (4 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        steps,
        '{0,description}',
        to_jsonb(replace(steps->0->>'description',
          '💡',
          '<br><strong>Pricing:</strong> Descript — Free / $24/mo Creator<br><br>💡'))
      ),
      '{1,description}',
      to_jsonb(replace(steps->1->>'description',
        '💡',
        '<br><strong>Pricing:</strong> ChatGPT — Free / $20/mo Plus<br><br>💡'))
    ),
    '{2,description}',
    to_jsonb(replace(steps->2->>'description',
      '💡',
      '<br><strong>Pricing:</strong> ElevenLabs — Free / $5/mo Starter / $22/mo Creator<br><br>💡'))
  ),
  '{3,description}',
  to_jsonb(replace(steps->3->>'description',
    '💡',
    '<br><strong>Pricing:</strong> CapCut — Free / $7.99/mo Pro<br><br>💡'))
)
WHERE slug = 'ai-video-translation-dubbing';

-- 4. ai-podcast-to-blog-repurposing (4 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        steps,
        '{0,description}',
        to_jsonb(replace(steps->0->>'description',
          '💡',
          '<br><strong>Pricing:</strong> Descript — Free / $24/mo Creator<br><br>💡'))
      ),
      '{1,description}',
      to_jsonb(replace(steps->1->>'description',
        '💡',
        '<br><strong>Pricing:</strong> ChatGPT — Free / $20/mo Plus<br><br>💡'))
    ),
    '{2,description}',
    to_jsonb(replace(steps->2->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Surfer SEO — $89/mo Essential<br><br>💡'))
  ),
  '{3,description}',
  to_jsonb(replace(steps->3->>'description',
    '💡',
    '<br><strong>Pricing:</strong> Grammarly — Free / $12/mo Premium<br><br>💡'))
)
WHERE slug = 'ai-podcast-to-blog-repurposing';

-- 5. ai-instagram-reels-automation (5 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        jsonb_set(
          steps,
          '{0,description}',
          to_jsonb(replace(steps->0->>'description',
            '💡',
            '<br><strong>Pricing:</strong> ChatGPT — Free / $20/mo Plus<br><br>💡'))
        ),
        '{1,description}',
        to_jsonb(replace(steps->1->>'description',
          '💡',
          '<br><strong>Pricing:</strong> ElevenLabs — Free 10K chars / $5/mo Starter<br><br>💡'))
      ),
      '{2,description}',
      to_jsonb(replace(steps->2->>'description',
        '💡',
        '<br><strong>Pricing:</strong> Canva — Free / $13/mo Pro<br><br>💡'))
    ),
    '{3,description}',
    to_jsonb(replace(steps->3->>'description',
      '💡',
      '<br><strong>Pricing:</strong> CapCut — Free / $7.99/mo Pro<br><br>💡'))
  ),
  '{4,description}',
  to_jsonb(replace(steps->4->>'description',
    '💡',
    '<br><strong>Pricing:</strong> n8n — Free (self-hosted) / $20/mo Cloud<br><br>💡'))
)
WHERE slug = 'ai-instagram-reels-automation';

-- 6. ai-webinar-creation-promotion (3 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      steps,
      '{0,description}',
      to_jsonb(replace(steps->0->>'description',
        '💡',
        '<br><strong>Pricing:</strong> Gamma — Free / $10/mo Plus<br><br>💡'))
    ),
    '{1,description}',
    to_jsonb(replace(steps->1->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Claude AI — Free / $20/mo Pro<br><br>💡'))
  ),
  '{2,description}',
  to_jsonb(replace(steps->2->>'description',
    '💡',
    '<br><strong>Pricing:</strong> Copy.ai — Free 2K words / $49/mo Pro<br><br>💡'))
)
WHERE slug = 'ai-webinar-creation-promotion';

-- 7. ai-youtube-script-seo-optimization (4 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        steps,
        '{0,description}',
        to_jsonb(replace(steps->0->>'description',
          '💡',
          '<br><strong>Pricing:</strong> Ahrefs — $99/mo Lite<br><br>💡'))
      ),
      '{1,description}',
      to_jsonb(replace(steps->1->>'description',
        '💡',
        '<br><strong>Pricing:</strong> Frase — $15/mo Solo / $115/mo Team<br><br>💡'))
    ),
    '{2,description}',
    to_jsonb(replace(steps->2->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Jasper — $49/mo Creator / $125/mo Pro<br><br>💡'))
  ),
  '{3,description}',
  to_jsonb(replace(steps->3->>'description',
    '💡',
    '<br><strong>Pricing:</strong> Grammarly — Free / $12/mo Premium<br><br>💡'))
)
WHERE slug = 'ai-youtube-script-seo-optimization';

-- 8. ai-brand-kit-design-automation (3 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      steps,
      '{0,description}',
      to_jsonb(replace(steps->0->>'description',
        '💡',
        '<br><strong>Pricing:</strong> ChatGPT — Free / $20/mo Plus<br><br>💡'))
    ),
    '{1,description}',
    to_jsonb(replace(steps->1->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Midjourney — $10/mo Basic / $30/mo Standard<br><br>💡'))
  ),
  '{2,description}',
  to_jsonb(replace(steps->2->>'description',
    '💡',
    '<br><strong>Pricing:</strong> Canva — Free / $13/mo Pro<br><br>💡'))
)
WHERE slug = 'ai-brand-kit-design-automation';

-- 9. ai-affiliate-content-creation (5 steps)
UPDATE workflows
SET steps = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        jsonb_set(
          steps,
          '{0,description}',
          to_jsonb(replace(steps->0->>'description',
            '💡',
            '<br><strong>Pricing:</strong> Semrush — $129/mo Pro<br><br>💡'))
        ),
        '{1,description}',
        to_jsonb(replace(steps->1->>'description',
          '💡',
          '<br><strong>Pricing:</strong> Surfer SEO — $89/mo Essential<br><br>💡'))
      ),
      '{2,description}',
      to_jsonb(replace(steps->2->>'description',
        '💡',
        '<br><strong>Pricing:</strong> Writesonic — Free / $16/mo Pro<br><br>💡'))
    ),
    '{3,description}',
    to_jsonb(replace(steps->3->>'description',
      '💡',
      '<br><strong>Pricing:</strong> Adobe Firefly — Free 25 credits / $4.99/mo Premium<br><br>💡'))
  ),
  '{4,description}',
  to_jsonb(replace(steps->4->>'description',
    '💡',
    '<br><strong>Pricing:</strong> Grammarly — Free / $12/mo Premium<br><br>💡'))
)
WHERE slug = 'ai-affiliate-content-creation';
