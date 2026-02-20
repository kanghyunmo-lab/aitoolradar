# AI Tool Content HTML 품질 개선 계획

189개 AI 도구의 `content_html`을 구글 스팸 필터 회피, E-E-A-T 강화, 반복 패턴 제거를 위해 전면 개선합니다.

> [!IMPORTANT]
> **`content_html` 콘텐츠는 반드시 영어로 작성해야 합니다.** 웹사이트가 영어 사이트이므로 실제 SQL UPDATE 문의 HTML 콘텐츠는 전부 영어입니다. 이 계획서의 설명만 한국어이고, 코드/콘텐츠 예시는 모두 영어입니다.

## 리서치 결과 요약

상위 AI 도구 리뷰 사이트(Toolify.ai, AITopTools, Product Hunt, G2)를 분석한 결과:

| 사이트 | 핵심 전략 |
|--------|-----------|
| **Toolify.ai** | 탭 기반 구조, 트래픽 데이터 차트, 짧은 요약 + 카테고리 태그 |
| **AITopTools** | YouTube 임베드 중심, 소셜 프루프, 리뷰 집계 |
| **Product Hunt** | 1-2줄 태그라인, 메이커 코멘트, 멀티미디어 캐러셀 |
| **G2** | 사용자 리뷰 중심, Pros/Cons 분리, 별점 시스템 |

> [!WARNING]
> **핵심 문제**: 현재 189개 도구 모두 `What Is X?` → `Key Features` → `Pricing` 동일 3-섹션 구조를 사용 중. 구글이 템플릿 기반 대량 생산으로 판단할 위험이 높음.

## Proposed Changes

### 콘텐츠 구조 다양화 전략

189개 도구를 **5가지 콘텐츠 패턴**으로 분산하여 반복성을 제거합니다.
각 패턴의 `content_html`은 **영어**로 작성합니다.

---

#### Pattern A — "Editor's Review" (편집자 리뷰형, 약 40% 사용)

```html
<h2>What Is [Tool]?</h2>
<p>Tool description with natural, conversational tone...</p>
<h2>What We Like</h2>
<p>Positive experience narrative — use phrases like "What stands out is...", "In practice, this means..."</p>
<h2>What Could Be Better</h2>
<p>Honest critique — e.g., "The learning curve is steeper than expected...", "Pricing may be a barrier for..."</p>
<h2>Pricing</h2>
<p>Pricing details...</p>
```

**E-E-A-T 문구 예시 (영어로 삽입):**
- "What stands out when you actually use [Tool] is..."
- "In our experience, the [feature] works best for..."
- "One thing worth noting is..."

---

#### Pattern B — "Use Case Focus" (사용 사례 중심형, 약 20% 사용)

```html
<h2>[Tool]: [One-line value proposition]</h2>
<p>Tool overview with focus on the problem it solves...</p>
<h2>Best For</h2>
<p>Target user description — be specific: "freelance writers managing 5+ clients", not just "writers"</p>
<h2>Key Capabilities</h2>
<ul>
  <li>Feature with benefit explanation</li>
  <li>Feature with benefit explanation</li>
</ul>
<h2>How Much Does It Cost?</h2>
<p>Pricing details...</p>
```

**E-E-A-T 문구 예시:**
- "If you are a [specific user], [Tool] is worth considering because..."
- "Teams that handle [specific task] will find the most value in..."

---

#### Pattern C — "Comparison Angle" (비교 관점형, 약 15% 사용)

```html
<h2>Why Consider [Tool]?</h2>
<p>Tool description + what makes it different from competitors...</p>
<h2>Standout Features</h2>
<p>Unique capabilities narrative — what this tool does that others don't...</p>
<h2>Alternatives Worth Exploring</h2>
<p>Mention 2-3 related tools naturally (enables internal linking): "If [Tool] feels too enterprise-heavy, [Alternative] offers a lighter option..."</p>
<h2>Pricing Overview</h2>
<p>Pricing details...</p>
```

**E-E-A-T 문구 예시:**
- "Unlike [Competitor], which focuses on [X], [Tool] takes a different approach by..."
- "If you have tried [Competitor] and found it lacking in [area], [Tool] addresses that gap..."

---

#### Pattern D — "Deep Dive" (심층 분석형, 약 15% 사용, 인기 도구용)

```html
<h2>[Tool] in 2026: Is It Worth It?</h2>
<p>Current assessment with context about the tool's evolution...</p>
<h2>The Good</h2>
<p>Strengths with specific details and examples...</p>
<h2>The Not-So-Good</h2>
<p>Weaknesses — be honest: "The free plan is too limited to evaluate properly...", "Support response times could be faster..."</p>
<h2>Who Should Use [Tool]?</h2>
<p>Specific target users with scenarios...</p>
<h2>Pricing Breakdown</h2>
<p>Detailed pricing with plan comparison...</p>
```

**E-E-A-T 문구 예시:**
- "After spending time with [Tool], the feature that impressed us most was..."
- "Where [Tool] really shines is in [specific scenario]..."
- "The biggest limitation we noticed was..."

