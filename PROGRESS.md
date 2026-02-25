# AIToolRadar 진행 상황

> 마지막 업데이트: 2026-02-25
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`

---

## 전체 진행률

```
기반 구축 (Phase 1~6)   [████████████████████] 100% ✅
수익 기반 (Phase 7)     [████████░░░░░░░░░░░░]  40% 🔄 ← 지금 여기
트래픽 확보 (Phase 8)   [██████████░░░░░░░░░░]  50% 🔄
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
| Google 색인 요청 | 3차 완료 — 12개 미색인 (원인 파악 필요) |
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
- /compare 페이지 UX 개선 (한글→영어, 공유 카테고리 탭, 리스트 뷰)
- Indexing API 3차 완료 (12개 미색인 잔여)

---

## 🔴 지금 당장 해야 함 (직접) — 수익화 병목 해소

> 기준: 사이트 수정은 기능 오류가 없으면 건드리지 않는다. 지금부터는 수익화 준비.

| 순위 | 작업 | 방법 | 상태 |
|------|------|------|------|
| **1** | **제휴 가입 지금 바로** | Jasper: partnerstack.com / Copy.ai: partnerstack.com / Semrush: berush.com | ⬜ **최우선** |
| **2** | Writesonic 승인 확인 | affiliates.writesonic.com | ⏳ 대기 중 |
| **3** | 비교 페이지 샘플 10개 직접 읽기 | aitoolradar.net/compare/ 아무거나 10개 | ⬜ |
| **4** | 미색인 12개 URL 확인 | Google Search Console → 색인 안됨 탭 | ⬜ |
| **5** | AI 도구 회사 5곳에 링크 공유 요청 | 트위터 DM 또는 이메일 | ⬜ 백링크 씨앗 |

> 제휴 링크 받으면 즉시 Claude Code에게 전달 → C-2 작업 시작

---

## 🟡 Claude Code 대기 작업

| 순위 | 작업 | 트리거 | 상태 |
|------|------|--------|------|
| **C-1** | affiliate_url DB 업데이트 + 도구 페이지 CTA 버튼 | 제휴 링크 수령 즉시 | ⬜ **다음 작업** |
| **C-2** | GA4 affiliate_click 이벤트 추적 | C-1 완료 후 | ⬜ |
| **C-3** | 얇은 비교 페이지 noindex 처리 | 품질 확인 결과 받은 후 | ⬜ |
| **C-4** | 미색인 12개 URL 원인 파악 + 대응 | URL 목록 공유 후 | ⬜ |
| **C-5** | AI 도구 추천 퀴즈 위젯 | Month 4+ | ⬜ |

---

## 🟢 Month 3~4 (블로그 전략 전환)

> 지금 블로그 10개는 충분. 트래픽 데이터 없이 추가 생성 금지.
> Month 3 이후 GA4 데이터 보고 → 수요 확인된 주제만 작성.

| 작업 | 담당 | 시점 |
|------|------|------|
| **워크플로우 블로그 1개 (검증용)** | Antigravity | Month 3 |
| ↳ 예: "Best AI Stack for YouTube Automation" | | 낮은 경쟁, 고구매의도 |
| 블로그 성과 분석 후 추가 작성 여부 결정 | 직접 | Month 4 |

## 🟢 Month 4~6 이후

| 작업 | 담당 | 시점 |
|------|------|------|
| 상위 50개 비교 페이지 content_html 강화 | Antigravity | Month 4 |
| 도구 300개로 확장 | Antigravity | Month 4~6 |
| 워크플로우 블로그 데이터 검증 완료 시 → /workflows/ 전용 페이지 개발 | Claude Code | Month 5~6 |
| Reddit 커뮤니티 진성 참여 | 직접 | 트래픽 생기면서 병행 |

## 🔮 워크플로우 전략 (검증 후 실행)

> 핵심 아이디어: "도구 비교"에서 "워크플로우 추천"으로 포지션 전환
> 방문자 1명당 수익 4~5배 / 경쟁 낮은 키워드 / 높은 구매 의도

**검증 순서:**
1. 블로그 1개로 트래픽 테스트 (Month 3)
2. 트래픽 확인되면 → /workflows/[slug] 전용 페이지 (Month 5~6)
3. 트래픽 확인되면 → 워크플로우 퀴즈 ("What do you want to automate?") (Month 8+)

**예시 워크플로우 콘텐츠:**
- AI YouTube Automation Stack (Script → Voice → Edit → Thumbnail)
- AI Content Marketing Workflow (Research → Write → Design → Schedule)
- AI Coding Workflow (IDE → Review → Test → Deploy)
- AI Customer Support Stack (Chat → Summarize → Ticket → Analytics)

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
