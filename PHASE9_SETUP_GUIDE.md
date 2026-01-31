# 🚀 SHawn-WEB Phase 9 설정 가이드

## 📦 **필요한 설치**

### **Step 1: Python 서버 패키지 (SHawn-BOT)**

```bash
cd /Users/soohyunglee/GitHub/SHawn-Bot

# 필수 패키지
pip install websockets fastapi uvicorn

# 설치 확인
pip list | grep -E "websockets|fastapi|uvicorn"
```

### **Step 2: Next.js 서버 패키지 (SHawn-WEB)**

```bash
cd /Users/soohyunglee/GitHub/SHawn-WEB

# 기존 설치 확인 (대부분 이미 설치됨)
npm list
```

---

## 🔌 **포트 설정**

### **Python 서버들**
```
WebSocket Server: ws://localhost:8765
FastAPI Server: http://localhost:8000
FastAPI Docs: http://localhost:8000/docs
```

### **Next.js 서버**
```
Dev Server: http://localhost:3000
```

---

## ▶️ **실행 순서 (3개 터미널 필요)**

### **터미널 1: WebSocket 서버**
```bash
cd /Users/soohyunglee/GitHub/SHawn-Bot
python execution/websocket_server.py

# 출력:
# 🚀 WebSocket server started at ws://0.0.0.0:8765
```

### **터미널 2: FastAPI 서버**
```bash
cd /Users/soohyunglee/GitHub/SHawn-Bot
python -m uvicorn execution.api_server:app --reload --port 8000

# 출력:
# Uvicorn running on http://0.0.0.0:8000
# API docs: http://localhost:8000/docs
```

### **터미널 3: Next.js 개발 서버**
```bash
cd /Users/soohyunglee/GitHub/SHawn-WEB
npm run dev

# 출력:
# ▲ Next.js 15.x.x
# - Local:        http://localhost:3000
```

---

## 🧪 **테스트 순서**

### **1단계: 서버 상태 확인**

```bash
# API 헬스 체크
curl http://localhost:8000/api/health

# 예상 응답:
# {"status":"healthy","service":"SHawn-Bot Phase 9","timestamp":"..."}
```

### **2단계: WebSocket 연결 확인**

```bash
# 웹 브라우저에서
# http://localhost:3000/brain 방문

# 확인 사항:
# ✅ "Live Connection" 배지가 초록색
# ✅ "Brain status" 메트릭 업데이트
# ✅ 5초마다 메트릭 변경
```

### **3단계: API 엔드포인트 테스트**

```bash
# 뇌 상태 조회
curl http://localhost:8000/api/brain/status

# 활성 카트리지 조회
curl http://localhost:8000/api/cartridges/active

# 카트리지 전환 (POST)
curl -X POST http://localhost:8000/api/morphing/investment

# 종목 분석 조회
curl http://localhost:8000/api/analysis/SAMSUNG
```

### **4단계: 대시보드 기능 테스트**

```
http://localhost:3000/brain

테스트할 것:
□ 연결 상태 배지 (초록색 = 연결됨)
□ "Loading..." 메시지 (2초 뒤 사라짐)
□ 메트릭 바 (5초마다 업데이트)
□ Cartridge 버튼 클릭 (정체성 전환)
□ System Status 업데이트
```

---

## 🔧 **문제 해결**

### **WebSocket 연결 안 됨**

```bash
# 1. 포트 사용 확인
lsof -i :8765

# 2. 프로세스 종료 (필요시)
kill -9 <PID>

# 3. 다시 시작
python execution/websocket_server.py
```

### **FastAPI 에러**

```bash
# 1. 패키지 설치 확인
pip list | grep fastapi

# 2. 재설치
pip install --upgrade fastapi uvicorn

# 3. 다시 시작
python -m uvicorn execution.api_server:app --reload
```

### **WebSocket 클라이언트 에러**

```javascript
// lib/brain-client.ts의 URL 확인
const url = 'ws://localhost:8765';  // 또는 환경변수에서 가져오기

// 환경변수 추가 (필요시)
// .env.local
NEXT_PUBLIC_WS_URL=ws://localhost:8765
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📊 **최종 체크리스트**

### **설치 & 설정**
- [ ] websockets 설치
- [ ] fastapi 설치
- [ ] uvicorn 설치
- [ ] brain-client.ts 생성 완료
- [ ] brain/page.tsx 업데이트 완료

### **실행**
- [ ] WebSocket 서버 시작 (포트 8765)
- [ ] FastAPI 서버 시작 (포트 8000)
- [ ] Next.js 개발 서버 시작 (포트 3000)

### **테스트**
- [ ] API 헬스 체크 성공
- [ ] 브라우저에서 WebSocket 연결 확인
- [ ] 대시보드 메트릭 업데이트 확인
- [ ] Cartridge 전환 버튼 동작
- [ ] 모든 엔드포인트 응답 확인

---

## 🎯 **배포 준비**

### **로컬 테스트 완료 후**

```bash
# 1. Git 커밋
cd /Users/soohyunglee/GitHub/SHawn-WEB
git add -A
git commit -m "🚀 Phase 9 Step 3&4: WebSocket Client + Dynamic Dashboard"

# 2. Vercel 배포 (자동)
# GitHub 푸시하면 자동 배포

# 3. 프로덕션 WebSocket URL 설정
# Vercel 환경변수 추가:
# NEXT_PUBLIC_WS_URL=ws://your-bot-server.com:8765
```

---

## 💡 **참고**

- WebSocket: 브라우저와 서버 간 양방향 통신
- 자동 재연결: 연결 끊기면 3초 뒤 자동 재연결
- Fallback: 연결 안 되면 기본값 표시
- Type-safe: TypeScript로 완벽히 타입 지정

---

**준비 완료! 이제 테스트하세요!** 🚀
