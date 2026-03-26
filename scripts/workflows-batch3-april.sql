-- ============================================================
-- AIToolRadar: Workflow Batch 3 (10 new workflows)
-- Target: Content Creators & YouTubers
-- Safe pace: 10/month limit respected
-- Run in: Supabase SQL Editor → paste → Run
-- ============================================================

-- ① AI Faceless YouTube Channel Automation
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-faceless-youtube-channel-automation',
  'AI Faceless YouTube Channel Automation',
  'Build a profitable YouTube channel without ever showing your face.',
  true,
  'A complete, step-by-step workflow for building and scaling a faceless YouTube channel using AI. From niche selection and scriptwriting to AI voiceover, stock footage curation, and automated uploads. Perfect for creators who want passive income without being on camera.',
  '[
    {
      "step": 1,
      "goal": "Niche Selection & Competitor Analysis",
      "description": "Start by identifying a profitable faceless niche using <strong>ChatGPT</strong>.<br><br>Prompt: <em>''Act as a YouTube growth strategist. List 10 profitable faceless YouTube niches in 2026 with low competition and high RPM. For each, estimate monthly search volume and ad revenue potential.''</em><br><br>Then use <strong>Perplexity AI</strong> to research the top 5 channels in your chosen niche. Study their upload frequency, average views, and content style.<br><br>💡 <strong>Pro tip:</strong> Niches like ''AI news explained'', ''historical mysteries'', and ''personal finance animations'' consistently deliver $15+ RPM without requiring a face on camera.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}, {"name": "Perplexity AI", "slug": "perplexity-ai"}]
    },
    {
      "step": 2,
      "goal": "Script Writing & Hook Engineering",
      "description": "Use <strong>Claude AI</strong> to write a retention-optimized script.<br><br>Prompt: <em>''Write a 10-minute YouTube script about [Topic]. Start with a curiosity hook in the first 5 seconds. Use pattern interrupts every 90 seconds. End with a strong call-to-action for subscribing. Format as a two-column table: Visuals | Narration.''</em><br><br>The two-column format is critical for faceless channels because it maps your B-roll and narration timing before you even start editing.<br><br>💡 <strong>Pro tip:</strong> Claude AI excels at long-form, structured content. Ask it to mark ''[PATTERN INTERRUPT]'' timestamps in the script so you know exactly where to switch visuals to maintain viewer retention.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 3,
      "goal": "AI Voiceover Generation",
      "description": "Copy the Narration column from your script and paste it into <strong>ElevenLabs</strong>. Select a voice that matches your niche — deep and authoritative for documentaries, upbeat and energetic for tech content.<br><br>Settings to adjust:<br>- <strong>Stability:</strong> Set to 60-70% for natural variation<br>- <strong>Clarity:</strong> Keep at 75%+ for crisp enunciation<br>- <strong>Model:</strong> Use ''Eleven Multilingual v2'' for the most realistic output<br><br>💡 <strong>Pro tip:</strong> Generate your voiceover in segments (intro, body, outro) rather than one long file. This makes editing significantly easier and allows you to adjust pacing per section. The free tier provides 10,000 characters per month — enough for about 2 videos.",
      "tools": [{"name": "ElevenLabs", "slug": "elevenlabs"}]
    },
    {
      "step": 4,
      "goal": "Visual Assembly & B-Roll Curation",
      "description": "For faceless channels, visuals make or break your retention. Use <strong>InVideo AI</strong> to auto-generate a video from your script — simply paste the text and it creates a full video with matching stock footage, transitions, and text overlays.<br><br>Alternatively, use <strong>Midjourney</strong> to generate custom illustrations for key moments in your video. Prompt: <em>''Cinematic wide shot of [scene description], dramatic lighting, 8K, photorealistic --ar 16:9''</em><br><br>💡 <strong>Pro tip:</strong> Mix stock footage with AI-generated images to create a unique visual style. Channels that blend both get flagged less by YouTube''s duplicate content detection and feel more premium to viewers.",
      "tools": [{"name": "InVideo AI", "slug": "invideo-ai"}, {"name": "Midjourney", "slug": "midjourney"}]
    },
    {
      "step": 5,
      "goal": "Editing, Captions & Upload Optimization",
      "description": "Import everything into <strong>Descript</strong> — voiceover audio, visuals, and background music. Descript''s text-based editor lets you edit video by editing the transcript, making it incredibly fast.<br><br>Add dynamic captions using the Auto-Captions feature. Then use <strong>Surfer SEO</strong> to optimize your video title, description, and tags for YouTube search.<br><br>Prompt for Surfer: Input your target keyword and analyze the top 10 ranking videos. Match their tag structure and description length.<br><br>💡 <strong>Pro tip:</strong> Upload your video as ''Unlisted'' first, add all metadata, then switch to ''Public'' after 30 minutes. This gives YouTube''s algorithm time to fully index your content before pushing it to the recommendation engine.",
      "tools": [{"name": "Descript", "slug": "descript"}, {"name": "Surfer SEO", "slug": "surfer-seo"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation', 'ai-youtube-shorts-creation', 'ai-thumbnail-ab-testing']
);

-- ② AI Content Calendar Automation
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-content-calendar-automation',
  'AI Content Calendar Automation',
  'Plan a month of content in under 30 minutes with AI.',
  true,
  'Stop guessing what to post next. This workflow uses AI to research trending topics, generate a full month of content ideas, schedule them across platforms, and track performance — giving you a clear publishing roadmap every single month.',
  '[
    {
      "step": 1,
      "goal": "Trend Research & Topic Discovery",
      "description": "Start by feeding your niche into <strong>Perplexity AI</strong> to identify what your audience is searching for right now.<br><br>Prompt: <em>''What are the top 20 trending questions and topics in [your niche] this month? Include search volume estimates and content format recommendations (video, blog, short).''</em><br><br>Cross-reference with <strong>Frase</strong> to validate keyword difficulty and discover content gaps your competitors haven''t covered yet.<br><br>💡 <strong>Pro tip:</strong> Focus on questions that start with ''How to'' and ''Why does'' — these generate the highest engagement across both YouTube and blog content because they signal clear viewer intent.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}, {"name": "Frase", "slug": "frase"}]
    },
    {
      "step": 2,
      "goal": "Monthly Content Plan Generation",
      "description": "Take your research results and ask <strong>Claude AI</strong> to build a structured content calendar.<br><br>Prompt: <em>''Based on these trending topics: [paste topics]. Create a 30-day content calendar for a YouTube channel about [niche]. Include: Day, Content Type (long-form/Short/Community Post), Title, Target Keyword, and a 2-sentence content brief. Ensure variety: 8 long-form videos, 12 Shorts, and 10 community posts.''</em><br><br>💡 <strong>Pro tip:</strong> Ask Claude to group related content into ''content clusters'' — a long-form video supported by 2-3 Shorts and a community poll on the same topic. This signals topical authority to YouTube''s algorithm.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 3,
      "goal": "Batch Script & Caption Drafting",
      "description": "With your calendar set, batch-produce scripts using <strong>ChatGPT</strong>. Feed it 5 titles at a time.<br><br>Prompt: <em>''Write 5 YouTube video outlines based on these titles: [titles]. Each outline should have: Hook (first 5 seconds), 3 main sections with key talking points, and a CTA. Keep each outline under 200 words.''</em><br><br>For Shorts, use: <em>''Write 5 YouTube Shorts scripts (60 seconds each) on these topics: [topics]. Start each with a controversial or surprising statement.''</em><br><br>💡 <strong>Pro tip:</strong> Batching scripts in groups of 5 is the sweet spot — large enough for efficiency, small enough that each script still gets unique treatment from the AI.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 4,
      "goal": "Visual Asset Pre-Production",
      "description": "Use <strong>Canva AI</strong> to batch-create thumbnails and social media graphics for the entire month. Create a branded template first, then duplicate and customize for each piece of content.<br><br>For thumbnails: Use bold text (max 4 words), a contrasting background, and an expressive face or dramatic visual. Canva''s ''Magic Design'' can generate variations automatically.<br><br>💡 <strong>Pro tip:</strong> Create 3 thumbnail variations per video upfront. When a video underperforms after 48 hours, immediately swap the thumbnail — this is the single highest-leverage action for improving CTR on existing content.",
      "tools": [{"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 5,
      "goal": "Scheduling & Cross-Platform Distribution",
      "description": "Set up automated publishing workflows using <strong>n8n</strong>. Connect your YouTube account, social media profiles, and email newsletter in a single automation chain.<br><br>Workflow example:<br>1. YouTube video goes live → trigger<br>2. Auto-post announcement to X/Twitter with video link<br>3. Generate a blog summary and publish to your website<br>4. Send an email digest to your subscriber list<br><br>💡 <strong>Pro tip:</strong> n8n is self-hostable and free for personal use. Set up a ''content waterfall'' automation where each piece of long-form content automatically triggers the creation of derivative content across all your platforms.",
      "tools": [{"name": "n8n", "slug": "n8n"}]
    }
  ]'::jsonb,
  ARRAY['ai-seo-blog-content-creation', 'ai-social-media-content-repurposing', 'ai-youtube-video-creation']
);

-- ③ AI YouTube Channel Growth Audit
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-youtube-channel-growth-audit',
  'AI YouTube Channel Growth Audit',
  'Diagnose why your channel is not growing and fix it with AI.',
  true,
  'Use AI to perform a comprehensive audit of your YouTube channel — analyze your best and worst performing content, identify keyword gaps, benchmark against competitors, and generate a data-driven growth plan. Perfect for creators stuck in a growth plateau.',
  '[
    {
      "step": 1,
      "goal": "Performance Data Export & Analysis",
      "description": "Export your YouTube Analytics data (last 90 days) from YouTube Studio as a CSV. Then paste the key metrics into <strong>ChatGPT</strong>.<br><br>Prompt: <em>''Analyze this YouTube channel data: [paste top 20 videos with views, CTR, avg view duration, and impressions]. Identify: (1) my 3 best-performing content patterns, (2) my 3 worst-performing patterns, (3) the optimal video length for my audience, (4) which days and times get the most engagement.''</em><br><br>💡 <strong>Pro tip:</strong> Focus on ''Average View Duration'' over raw view counts. A video with 1,000 views and 70% retention is far more valuable to the algorithm than a video with 10,000 views and 20% retention.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Competitor Benchmarking",
      "description": "Use <strong>Perplexity AI</strong> to research your top 5 competitors — channels in your niche with 2-10x your subscriber count.<br><br>Prompt: <em>''Research these YouTube channels: [channel names]. For each, tell me: their most viewed video, their average upload frequency, their primary content format, and what makes their thumbnails effective. Then compare their strategy to mine and suggest 3 actionable differences I should adopt.''</em><br><br>💡 <strong>Pro tip:</strong> Pay special attention to competitor videos that went viral. Analyze the title structure, thumbnail style, and first 30 seconds — these three elements determine 90% of a video''s success on YouTube.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}]
    },
    {
      "step": 3,
      "goal": "Keyword Gap Analysis",
      "description": "Use <strong>Semrush</strong> or <strong>Frase</strong> to identify high-volume keywords in your niche that you haven''t covered yet.<br><br>In Semrush: Go to Keyword Magic Tool → enter your main topic → filter by ''Questions'' → sort by volume. Export the top 50 keywords with search volume above 500.<br><br>In Frase: Create a new document with your target keyword and let it pull the top-ranking content. Look for subtopics that appear in competitor content but are missing from your channel.<br><br>💡 <strong>Pro tip:</strong> The most valuable YouTube keywords often have low Google search volume but high ''video intent''. Look for keywords where YouTube videos already rank on Google''s first page — this means Google considers video the best format for that query.",
      "tools": [{"name": "Semrush", "slug": "semrush"}, {"name": "Frase", "slug": "frase"}]
    },
    {
      "step": 4,
      "goal": "Thumbnail & Title Optimization Review",
      "description": "Export screenshots of your last 20 thumbnails and compile them in <strong>Canva AI</strong>. View them all at once in a grid to spot patterns.<br><br>Then ask <strong>Claude AI</strong> to audit your titles:<br>Prompt: <em>''Here are my last 20 YouTube video titles: [paste titles]. Rate each from 1-10 on curiosity, clarity, and click-worthiness. Then rewrite the bottom 5 titles to be more compelling while keeping the same topic.''</em><br><br>💡 <strong>Pro tip:</strong> If your impressions are high but CTR is below 4%, the problem is almost always thumbnails and titles — not your content quality. This is the fastest lever to pull for immediate growth.",
      "tools": [{"name": "Canva AI", "slug": "canva"}, {"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 5,
      "goal": "90-Day Growth Action Plan",
      "description": "Compile all your findings and ask <strong>ChatGPT</strong> to generate a prioritized growth plan.<br><br>Prompt: <em>''Based on this audit data: [paste summary of steps 1-4 findings]. Create a 90-day YouTube growth action plan. Break it into 3 monthly phases. Each phase should have: specific video topics to create, thumbnail style changes, upload schedule adjustments, and one experimental strategy to test. Format as a detailed table.''</em><br><br>💡 <strong>Pro tip:</strong> Commit to the plan for a full 90 days before re-auditing. Algorithm changes take 4-6 weeks to respond to strategic shifts, so evaluating results too early leads to premature pivots that reset your momentum.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation', 'ai-thumbnail-ab-testing', 'ai-youtube-script-seo-optimization']
);

-- ④ AI Documentary-Style YouTube Production
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-documentary-youtube-production',
  'AI Documentary-Style YouTube Production',
  'Research, narrate, and produce cinema-quality documentaries with AI.',
  true,
  'Create compelling, research-heavy documentary videos for YouTube using AI — from deep-dive research and fact-checking to cinematic narration, custom visuals, and professional post-production. Ideal for educational channels, true crime, history, and science content.',
  '[
    {
      "step": 1,
      "goal": "Deep Research & Story Structure",
      "description": "Documentary content lives or dies on the quality of its research. Use <strong>Perplexity AI</strong> for initial fact-gathering with cited sources.<br><br>Prompt: <em>''Research [topic] comprehensively. Provide: a chronological timeline of key events, 5 surprising facts most people don''t know, 3 expert quotes with attribution, and any controversies or debates. Cite all sources.''</em><br><br>Then use <strong>Claude AI</strong> to structure the story:<br>Prompt: <em>''Using this research: [paste findings]. Create a 15-minute documentary script structure with: a cold open hook, 3-act narrative arc, rising tension, a climax revelation, and a reflective conclusion. Mark where B-roll, interviews, and data visualizations should appear.''</em><br><br>💡 <strong>Pro tip:</strong> Perplexity AI provides citations for every claim, which is critical for documentary credibility. Always verify at least the 3 most important facts using the original sources it cites.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}, {"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 2,
      "goal": "Cinematic Narration Recording",
      "description": "Documentary narration requires gravitas and pacing that feels different from typical YouTube voiceover. Use <strong>ElevenLabs</strong> with specific settings.<br><br>Recommended voice: Choose a deep, authoritative voice model. For settings:<br>- Stability: 75% (more consistent, authoritative tone)<br>- Similarity: 80%<br>- Style exaggeration: 30% (subtle emotional variation)<br><br>Record in segments matching your 3-act structure. Pause slightly between acts to allow for music transitions in post-production.<br><br>💡 <strong>Pro tip:</strong> For maximum authenticity, record yourself reading key emotional moments and use ElevenLabs'' voice cloning to generate the rest in your voice. This hybrid approach sounds far more genuine than 100% AI narration.",
      "tools": [{"name": "ElevenLabs", "slug": "elevenlabs"}]
    },
    {
      "step": 3,
      "goal": "Custom Visual & Image Generation",
      "description": "Documentaries require unique visuals that match the narrative tone. Use <strong>Midjourney</strong> for dramatic scene recreation and <strong>Adobe Firefly</strong> for subtle edits.<br><br>Midjourney prompts for documentary style:<br>- Historical recreation: <em>''[Scene description], documentary photography style, muted color grading, grain texture, 16:9 aspect ratio --ar 16:9 --style raw''</em><br>- Data visualization: <em>''Infographic showing [data point], clean modern design, dark background, glowing accents --ar 16:9''</em><br><br>Use Adobe Firefly''s Generative Fill to extend backgrounds, remove modern objects from historical scenes, or create seamless panoramic shots.<br><br>💡 <strong>Pro tip:</strong> Maintain visual consistency by including ''--sref [style reference URL]'' in all Midjourney prompts. This locks the color palette and visual tone across all generated images, giving your documentary a cohesive cinematic look.",
      "tools": [{"name": "Midjourney", "slug": "midjourney"}, {"name": "Adobe Firefly", "slug": "adobe-firefly"}]
    },
    {
      "step": 4,
      "goal": "Background Score & Sound Design",
      "description": "The right music transforms a video essay into a documentary experience. Use <strong>Suno AI</strong> to generate original scores.<br><br>Prompt: <em>''Cinematic ambient score for a documentary about [topic]. Start soft and contemplative, build tension in the middle, reach an emotional crescendo, then resolve to a reflective ending. No vocals. 5 minutes.''</em><br><br>Generate 3 variations and pick the one that best matches your narrative pacing. Use <strong>Descript</strong> to layer the score under your narration and adjust volume levels automatically with the ''Studio Sound'' feature.<br><br>💡 <strong>Pro tip:</strong> Layer two Suno tracks at different volumes — a main melodic track at 30% volume and an ambient drone at 10% volume. This creates depth that single-track scoring cannot achieve.",
      "tools": [{"name": "Suno AI", "slug": "suno-ai"}, {"name": "Descript", "slug": "descript"}]
    },
    {
      "step": 5,
      "goal": "Post-Production & SEO Optimization",
      "description": "Assemble everything in <strong>Descript</strong>: narration audio, background score, AI-generated visuals, and any screen recordings or data animations. Use text-based editing to fine-tune pacing — delete filler words, tighten transitions, and add dynamic captions for accessibility.<br><br>Before uploading, use <strong>Surfer SEO</strong> to optimize your video metadata:<br>- Analyze the top 10 YouTube results for your target keyword<br>- Match their description length and tag structure<br>- Include timestamps (chapters) in your description to boost search visibility<br><br>💡 <strong>Pro tip:</strong> Documentary content has the highest average watch time on YouTube, which the algorithm heavily rewards. Add chapters to your video so viewers can navigate sections — this also creates rich snippets in Google search results, driving additional organic traffic to your video.",
      "tools": [{"name": "Descript", "slug": "descript"}, {"name": "Surfer SEO", "slug": "surfer-seo"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation', 'ai-music-production-content-creators', 'ai-faceless-youtube-channel-automation']
);

-- ⑤ AI Product Review YouTube Channel
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-product-review-youtube-channel',
  'AI Product Review YouTube Channel',
  'Turn product reviews into a revenue-generating content machine.',
  true,
  'Build a profitable product review YouTube channel powered by AI. From researching trending products and writing structured review scripts to generating comparison graphics, voiceovers, and affiliate-optimized descriptions. Designed to maximize both viewer trust and affiliate revenue.',
  '[
    {
      "step": 1,
      "goal": "Product Research & Trend Spotting",
      "description": "Use <strong>Perplexity AI</strong> to identify products with high search demand and active buyer intent.<br><br>Prompt: <em>''What are the top 10 most searched [product category] in 2026? For each, provide: approximate monthly search volume, average price, and whether the market is growing or declining. Focus on products where consumers actively compare options before purchasing.''</em><br><br>Cross-reference with <strong>Semrush</strong> by searching ''[product] review'' keywords. Look for keywords with 1,000+ monthly searches and keyword difficulty under 40.<br><br>💡 <strong>Pro tip:</strong> Prioritize products in the $50-500 price range. They generate the highest affiliate commissions while still having massive search volume. Ultra-cheap products have low commissions, and ultra-expensive products have low conversion rates.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}, {"name": "Semrush", "slug": "semrush"}]
    },
    {
      "step": 2,
      "goal": "Review Script Writing",
      "description": "Write a structured, trust-building review script using <strong>Claude AI</strong>.<br><br>Prompt: <em>''Write a 10-minute YouTube review script for [Product]. Structure it as: (1) 10-second hook with the verdict teaser, (2) Who this product is for, (3) Top 3 pros with real-world examples, (4) Top 2 cons honestly, (5) Comparison with the top competitor, (6) Final verdict with a clear recommendation. Use conversational, first-person tone. Include specific prompts for when to show product close-ups and screen recordings.''</em><br><br>💡 <strong>Pro tip:</strong> Always include genuine cons in your review. Channels that only say positive things lose viewer trust and get lower engagement. YouTube''s algorithm rewards honest, balanced reviews with higher suggested video placement.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 3,
      "goal": "Comparison Graphics & Visual Assets",
      "description": "Use <strong>Canva AI</strong> to create professional comparison charts, spec tables, and pros/cons graphics that appear on screen during your review.<br><br>Essential visual assets for every review:<br>- Product spec comparison table (your product vs. top competitor)<br>- Pros/Cons split-screen graphic<br>- Star rating visual (your personal rating out of 5)<br>- ''Who should buy this?'' decision flowchart<br><br>Use Canva''s ''Magic Design'' to maintain brand consistency across all review videos.<br><br>💡 <strong>Pro tip:</strong> Create a reusable Canva template for each asset type. Change only the product-specific data for each new review. This cuts visual production time from 2 hours to 15 minutes per video.",
      "tools": [{"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 4,
      "goal": "Voiceover & Video Assembly",
      "description": "Generate the voiceover using <strong>ElevenLabs</strong>. For review content, select a voice that sounds knowledgeable but approachable — not overly formal.<br><br>Import the voiceover, comparison graphics, and any product footage into <strong>Descript</strong>. Use text-based editing to tighten the pacing. Add auto-captions and insert B-roll at natural transition points.<br><br>💡 <strong>Pro tip:</strong> For faceless review channels, use picture-in-picture with your comparison graphics filling the main screen and product footage in a smaller overlay. This keeps the video visually dynamic without requiring you to be on camera.",
      "tools": [{"name": "ElevenLabs", "slug": "elevenlabs"}, {"name": "Descript", "slug": "descript"}]
    },
    {
      "step": 5,
      "goal": "Affiliate-Optimized Upload & SEO",
      "description": "Use <strong>Surfer SEO</strong> to craft your video title, description, and tags. Target keywords like ''[Product] review 2026'', ''[Product] vs [Competitor]'', and ''Is [Product] worth it?''.<br><br>In your description, place affiliate links with clear disclosure. Structure: ''Links mentioned in this video:'' followed by product links with proper affiliate tags. Add chapters, a pinned comment with the top recommendation, and end screens linking to related reviews.<br><br>💡 <strong>Pro tip:</strong> Pin a comment that says ''My #1 pick from this review is [Product] — here''s why: [1 sentence]. Link below.'' Pinned comments with affiliate links get 3-5x more clicks than links buried in the description because viewers see them immediately.",
      "tools": [{"name": "Surfer SEO", "slug": "surfer-seo"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-video-creation', 'ai-affiliate-content-creation', 'ai-thumbnail-ab-testing']
);

-- ⑥ AI Brand Sponsorship Pitch
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-brand-sponsorship-pitch',
  'AI Brand Sponsorship Pitch',
  'Land brand deals by pitching like a professional agency.',
  true,
  'Use AI to research potential sponsors, craft personalized pitch emails, build a professional media kit, and create compelling case studies. This workflow helps small creators land their first brand deals and helps established creators command higher rates.',
  '[
    {
      "step": 1,
      "goal": "Brand & Sponsor Research",
      "description": "Use <strong>Perplexity AI</strong> to identify brands that actively sponsor creators in your niche.<br><br>Prompt: <em>''List 20 brands that actively sponsor YouTube creators in the [your niche] space. For each, include: their typical sponsorship format (dedicated video, integration, mention), estimated budget tier (small/medium/large), and the contact method (influencer platform, email, agency).''</em><br><br>Then use <strong>ChatGPT</strong> to research each brand''s recent marketing campaigns to personalize your outreach.<br><br>💡 <strong>Pro tip:</strong> Target brands that already sponsor creators with 50-70% of your subscriber count. They''ve validated creator marketing in your niche and have allocated budget, but they''re not yet working with channels your size — making them the most receptive to your pitch.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}, {"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Media Kit & Channel Analytics Package",
      "description": "Build a professional media kit using <strong>Canva AI</strong>. A media kit is your channel''s resume — it should instantly communicate your value to a potential sponsor.<br><br>Include these pages:<br>1. <strong>Cover page:</strong> Channel name, tagline, profile photo<br>2. <strong>Audience demographics:</strong> Age, gender, location, interests<br>3. <strong>Key metrics:</strong> Subscribers, monthly views, average engagement rate, CPM<br>4. <strong>Content examples:</strong> Screenshots of your 3 best-performing videos<br>5. <strong>Sponsorship packages:</strong> Dedicated video, integration, Shorts mention (with pricing)<br>6. <strong>Testimonials:</strong> Previous brand partner quotes (if any)<br><br>Use Canva''s ''Magic Design'' and input ''YouTube influencer media kit'' to generate a polished starting template.<br><br>💡 <strong>Pro tip:</strong> Include a ''Cost Per View'' metric in your media kit. Calculate it as (your rate / average views per video). Brands think in CPV, so presenting this number upfront removes the biggest objection from negotiations.",
      "tools": [{"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 3,
      "goal": "Personalized Pitch Email Writing",
      "description": "Use <strong>Claude AI</strong> to write personalized pitch emails for each brand.<br><br>Prompt: <em>''Write a sponsorship pitch email from a YouTube creator ([your niche], [subscriber count]) to [Brand Name]. The email should: (1) open with a specific observation about their recent campaign, (2) explain why my audience is a perfect fit, (3) propose a specific content idea featuring their product, (4) include a soft CTA. Keep it under 150 words. Tone: professional but genuine, not salesy.''</em><br><br>💡 <strong>Pro tip:</strong> The most successful pitch emails propose a specific content idea rather than asking ''Would you like to work together?'' Brands want to see that you''ve thought about how their product fits your content, not just that you want their money.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 4,
      "goal": "Portfolio & Case Study Creation",
      "description": "Use <strong>Gamma</strong> to create a visual portfolio presentation showcasing your past work and projected results for the brand.<br><br>Prompt Gamma: <em>''Create a presentation about a YouTube sponsorship proposal for [Brand]. Include slides for: channel overview, audience fit analysis, proposed content concept, expected deliverables, and projected reach.''</em><br><br>If you have past sponsorship data, use <strong>ChatGPT</strong> to transform it into a compelling case study:<br>Prompt: <em>''Turn these metrics into a case study: [sponsor name], [video views], [click-through rate], [conversion data]. Frame it as a success story with a clear narrative arc: challenge, solution, results.''</em><br><br>💡 <strong>Pro tip:</strong> Even if you''ve never had a brand deal, create a ''simulated case study'' based on an organic video that featured a product. Show the views, engagement, and comments mentioning the product as proof of your influence.",
      "tools": [{"name": "Gamma", "slug": "gamma"}, {"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 5,
      "goal": "Outreach Automation & Follow-Up",
      "description": "Send your pitches using <strong>Instantly.ai</strong> for automated email warmup and follow-up sequences.<br><br>Set up a 3-touch sequence:<br>1. <strong>Day 0:</strong> Initial pitch email with media kit PDF attached<br>2. <strong>Day 5:</strong> Follow-up with a specific content idea and a link to your best-performing video<br>3. <strong>Day 12:</strong> Final gentle nudge with a time-limited offer (''I have an opening in my April content calendar'')<br><br>💡 <strong>Pro tip:</strong> Send pitches on Tuesday or Wednesday mornings between 9-11am in the brand''s timezone. Marketing managers review partnership emails early in the week. Avoid Mondays (inbox overload) and Fridays (weekend mode).",
      "tools": [{"name": "Instantly.ai", "slug": "instantly-ai"}]
    }
  ]'::jsonb,
  ARRAY['ai-cold-email-outreach', 'ai-sales-deck-presentation', 'ai-youtube-channel-growth-audit']
);

-- ⑦ AI YouTube Monetization Strategy
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-youtube-monetization-strategy',
  'AI YouTube Monetization Strategy',
  'Go beyond AdSense and build multiple revenue streams with AI.',
  true,
  'Most YouTubers rely solely on ad revenue. This workflow uses AI to analyze your channel, identify untapped monetization opportunities, create digital products, set up affiliate partnerships, and build a diversified income strategy that compounds over time.',
  '[
    {
      "step": 1,
      "goal": "Revenue Audit & Opportunity Mapping",
      "description": "Start by analyzing your current revenue structure and identifying gaps. Paste your channel data into <strong>ChatGPT</strong>.<br><br>Prompt: <em>''My YouTube channel has [X subscribers], [Y monthly views], and earns $[Z] from AdSense in the [niche] space. Analyze my monetization and suggest 5 additional revenue streams ranked by: (1) effort to set up, (2) potential monthly income, (3) alignment with my content. Include specific examples of creators in my niche who use each method successfully.''</em><br><br>💡 <strong>Pro tip:</strong> AdSense typically represents only 20-30% of a well-monetized channel''s income. The remaining 70-80% comes from affiliates, digital products, memberships, and sponsorships. If AdSense is your only income, you''re leaving significant money on the table.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Digital Product Creation",
      "description": "Use <strong>Claude AI</strong> to design and outline a digital product that your audience would pay for — templates, guides, presets, or mini-courses.<br><br>Prompt: <em>''Based on my YouTube channel about [niche] with [X subscribers], suggest 3 digital products I could sell. For each: (1) product name, (2) what it includes, (3) pricing strategy, (4) a 500-word sales page outline. Focus on products that solve a specific pain point my viewers express in comments.''</em><br><br>Then use <strong>Gamma</strong> to create the actual product — slide decks, guides, and course content can be generated directly from your outline.<br><br>💡 <strong>Pro tip:</strong> Your first digital product should be priced between $9-29. Low enough to minimize purchase hesitation, but high enough to generate meaningful revenue. Even at $19 with 50 sales per month from a 10K subscriber channel, that''s $950/month — likely more than your AdSense.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}, {"name": "Gamma", "slug": "gamma"}]
    },
    {
      "step": 3,
      "goal": "Affiliate Program Selection & Integration",
      "description": "Use <strong>Perplexity AI</strong> to research the highest-paying affiliate programs relevant to your niche.<br><br>Prompt: <em>''List the top 15 affiliate programs for [niche] YouTube creators. For each, include: commission rate, cookie duration, average order value, and whether they accept small creators. Sort by estimated earnings per referral.''</em><br><br>Focus on programs with:<br>- Recurring commissions (SaaS products pay monthly)<br>- 30+ day cookie windows<br>- Products you genuinely recommend<br><br>💡 <strong>Pro tip:</strong> Recurring commission programs are the holy grail of affiliate income. A single referral to a SaaS tool like a video editor or SEO platform can pay you $10-50 every month for as long as the user stays subscribed. 100 active referrals at $20/month = $2,000 passive monthly income.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}]
    },
    {
      "step": 4,
      "goal": "Membership & Community Setup",
      "description": "Use <strong>ChatGPT</strong> to design a membership tier structure for YouTube Memberships or Patreon.<br><br>Prompt: <em>''Design a 3-tier YouTube membership program for a [niche] channel with [X subscribers]. For each tier: name, monthly price, exclusive perks, and estimated conversion rate. The perks should feel valuable but not require more than 2 extra hours of my time per week.''</em><br><br>Use <strong>Canva AI</strong> to design membership badges, exclusive thumbnails, and promotional graphics for your community tab.<br><br>💡 <strong>Pro tip:</strong> The most successful membership perk is ''early access to videos'' because it costs you zero extra effort. Simply upload videos as member-only 48 hours before public release. This one perk alone can justify a $4.99/month tier for engaged viewers.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}, {"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 5,
      "goal": "Revenue Tracking & Optimization",
      "description": "Set up automated revenue tracking using <strong>n8n</strong>. Connect your AdSense, affiliate dashboards, and payment platforms into a single monitoring workflow.<br><br>Automation example:<br>1. Weekly trigger (every Monday 9am)<br>2. Pull AdSense revenue via API<br>3. Pull affiliate dashboard data<br>4. Calculate total weekly revenue<br>5. Send yourself a summary email with week-over-week comparison<br><br>Use <strong>Notion AI</strong> to maintain a revenue dashboard where you log monthly income by stream and track growth trends.<br><br>💡 <strong>Pro tip:</strong> Review your revenue breakdown monthly and double down on the highest-performing stream. Most creators spread themselves thin across 5 revenue sources. The 80/20 rule applies: focus 80% of your monetization effort on the 1-2 streams generating the most income.",
      "tools": [{"name": "n8n", "slug": "n8n"}, {"name": "Notion AI", "slug": "notion-ai"}]
    }
  ]'::jsonb,
  ARRAY['ai-affiliate-content-creation', 'ai-youtube-channel-growth-audit', 'ai-brand-sponsorship-pitch']
);

-- ⑧ AI Short-Form to Long-Form Content Repurposing
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-short-form-to-long-form-repurposing',
  'AI Short-Form to Long-Form Content Repurposing',
  'Turn your viral Shorts into full-length YouTube videos.',
  true,
  'Your best-performing YouTube Shorts are goldmines of proven content ideas. This workflow uses AI to identify your most viral short-form content, expand it into full-length videos, and maximize the SEO value of topics your audience has already validated with views and engagement.',
  '[
    {
      "step": 1,
      "goal": "Viral Short Identification & Analysis",
      "description": "Export your YouTube Shorts analytics and paste the top performers into <strong>ChatGPT</strong>.<br><br>Prompt: <em>''Here are my top 20 YouTube Shorts by views: [paste titles, views, likes, comments]. Analyze patterns: (1) which topics resonated most, (2) which hooks got the highest retention, (3) which Shorts have the most comments asking for deeper coverage. Rank the top 5 candidates for expansion into 10-minute long-form videos.''</em><br><br>💡 <strong>Pro tip:</strong> Comments that say ''Can you make a full video on this?'' or ''I need more details'' are gold. These viewers are explicitly telling you they would watch a long-form version. This eliminates the biggest risk in content creation — guessing what your audience wants.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Content Expansion & Deep-Dive Scripting",
      "description": "Take your top-performing Short and expand it using <strong>Claude AI</strong>.<br><br>Prompt: <em>''My YouTube Short about [topic] got [X views]. The script was: [paste Short script]. Expand this into a 10-minute YouTube video script that: (1) opens with the same proven hook, (2) adds 5 detailed sections with examples, data, and expert insights, (3) includes 3 pattern interrupts, (4) ends with a call-to-action referencing the original Short. Use the two-column format: Visuals | Narration.''</em><br><br>💡 <strong>Pro tip:</strong> Keep the first 15 seconds of your long-form video almost identical to the original Short''s hook. Viewers who saw the Short will experience instant recognition (''Oh, this is the expanded version!''), and new viewers get a proven hook that already demonstrated high retention.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 3,
      "goal": "Supplementary Research & Fact Enhancement",
      "description": "Your Short was surface-level by design. The long-form version needs depth. Use <strong>Perplexity AI</strong> to research supporting data.<br><br>Prompt: <em>''Research [topic from the Short] in depth. Provide: 5 statistics from reputable sources, 3 case studies or real-world examples, 2 expert opinions, and 1 counterargument to address. Everything must have citations.''</em><br><br>Integrate this research into your script to transform a 60-second opinion into a 10-minute evidence-based analysis.<br><br>💡 <strong>Pro tip:</strong> Mention in the long-form video that it was inspired by viewer demand: ''My Short about [topic] blew up, and hundreds of you asked for a deep dive — so here it is.'' This social proof increases viewer retention because they feel part of the content creation process.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}]
    },
    {
      "step": 4,
      "goal": "Production & Visual Upgrade",
      "description": "The long-form version should feel like a significant upgrade over the Short. Use <strong>Descript</strong> for editing and <strong>Canva AI</strong> for enhanced graphics.<br><br>Visual upgrades to add:<br>- Custom data visualization slides for each statistic<br>- Side-by-side comparison charts<br>- Animated text callouts for key quotes<br>- Higher-quality B-roll and transitions<br><br>In Descript, import your AI voiceover, add dynamic captions, and use the ''Studio Sound'' feature to ensure professional audio quality.<br><br>💡 <strong>Pro tip:</strong> Add a 5-second card at the end of the long-form video showing your original Short and saying ''Watch the 60-second version.'' This creates a content loop that boosts both videos'' watch time simultaneously.",
      "tools": [{"name": "Descript", "slug": "descript"}, {"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 5,
      "goal": "SEO Optimization & Cross-Linking",
      "description": "Use <strong>Surfer SEO</strong> to optimize the long-form video''s metadata for maximum search visibility.<br><br>Key optimization steps:<br>1. Target keyword: ''[Topic] explained'' or ''[Topic] complete guide''<br>2. Include the Short''s proven title as a secondary keyword<br>3. Add timestamps (chapters) covering each major section<br>4. Pin a comment linking back to the original Short<br>5. Add the long-form video link in the original Short''s description<br><br>💡 <strong>Pro tip:</strong> In your video description, add ''Related: [Short title]'' with a link. YouTube''s algorithm treats cross-linked content as a content cluster, boosting both videos in search and suggested results. This strategy essentially doubles the SEO power of every topic you cover.",
      "tools": [{"name": "Surfer SEO", "slug": "surfer-seo"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-shorts-creation', 'ai-youtube-video-creation', 'ai-social-media-content-repurposing']
);

-- ⑨ AI YouTube Community Engagement
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-youtube-community-engagement',
  'AI YouTube Community Engagement',
  'Turn passive viewers into an active community that fuels your growth.',
  true,
  'Audience engagement is the single biggest factor YouTube''s algorithm uses to push your content. This workflow uses AI to manage comments at scale, create compelling community posts, run interactive polls, and build a loyal community that drives organic growth through shares and repeat views.',
  '[
    {
      "step": 1,
      "goal": "Comment Analysis & Response Strategy",
      "description": "Export your recent video comments (YouTube Studio → Analytics → See more → Comments) and paste them into <strong>Claude AI</strong>.<br><br>Prompt: <em>''Analyze these YouTube comments: [paste 50 recent comments]. Categorize them into: (1) questions needing answers, (2) positive feedback, (3) constructive criticism, (4) content requests, (5) spam. For categories 1-4, draft thoughtful, personal replies that encourage further conversation. Each reply should be 1-3 sentences, never generic.''</em><br><br>💡 <strong>Pro tip:</strong> Replying to comments within the first 2 hours after publishing sends a powerful signal to YouTube''s algorithm. Videos with active creator engagement in the comment section get 40% more impressions in the first 48 hours compared to videos with zero replies.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 2,
      "goal": "Community Post Creation & Scheduling",
      "description": "Use <strong>ChatGPT</strong> to generate a month of community posts that keep your audience engaged between video uploads.<br><br>Prompt: <em>''Create 12 YouTube community post ideas for a [niche] channel. Mix these formats: 3 polls (with 4 answer options each), 3 behind-the-scenes updates, 3 question posts that spark debate, and 3 ''tip of the day'' posts. Each post should be under 200 characters and encourage comments.''</em><br><br>💡 <strong>Pro tip:</strong> Polls are the highest-engagement community post format because they require the lowest effort from viewers (just tap an option). Post a poll 24 hours before each video upload asking ''Which topic should I cover next?'' — then announce that the winning topic is your new video. This creates anticipation and guaranteed day-one viewers.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 3,
      "goal": "Community Visual Assets",
      "description": "Use <strong>Canva AI</strong> to create visually engaging community post graphics that stand out in your subscribers'' feed.<br><br>Types to create:<br>- ''This or That'' comparison graphics (two products/techniques side by side)<br>- Quick tip infographics (single stat or hack, large bold text)<br>- ''Caption this'' images (AI-generated funny or surprising images)<br>- Behind-the-scenes ''setup reveal'' graphics<br><br>Use Canva''s ''Magic Resize'' to create versions optimized for both desktop and mobile community tab viewing.<br><br>💡 <strong>Pro tip:</strong> Community posts with images get 3x more engagement than text-only posts. Even a simple image with bold text saying ''New video dropping tomorrow'' outperforms a plain text announcement by a significant margin.",
      "tools": [{"name": "Canva AI", "slug": "canva"}]
    },
    {
      "step": 4,
      "goal": "Content Request Mining & Feedback Loop",
      "description": "Use <strong>ChatGPT</strong> to analyze all comments and community post responses to extract video ideas that your audience actually wants.<br><br>Prompt: <em>''Analyze these comments and poll results from my YouTube channel: [paste data]. Extract: (1) the top 5 most-requested video topics, (2) common complaints or frustrations from viewers, (3) questions that appear more than twice, (4) suggested improvements. Rank the video ideas by frequency and audience enthusiasm.''</em><br><br>Feed the top results back into your content calendar workflow for maximum audience alignment.<br><br>💡 <strong>Pro tip:</strong> When you publish a video based on a viewer''s suggestion, tag them in the comments: ''This video was inspired by @username''s comment — thank you!'' This creates powerful loyalty, and other viewers start leaving more content suggestions hoping to be featured.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 5,
      "goal": "Engagement Automation & Tracking",
      "description": "Set up automated engagement workflows using <strong>n8n</strong> to stay consistent without burning out.<br><br>Automation ideas:<br>1. New video published → auto-create a community poll asking viewers to rate it<br>2. Video hits 1,000 views → auto-post a ''Thank you!'' community update<br>3. Weekly digest: compile all unanswered questions and send to your email for batch-replying<br>4. Monthly report: track comment volume, reply rate, and community post engagement trends<br><br>💡 <strong>Pro tip:</strong> Aim for a comment reply rate of at least 50% on videos with under 100 comments. As your channel grows, focus replies on the first 2 hours after publishing and the highest-quality questions. Consistency in engagement matters far more than replying to every single comment.",
      "tools": [{"name": "n8n", "slug": "n8n"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-channel-growth-audit', 'ai-content-calendar-automation', 'ai-youtube-video-creation']
);

-- ⑩ AI YouTube Niche Research
INSERT INTO workflows (slug, title, tagline, is_published, description, steps, related_slugs)
VALUES (
  'ai-youtube-niche-research',
  'AI YouTube Niche Research',
  'Find the perfect YouTube niche before recording a single video.',
  true,
  'Choosing the wrong niche is the #1 reason new YouTube channels fail. This workflow uses AI to systematically research niches, estimate revenue potential, analyze competition levels, and validate demand — so you start your channel with confidence instead of guessing.',
  '[
    {
      "step": 1,
      "goal": "Interest-to-Niche Brainstorming",
      "description": "Start with your interests and let AI refine them into viable YouTube niches. Use <strong>ChatGPT</strong>.<br><br>Prompt: <em>''I''m interested in [list 3-5 interests]. For each interest, suggest 3 specific YouTube niche angles that are: (1) narrow enough to avoid competing with million-subscriber channels, (2) broad enough to sustain 200+ video ideas, (3) monetizable through affiliates or digital products. For each niche, estimate the monthly search volume and name 3 existing channels in that space.''</em><br><br>💡 <strong>Pro tip:</strong> The best YouTube niches sit at the intersection of ''What you enjoy creating'', ''What people actively search for'', and ''What has clear monetization paths''. If any one of these three elements is missing, the niche will eventually lead to burnout or zero revenue.",
      "tools": [{"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 2,
      "goal": "Competition & Saturation Analysis",
      "description": "Use <strong>Perplexity AI</strong> to analyze competition in each candidate niche.<br><br>Prompt: <em>''For the YouTube niche ''[niche]'': (1) How many channels have over 100K subscribers? (2) What is the average age of the top 10 channels? (3) Are new channels (under 2 years old) successfully growing? (4) What content gaps exist that current channels don''t cover? (5) What is the typical video quality standard?''</em><br><br>The ideal niche has: fewer than 20 channels with 100K+ subscribers, at least 3 channels under 2 years old that are growing rapidly, and clear content gaps you can fill.<br><br>💡 <strong>Pro tip:</strong> Avoid niches where all top channels are older than 5 years with no new entrants. This signals a mature, saturated market where the algorithm favors incumbents. Look for niches with visible momentum — new channels gaining subscribers quickly means the audience is actively looking for fresh voices.",
      "tools": [{"name": "Perplexity AI", "slug": "perplexity-ai"}]
    },
    {
      "step": 3,
      "goal": "Revenue Potential Estimation",
      "description": "Use <strong>Semrush</strong> to assess the commercial value of your candidate niches.<br><br>In Semrush''s Keyword Magic Tool, search for ''[niche] + review'', ''[niche] + tutorial'', and ''best [niche]''. Export the results and check:<br>- <strong>CPC (Cost Per Click):</strong> Higher CPC = higher YouTube ad RPM for that topic<br>- <strong>Keyword volume:</strong> Consistent search demand = sustainable content<br>- <strong>Commercial intent:</strong> Keywords with ''buy'', ''best'', ''review'' = affiliate-ready audience<br><br>Then ask <strong>ChatGPT</strong>: <em>''Based on this keyword data: [paste top 20 keywords with CPC and volume], estimate the YouTube RPM for this niche and project monthly AdSense revenue at 10K, 50K, and 100K monthly views.''</em><br><br>💡 <strong>Pro tip:</strong> Finance, software, and B2B niches have RPMs of $15-40, while entertainment and gaming typically see $2-5. A finance channel with 50K monthly views can earn more than a gaming channel with 500K views. Choose your niche with revenue per viewer in mind, not just view count.",
      "tools": [{"name": "Semrush", "slug": "semrush"}, {"name": "ChatGPT", "slug": "chatgpt"}]
    },
    {
      "step": 4,
      "goal": "Content Sustainability Test",
      "description": "A niche is only viable if you can create 200+ unique videos without running out of ideas. Use <strong>Claude AI</strong> to stress-test this.<br><br>Prompt: <em>''Generate 100 unique YouTube video ideas for a channel about [niche]. Organize them into categories: tutorials, reviews, comparisons, news/updates, opinion pieces, and beginner guides. Each idea should have a compelling title and target a specific search keyword.''</em><br><br>If Claude can easily generate 100 ideas, your niche has sufficient depth. If it starts repeating or stretching after 30-40, the niche may be too narrow for long-term sustainability.<br><br>💡 <strong>Pro tip:</strong> Save this list as your ''Content Bank''. Sort the ideas by estimated search volume and start with the highest-demand topics. This ensures your first 20 videos target proven keywords rather than obscure topics that get zero impressions.",
      "tools": [{"name": "Claude AI", "slug": "claude-ai"}]
    },
    {
      "step": 5,
      "goal": "Final Validation & Channel Strategy Blueprint",
      "description": "Compile all your research and create a final decision document using <strong>Notion AI</strong>.<br><br>Your niche validation scorecard should include:<br>- <strong>Competition score:</strong> Low / Medium / High<br>- <strong>Revenue potential:</strong> Estimated RPM and affiliate opportunities<br>- <strong>Content depth:</strong> Can you sustain 200+ videos?<br>- <strong>Personal fit:</strong> Would you enjoy creating this content for 2+ years?<br>- <strong>Growth trajectory:</strong> Is this niche growing, stable, or declining?<br><br>Use Notion AI to generate a channel strategy blueprint: upload frequency, content mix (% tutorials vs. reviews vs. opinion), visual style, and tone of voice.<br><br>💡 <strong>Pro tip:</strong> Apply the ''2-Year Test'' before committing. Ask yourself: ''Would I still want to make videos about this topic if I had zero subscribers after 1 year?'' If the answer is yes, you''ve found a niche that will sustain your motivation through the inevitable slow-growth phase that every new channel experiences.",
      "tools": [{"name": "Notion AI", "slug": "notion-ai"}]
    }
  ]'::jsonb,
  ARRAY['ai-youtube-channel-growth-audit', 'ai-faceless-youtube-channel-automation', 'ai-content-calendar-automation']
);

-- ============================================================
-- Verification: Check all 10 new workflows were inserted
-- ============================================================
SELECT slug, title, is_published, created_at
FROM workflows
WHERE slug IN (
  'ai-faceless-youtube-channel-automation',
  'ai-content-calendar-automation',
  'ai-youtube-channel-growth-audit',
  'ai-documentary-youtube-production',
  'ai-product-review-youtube-channel',
  'ai-brand-sponsorship-pitch',
  'ai-youtube-monetization-strategy',
  'ai-short-form-to-long-form-repurposing',
  'ai-youtube-community-engagement',
  'ai-youtube-niche-research'
)
ORDER BY created_at;
