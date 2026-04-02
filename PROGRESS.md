# AIToolRadar 진행 현황

> 마지막 업데이트: **2026-04-02**
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`
> **목표: 2026년 내 월 수익 $7,500 (월천만원) 달성**
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

## 🔄 지금 당장 해야 할 것

### ✅ 오늘 완료 (2026-04-02)
- [x] **GA4 + Search Console 데이터 분석** ✅ (427→522 +22%, CTR 0.1%, ChatGPT 38% 트래픽 발견)
- [x] **CTR 개선 작업** ✅ (compare 동적 description, JSON-LD FAQPage/ItemList)
- [x] **AI 도구 페이지 FAQ JSON-LD** ✅ (ChatGPT 통합 최적화)
- [x] **블로그 SQL 업데이트** ✅ (상위 3개 title/meta_description 클릭 유도형으로 변경)
- [x] **홈페이지 + /best/ 페이지 Engagement 개선** ✅ (Time Saved 배지, Quick Stats, FAQ)
- [x] **전체 배포** ✅ (Vercel 자동 배포 완료)

### 사용자 담당 — 지금 바로 (우선순위 순)

#### 🔥 1순위: Quora 시작 (즉시 효과, 며칠 내)
- [ ] **Quora 계정 생성** (quora.com)
- [ ] **주요 질문 검색 및 답변**
  - "Best AI tools for YouTubers"
  - "How to automate YouTube with AI"
  - "Best AI video editing tools"
  - "AI tools for content creators"
  - "AI writing tools for 2026"
- [ ] **답변 끝에 자연스럽게 링크**: "자세한 내용은 aitoolradar.net에서 볼 수 있습니다"
- [ ] **목표**: 주 5개 답변 (2-4주 내 50~200명 추가 트래픽 기대)

#### 2순위: Reddit karma 계속 축적 (병행)
- [ ] **현재**: 50 karma / **목표**: 200+
- [ ] **계속**: r/NewTubers, r/youtubers, r/ContentCreators 댓글 (주 3-4회)
- [ ] **링크 불가 상태**: 팁/경험담만 공유, 링크는 금지
- [ ] **200+ 달성 후**: 자신의 글에 링크 포함 가능

#### 3순위: 성과 모니터링 (1-2주 후)
- [ ] **Google Search Console**: CTR 변화 확인
  - 목표: 0.1% → 0.3~0.4% (3-4배)
  - 특히 "adobe firefly", "ai video editing" 키워드 추적
- [ ] **GA4**: Engagement time 변화
  - 홈페이지: 21초 → 60초+ 목표
  - /best/ 페이지: 12초 → 45초+ 목표
- [ ] **추적 캡처**: 변화 추이를 주간 보고서로 기록

#### 4순위: 주간 블로그 포스트 (지속)
- [ ] **다음 주제 추천**:
  1. "Adobe Firefly 완전 무료 가이드 2026" (255 impressions 대응)
  2. "AI 영상 편집 자동화 단계별 워크플로우"
  3. "YouTube 자동화 도구 스택 한국인용"
- [ ] **조건**: 최소 1,500자, 내부 링크 2-3개 포함, SEO 최적화
- [ ] **주간 1회 목표**: 월 4개 → 월 8-12개로 확대

#### 5순위: 제휴 상태 확인 (1주일 후)
- [ ] **HeyGen**: 승인 여부 확인 (승인 되면 우선순위 상향)
- [ ] **Surfer SEO**: 응답 여부 확인
- [ ] **거절 대비**: 소형 AI 도구들 직접 스폰서십 이메일 준비

### Claude Code 담당 — 다음 세션 (트래픽 1,000명 이후)
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
