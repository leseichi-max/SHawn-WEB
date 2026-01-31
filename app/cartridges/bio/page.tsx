import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function BioWorld() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">🧬</span>
            <h1 className="text-5xl font-bold">Biology World</h1>
          </div>
          <p className="text-gray-400 text-lg">
            자궁 오가노이드 & 줄기세포 연구의 세계
          </p>
        </div>

        {/* 연구 분야 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 자궁 오가노이드 */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">자궁 오가노이드</h3>
            <p className="text-gray-400 mb-6">
              인간 자궁내막 세포로부터 유래한 3D 미니 조직
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-sm font-bold text-green-400 mb-2">연구 수준</h4>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: "95%"}}></div>
                  </div>
                  <span className="text-sm text-green-400">95%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">최고 우선순위 연구</p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-sm font-bold text-green-400 mb-2">핵심 마커</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>🔬 E-cadherin (상피 표지자)</li>
                  <li>🔬 Vimentin (간질 표지자)</li>
                  <li>🔬 Cytokeratin-7 (분화 확인)</li>
                </ul>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-sm font-bold text-green-400 mb-2">배양 조건</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>온도:</span>
                    <span className="text-green-400">37°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CO2:</span>
                    <span className="text-green-400">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>배지:</span>
                    <span className="text-green-400">Advanced DMEM/F12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 줄기세포 */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">줄기세포 분화</h3>
            <p className="text-gray-400 mb-6">
              자궁내막으로 분화 유도 프로토콜
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-sm font-bold text-blue-400 mb-2">세포 유형</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>🧪 ESC (배아줄기세포)</li>
                  <li>🧪 iPSC (역분화줄기세포)</li>
                  <li>🧪 hESC (인간 배아줄기세포)</li>
                </ul>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-sm font-bold text-blue-400 mb-2">다능성 마커</h4>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                  <span className="text-sm text-blue-400">90%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">OCT4, NANOG, SOX2</p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-sm font-bold text-blue-400 mb-2">분화 방법</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>⚗️ BMP4-induced (뼈 형태 생성 단백질)</li>
                  <li>⚗️ Activin-induced (액티빈)</li>
                  <li>⚗️ Wnt-signaling (윈트 신호)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 자궁내막 정보 */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">자궁내막 (Endometrium)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3">구조</h4>
              <p className="text-gray-400 text-sm mb-4">
                자궁의 가장 안쪽 층으로 배아 착상 및 월경 주기 조절
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>🔷 상피세포 (Epithelial cells)</li>
                  <li>🔷 간질세포 (Stromal cells)</li>
                  <li>🔷 면역세포 (Immune cells)</li>
                  <li>🔷 혈관내피세포 (Endothelial cells)</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3">월경 주기</h4>
              <p className="text-gray-400 text-sm mb-4">
                월경부터 다음 월경까지의 28일 주기
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-purple-500/20">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>📅 월경기</span>
                    <span className="text-purple-400">Days 1-5</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>📅 증식기</span>
                    <span className="text-purple-400">Days 5-14</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>📅 분비기</span>
                    <span className="text-purple-400">Days 14-28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 최근 논문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-400 mb-6">📚 최근 연구</h3>
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
            <p className="text-gray-400 mb-4">
              FAISS 벡터 검색을 통해 250+ 논문 인덱싱됨
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 p-4 rounded-lg border border-gray-700/50">
                <p className="text-sm font-bold text-gray-300">Organoid Engineering</p>
                <p className="text-xs text-gray-500 mt-1">오가노이드 공학 기술</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-700/50">
                <p className="text-sm font-bold text-gray-300">Regenerative Medicine</p>
                <p className="text-xs text-gray-500 mt-1">재생의학 응용</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-700/50">
                <p className="text-sm font-bold text-gray-300">Disease Modeling</p>
                <p className="text-xs text-gray-500 mt-1">질환 모델링</p>
              </div>
            </div>
          </div>
        </div>

        {/* 실험 프로토콜 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">🧪 표준 프로토콜</h3>
          <div className="space-y-4">
            {[
              {
                name: "3D 오가노이드 배양",
                duration: "14 days",
                steps: ["세포 수집", "Matrigel 혼합", "3D 배양", "호르몬 자극"],
                color: "green"
              },
              {
                name: "줄기세포 분화 유도",
                duration: "21 days",
                steps: ["ESC 준비", "BMP4 처리", "Activin A", "선별 및 확인"],
                color: "blue"
              }
            ].map((protocol, i) => (
              <div key={i} className={`bg-${protocol.color}-900/30 border border-${protocol.color}-500/50 rounded-xl p-6`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-lg font-bold text-${protocol.color}-400`}>{protocol.name}</h4>
                  <span className="text-sm text-gray-500">⏱️ {protocol.duration}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {protocol.steps.map((step, j) => (
                    <span key={j} className={`px-3 py-1 bg-${protocol.color}-500/20 text-${protocol.color}-400 rounded-full text-sm`}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/">
            <button className="px-8 py-3 bg-gray-500/20 text-gray-400 rounded-lg border border-gray-500/50 hover:border-gray-400 hover:bg-gray-500/30 transition">
              ← 메인으로 돌아가기
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
