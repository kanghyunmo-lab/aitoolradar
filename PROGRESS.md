# AIToolRadar 진행 현황

> 마지막 업데이트: **2026-04-04**
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`
> **목표: 2026년 내 월 수익 $7,500 (월천만원) 달성**
> ⚠️ **🚨 BREAKTHROUGH (2026-04-03): GEO 전략 명확화 — Google SEO vs AI GEO 완전 분리**
> ⚠️ **이 파일이 단일 진행 기준점입니다. 다른 메모보다 이 파일을 우선합니다.**

---

## 전체 진행률

```
기반 구축 (Phase 1~6)   [████████████████████] 100% ✅
트래픽 확보 (Phase 7)   [██████░░░░░░░░░░░░░░]  30% 🔄 ← 지금 여기 (+10%)
수익화 (Phase 8)        [█░░░░░░░░░░░░░░░░░░░]   5% 🔄
스케일업 (Phase 9)      [░░░░░░░░░░░░░░░░░░░░]   0%
```

---

## 핵심 수치 (2026-04-02 실측)

| 항목 | 수치 | 변화 |
|------|------|------|
| AI 도구 수 | **177개** | - |
| 총 페이지 수 | **~2,276개** | - |
| 비교 페이지 | **1,526개** | - |
| 워크플로우 페이지 | **28개** | - |
| 블로그 글 | **18개** | - |
| Google 색인 | **1,870개 (88%)** | ✅ 매우 양호 |
| 미색인 | 264개 | 자연 해소 예정 |
| 활성 제휴 링크 | **Rytr 1개** | - |
| **월 방문자** | **522명** | ⬆️ +22% (427→522) |
| **Google 노출** | **436만** | ⬆️ +92% |
| **평균 순위** | **27.3위** | - |
| **CTR** | **0.1%** | ❌ 개선 필요 |
| **ChatGPT 트래픽** | **38%** | ✅ 예상치 못한 강점 |
| **평균 engagement** | **21초** | ❌ 목표 90초+ |
| **월 수익** | $0 | - |

---

## 핵심 전략 (확정, 변경 없음)

```
포지셔닝: "AI 자동화 워크플로우 가이드 for Content Creators"
타겟: 유튜버 / 콘텐츠 크리에이터

실행 방향:
  ✅ 기존 비교 페이지 1,526개 유지 (서포팅 콘텐츠)
  ✅ 워크플로우: "도구 나열" → "단계별 자동화 튜토리얼 2,000자+"
  ✅ Reddit: r/youtubers, r/NewTubers, r/ContentCreators 집중
  ✅ X: "AI YouTube 자동화 팁" 주 3회
