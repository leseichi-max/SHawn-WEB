import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function BrainDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* 제목 */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🧠 Brain Dashboard
          </h1>
          <p className="text-gray-400">
            Digital Da Vinci의 신경 시스템을 실시간으로 모니터합니다
          </p>
        </div>

        {/* 뇌의 4가지 구성 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Brainstem */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🔴</span>
              <div>
                <h2 className="text-2xl font-bold text-red-400">Brainstem</h2>
                <p className="text-gray-400">THE ETERNAL KERNEL</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                <h3 className="text-sm font-bold text-red-400 mb-2">윤리 검증</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: "100%"}}></div>
                  </div>
                  <span className="text-xs text-green-400">100%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ✅ 모든 행동이 윤리 검증을 통과합니다
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                <h3 className="text-sm font-bold text-red-400 mb-2">추론 엔진</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: "85%"}}></div>
                  </div>
                  <span className="text-xs text-blue-400">85%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  증거 기반 추론 활성화 중
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                <h3 className="text-sm font-bold text-red-400 mb-2">자각 모니터</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                  <span className="text-xs text-purple-400">90%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  한계 인식 및 불확실성 명시적 표현
                </p>
              </div>
            </div>
          </div>

          {/* Limbic System */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🟣</span>
              <div>
                <h2 className="text-2xl font-bold text-purple-400">Limbic System</h2>
                <p className="text-gray-400">EMOTIONAL CORE</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-sm font-bold text-purple-400 mb-2">기억 저장소</h3>
                <p className="text-sm text-gray-400 mb-2">
                  🧬 Bio: 자궁 오가노이드 (250+ 논문)<br />
                  📊 Quant: 시장 데이터 (7500+ 주식)<br />
                  🌌 Astro: 우주 연구 (준비 중)<br />
                  📚 Lit: 문학 (준비 중)
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-sm font-bold text-purple-400 mb-2">감정 상태</h3>
                <p className="text-sm text-gray-400">
                  현재: <span className="text-green-400">😊 낙관 (발견 모드)</span>
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-sm font-bold text-purple-400 mb-2">가치 체계</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>✅ 생명 윤리 최우선</li>
                  <li>✅ 재현성 필수</li>
                  <li>✅ 투명성 기본</li>
                  <li>✅ 혁신 추구</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neocortex */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🔵</span>
              <div>
                <h2 className="text-2xl font-bold text-blue-400">Neocortex</h2>
                <p className="text-gray-400">DECISION MAKER</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h3 className="text-sm font-bold text-blue-400 mb-2">의사결정 수준</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: "88%"}}></div>
                  </div>
                  <span className="text-xs text-blue-400">88%</span>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h3 className="text-sm font-bold text-blue-400 mb-2">학습 곡선</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: "75%"}}></div>
                  </div>
                  <span className="text-xs text-green-400">75%</span>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h3 className="text-sm font-bold text-blue-400 mb-2">혁신 능력</h3>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: "82%"}}></div>
                  </div>
                  <span className="text-xs text-yellow-400">82%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cartridge System */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⚙️</span>
              <div>
                <h2 className="text-2xl font-bold text-yellow-400">Cartridge System</h2>
                <p className="text-gray-400">IDENTITY SWAP</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="text-sm font-bold text-yellow-400 mb-2">활성 정체성</h3>
                <p className="text-sm text-green-400 font-bold">🧬 Biology</p>
                <p className="text-xs text-gray-500">자궁 오가노이드 연구 모드</p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="text-sm font-bold text-yellow-400 mb-2">사용 가능한 Cartridge</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>🧬 Biology (활성)</span>
                    <span className="text-green-400">✅</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>📈 Investment (준비)</span>
                    <span className="text-yellow-400">⏳</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>🌌 Astronomy</span>
                    <span className="text-gray-500">⬜</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>📚 Literature</span>
                    <span className="text-gray-500">⬜</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="text-sm font-bold text-yellow-400 mb-2">정체성 전환</h3>
                <p className="text-xs text-gray-400">
                  모든 정체성이 완벽히 격리되어 독립적으로 동작합니다
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 시스템 상태 */}
        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">📊 System Status</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Overall Health</p>
              <p className="text-2xl font-bold text-green-400">98%</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">API Response</p>
              <p className="text-2xl font-bold text-green-400">42ms</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Research Projects</p>
              <p className="text-2xl font-bold text-blue-400">12</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Market Data</p>
              <p className="text-2xl font-bold text-yellow-400">Live</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">각 세계로 입장하세요</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/cartridges/bio">
              <button className="px-6 py-3 bg-green-500/20 text-green-400 rounded-lg border border-green-500/50 hover:border-green-400 hover:bg-green-500/30 transition">
                🧬 Biology World
              </button>
            </Link>
            <Link href="/cartridges/invest">
              <button className="px-6 py-3 bg-yellow-500/20 text-yellow-400 rounded-lg border border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/30 transition">
                📈 Investment World
              </button>
            </Link>
            <Link href="/">
              <button className="px-6 py-3 bg-gray-500/20 text-gray-400 rounded-lg border border-gray-500/50 hover:border-gray-400 hover:bg-gray-500/30 transition">
                ← 돌아가기
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