---

#### Pattern E — "Quick Take" (간결 요약형, 약 10% 사용, 단순/니치 도구용)

```html
<h2>Quick Take: [Tool]</h2>
<p>2-3 sentence core summary — get straight to the point...</p>
<h2>What It Does</h2>
<p>Concise feature overview — no filler, just facts...</p>
<h2>Pricing</h2>
<p>Pricing details...</p>
```

**E-E-A-T 문구 예시:**
- "[Tool] does one thing and does it well..."
- "For teams that need [specific capability] without the complexity of [bigger alternative]..."

---

### E-E-A-T 강화 요소 (영어 문구)

각 도구의 `content_html`에 다음 영어 표현을 **자연스럽게** 삽입합니다:

| 카테고리 | 영어 문구 예시 |
|----------|---------------|
| **경험 시그널** | "In our testing...", "After spending time with...", "What stands out when you actually use it..." |
| **비교 맥락** | "Unlike [X], which focuses on...", "Compared to [X], this tool..." |
| **구체적 수치** | "generates a 1,500-word article in under 2 minutes", "supports 25+ languages" |
| **균형 잡힌 평가** | "works well for X but struggles with Y", "the free plan is generous, though..." |
| **대안 언급** | "If [Tool] is too expensive, consider [Alternative]", "For a lighter option, check out [Tool]" |

### 가변 콘텐츠 길이 (영어 단어 수 기준)

| 도구 유형 | 영어 단어 수 | 사용 패턴 |
|-----------|:---:|:---:|
| 대중적/인기 도구 (ChatGPT, Jasper 등) | 250-350 words | Pattern D |
| 중간 인지도 도구 | 150-250 words | Pattern A/B/C |
| 니치/단순 도구 | 100-150 words | Pattern E |

---

### SQL 파일 수정 대상

#### [MODIFY] [update_content_batch_1.sql](file:///l:/H3/aitoolradar/scripts/update_content_batch_1.sql)
- 50개 도구 `content_html`을 5가지 패턴으로 분산 재작성 (영어)

#### [MODIFY] [update_content_batch_2.sql](file:///l:/H3/aitoolradar/scripts/update_content_batch_2.sql)
- 50개 도구 `content_html`을 5가지 패턴으로 분산 재작성 (영어)

#### [MODIFY] [update_content_batch_3.sql](file:///l:/H3/aitoolradar/scripts/update_content_batch_3.sql)
- 51개 도구 `content_html`을 5가지 패턴으로 분산 재작성 (영어)

#### [MODIFY] [update_content_batch_4.sql](file:///l:/H3/aitoolradar/scripts/update_content_batch_4.sql)
- 38개 도구 `content_html`을 5가지 패턴으로 분산 재작성 (영어)

---

## 실행 시 주의사항

> [!CAUTION]
> **콘텐츠 언어 규칙:**
> - `content_html` 값 = **반드시 영어**
> - SQL 주석 (`-- 코멘트`) = 한글 또는 영어 모두 OK
> - 이 계획서 = 한글 (내부 참고용)

### SQL UPDATE 문 작성 예시

```sql
-- Pattern A: Editor's Review (편집자 리뷰형)
UPDATE ai_tools
SET content_html = '<h2>What Is Jasper?</h2>
<p>Jasper is an AI writing platform built for marketing teams that need to produce content at scale 
without sacrificing brand consistency. What stands out when you actually use it is the Brand Voice 
feature — once trained on your company''s tone and terminology, every piece of output feels 
authentically on-brand rather than generically AI-generated.</p>
<h2>What We Like</h2>
<p>The template library covers virtually every marketing format you can think of, from Facebook ads 
to product descriptions to email sequences. The Surfer SEO integration is a genuine time-saver for 
teams publishing blog content, letting you optimize for search rankings as you write rather than 
after the fact.</p>
<h2>What Could Be Better</h2>
<p>Pricing is on the higher end compared to alternatives like Copy.ai or Rytr. The learning curve 
is also steeper than expected — getting the most out of Brand Voice requires a meaningful upfront 
investment in training the model on your content.</p>
<h2>Pricing</h2>
<p>Creator starts at $49/month. Pro for teams is $69/month per seat. Enterprise plans with custom 
Brand Voice training are available. A 7-day free trial lets you test before committing.</p>'
WHERE slug = 'jasper';
```

---

## Verification Plan (검증 계획)

### 자동 검증
1. 완성된 SQL 파일에서 `WHERE slug` 패턴 count → 189개 확인
2. 연속된 5개 도구의 `<h2>` 첫 번째 헤딩이 모두 다른지 확인
3. "What Is" 헤딩 비율이 전체의 40% 이하인지 확인

### 수동 검증
1. 무작위 10개 도구를 선택하여 콘텐츠가 자연스러운 영어인지 확인
2. 경험적 어조 문장 ("In our testing", "stands out", "we noticed") 포함 비율 50% 이상 확인
3. 각 배치에서 Pattern A~E가 골고루 분포되었는지 확인
