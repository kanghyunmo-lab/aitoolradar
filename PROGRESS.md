# AIToolRadar 진행 상황

> 마지막 업데이트: 2026-02-24
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`

---

## 전체 진행률

```
기반 구축 (Phase 1~6)   [████████████████████] 100% ✅
수익 기반 (Phase 7)     [████░░░░░░░░░░░░░░░░]  20% 🔄 ← 지금 여기
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

---

## 🔴 지금 당장 (이번 주) — 직접 해야 함

| 순위 | 작업 | 방법 | 상태 |
|------|------|------|------|
| **1** | Writesonic 승인 확인 | affiliates.writesonic.com | ⏳ 대기 중 |
| **2** | Semrush 가입 | semrush.com/partners | ⬜ |
| **3** | DeepL 가입 | PartnerStack 마켓에서 검색 | ⬜ |
| **4** | Copy.ai 가입 | PartnerStack 마켓에서 검색 | ⬜ |
| **5** | Jasper 가입 재시도 | PartnerStack 마켓에서 검색 | ⬜ |
| **6** | Indexing API 2차 실행 | `node scripts/google-indexing.js` | ⬜ |
| **7** | Indexing API 3차 실행 | `node scripts/google-indexing.js` | ⬜ |

> 가입 완료 → 제휴 링크 복사 → Claude Code에게 전달

---

## 🟡 제휴 링크 받은 후 — Claude Code 작업

| 순위 | 작업 | 상태 |
|------|------|------|
| **C-1** | 신규 도구 DB 등록 (Writesonic, DeepL, Synthesia, Frase.io) | ⬜ |
| **C-2** | affiliate_url DB 업데이트 SQL 작성 + 실행 | ⬜ |
| **C-3** | CTA 버튼 개선 (리뷰/비교/가격/대안 4개 페이지 타입) | ⬜ |
| **C-4** | GA4 affiliate_click 이벤트 연결 | ⬜ |
| **C-5** | AI 도구 추천 퀴즈 위젯 개발 | ⬜ |

---

## 🟢 다음 단계 (Stage 2~3)

| 작업 | 담당 | 시점 |
|------|------|------|
| 도구 300~500개 확장 | Antigravity | Stage 1 완료 후 |
| 블로그 글 추가 (월 2~4개) | Antigravity | 지속적으로 |
| 성장 5 제휴 가입 (Gamma, Zapier, Synthesia, Frase, Pictory) | 직접 | Week 2 |
| Reddit 커뮤니티 활동 | 직접 | 트래픽 생기면서 병행 |

---

## 현실적 수익 타임라인

| 기간 | 목표 | 핵심 |
|------|------|------|
| 1~3개월 (지금) | $0 | 제휴 CTA 반영, 색인 진행 중 |
| 4~6개월 | $0~100 | 첫 트래픽 유입 |
| 7~9개월 | $100~500 | 롱테일 랭킹 시작 |
| 10~12개월 | $500~1,500 | 리커링 누적 |
| 13~18개월 | $1,500~3,000 | Phase 1 목표 |
| 19~24개월 | $3,000~7,500 | B2B 추가 후 목표 |

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
