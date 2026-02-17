# PRD v3.0: AI Tools 프로그램매틱 SEO 수익 시스템

## Context: 왜 이 프로젝트인가

**문제:** 기존 블로그형 제휴 마케팅은 콘텐츠 1개당 수작업이 많고, 확장성이 낮다.
**해법:** 프로그램매틱 SEO(pSEO)로 데이터 기반 페이지를 수천~수만 개 자동 생성하여 롱테일 키워드를 장악한다.
**벤치마크:** G2(월 230만 방문), Zapier(수십만 연동 페이지), Nomad List(24,000+ 페이지)

**딥리서치 보고서 핵심 인사이트:**
- 2026년은 "시스템을 구축하는 능력"이 수익을 결정하는 시대
- pSEO + 고단가 리커링 제휴 = 최고 ROI
- AI Tools 니치: 데이터 구조화 용이, CPC $5-15, 리커링 20-50%

---

## 솔직한 조언 (세계 최고 사업가 관점)

### 현실적 수익 타임라인
| 기간 | 예상 월수익 | 상태 |
|------|-----------|------|
| Month 1-2 | $0 | 시스템 구축 + 데이터 수집 |
| Month 3-4 | $0-100 | 페이지 인덱싱 시작, 첫 트래픽 |
| Month 5-6 | $100-500 | 롱테일 키워드 랭킹 시작 |
| Month 7-9 | $500-2,000 | 트래픽 성장 + 제휴 전환 |
| Month 10-12 | $2,000-5,000+ | 복리 효과 + 2번째 사이트 |

### 성공을 위한 5가지 원칙
1. **속도 > 완벽함**: 80% 완성으로 빨리 런칭하고 데이터로 개선
2. **데이터가 해자(moat)**: 독자적 데이터셋을 구축하면 경쟁자가 따라올 수 없음
3. **한 사이트에 올인**: 월 $3,000 달성 전까지 절대 두 번째 사이트 시작하지 말 것
4. **리커링 우선**: CPA보다 리커링 커미션 프로그램 우선 가입
5. **코드는 AI가, 전략은 내가**: 초보자여도 AI 코딩 도구로 충분히 구현 가능

---

## 프로젝트 개요

### 사이트 컨셉
- **이름 (가칭):** AIToolRadar.com (또는 유사 도메인)
- **모델:** G2 + Zapier의 AI Tools 특화 버전
- **차별화:** 실사용 데이터 기반 비교 + 인터랙티브 ROI 계산기 + 연동 가이드

### 페이지 유형 (pSEO 템플릿)
| 유형 | 예시 URL | 타겟 키워드 패턴 | 예상 페이지 수 |
|------|---------|-----------------|--------------|
| 개별 리뷰 | /ai-tools/jasper | "jasper review 2026" | 500+ |
| 1:1 비교 | /compare/jasper-vs-copy-ai | "jasper vs copy ai" | 5,000+ |
| 카테고리 | /best/ai-writing-tools | "best ai writing tools" | 100+ |
| 가격 비교 | /pricing/jasper | "jasper pricing 2026" | 500+ |
| 대안 찾기 | /alternatives/chatgpt | "chatgpt alternatives" | 500+ |
| 연동 가이드 | /integrations/jasper-slack | "jasper slack integration" | 2,000+ |

**총 예상: 8,000-10,000+ 페이지**

---

## 기술 아키텍처

### 기술 스택
- Frontend: Next.js 15 (App Router, SSG/ISR) + TypeScript
- Database: Supabase (PostgreSQL + Auth + Storage)
- Hosting: Vercel (무료 티어)
- Styling: Tailwind CSS
- Charts: Chart.js + react-chartjs-2
- Data: Firecrawl / Cheerio (Node.js)
- Automation: n8n 또는 GitHub Actions
- AI: Gemini API (메인) + Claude API (검증)

### 비용 구조 (월)
| 항목 | 비용 | 비고 |
|------|------|------|
| Vercel | $0 | Hobby 무료 |
| Supabase | $0→$25 | 무료 시작 |
| 도메인 | ~$1 | 연 $10 |
| Gemini API | $0-10 | 무료 티어 |
| **합계** | **$1-55** | |

### 시스템 흐름
```
[데이터 소스] → [수집] → [Supabase DB] → [Next.js SSG] → [Vercel CDN]
                                                              ↓
[n8n 자동화] → Google Indexing API / Reddit / X 자동 포스팅
```

### DB 테이블
- `categories`: 카테고리 (AI Writing, Image, Coding 등)
- `ai_tools`: AI 도구 마스터 (이름, 가격, 기능, pros/cons, 제휴링크)
- `pricing_plans`: 가격 플랜 (도구당 여러 개)
- `integrations`: 도구 간 연동 정보

---

## 수익 모델

| 수익원 | 비중 | 설명 |
|--------|------|------|
| 제휴 리커링 | 50% | SaaS 월 구독료 20-50% 지속 |
| 제휴 CPA | 20% | 가입당 $50-500 |
| 광고 | 20% | Mediavine (50k 세션 후) |
| 스폰서 | 10% | 프리미엄 리스팅 판매 |

### 주요 제휴 프로그램
| 프로그램 | 커미션 | 우선순위 |
|---------|--------|---------|
| Jasper AI | 30% 리커링 | 1순위 |
| Copy.ai | 45% 리커링 | 1순위 |
| Zapier | 20% 리커링 | 1순위 |
| Make.com | 20% 리커링 | 1순위 |
| Notion | 50% 첫결제 | 2순위 |
| Pictory | $100/가입 | 2순위 |

---

## 개발 로드맵 (12주)

### Week 1-2: 프로젝트 셋업 + 데이터 수집
- Next.js 프로젝트 생성 + Supabase 연동
- DB 스키마 + 시드 데이터
- 기본 레이아웃 + 홈페이지
- 도메인 + Vercel 배포
- 200개 도구 데이터 수집

### Week 3-4: 핵심 페이지 템플릿
- /ai-tools/[slug], /compare/[a]-vs-[b]
- /best/[category], /pricing/[slug]
- Chart.js 비교 차트, ROI 계산기

### Week 5-6: SEO 최적화 + 인덱싱
- 사이트맵, robots.txt, JSON-LD
- Google Search Console + Indexing API
- Internal linking, OG/Twitter 태그

### Week 7-8: 콘텐츠 확장 + 제휴
- 500+ 도구 확장
- 제휴 프로그램 가입 신청
- /alternatives/[slug] 추가

### Week 9-10: 트래픽 자동화
- Reddit 모니터링 + X 자동 포스팅
- n8n 워크플로우

### Week 11-12: 분석 + 최적화
- GA4 + Search Console 분석
- A/B 테스트, 수익 대시보드
