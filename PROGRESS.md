# AIToolRadar 진행 상황

> 마지막 업데이트: 2026-02-25
> 전략 기준: `docs/PRD_v3.md` | 참고 자료: `docs/참고자료.md`

---

## 전체 진행률

```
기반 구축 (Phase 1~6)   [████████████████████] 100% ✅
수익 기반 (Phase 7)     [████████████░░░░░░░░]  60% 🔄 ← 지금 여기
트래픽 확보 (Phase 8)   [████████████░░░░░░░░]  60% 🔄
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
| GA4 | 설치 완료 ✅ + affiliate_click 이벤트 추적 완료 ✅ |
| Google 색인 | 색인됨 ~2,074개 / 미색인 8개 (블로그) → 내부링크 추가로 해결 중 |
| 제휴 링크 | Writesonic 대기 중 / Rytr·Notion 신청 예정 |
| 월 방문자 | ~0명 |
| 월 수익 | $0 |

---

## ✅ 완료된 것 (건드리지 말 것)

- Next.js 15 + Supabase + Vercel 배포
- 177개 도구 + 1,526개 비교 페이지
- content_html 177개 (5가지 패턴 적용)
- 블로그 10개 발행
- 법적 페이지 5개 (affiliate-disclosure 포함)
- GA4 설치 + Google Search Console + Indexing API 3차
- JSON-LD / OG태그 / 사이트맵 SEO 완료
- 로고 깨짐 수정 (ToolLogo 컴포넌트)
- 헤더 검색창 + /search 페이지
- 홈페이지 히어로 검색창 + 인기 검색어 링크
- 카테고리 페이지 필터 버튼 (All / Free / Paid / Free Trial)
- /compare 페이지 UX 개선 (공유 카테고리 탭, 리스트 뷰, 영어화)
- **AffiliateCTA 컴포넌트** — GA4 affiliate_click 이벤트 자동 추적 ✅
- **홈페이지 "Latest AI Tool Guides" 섹션** — 블로그 색인 내부링크 해결 ✅
- **푸터 Blog 링크 추가** ✅

---

## 🔴 지금 당장 해야 함 (직접)

| 순위 | 작업 | 방법 | 상태 |
|------|------|------|------|
| **1** | **Rytr 제휴 가입** | rytr.me → 하단 Affiliate Program (즉시 승인) | ⬜ **최우선** |
| **2** | **Notion 제휴 신청** | notion.so/affiliates (1~3일 승인) | ⬜ |
| **3** | **PartnerStack 파트너 계정 생성** | "I'm a partner" → Google 가입 (계정만) | ⬜ |
| **4** | Writesonic 승인 확인 | affiliates.writesonic.com | ⏳ 대기 중 |

> 링크 받으면 즉시 Claude Code에게 전달 → DB 업데이트 5분 내 처리

---

## 🟡 Claude Code 대기 작업

| 순위 | 작업 | 트리거 | 상태 |
|------|------|--------|------|
| **C-1** | affiliate_url DB 업데이트 (해당 도구들) | 제휴 링크 수령 즉시 | ⬜ **다음 작업** |
| **C-2** | GA4 affiliate_click 이벤트 추적 | ~~대기~~ | ✅ 완료 |
| **C-3** | 얇은 비교 페이지 noindex 처리 | Month 3 품질 점검 후 | ⬜ |
| **C-4** | 미색인 8개 블로그 재확인 | 2주 후 Search Console 확인 | ⬜ |
| **C-5** | AI 도구 추천 퀴즈 위젯 | Month 4+ | ⬜ |

---

## 타임라인

### 지금 ~ 2주 (Month 2 완료)
**목표: 제휴 링크 최소 1개 확보 + CTA 버튼 활성화**

```
[직접] Rytr 제휴 가입 → 링크 받기
[직접] Notion 제휴 신청 → 승인 대기
[직접] Writesonic 승인 여부 확인
[Claude Code] 링크 받으면 즉시 DB 업데이트
[자동] 홈페이지 내부링크로 블로그 8개 색인 진행 중
```

### Month 3 (3월 말)
**목표: 트래픽 첫 신호 확인**

```
[직접] GA4에서 방문자 패턴 확인
[직접] Search Console에서 노출 키워드 확인
[Antigravity] 워크플로우 블로그 1개 작성 (검증용)
  예: "Best AI Stack for YouTube Automation 2026"
[Claude Code] 블로그 8개 색인 여부 재확인 + 대응
```

### Month 4~6
**목표: 첫 수익 $1~50 발생**

```
[Antigravity] 도구 300개로 확장
[Antigravity] 상위 비교 페이지 50개 콘텐츠 강화
[직접] Reddit / X(트위터) 커뮤니티 참여 시작
[Claude Code] 워크플로우 블로그 트래픽 확인 후 /workflows/ 페이지 개발 여부 결정
```

### Month 7~9
**목표: 방문자 2,000~5,000명 / 수익 $50~300**

```
백링크 효과 가시화
리커링 수수료 누적 시작
퀴즈 위젯 개발 검토
```

---

## 수익 목표 (현실 기준)

| 기간 | 방문자/월 | 수익/월 |
|------|----------|---------|
| Month 1~3 (지금) | 50~200명 | $0 |
| Month 4~6 | 500~1,500명 | $0~50 |
| Month 7~9 | 2,000~5,000명 | $50~300 |
| Month 10~12 | 5,000~15,000명 | $300~1,000 |
| Month 13~18 | 유지+성장 | $1,000~3,000 |
| Month 19~24 | — | $3,000~5,000 |

---

## 담당별 역할

| 담당 | 언제 사용 |
|------|----------|
| ⚡ Claude Code | 코드 수정, 기능 추가, DB 업데이트, git push |
| 🔍 Antigravity | 도구 데이터 확장, 블로그 작성, SQL 생성 |
| 🧑‍💻 직접 | 제휴 가입, API 키, 커뮤니티 활동, GA4 확인 |

---

## 파일 구조 (핵심만)

```
aitoolradar/
├── app/
│   ├── page.tsx              ← 홈페이지 (블로그 섹션 포함)
│   ├── ai-tools/[slug]/      ← 도구 리뷰 (AffiliateCTA 적용)
│   ├── compare/[...]/        ← 비교 페이지 (AffiliateCTA 적용)
│   ├── best/[category]/      ← 카테고리
│   ├── pricing/[slug]/       ← 가격
│   ├── alternatives/[...]/   ← 대안
│   └── blog/[slug]/          ← 블로그
├── components/
│   └── AffiliateCTA.tsx      ← GA4 추적 CTA 버튼 컴포넌트
├── docs/
│   ├── PRD_v3.md             ← 전략 기준 문서
│   └── 참고자료.md            ← 경쟁사/제휴/콘텐츠 참고
├── PROGRESS.md               ← 이 파일
└── CLAUDE.md                 ← Claude 지침서
```
