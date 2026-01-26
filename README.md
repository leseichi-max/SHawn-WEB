# SHawn Lab - Next.js Digital Lab

**Version**: 5.0 (Lab Manager Edition)  
**Framework**: Next.js 14 + MDX + Tailwind CSS

---

## 🎯 Overview

`03-Digital-Lab`은 SHawn Lab의 공식 웹사이트로, Obsidian에서 작성한 연구 노트를 자동으로 웹에 발행하는 시스템입니다.

---

## 📁 Directory Structure

```
03-Digital-Lab/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 전역 레이아웃
│   ├── page.tsx            # 홈페이지
│   ├── blog/               # 블로그
│   │   ├── page.tsx        # 블로그 목록
│   │   └── [slug]/         # 개별 포스트
│   └── globals.css         # 글로벌 스타일
├── components/             # React 컴포넌트
├── content/                # 콘텐츠 (자동 생성됨)
│   └── posts/              # 포스트 (MDX)
├── lib/                    # 유틸리티
│   ├── mdx.ts              # MDX 처리
│   └── utils.ts            # 헬퍼 함수
├── Posts/                  # ✍️ 여기에 포스트 작성
├── package.json            # 의존성
├── next.config.mjs         # Next.js 설정
├── tailwind.config.ts      # Tailwind 설정
└── tsconfig.json           # TypeScript 설정
```

---

## 🚀 Getting Started

### 1. 초기 설정 (한 번만 실행)

```bash
cd ~/Documents/GitHub/SHawn-Lab-Vault/03-Digital-Lab

# 의존성 설치
npm install
```

### 2. 포스트 작성

**위치**: `03-Digital-Lab/Posts/` 폴더

**형식**:
```markdown
---
title: "포스트 제목"
date: "2025-01-19"
description: "포스트 설명"
category: "research"
tags: ["bio-informatics", "RNA-seq"]
featured: false
blog_publish: true      # ⭐ 반드시 true
---

# 내용

여기에 마크다운으로 작성...
```

### 3. 동기화 및 빌드

```bash
# Vault 루트로 이동
cd ~/Documents/GitHub/SHawn-Lab-Vault

# Obsidian Posts → Next.js content/posts 변환
python3 sync_to_nextjs.py

# 개발 서버 실행
cd 03-Digital-Lab
npm run dev

# 브라우저에서 확인
# http://localhost:3000
```

---

## 📝 YAML Frontmatter 필드

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | ✅ | 포스트 제목 |
| `blog_publish` | ✅ | `true`여야 발행됨 |
| `date` | 선택 | 없으면 현재 날짜 자동 설정 |
| `description` | 선택 | 없으면 제목 기반 자동 생성 |
| `category` | 선택 | `research`, `intelligence`, `blog` |
| `tags` | 선택 | 배열 형식 `["tag1", "tag2"]` |
| `featured` | 선택 | `true`면 홈페이지에 표시 |

---

## 🎨 카테고리

- `research`: 바이오인포매틱스 연구
- `intelligence`: 시장 인텔리전스
- `blog`: 일반 블로그

---

## 🔄 워크플로우

1. **Obsidian에서 포스트 작성** (`Posts/` 폴더)
2. **`sync_to_nextjs.py` 실행** → MDX 파일 생성
3. **`npm run dev` 실행** → 로컬 서버에서 확인
4. **Git push** → GitHub Pages 배포

---

## 📤 배포

### 로컬 빌드
```bash
cd 03-Digital-Lab
npm run build
```

### GitHub Pages (향후)
GitHub Actions를 통한 자동 배포 예정

---

## 🛠️ 커스터마이징

### CSS 수정
- `app/globals.css` - 글로벌 스타일
- `tailwind.config.ts` - Tailwind 설정

### 컴포넌트 추가
- `components/` 폴더에 React 컴포넌트 추가

### 레이아웃 수정
- `app/layout.tsx` - 헤더/푸터 포함

---

## 📋 체크리스트

**포스트 작성 시:**
- [ ] `Posts/` 폴더에 `.md` 파일 생성
- [ ] `blog_publish: true` 설정
- [ ] `title` 필드 입력
- [ ] `python3 sync_to_nextjs.py` 실행
- [ ] `npm run dev`로 미리보기
- [ ] Git commit & push

---

## 🐛 Troubleshooting

### 포스트가 안 보일 때
1. `blog_publish: true` 확인
2. `sync_to_nextjs.py` 재실행
3. `content/posts/` 폴더에 `.mdx` 파일 생성 확인
4. Next.js 서버 재시작

### npm install 오류
```bash
# Node.js 버전 확인 (18+ 필요)
node -v

# 캐시 클리어 후 재설치
rm -rf node_modules package-lock.json
npm install
```

---

## 🔗 유용한 명령어

```bash
# 동기화
python3 sync_to_nextjs.py

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm start

# 린트
npm run lint
```

---

## 📚 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Content**: MDX (Markdown + JSX)
- **Styling**: Tailwind CSS + Typography Plugin
- **Language**: TypeScript
- **Font**: System fonts (-apple-system, Segoe UI, etc.)

---

## 🎓 Academic Features

- Modern Academic 스타일
- Publication-ready typography
- Responsive design
- Dark mode support (예정)
- SEO optimization

---

**Last Updated**: 2025-01-19  
**Author**: Dr. SHawn  
**Philosophy**: Antigravity Driven - Minimal Maintenance, Maximum Output
