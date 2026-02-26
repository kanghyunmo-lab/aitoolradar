/**
 * Google Indexing API 자동 색인 요청 스크립트
 *
 * 사용법:
 *   node scripts/google-indexing.js          → 200개 제출 (기본)
 *   node scripts/google-indexing.js --dry-run → URL 목록만 확인 (실제 제출 안 함)
 *   node scripts/google-indexing.js --status  → 진행 상황 확인
 *
 * 할당량: 하루 200개 (Google 기본 제한)
 * 매일 한 번씩 실행하면 약 11일 만에 전체 2,086개 완료
 */

const { GoogleAuth } = require('google-auth-library');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ── 설정 ──────────────────────────────────────────────
const KEY_FILE = path.join(__dirname, '..', 'aitoolradar-indexing-f2fc17bb5235.json');
const PROGRESS_FILE = path.join(__dirname, 'indexing-progress.json');
const SITE_URL = 'https://www.aitoolradar.net';
const DAILY_LIMIT = 200;
const DELAY_MS = 500; // 요청 간격 (ms)

// ── URL 생성 ──────────────────────────────────────────
function generateAllUrls() {
  const urls = [];

  // 홈페이지 + 정적 페이지
  const staticPages = [
    '/',
    '/blog',
    '/about',
    '/privacy',
    '/terms',
    '/affiliate-disclosure',
    '/methodology',
  ];
  staticPages.forEach(p => urls.push(SITE_URL + p));

  // AI 도구 슬러그 목록 (177개)
  const toolSlugs = [
    'jasper','copy-ai','writesonic','grammarly','hemingway-editor',
    'chatgpt','claude-ai','gemini','perplexity-ai','you-com',
    'midjourney','dall-e','stable-diffusion','adobe-firefly','canva-ai',
    'github-copilot','tabnine','cursor','codeium','replit-ai',
    'zapier','make','n8n','bardeen','automate-io',
    'notion-ai','coda-ai','mem-ai','obsidian','roam-research',
    'otter-ai','fireflies-ai','krisp','zoom-ai','microsoft-teams-ai',
    'synthesia','heygen','runway-ml','pika-labs','invideo-ai',
    'eleven-labs','murf-ai','play-ht','speechify','descript',
    'tableau','power-bi','obviously-ai','akkio','julius-ai',
    'semrush','ahrefs','surfer-seo','clearscope','marketmuse',
    'intercom','drift','tidio','chatbase','botpress',
    'hubspot-ai','salesforce-einstein','apollo-ai','outreach','salesloft',
    'microsoft-365-copilot','google-workspace-ai','slack-ai','asana-ai','monday-ai',
    'midjourney-v6','leonardo-ai','ideogram','playground-ai','adobe-express',
    'invideo','pictory','opus-clip','vidyo-ai','capcut-ai',
    'suno-ai','udio','aiva','soundraw','mubert',
    'beautiful-ai','gamma-app','tome','pitch','presentations-ai',
    'excel-formula-bot','sheetai','numerous-ai','row-zero','gigasheet',
    'consensus','elicit','semantic-scholar','research-rabbit','connected-papers',
    'lumen5','veed-io','descript-video','clipchamp','adobe-premiere-ai',
    'copy-ai-chat','character-ai','pi-ai','inflection-ai','poe',
    'wordtune','quillbot','paraphraser-io','spinbot','chimp-rewriter',
    'beautiful-ai-templates','slideai','presentations-ai-templates','decktopus','slidesgo',
    'vercel-v0','framer-ai','webflow-ai','wix-adi','squarespace-ai',
    'airtable-ai','notion-database','coda-database','smartsheet-ai','clickup-ai',
    'mixpanel-ai','amplitude-ai','heap-ai','fullstory','hotjar-ai',
    'zendesk-ai','freshdesk-ai','help-scout-ai','intercom-ai','gorgias-ai',
    'mailchimp-ai','klaviyo-ai','brevo','convertkit-ai','activecampaign-ai',
    'surfer-ai','frase-io','scalenut','rytr','hypotenuse-ai',
    'synthesia-ai','heygen-ai','colossyan','hour-one','d-id',
    'adobe-sensei','canva-magic','remove-bg','cleanup-pictures','imglarger',
    'replit','github-copilot-x','amazon-codewhisperer','sourcegraph-cody','jetbrains-ai',
    'perplexity-pro','you-com-pro','bing-chat','bard-advanced','claude-pro',
    'copy-ai-pro','jasper-pro','writesonic-pro','grammarly-business','hemingway-pro',
    'zapier-ai','make-ai','n8n-ai','activepieces','pipedream',
    'descript-pro','otter-pro','fireflies-pro','notta','sonix',
    'semrush-pro','ahrefs-pro','moz-pro','serpstat','mangools',
    'notion-teams','coda-teams','airtable-teams','monday-teams','asana-teams',
  ];

  // 도구 리뷰 페이지 (/ai-tools/[slug])
  toolSlugs.forEach(slug => {
    urls.push(`${SITE_URL}/ai-tools/${slug}`);
  });

  // 가격 페이지 (/pricing/[slug])
  toolSlugs.forEach(slug => {
    urls.push(`${SITE_URL}/pricing/${slug}`);
  });

  // 대안 페이지 (/alternatives/[slug])
  toolSlugs.forEach(slug => {
    urls.push(`${SITE_URL}/alternatives/${slug}`);
  });

  // 카테고리 페이지
  const categories = [
    'ai-writing-tools','ai-image-generators','ai-coding-assistants',
    'ai-video-tools','ai-audio-tools','ai-productivity-tools',
    'ai-seo-tools','ai-customer-support','ai-sales-tools','ai-data-analytics',
  ];
  categories.forEach(cat => {
    urls.push(`${SITE_URL}/best/${cat}`);
  });

  // 워크플로우 페이지
  const workflowSlugs = [
    'ai-youtube-video-creation',
    'ai-podcast-production-workflow',
    'ai-online-course-creation',
    'ai-seo-blog-content-creation',
    'ai-social-media-content-repurposing',
    'ai-book-writing-self-publishing',
    'ai-cold-email-outreach',
    'ai-ecommerce-product-descriptions',
    'ai-landing-page-creation',
    'ai-music-production-content-creators',
    'ai-newsletter-automation',
    'ai-real-estate-listing-marketing',
    'ai-sales-deck-presentation',
    'ai-ugc-ad-creation',
    'ai-video-ad-creative-production',
  ];
  workflowSlugs.forEach(slug => {
    urls.push(`${SITE_URL}/workflows/${slug}`);
  });
  // /workflows 목록 페이지
  urls.push(`${SITE_URL}/workflows`);

  // 블로그 포스트
  const blogSlugs = [
    'jasper-vs-copyai-vs-writesonic-2026',
    'best-free-ai-tools-for-startups-2026',
    'chatgpt-vs-claude-vs-gemini-comparison',
    'complete-guide-ai-image-generators-2026',
    'how-to-automate-your-business-with-ai-2026',
    'best-ai-coding-assistants-developers-2026',
    'ai-writing-tools-small-business-guide-2026',
    'midjourney-vs-dalle-vs-stable-diffusion-2026',
    'ai-tools-replace-expensive-software-2026',
    'how-to-use-perplexity-ai-research-2026',
  ];
  blogSlugs.forEach(slug => {
    urls.push(`${SITE_URL}/blog/${slug}`);
  });

  return [...new Set(urls)]; // 중복 제거
}

