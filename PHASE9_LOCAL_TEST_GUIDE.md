# 🚀 Phase 9 Step 5: 로컬 테스트 & 배포 가이드

## ✅ **설치 완료!**

```
가상 환경: /Users/soohyunglee/GitHub/SHawn-Bot/venv
패키지:
✅ websockets
✅ fastapi
✅ uvicorn
```

---

## ▶️ **3개 터미널에서 실행**

### **Terminal 1: WebSocket 서버 시작**

```bash
cd /Users/soohyunglee/GitHub/SHawn-Bot
source venv/bin/activate
python execution/websocket_server.py
```

**예상 출력:**
```
╔═══════════════════════════════════════╗
║   SHawn-Bot WebSocket Server         ║
║   Phase 9: Real-time Integration     ║
║   ws://0.0.0.0:8765                  ║
╚═══════════════════════════════════════╝

2026-01-31 09:45:00 - root - INFO - 🚀 WebSocket server started at ws://0.0.0.0:8765
2026-01-31 09:45:00 - root - INFO - 🧠 WebSocket server running. Press Ctrl+C to stop.
```

---

### **Terminal 2: FastAPI 서버 시작**

```bash
cd /Users/soohyunglee/GitHub/SHawn-Bot
source venv/bin/activate
python -m uvicorn execution.api_server:app --reload --port 8000
```

**예상 출력:**
```
╔═══════════════════════════════════════╗
║   SHawn-Bot FastAPI Server           ║
║   Phase 9: Real-time Integration     ║
║   http://0.0.0.0:8000                ║
╚═══════════════════════════════════════╝

INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started server process [12345]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

---

### **Terminal 3: Next.js 개발 서버**

```bash
cd /Users/soohyunglee/GitHub/SHawn-WEB
npm run dev
```

**예상 출력:**
```
▲ Next.js 15.x.x

- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 3.2s
```

---

## 🧪 **테스트 체크리스트**

### **1️⃣ API 헬스 체크** (Terminal에서)

```bash
curl http://localhost:8000/api/health
```

**예상 응답:**
```json
{
  "status": "healthy",
  "service": "SHawn-Bot Phase 9",
  "timestamp": "2026-01-31T09:45:30.123456"
}
```

---

### **2️⃣ 뇌 상태 조회**

```bash
curl http://localhost:8000/api/brain/status
```

**예상 응답:**
```json
{
  "brainstem": {
    "ethics": 100,
    "reasoning": 85,
    "awareness": 90
  },
  "limbic": {
    "memory": 75,
    "emotion": 70,
    "values": 85
  },
  "neocortex": {
    "decision_making": 88,
    "learning": 75,
    "innovation": 82
  },
  "overall_health": 82.5,
  "system_status": "OPERATIONAL"
}
```

---

### **3️⃣ 대시보드 테스트** (브라우저에서)

```
http://localhost:3000/brain
```

**확인 사항:**

```
□ 페이지 로드됨
□ "Live Connection" 배지 (초록색)
□ "✅ Live" 표시
□ Brainstem 메트릭 표시
□ Limbic System 메트릭 표시
□ Neocortex 메트릭 표시
□ Cartridge System 표시
□ System Status 표시

□ 5초마다 메트릭 업데이트 (진행 바 애니메이션)
□ Cartridge 버튼 클릭 가능
□ 마우스 호버 효과 작동
```

---

### **4️⃣ Cartridge 전환 테스트**

```
대시보드에서 "📈 Investment" 버튼 클릭

확인:
□ 버튼이 강조됨 (✅ 표시)
□ 활성 정체성 변경: "🧬 biology" → "📈 investment"
```

---

### **5️⃣ API 문서 확인**

```
http://localhost:8000/docs
```

**Swagger UI 확인:**
```
□ 6개 엔드포인트 나열
□ /api/health
□ /api/brain/status
□ /api/cartridges/active
□ /api/morphing/{cartridge}
□ /api/analysis/{stock}
□ /api/system/info

□ 각 엔드포인트 "Try it out" 작동
□ 응답 확인
```

---

## 📊 **성능 테스트**

### **응답 시간 확인**

```bash
# API 응답 시간 (목표: <100ms)
time curl http://localhost:8000/api/brain/status

# 예상:
# real 0m0.025s
# user 0m0.008s
# sys  0m0.006s
# ✅ 25ms (매우 빠름!)
```

---

## 🚀 **배포 준비**

### **로컬 테스트 완료 후**

```bash
# 1. 모든 터미널에서 Ctrl+C로 서버 중단

# 2. SHawn-WEB 커밋
cd /Users/soohyunglee/GitHub/SHawn-WEB
git add -A
git commit -m "🚀 Phase 9 완료: Real-time Integration

Step 5: 테스트 & 배포 완료

로컬 테스트:
✅ WebSocket 연결 (ws://localhost:8765)
✅ FastAPI 서버 (http://localhost:8000)
✅ Next.js 대시보드 (http://localhost:3000)
✅ 모든 엔드포인트 응답
✅ 대시보드 메트릭 실시간 업데이트
✅ Cartridge 전환 동작
✅ 성능 <100ms

배포 준비 완료! 🎉"

# 3. GitHub 푸시 (자동 Vercel 배포)
git push origin main
```

---

## ✨ **배포 후 확인**

### **Vercel 자동 배포**

```
GitHub push
  ↓
Vercel 감지
  ↓
자동 빌드 & 배포
  ↓
https://shawn-web.vercel.app/brain (라이브)
```

### **라이브 대시보드 확인**

```
https://shawn-web.vercel.app/brain

주의:
⚠️ WebSocket은 localhost:8765로 연결 시도
→ 프로덕션 WebSocket 서버 필요
→ 현재: 로컬 테스트용 (Fallback 값 표시)
```

---

## 🔧 **문제 해결**

### **포트 이미 사용 중**

```bash
# 포트 확인
lsof -i :8765
lsof -i :8000
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```

### **WebSocket 연결 실패**

```bash
# 1. WebSocket 서버 실행 확인
# Terminal 1 확인

# 2. 브라우저 콘솔 확인 (F12)
# "❌ WebSocket error" 메시지 확인

# 3. 대시보드는 Fallback 값으로 작동
# (기본값 표시)
```

### **FastAPI 에러**

```bash
# 1. 패키지 확인
pip list | grep fastapi

# 2. 재설치
pip install --upgrade fastapi uvicorn

# 3. 다시 시작
python -m uvicorn execution.api_server:app --reload
```

---

## 📋 **최종 체크리스트**

```
설치:
✅ 가상 환경 생성
✅ websockets 설치
✅ fastapi 설치
✅ uvicorn 설치

실행:
□ Terminal 1: WebSocket 서버 (포트 8765)
□ Terminal 2: FastAPI 서버 (포트 8000)
□ Terminal 3: Next.js 서버 (포트 3000)

테스트:
□ API 헬스 체크
□ 뇌 상태 조회
□ 대시보드 로드
□ 메트릭 업데이트 (5초마다)
□ Cartridge 전환
□ 성능 <100ms

배포:
□ Git 커밋
□ GitHub 푸시
□ Vercel 배포 확인
□ 라이브 대시보드 확인

문서화:
□ PHASE9_COMPLETE.md 생성
□ 메모리 업데이트
□ Phase 9 완료 표시
```

---

## 🎉 **완료 후**

```
Phase 9: Real-time Integration ✅ 완료!

다음:
- v5.5 Week 2 상태 확인
- Phase 11 계획 수립
- 4주 로드맵 확정
```

---

**준비 완료! 지금 테스트 시작하세요!** 🚀
