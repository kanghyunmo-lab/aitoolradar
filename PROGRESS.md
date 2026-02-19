# AIToolRadar 진행 상황 대시보드

> 이 파일을 열면 지금 어디까지 왔는지, 다음에 뭘 해야 하는지 한눈에 볼 수 있습니다.
> 마지막 업데이트: 2026-02-18

---

## 전체 진행률

```
Phase 1: 프로젝트 셋업     [████████████████████] 100% ✅
Phase 2: Supabase 연동      [████████████████████] 100% ✅
Phase 3: 페이지 동작 확인    [████████████████████] 100% ✅
Phase 4: 도메인+배포         [████████████████████] 100% ✅
Phase 5: 데이터 200개 확장   [████████████████████] 100% ✅
Phase 6: SEO 최적화          [░░░░░░░░░░░░░░░░░░░░]   0% ⬅️ 다음 단계
Phase 7: 제휴 프로그램 가입  [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 8: 트래픽 자동화       [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 9: 분석+최적화         [░░░░░░░░░░░░░░░░░░░░]   0%
```

---

## Phase 1: 프로젝트 셋업 ✅ 완료

이것들은 Claude가 이미 만들어준 것들입니다.

| 작업 | 상태 | 설명 |
|------|------|------|
| Next.js 프로젝트 생성 | ✅ | `aitoolradar/` 폴더에 생성됨 |
| Tailwind CSS 설정 | ✅ | 스타일링 프레임워크 |
| Supabase 클라이언트 코드 | ✅ | `lib/supabase/server.ts`, `client.ts` |
| DB 스키마 SQL | ✅ | `scripts/schema.sql` |
| 시드 데이터 SQL | ✅ | `scripts/seed-data.sql` (10개 AI 도구) |
| 홈페이지 | ✅ | `app/page.tsx` |
| 도구 리뷰 페이지 | ✅ | `app/ai-tools/[slug]/page.tsx` |
| 1:1 비교 페이지 | ✅ | `app/compare/[comparison]/page.tsx` |
| 카테고리 페이지 | ✅ | `app/best/[category]/page.tsx` |
| 가격 페이지 | ✅ | `app/pricing/[slug]/page.tsx` |
| 대안 페이지 | ✅ | `app/alternatives/[slug]/page.tsx` |
| 사이트맵 | ✅ | `app/sitemap.ts` |
| robots.txt | ✅ | `app/robots.ts` |
| 빌드 테스트 | ✅ | `npm run build` 성공 |

---

## Phase 2: Supabase 연동 ✅ 완료

> **이것은 당신이 직접 해야 하는 부분입니다!**

### 단계별 가이드

#### Step 1: Supabase 회원가입 + 프로젝트 생성
1. https://supabase.com 접속
2. GitHub 계정으로 가입 (무료)
3. "New Project" 클릭
4. 프로젝트 이름: `aitoolradar`
5. 데이터베이스 비밀번호 설정 (안전한 곳에 저장!) rkdgusahekt1!
6. Region: Northeast Asia (ap-northeast-1) 선택
7. "Create new project" 클릭 → 2-3분 대기

#### Step 2: DB 테이블 만들기
1. Supabase 대시보드 좌측 → "SQL Editor" 클릭
2. "New query" 클릭
3. `scripts/schema.sql` 파일 내용 복사 → 붙여넣기 → "Run" 클릭
4. 성공 메시지 확인
5. 다시 "New query" 클릭
6. `scripts/seed-data.sql` 파일 내용 복사 → 붙여넣기 → "Run" 클릭
7. 좌측 "Table Editor"에서 `ai_tools` 테이블에 10개 데이터 확인