// ── 진행 상황 로드/저장 ────────────────────────────────
function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
  }
  return { submitted: [], failed: [], lastRun: null };
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

// ── Indexing API 요청 ─────────────────────────────────
async function submitUrl(accessToken, url) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ url, type: 'URL_UPDATED' });
    const options = {
      hostname: 'indexing.googleapis.com',
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ── 메인 ──────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const isStatus = args.includes('--status');

  const allUrls = generateAllUrls();
  const progress = loadProgress();

  // 상태 확인 모드
  if (isStatus) {
    const remaining = allUrls.filter(u => !progress.submitted.includes(u));
    console.log('\n📊 Google Indexing 진행 상황');
    console.log('─'.repeat(40));
    console.log(`✅ 제출 완료: ${progress.submitted.length}개`);
    console.log(`❌ 실패:      ${progress.failed.length}개`);
    console.log(`⏳ 남은 것:   ${remaining.length}개`);
    console.log(`📋 전체:      ${allUrls.length}개`);
    console.log(`🕐 마지막 실행: ${progress.lastRun || '없음'}`);
    const daysLeft = Math.ceil(remaining.length / DAILY_LIMIT);
    console.log(`📅 완료까지:   약 ${daysLeft}일 더 필요`);
    return;
  }

  // 아직 제출 안 한 URL 필터링
  const remaining = allUrls.filter(u => !progress.submitted.includes(u));
  const toSubmit = remaining.slice(0, DAILY_LIMIT);

  console.log('\n🚀 Google Indexing API 색인 요청');
  console.log('─'.repeat(40));
  console.log(`📋 전체 URL: ${allUrls.length}개`);
  console.log(`✅ 이미 완료: ${progress.submitted.length}개`);
  console.log(`📤 오늘 제출 예정: ${toSubmit.length}개`);
  console.log(`⏳ 남은 URL: ${remaining.length - toSubmit.length}개`);

  if (isDryRun) {
    console.log('\n🔍 DRY RUN 모드 — 실제 제출 안 함');
    console.log('제출 예정 URL 샘플 (첫 5개):');
    toSubmit.slice(0, 5).forEach(u => console.log(' ', u));
    return;
  }

  if (toSubmit.length === 0) {
    console.log('\n🎉 모든 URL 제출 완료!');
    return;
  }

  // Google 인증
  console.log('\n🔑 Google 인증 중...');
  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  const accessToken = tokenResponse.token;
  console.log('✅ 인증 성공\n');

  // URL 제출
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < toSubmit.length; i++) {
    const url = toSubmit[i];
    process.stdout.write(`[${i + 1}/${toSubmit.length}] ${url} → `);

    try {
      const result = await submitUrl(accessToken, url);
      if (result.status === 200) {
        progress.submitted.push(url);
        successCount++;
        console.log('✅');
      } else {
        const err = JSON.parse(result.body);
        progress.failed.push({ url, error: err?.error?.message || result.status });
        failCount++;
        console.log(`❌ (${result.status})`);
      }
    } catch (e) {
      progress.failed.push({ url, error: e.message });
      failCount++;
      console.log(`❌ (${e.message})`);
    }

    // 진행 상황 저장 (10개마다)
    if ((i + 1) % 10 === 0) saveProgress(progress);

    await sleep(DELAY_MS);
  }

  progress.lastRun = new Date().toISOString();
  saveProgress(progress);

  const stillRemaining = allUrls.filter(u => !progress.submitted.includes(u));
  console.log('\n─'.repeat(40));
  console.log(`✅ 성공: ${successCount}개`);
  console.log(`❌ 실패: ${failCount}개`);
  console.log(`⏳ 남은 URL: ${stillRemaining.length}개`);
  if (stillRemaining.length > 0) {
    console.log(`📅 내일 다시 실행하세요: node scripts/google-indexing.js`);
  } else {
    console.log('🎉 전체 색인 요청 완료!');
  }
}

main().catch(console.error);
