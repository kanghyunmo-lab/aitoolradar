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
- Phase 1~5 완료 ✅
- Phase 6 SEO 최적화 80% 완료 (JSON-LD, OG, 내부링크, GSC 등록, 비교 확장, content_html 26개)
- Phase 7 수익 기반 구축 대기 (제휴 가입, GA4, 블로그)
- 배포: www.aitoolradar.net (Vercel + GitHub 자동 배포)
- DB: 177개 AI 도구, 10개 카테고리, 2,057 페이지 (Supabase)
- 긴급: git push 배포 필요 (코드 변경사항 미반영)
- 다음 작업: PROGRESS.md "지금 당장 해야 할 것" 참고