#### Step 3: API 키 복사
1. 좌측 메뉴 → "Settings" → "API"
2. 다음 2개를 복사:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...` (긴 문자열)

#### Step 4: 환경 변수 설정
1. 프로젝트 폴더에서 `.env.local.example` 파일을 복사
2. 이름을 `.env.local`로 변경
3. 복사한 값 입력:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Step 5: 로컬에서 확인
```bash
cd L:\H3\aitoolradar
npm run dev
```
브라우저에서 http://localhost:3000 열기 → AI 도구 목록이 보이면 성공!

### 완료 확인 체크리스트
- [x] Supabase 프로젝트 생성됨
- [x] schema.sql 실행 완료
- [x] seed-data.sql 실행 완료
- [x] .env.local 파일 생성 + 키 입력
- [x] `npm run dev`로 로컬에서 확인

---

## Phase 3: 페이지 동작 확인 ✅ 완료

로컬에서 아래 URL들이 잘 뜨는지 확인:
- [x] http://localhost:3000 (홈페이지)
- [x] http://localhost:3000/ai-tools/jasper (Jasper 리뷰)
- [x] http://localhost:3000/compare/jasper-vs-copy-ai (비교)
- [x] http://localhost:3000/best/ai-writing-tools (카테고리)
- [x] http://localhost:3000/pricing/zapier (가격)
- [x] http://localhost:3000/alternatives/jasper (대안)

---

## Phase 4: 도메인 + 배포 ✅ 완료

- [x] Namecheap에서 도메인 구매 (aitoolradar.net, $12.48/yr)
- [x] GitHub에 코드 push (kanghyunmo-lab/aitoolradar)
- [x] Vercel 계정 생성 + GitHub 연결
- [x] Vercel에 환경 변수 입력 (4개)
- [x] 도메인 연결 (www.aitoolradar.net)
- [x] 실제 URL에서 사이트 확인

---

## Phase 5: 데이터 200개 확장 ✅ 완료

### 완료된 작업 (Claude가 자동 생성)
- [x] SQL 데이터 파일 생성 완료 (`scripts/seed-data-v2.sql`, 364KB)
- [x] Supabase SQL Editor에서 실행 완료 ✅

### 추가된 카테고리 (5개 신규)
| UUID | 카테고리 | 설명 |
|------|----------|------|
| c1000000-...0006 | AI Chatbots | ChatGPT, Claude, Gemini 등 15개 |
| c1000000-...0007 | AI Audio & Music | ElevenLabs, Suno, Descript 등 15개 |
| c1000000-...0008 | AI Productivity | Notion AI, Otter, Fireflies 등 15개 |
| c1000000-...0009 | AI Presentation | Tome, Gamma, Beautiful.ai 등 10개 |
| c1000000-...0010 | AI SEO & Marketing | Surfer SEO, Clearscope 등 12개 |

### 추가된 도구 (기존 카테고리 확장)
| 카테고리 | 추가 도구 수 |
|----------|------------|
| AI Writing Tools | +22개 (Rytr, Grammarly, QuillBot 등) |
| AI Image Generators | +23개 (Adobe Firefly, Leonardo AI 등) |
| AI Coding Assistants | +18개 (Tabnine, Clineide, Devin AI 등) |
| AI Video Tools | +19개 (Synthesia, Runway ML, Pika 등) |
| AI Automation | +18개 (n8n, Clay, Apollo.io 등) |

### **총합: 기존 10개 + 신규 167개 = 177개 AI 도구**

### Supabase에서 SQL 실행하는 방법
1. https://supabase.com 접속 → 내 프로젝트 클릭
2. 왼쪽 메뉴 → **SQL Editor** 클릭
3. `l:\H3\aitoolradar\scripts\seed-data-v2.sql` 파일 열기
4. 내용 전체 복사 (Ctrl+A → Ctrl+C)
5. SQL Editor에 붙여넣기 → **Run** 클릭
6. 성공 메시지 확인 (오류가 나오면 Claude에게 보여주세요!)

### 완료 확인 체크리스트
- [x] seed-data-v2.sql 파일 생성됨 (`scripts/seed-data-v2.sql`)
- [x] Supabase SQL Editor에서 실행 완료 ✅
- [x] Supabase Table Editor에서 177개 데이터 확인 ✅
- [x] 로컬에서 `npm run dev` → 카테고리/도구 목록 확인 ✅

---

## Phase 6: SEO 최적화 🔄 진행 중

> 분석보고서(`L:\H3\aitoolradar_분석보고서_2026-02-18.md`) 기반 작업 목록

### 왜 이게 중요한가?
- 현재 JSON-LD가 0개 → Perplexity, Google AI가 데이터를 제대로 인식 못함
- 177개 도구 페이지 모두 내용(content_html)이 비어있음 → 구글이 가치 없는 페이지로 판단
- 내부 링크 없음 → 방문자가 1페이지 보고 바로 이탈

---

### 체크리스트 (우선순위 순)

#### 🔴 1순위: 구조화 데이터 (JSON-LD) — Claude가 코드 작성
- [x] 도구 리뷰 페이지에 SoftwareApplication + AggregateRating Schema 추가 ✅
- [x] 비교 페이지에 BreadcrumbList Schema 추가 ✅
- [x] 카테고리 페이지에 ItemList Schema 추가 ✅
- [x] 홈페이지에 WebSite + Organization Schema 추가 ✅

#### 🔴 2순위: Open Graph / SNS 공유 최적화 — Claude가 코드 작성
- [x] `layout.tsx`에 기본 OG 태그 추가 ✅
- [x] 각 페이지별 OG 제목, 설명 동적 적용 확인 ✅ (도구/비교/카테고리 모두 적용)

#### 🟡 3순위: 내부 링크 강화 — Claude가 코드 작성
- [x] 도구 리뷰 페이지에 "Explore More" 링크 추가 (대안, 가격, 카테고리) ✅
- [x] 도구 리뷰 페이지에 "대안 보기" 링크 추가 ✅
- [x] 카테고리 페이지에 "인기 비교" 섹션 추가 ✅

#### 🟡 4순위: 비교 페이지 전수 확장 — Claude가 코드 작성
- [x] 카테고리 내 전체 도구로 비교 확장 완료 (450개 → 1,526개 비교 페이지) ✅

#### 🟢 5순위: Google Search Console 등록 — 직접 해야 함
- [ ] Google Search Console → 속성 추가 (www.aitoolradar.net)
- [ ] sitemap.xml 제출 (`www.aitoolradar.net/sitemap.xml`)
- [ ] URL 색인 요청

#### 🟢 6순위: 콘텐츠 채우기 — Claude가 SQL 작성, 직접 실행
- [ ] 177개 도구 리뷰 내용(content_html) 자동 생성 SQL
- [ ] Supabase SQL Editor에서 실행

---

### 완료 확인 체크리스트
- [x] JSON-LD 추가 → 구글 리치 스니펫 테스터 확인 ✅
- [x] Open Graph 추가 → opengraph.xyz 미리보기 확인 ✅
- [x] 내부 링크 추가 완료 ✅
- [ ] Google Search Console 등록 + sitemap 제출
- [ ] git push → Vercel 자동 배포 완료

---

## Phase 7~9: 이후 단계 (Claude와 함께 진행)

Phase 6까지 완료하면 Claude에게 다음 단계 요청하세요:
- "Phase 7: 제휴 프로그램 가입 도와주세요"
- 등등...

---

## 파일 구조 설명 (초보자용)

```
aitoolradar/
├── app/                    ← 🌐 웹페이지들이 들어있는 폴더
│   ├── page.tsx            ← 홈페이지 (aitoolradar.com/)
│   ├── layout.tsx          ← 모든 페이지의 공통 틀 (헤더, 푸터)
│   ├── ai-tools/[slug]/    ← 도구 리뷰 (aitoolradar.com/ai-tools/jasper)
│   ├── compare/[...]/      ← 비교 페이지 (aitoolradar.com/compare/a-vs-b)
│   ├── best/[category]/    ← 카테고리 (aitoolradar.com/best/ai-writing-tools)
│   ├── pricing/[slug]/     ← 가격 (aitoolradar.com/pricing/zapier)
│   ├── alternatives/[...]/  ← 대안 (aitoolradar.com/alternatives/chatgpt)
│   ├── sitemap.ts          ← 구글에 알려주는 페이지 목록
│   └── robots.ts           ← 구글 크롤러 제어
│
├── components/             ← 🧩 재사용 가능한 UI 조각들
│   ├── Header.tsx          ← 상단 메뉴바
│   ├── Footer.tsx          ← 하단 정보
│   └── ToolCard.tsx        ← 도구 카드 (목록에서 보이는 개별 카드)
│
├── lib/                    ← 🔧 유틸리티 코드
│   ├── supabase/           ← 데이터베이스 연결 설정
│   ├── queries/tools.ts    ← DB에서 데이터 가져오는 함수들
│   └── types.ts            ← 데이터 형태 정의
│
├── scripts/                ← 📜 직접 실행하는 스크립트
│   ├── schema.sql          ← DB 테이블 만드는 SQL
│   └── seed-data.sql       ← 초기 데이터 넣는 SQL
│
├── docs/                   ← 📄 문서
│   └── PRD_v3.md           ← 프로젝트 기획서
│
├── .env.local.example      ← 환경변수 템플릿 (이걸 .env.local로 복사)
├── PROGRESS.md             ← 📊 이 파일! 진행 상황 추적
└── CLAUDE.md               ← 🤖 Claude에게 주는 프로젝트 설명서
```

---

## 용어 사전 (자주 나오는 단어)

| 용어 | 의미 |
|------|------|
| **pSEO** | Programmatic SEO. 데이터로 페이지를 자동 대량 생성하는 기법 |
| **SSG** | Static Site Generation. 빌드할 때 미리 HTML을 만들어두는 방식 |
| **ISR** | Incremental Static Regeneration. SSG인데 주기적으로 업데이트 |
| **slug** | URL에 들어가는 이름 (예: "jasper", "copy-ai") |
| **Supabase** | 무료 데이터베이스 서비스 (PostgreSQL 기반) |
| **Vercel** | Next.js를 무료로 배포할 수 있는 호스팅 서비스 |
| **리커링** | 매달 반복적으로 들어오는 수익 (recurring revenue) |
| **CPA** | Cost Per Action. 한 건당 수수료 |
| **제휴 마케팅** | 다른 회사 제품 추천하고 수수료 받는 것 |
| **CTA** | Call To Action. "지금 시작하기" 같은 행동 유도 버튼 |
