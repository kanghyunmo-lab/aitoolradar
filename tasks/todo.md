# AIToolRadar - Task Tracker

## 현재 작업 (Current Sprint)

### Claude Code 담당
- [x] **워크플로우 단계별 설명 추가** — `description` 필드 + HTML 렌더링 + JSON-LD + 메타 개선 ✅

### Antigravity 담당
- [x] **워크플로우 15개 콘텐츠 업그레이드** — 각 step에 description + 프롬프트 + Pro tip 추가 ✅
- [x] **3월 콘텐츠 SQL 4주치 작성 완료** — week1~4.sql (워크플로우 9개 + 블로그 8개) ✅
- [ ] **SQL 주별 실행** — 3/8, 3/14, 3/21, 3/28 (사용자가 Supabase에서 실행)

### Claude Code 담당
- [ ] **주별 SQL 실행 후 Vercel 재빌드** — 사용자 알림 시 git push
- [ ] **Indexing API 제출** — 새 워크플로우/블로그 URL 색인 요청

### 사용자 담당
- [x] X 계정 프로필 완성 + 첫 트윗 게시 ✅
- [x] Reddit 계정 생성 + 5개 서브레딧 Join ✅
- [x] X 팔로우 7개 계정 ✅
- [ ] **Reddit 읽기** (이번 주) → 답변 시작 (다음 주)
- [ ] **X 매일 댓글 5개** + 주 3회 트윗
- [ ] march-2026-checklist.md 보며 매일 루틴 진행

## 대기 중 (Backlog)

- [ ] 제휴 링크 CTA 버튼 개선 (Surfer SEO / HeyGen 링크 수령 후)
- [ ] AI 도구 추천 퀴즈 위젯 개발 (Stage 2 — 트래픽 500명+ 후)
- [ ] 도구 177 → 200개 확장 1차 (Antigravity, 2주 관찰 후 2차)

## 완료 (Done)

- [x] Phase 1~6 완료 (SEO 기초)
- [x] content_html 177개 전체 완료
- [x] 로고 깨짐 수정
- [x] 검색 기능 /search 추가
- [x] GA4 설정
- [x] docs 정리 (PRD_v3.md, PROGRESS.md, 참고자료.md)
- [x] 비교 페이지 404 수정 (slug 정규화 + redirect) — 2026-02-28
- [x] OG 이미지 생성 배포 (opengraph-image.tsx) — 2026-02-28
- [x] ProductHunt 공식 론칭 — 2026-02-28
- [x] 홈페이지 크리에이터 포지셔닝 리포지셔닝 — 2026-02-28
- [x] 워크플로우 목록 페이지 카테고리 탭 + 그룹 레이아웃 — 2026-02-28
- [x] PROGRESS.md 전략 전면 업데이트 — 2026-02-28
- [x] weekly-routine.md 작성 — 2026-02-28
- [x] 워크플로우 SEO 개선 (HTML렌더링 + JSON-LD + 메타) — 2026-03-01
- [x] 워크플로우 16개 description 콘텐츠 업그레이드 (Antigravity) — 2026-03-01
- [x] AI Faceless TikTok Automation 워크플로우 신규 추가 — 2026-03-01
- [x] X(Twitter) 계정 개설 + 첫 트윗 — 2026-03-01
- [x] Antigravity 3월 프롬프트 작성 + SQL 4주치 생성 — 2026-03-01
- [x] march-week1~4.sql 검토 + `''''` → `''` 수정 (120곳) — 2026-03-01
- [x] Reddit/X 마케팅 가이드 + 월간 체크리스트 작성 — 2026-03-01
- [x] Reddit 계정 생성 + 5개 서브레딧 가입 — 2026-03-01
- [x] X 팔로우 7개 계정 — 2026-03-01

---

## 검토 섹션 (Review)

### 2026-02-28 비교 페이지 404 수정
- 수정 파일: `app/compare/[comparison]/page.tsx`
- parseComparison()에 `.toLowerCase().trim()` 추가
- 비정규화 URL → 정규화 URL redirect 추가
- 효과: 대소문자 URL 입력 시 404 대신 올바른 페이지로 이동

### 2026-02-28 OG 이미지
- 생성 파일: `app/opengraph-image.tsx`
- 기존 깨진 `/og-default.png` 참조 제거
- 다크 테마 1200×630 자동 생성
- 효과: 소셜 공유 시 미리보기 카드 정상 표시

### 2026-02-28 워크플로우 콘텐츠 문제 파악
- 현재 문제: steps가 goal(제목) + tools(목록)만 있음. 실제 사용법 없음
- 해결: WorkflowStep에 `description` 필드 추가 필요
- 우선순위: 코드 수정(Claude Code) → DB 콘텐츠 업데이트(Antigravity) 순서

### 2026-03-01 워크플로우 SEO + 콘텐츠 업그레이드
- `lib/types.ts`: WorkflowStep에 `description?` 필드 추가
- `app/workflows/[slug]/page.tsx`: dangerouslySetInnerHTML로 HTML 렌더링
- JSON-LD HowTo: step.text에 description 포함 (HTML 태그 제거)
- generateMetadata: step 요약 추가 ("Steps: A → B → C")
- `lib/queries/workflows.ts`: 목록 정렬 ASC → DESC
- DB: 16개 워크플로우 전체 description + 프롬프트 + Pro tip 추가 (Antigravity)
- 교훈: SSG 페이지는 DB 변경 후 반드시 Vercel 재빌드 필요
