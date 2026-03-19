# AIToolRadar - pSEO AI Tool Comparison Site

## Stack
- Next.js 15 (App Router, SSG/ISR) + TypeScript + Tailwind CSS
- Supabase (PostgreSQL), Vercel hosting
- Chart.js, Gemini API (content), Claude API (validation)

## Architecture
- pSEO: data-driven pages auto-generated from DB
- 6 page types: /ai-tools/[slug], /compare/[a]-vs-[b], /best/[category], /pricing/[slug], /alternatives/[slug], /integrations/[a]-[b]
- Target: 8,000-10,000+ pages from structured data

## Key Files
- `lib/supabase/server.ts` - server-side Supabase client
- `lib/queries/tools.ts` - all DB query functions
- `lib/types.ts` - TypeScript interfaces (AiTool, Category, PricingPlan)
- `scripts/schema.sql` - DB schema (4 tables: ai_tools, categories, pricing_plans, integrations)
- `scripts/seed-data.sql` - seed data (10 tools, 5 categories)

## Conventions
- 모든 페이지 서버 컴포넌트 (RSC), 인터랙티브 요소만 'use client'
- SEO 메타데이터는 반드시 generateMetadata()로 동적 생성
- affiliate 링크에 rel="noopener noreferrer nofollow" 필수
- 한국어 사용자, 코딩 초보 → 설명은 한국어로, 코드 주석은 영어

## Docs
- 전체 PRD: `docs/PRD_v3.md`
- 진행 현황: `PROGRESS.md`
- 딥리서치 보고서: `../Programmatic SEO 수익화 전략 수립.md`

## Current Phase
> ★ 상세 진행 현황은 **`PROGRESS.md`** 가 단일 기준점입니다.

- Phase 1~6 완료 ✅, Phase 7 진행 중 (트래픽 확보 20%)
- 배포: www.aitoolradar.net (Vercel + GitHub 자동 배포)
- DB: **177개** AI 도구 | **18개** 워크플로우 | **12개** 블로그
- Google 색인: **1,870개 (88%)** ✅
- 홈 뱃지/메타데이터 → DB 연동 자동화 완료 ✅ (2026-03-19)
- 다음 작업: `PROGRESS.md` → "지금 당장 해야 할 것" 섹션 참고

---

## Workflow Constitution (Boris Cherny)

### 핵심 원칙 6가지

**1. Plan Mode Default**
- 3단계 이상이거나 아키텍처 결정이 필요한 모든 비자명한 작업 → 플랜 모드 먼저
- 문제 발생 시 즉시 멈추고 재계획
- 구현 전 스펙을 먼저 상세히 작성

**2. Subagent Strategy**
- 리서치·탐색·병렬 분석은 서브에이전트에게 위임
- 메인 컨텍스트 창을 청결하게 유지
- 복잡한 문제에는 최대 10개 서브에이전트 투입 가능

**3. Self-Improvement Loop**
- 사용자 수정이 발생할 때마다 `tasks/lessons.md`에 실수 패턴 기록
- 세션 시작 시 이전 교훈 먼저 검토
- 반복 실수 방지가 목표

**4. Verification Before Done**
- 증명 없이 완료 표시 금지
- 변경 전후 동작 비교 필수
- "시니어 스태프 엔지니어라면 승인할까?" 자문
- 테스트 실행·로그 확인·정확성 증명 후 완료

**5. Demand Elegance**
- 비자명한 변경의 경우 "더 우아한 방법이 있는가?" 자문
- 해킹 느낌의 수정 → "지금 알고 있는 모든 것을 반영한 우아한 해결책"으로 재구현
- 완료 전 자신의 작업에 도전

**6. Autonomous Bug Fixing**
- 버그 보고서 → 그냥 수정 (손 잡아달라고 요청 금지)
- 로그·오류·실패 테스트를 지적받으면 직접 해결
- 지시 없이 CI 실패 테스트 수정

### Task Management 7단계

1. **Plan First**: `tasks/todo.md`에 체크 항목으로 계획 작성
2. **Verify Plans**: 구현 시작 전 사용자에게 체크인
3. **Track Progress**: 진행하며 완료 항목 즉시 표시
4. **Explain Changes**: 각 단계별 요약 제공
5. **Document Results**: `tasks/todo.md`에 검토 섹션 추가
6. **Capture Lessons**: 수정 후 `tasks/lessons.md` 업데이트
7. **Stay Minimal**: 요청된 것만 변경, 과잉 엔지니어링 금지