```

---

## ✅ 완료된 것 (건드리지 말 것)

### 기반 (Phase 1~6)
- Next.js 15 + Supabase + Vercel 배포 (www.aitoolradar.net)
- 177개 도구 + 1,526개 비교 페이지 + content_html 177개 전체
- 법적 페이지 5개 (affiliate-disclosure 포함)
- GA4 + Google Search Console + Indexing API (628개 완료)
- JSON-LD / OG태그 / 사이트맵 SEO 완료
- AffiliateCTA 컴포넌트 (GA4 affiliate_click 이벤트 자동 추적)
- 다크 테마 전면 적용
- VSWidget (홈페이지 VS 비교 위젯, 자동완성)
- 모바일 햄버거 메뉴
- /search 페이지

### 콘텐츠 (Phase 7 진행)
- 워크플로우 18개 DB 기반 구현 + description 콘텐츠 업그레이드 ✅
- 블로그 12개 배포 완료 ✅ (3월 5개 신규: Mar 8/10/14/17/21)
- Rytr 제휴 링크 DB 적용 ✅

### 마케팅 세팅
- ProductHunt 공식 론칭 ✅ (2026-02-28)
- OG 이미지 생성 ✅
- 비교 페이지 404 수정 ✅ (slug 정규화 + redirect)
- X(Twitter) 계정 개설 + 첫 트윗 ✅ (@AIToolRadar)
- Reddit 계정 생성 + 5개 서브레딧 가입 ✅ (카르마 50/목표 200)

### 코드 개선 (2026-03-19)
- 홈 뱃지 자동화: 도구 수·워크플로우 수 DB 연동 → 이제 하드코딩 없음 ✅
- 메타데이터 title 동적화 (generateMetadata 비동기) ✅

### CTR 및 AI 크롤러 최적화 (2026-04-02) ✅
- **compare 페이지**: 도구 rating/가격 활용한 동적 description 생성 (0.1% → 0.4% 목표)
- **compare 페이지**: FAQPage + ItemList JSON-LD 추가 (Featured Snippet 최적화)
- **ai-tools 페이지**: FAQ JSON-LD 추가 (ChatGPT/Perplexity 통합)
- **블로그 3개**: title/meta_description SQL 업데이트 완료
  - ChatGPT vs Claude vs Gemini: "Full Comparison + Winner" 추가
  - AI Video Editing: "We tested" 신뢰도 문구
  - Best AI Tools for YouTubers: "(Free + Paid)" 명시
- **Adobe Firefly**: meta_description 개선 (255 impressions 대응)

### Engagement 개선 (2026-04-02) ✅
- **홈페이지**: "Time Saved This Week" 배지 + CTA 버튼 추가 (engagement 목표 90초+)
- **/best/ 페이지**: Quick Stats Bar (도구 수/무료체험/최저가) 추가
- **/best/ 페이지**: FAQ 섹션 (3개 Q&A 동적 콘텐츠) 추가
- **/best/ 페이지**: FAQPage JSON-LD 추가

---

## 🚨 전략 명확화 (2026-04-03 돌파)

### 게임 2개 분리 완전 이해
```
게임 1: Google SEO (Traditional)
상태: 순위 27.3, 노출 436만 → ✅ 이미 충분함
다음: 더 이상 투자 불필요

게임 2: AI GEO (Generative Engine Optimization) ← ★ 집중할 곳
상태: ChatGPT 트래픽 33% (173/522)
목표: 6개월 내 50% 달성
핵심: 89% of AI citations come from position 100+ in Google
      → Google 순위와 AI 추천은 무관
      → Reddit, Quora, YouTube, 출판에서만 AI가 정보 끌어옴
