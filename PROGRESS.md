# AIToolRadar 진행 상황

> 마지막 업데이트: 2026-02-24 (2차)
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`

---

## 전체 진행률

```
기반 구축 (Phase 1~6)   [████████████████████] 100% ✅
수익 기반 (Phase 7)     [████████░░░░░░░░░░░░]  40% 🔄 ← 지금 여기
트래픽 확보 (Phase 8)   [████████░░░░░░░░░░░░]  40% 🔄
분석+최적화 (Phase 9)   [░░░░░░░░░░░░░░░░░░░░]   0%
```

---

## 현재 핵심 수치

| 항목 | 수치 |
|------|------|
| AI 도구 수 | 177개 |
| 총 페이지 수 | ~2,086개 |
| 비교 페이지 | 1,526개 |
| 블로그 글 | 10개 ✅ |
| content_html | 177개 전체 완료 ✅ |
| 법적 페이지 | 5개 완료 ✅ |
| GA4 | 설치 완료 ✅ (G-VC94ZW0C5N) |
| Google 색인 요청 | 200/612개 완료 (2026-02-21 1차) |
| 월 방문자 | ~0명 |
| 월 수익 | $0 |

---

## ✅ 완료된 것 (건드리지 말 것)

- Next.js 15 + Supabase + Vercel 배포
- 177개 도구 + 1,526개 비교 페이지
- content_html 177개 (5가지 패턴 적용)
- 블로그 10개 발행
- 법적 페이지 5개 (affiliate-disclosure 포함)
- GA4 설치 + Google Search Console + Indexing API 1차
- JSON-LD / OG태그 / 사이트맵 SEO 완료
- 로고 깨짐 수정 (ToolLogo 컴포넌트, 색상+이니셜 폴백)
- 헤더 검색창 + /search 페이지 완성
- 홈페이지 히어로 대형 검색창 + 인기 검색어 링크
- "500+" → "177+" 수정 (homepage + layout 메타데이터)
- 카테고리 페이지 연도 동적화 (2026 하드코딩 제거)
- 카테고리 페이지 필터 버튼 (All / Free / Paid / Free Trial)

---

## 🔴 Month 1~3 (지금~5월) — 직접 해야 함

| 순위 | 작업 | 방법 | 상태 |
|------|------|------|------|
| **1** | 비교 페이지 샘플 10개 직접 읽기 | aitoolradar.net/compare/ 아무거나 10개 | ⬜ 최우선 |
| **2** | Indexing API 2차 실행 | `node scripts/google-indexing.js` | ⬜ |
| **3** | Indexing API 3차 실행 | `node scripts/google-indexing.js` | ⬜ |
| **4** | Writesonic 승인 확인 | affiliates.writesonic.com | ⏳ 대기 중 |
| **5** | Copy.ai / Semrush / Jasper 가입 | PartnerStack 마켓 | ⬜ |
| **6** | 리뷰한 AI 도구 회사 10곳에 링크 공유 요청 | 각 도구 공식 트위터/이메일 | ⬜ 백링크 씨앗 |

> 비교 페이지 품질 확인 후 → Claude Code에게 결과 전달 (noindex 여부 결정)

---

## 🟡 Claude Code 대기 작업

| 순위 | 작업 | 트리거 | 상태 |
|------|------|--------|------|
| **C-1** | 얇은 비교 페이지 noindex 처리 | 품질 확인 후 | ⬜ |
| **C-2** | affiliate_url DB 업데이트 + CTA 버튼 개선 | 제휴 링크 수령 후 | ⬜ |
| **C-3** | GA4 affiliate_click 이벤트 | C-2 완료 후 | ⬜ |
| **C-4** | AI 도구 추천 퀴즈 위젯 | Month 4+ | ⬜ |

---

## 🟢 Month 4~6 이후

| 작업 | 담당 | 시점 |
|------|------|------|
| 상위 50개 비교 페이지 content_html 강화 | Antigravity | Month 4 |
| 도구 300개로 확장 | Antigravity | Month 4~6 |
| 블로그 월 2개 발행 | Antigravity | 지속 |
| Reddit 커뮤니티 진성 참여 | 직접 | 트래픽 생기면서 병행 |

---

## 수익 타임라인 (현실 기준, 1년 무수익 각오)

| 기간 | 방문자 목표 | 수익 목표 | 핵심 변수 |
|------|------------|----------|----------|
| Month 1~3 (지금) | 50~200명/월 | $0 | 색인 완료, 제휴 CTA 준비 |
| Month 4~6 | 500~1,500명/월 | $0~50 | 롱테일 랭킹 시작 |
| Month 7~9 | 2,000~5,000명/월 | $50~300 | 백링크 효과 가시화 |
| Month 10~12 | 5,000~15,000명/월 | $300~1,000 | 리커링 수수료 누적 |
| Month 13~18 | 유지+성장 | $1,000~3,000 | 도구 300개+ 확장 효과 |
| Month 19~24 | — | $3,000~5,000 | 안정적 복리 구조 |

---

## 추천 AI 모델 가이드

| 담당 | 언제 사용 |
|------|----------|
| ⚡ Claude Code | 코드 수정, 기능 추가, git push |
| 🔍 Antigravity | 도구 데이터 확장, 블로그 글 작성, SQL 생성 |
| 🧑‍💻 직접 | 제휴 가입, API 키 발급, 커뮤니티 활동 |

---

## 파일 구조 (핵심만)

```
aitoolradar/
├── app/
│   ├── page.tsx              ← 홈페이지
│   ├── ai-tools/[slug]/      ← 도구 리뷰
│   ├── compare/[...]/        ← 비교 페이지
│   ├── best/[category]/      ← 카테고리
│   ├── pricing/[slug]/       ← 가격
│   ├── alternatives/[...]/   ← 대안
│   └── blog/[slug]/          ← 블로그
├── docs/
│   ├── PRD_v3.md             ← 전략 기준 문서
│   └── 참고자료.md            ← 경쟁사/제휴/콘텐츠 참고
├── scripts/
│   └── google-indexing.js    ← 색인 요청 스크립트
├── PROGRESS.md               ← 이 파일
└── CLAUDE.md                 ← Claude 지침서
```
