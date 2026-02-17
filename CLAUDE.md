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
- Phase 1 완료 (프로젝트 셋업 + 코드 작성)
- Phase 2 완료 (Supabase 연동: schema.sql, seed-data.sql 실행, .env.local 설정)
- Phase 3 완료 (로컬 페이지 동작 확인)
- Phase 4 진행 중 (도메인 구매 + Vercel 배포)