```

### SmartRent 6주 사례 확인
- 콘텐츠 재구성만으로 6주 내 **32% of sales-qualified leads from ChatGPT**
- 당신의 기초는 SmartRent보다 나음 (이미 구조화 완료)
- 할 일: Off-site Authority (Reddit/Quora/YouTube) 구축

---

## 🔄 지금 당장 해야 할 것 (2026-04-04 시작)

### ✅ 과거 완료 (2026-04-02)
- [x] **GA4 + Search Console 데이터 분석** ✅ (427→522 +22%, CTR 0.1%, ChatGPT 38% 트래픽)
- [x] **CTR 개선 작업** ✅ (compare 동적 description, JSON-LD FAQPage/ItemList)
- [x] **블로그 제목 개선** ✅ (클릭 유도형으로 변경)
- [x] **홈페이지 + /best/ 페이지 Engagement** ✅ (Time Saved, Quick Stats, FAQ)

### 사용자 담당 — 지금 바로 (우선순위 순)

#### 🔥 1순위: Quora 론칭 (즉시, 2-3시간)
- [ ] **Quora 계정 생성** (quora.com) — 오늘
- [ ] **첫 5개 답변 작성** (오늘~내일)
  - "Best AI tools for YouTubers"
  - "How to automate YouTube with AI"
  - "Adobe Firefly vs Midjourney"
  - "Best AI video editing tools"
  - "AI tools for content creators 2026"
- [ ] **답변 형식**: 최소 100자 전문적 답변 + 마지막에 자연스럽게 링크 1개
- [ ] **목표**: 주 5개 × 26주(6개월) = 130개 언급
  - **예상 효과**: 6주 후 ChatGPT 추천 확대 시작, 12주 후 월 방문자 +200명

#### 2순위: Reddit 전략 변경 (이번주, 병행)
- [ ] **지난 전략**: 댓글만 (카르마 축적) → **NEW: 질문 답변 중심**
- [ ] **현재**: 50 karma → **목표**: 계속 쌓되, 이제 "질문 답변"으로 전환
- [ ] **일정**: 주 4개 답변
  - r/NewTubers: 주 2개 (AI tools 질문)
  - r/youtubers: 주 1개 (automation 질문)
  - r/ContentCreators: 주 1개
- [ ] **답변 품질**: 최소 100자+ 전문적, 실제 데이터/경험 기반, 마지막에 자연스럽게 링크 1개
- [ ] **스팸 절대 금지**: "Please check my website" 같은 표현 금지, 자연스러운 답변만
- [ ] **목표**: 주 4개 × 26주 = 104개 Reddit 언급
  - **예상 효과**: 카르마 200+ 달성 + AI 신뢰도 축적

#### 3순위: 비교 페이지 제목 재구성 (Claude Code)
- [ ] **변경 대상**: 상위 30개 비교 페이지 (조회수 기반)
- [ ] **형식 변경**: "Adobe Firefly vs Midjourney" → "YouTube 썸네일 만드는데 Adobe Firefly vs Midjourney 중 어느 게 싸고 빠를까?"
- [ ] **왜**: AI와 인간이 실제 검색하는 자연 언어 질문 형식으로 변경 (SmartRent 사례)
- [ ] **예상 효과**: CTR 0.1% → 0.4% (4배) in 6주
- [ ] **모든 변경 후 자동 배포**

---

#### 4순위: 성과 모니터링 (1개월 후, 2026-05-04)
- [ ] **Google Search Console**: CTR 변화 확인
  - 목표: 0.1% → 0.3~0.4% (by 5월)
  - 특히 "adobe firefly", "ai video editing" 키워드 추적
- [ ] **GA4**: ChatGPT 트래픽 증가 추이
  - 목표: 33% → 40%+ (1개월), 50% (6개월)
- [ ] **ChatGPT 직접 테스트**: 각 주요 키워드 검색 시 추천 여부 확인
- [ ] **AI Overview**: 새로운 키워드 몇 개 랭크되었는지 추적

#### 5순위: 주간 블로그 포스트 (병행)
- [ ] **다음 주제** (작성 예정):
  1. "Adobe Firefly 완전 무료 가이드 2026" (255 impressions 대응)
  2. "AI 영상 편집 자동화 워크플로우 (YouTube 크리에이터용)"
- [ ] **조건**: 최소 1,500자, 내부 링크 2-3개, Reddit/Quora 답변 링크 가능성 고려
- [ ] **일정**: 주 1회 → 월 4개 이상 유지

#### 6순위: YouTube 계획 수립 (3개월 후 시작)
- [ ] **지금 할 일**: 간단한 영상 1개만 계획하기
  - 주제: "ChatGPT vs Claude vs Gemini 비교" (이미 높은 조회)
  - 길이: 5-10분
  - 스크립트: Claude가 작성
- [ ] **선택지**: 당신이 직접 또는 유튜버 친구 협업
- [ ] **타이밍**: 현재는 Reddit/Quora에 집중. YouTube는 트래픽 1,000명+ 후

#### 7순위: 제휴 상태 확인 (1주일 후)
- [ ] **HeyGen**: 승인 여부 확인 (승인 되면 우선순위 상향)
- [ ] **Surfer SEO**: 응답 여부 확인
- [ ] **거절 대비**: 소형 AI 도구들 직접 스폰서십 이메일 준비

### 📊 6개월 언급 예측 (Off-site Authority 구축)

| 채널 | 주당 | 월당 | 6개월 합계 |
|------|------|------|----------|
| Quora | 5 | 20 | **130** |
| Reddit | 4 | 16 | **104** |
| YouTube | 0 | 0 | **0** (3개월 후 시작) |
| **합계** | **9** | **36** | **234+** |

**의미:**
- 234개 언급이 쌓이면 AI 시스템이 "YouTube automation" 주제에서 당신을 신뢰할 수 있는 출처로 인식
- ChatGPT 추천: 현재 1-2개 페이지 → 10-20개 페이지로 확대 (예상)
- 월 방문자: 522 → 1,500+ (예상, SmartRent 사례 기준)

---

### Claude Code 담당 — 다음 세션 (트래픽 1,000명 이후)
- [ ] **비교 페이지 30개 제목 재구성** (Smart 질문 형식)
- [ ] **직접 스폰서십 신청 준비** (Jasper, HeyGen 등)
- [ ] **AI 추천 퀴즈 위젯** 개발 (트래픽 500명+)
- [ ] **신규 페이지 타입** (e.g., /tools/by-use-case)

---

## 수익 전략 (확정, 2026-04-02)

### 현실적 한국 거주자 제휴 상황
- ❌ **대부분 미국/EU 제휴**: 한국 거주자 불가 (Jasper, Copy.ai, Writesonic 등)
- ✅ **가능한 방법**:
  1. **직접 스폰서십**: 제휴가 아닌 "광고 계약" (회사와 직접 협상)
  2. **AdSense**: 트래픽 10,000명 이후 (월 $240~450 예상)
  3. **CPM 네트워크**: Ezoic, MediaVine (한국 가능)
  4. **한국 회사 제휴**: 국내 AI 도구와 파트너십

### 수익 로드맵 (현실 기반)

| 기간 | 방문자/월 | 주요 수익원 | 예상 수익/월 |
|------|----------|----------|----------|
| **Month 1~3** | 0~500명 | (없음) | $0 |
| **Month 4~6** | 500~2,000명 | Rytr affiliate (1명), 직접 스폰서십 1건 | $50~150 |
| **Month 7~12** | 2,000~5,000명 | Rytr + 직접 스폰서십 2-3건 + AdSense | $300~800 |
| **Month 13~24** | 5,000~15,000명 | Rytr + 스폰서십 3-5건 + AdSense | $1,000~4,000 |
| **Month 24~36** | 15,000~20,000명 | 다중 수익원 (제휴+스폰서+AdSense) | $4,000~7,500 |

### 다음 제휴 승인 대기 (상태 미정)
- ⏳ HeyGen (크리에이터 워크플로우 우선순위 높음)
- ⏳ Surfer SEO (SEO 도구 비교 페이지)
- 📋 Jasper, Semrush (트래픽 1,000명+ 후 신청)

> ⚠️ 한국 거주자 제약 고려 → **직접 스폰서십 + AdSense 조합**이 핵심

---

## 담당별 역할

| 담당 | 역할 |
|------|------|
| ⚡ Claude Code / Antigravity | 코드 수정, DB 업데이트, 기능 개발, 콘텐츠 SQL |
| 🧑‍💻 직접 (사용자) | Reddit/X 활동, 제휴 신청, Supabase SQL 실행, git push |

---

## 확정 제외 전략 (다시 꺼내지 말 것)

- ❌ AI 디렉토리 등록 (효과 불확실, UI 수시 변경)
- ❌ Google AdSense (전문성 이미지 손상)
- ❌ LinkedIn / Threads (AI 커뮤니티 없음)
- ❌ 비교 페이지 추가 (기존 1,526개 품질 강화 먼저)

---

## 파일 구조 (핵심만)

```
aitoolradar/
├── PROGRESS.md              ← ★ 단일 진행 기준점 (이 파일)
├── CLAUDE.md                ← AI 에이전트용 컨텍스트
├── app/
│   ├── page.tsx             ← 홈페이지 (뱃지 자동화 완료)
│   ├── ai-tools/[slug]/     ← 도구 리뷰
│   ├── compare/[comparison]/← 비교 페이지 (1,526개)
│   ├── best/[category]/     ← 카테고리
│   ├── blog/[slug]/         ← 블로그 (12개)
│   └── workflows/[slug]/    ← 워크플로우 (18개)
├── lib/queries/             ← DB 쿼리 함수
├── scripts/                 ← SQL 파일, 색인 스크립트
│   ├── march-week*.sql      ← 3월 콘텐츠 (실행 완료)
│   └── google-indexing.js   ← 색인 요청 스크립트
└── tasks/
    ├── lessons.md           ← 실수 패턴 (세션 시작 시 읽기)
    └── weekly-routine.md    ← 주간 루틴
```
