# AIToolRadar - Task Tracker

## 현재 작업 (Current Sprint)

<!-- 작업 시작 시 여기에 체크리스트 작성 -->
<!-- 예시:
- [ ] 블로그 기능 DB 스키마 설계
- [ ] blog_posts 테이블 생성 (Supabase)
- [ ] /blog/[slug] 페이지 구현
- [ ] 블로그 목록 페이지 /blog 구현
- [ ] 10개 블로그 글 import 스크립트 작성
-->

## 대기 중 (Backlog)

- [ ] 제휴 링크 CTA 버튼 개선 (Surfer SEO / HeyGen 링크 수령 후)
- [ ] AI 도구 추천 퀴즈 위젯 개발 (Stage 2 — 트래픽 500명+ 후)
- [ ] 도구 300~500개 확장 (Stage 2 — Antigravity)

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
