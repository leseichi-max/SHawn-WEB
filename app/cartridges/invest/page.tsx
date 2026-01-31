import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function InvestmentWorld() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">📈</span>
            <h1 className="text-5xl font-bold">Investment World</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Dual Quant System & Sovereign Alpha 투자 전략
          </p>
        </div>

        {/* Dual Quant System */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">⚙️ Dual Quant System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expert Score */}
            <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/50 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">Expert Score</h3>
                  <p className="text-gray-400 text-sm">기술 분석</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{width: "40%"}}></div>
                </div>
                <span className="text-xl font-bold text-orange-400">40%</span>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20 text-sm text-gray-400 space-y-2">
                <p>📈 이동평균 (Moving Average)</p>
                <p>📊 RSI (상대강도지수)</p>
                <p>📉 MACD (이동평균수렴발산)</p>
                <p>🎯 지지/저항선</p>
              </div>
            </div>

            {/* Whale Activity */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">🐋</span>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Whale Activity</h3>
                  <p className="text-gray-400 text-sm">기관/외국인 수급</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: "30%"}}></div>
                </div>
                <span className="text-xl font-bold text-blue-400">30%</span>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20 text-sm text-gray-400 space-y-2">
                <p>🏛️ 기관 투자자 수급</p>
                <p>🌍 외국인 투자 흐름</p>
                <p>💰 대량 거래 패턴</p>
                <p>📍 진입/청산 신호</p>
              </div>
            </div>

            {/* Macro Matrix */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">🌍</span>
                <div>
                  <h3 className="text-2xl font-bold text-green-400">Macro Matrix</h3>
                  <p className="text-gray-400 text-sm">거시 경제 지표</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: "20%"}}></div>
                </div>
                <span className="text-xl font-bold text-green-400">20%</span>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-green-500/20 text-sm text-gray-400 space-y-2">
                <p>📊 GDP 성장률</p>
                <p>💳 금리 정책</p>
                <p>💰 인플레이션</p>
                <p>💱 환율 변동</p>
              </div>
            </div>

            {/* News Sentiment */}
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/50 rounded-xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">📰</span>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400">News Sentiment</h3>
                  <p className="text-gray-400 text-sm">뉴스 감성 분석</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-pink-500 h-3 rounded-full" style={{width: "10%"}}></div>
                </div>
                <span className="text-xl font-bold text-pink-400">10%</span>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-pink-500/20 text-sm text-gray-400 space-y-2">
                <p>😊 긍정 뉴스 (Positive)</p>
                <p>😕 부정 뉴스 (Negative)</p>
                <p>😐 중립 평가 (Neutral)</p>
                <p>⚡ 이벤트 임팩트</p>
              </div>
            </div>
          </div>
        </div>

        {/* 시장별 분석 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">🌐 Market Intelligence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Korea Market */}
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border border-red-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">🇰🇷 Korea Market (KRX)</h3>
              
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                  <h4 className="text-sm font-bold text-red-400 mb-2">지수</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">KOSPI</span>
                      <span className="text-red-400">2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">KOSDAQ</span>
                      <span className="text-red-400">680</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                  <h4 className="text-sm font-bold text-red-400 mb-2">특징</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>✅ 2,500+ 종목</li>
                    <li>✅ 삼성전자, SK하이닉스 (반도체)</li>
                    <li>✅ 현대차 (자동차)</li>
                    <li>✅ 높은 변동성</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-red-500/20">
                  <h4 className="text-sm font-bold text-red-400 mb-2">포트폴리오 비중</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: "40%"}}></div>
                    </div>
                    <span className="text-sm text-red-400">40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* US Market */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">🇺🇸 US Market</h3>
              
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">지수</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">S&P500</span>
                      <span className="text-blue-400">5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">NASDAQ100</span>
                      <span className="text-blue-400">18,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">특징</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>✅ 5,000+ 종목</li>
                    <li>✅ 매그니피센트 세븐 (AI)</li>
                    <li>✅ Apple, Microsoft, Google</li>
                    <li>✅ 기술주 중심</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">포트폴리오 비중</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: "60%"}}></div>
                    </div>
                    <span className="text-sm text-blue-400">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 포트폴리오 관리 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">💼 Portfolio Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">총 포트폴리오</p>
              <p className="text-3xl font-bold text-yellow-400">$5.2M</p>
              <p className="text-xs text-gray-500 mt-2">USD 기준</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">연간 수익률</p>
              <p className="text-3xl font-bold text-green-400">+15.3%</p>
              <p className="text-xs text-gray-500 mt-2">Sovereign Alpha</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">포지션 수</p>
              <p className="text-3xl font-bold text-blue-400">24</p>
              <p className="text-xs text-gray-500 mt-2">분산 투자</p>
            </div>
          </div>
        </div>

        {/* 투자 철학 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">🎯 투자 철학</h2>
          
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Sovereign Alpha</h4>
                <ul className="text-sm text-gray-400 space-y-3">
                  <li>🎯 <span className="text-yellow-400">자주적 전략</span> - 남을 따르지 않는다</li>
                  <li>📊 <span className="text-yellow-400">데이터 기반</span> - 직관 아닌 분석</li>
                  <li>⚖️ <span className="text-yellow-400">리스크 관리</span> - 손실 최소화</li>
                  <li>🔄 <span className="text-yellow-400">분산 투자</span> - 포트폴리오 안정화</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Portfolio Rules</h4>
                <ul className="text-sm text-gray-400 space-y-3">
                  <li>💰 <span className="text-yellow-400">단일 주식 MAX</span> - 10%</li>
                  <li>📈 <span className="text-yellow-400">최소 종목</span> - 10개 이상</li>
                  <li>⛔ <span className="text-yellow-400">최대 손실</span> - 20%</li>
                  <li>🎯 <span className="text-yellow-400">목표 수익</span> - 연 15%</li>
                </ul>
              </div>
            </div>
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
