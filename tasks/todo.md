# AIToolRadar - Task Tracker

## 현재 작업 (Current Sprint)

### Claude Code 담당
- [ ] **워크플로우 단계별 설명 추가** — `WorkflowStep`에 `description` 필드 추가, 페이지 표시 개선

### Antigravity 담당
- [ ] **워크플로우 15개 콘텐츠 업그레이드** — 각 step에 `description` 2,000자+ 추가 (DB 업데이트)
- [ ] **새 워크플로우 10개 추가** (월 10개 이하 속도 준수)

### 사용자 담당
- [ ] X 계정 프로필 완성 (바이오, 웹사이트 링크)
- [ ] Reddit 계정 생성 + 첫 2주 링크 없이 답변 활동 시작

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
