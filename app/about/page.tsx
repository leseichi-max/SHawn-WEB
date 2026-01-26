// Button import removed
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="space-y-12 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">SHawn Lab 소개</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    첨단 데이터 과학을 통해 바이오의 복잡성과 금융 지능을 연결하여 새로운 가치를 창출합니다.
                </p>
            </section>

            {/* PI Profile */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                        {/* Placeholder for PI Image */}
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            User
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary mb-2">Dr. SHawn</h2>
                        <p className="text-secondary font-medium mb-4">연구 책임자 & 수석 아키텍트</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Dr. SHawn은 정밀한 바이오 인포매틱스 연구와 역동적인 시장 지능(Market Intelligence)을 통합하는 독창적인 비전으로 랩을 이끌고 있습니다.
                            단일 세포 분석 및 퀀트 투자 전략에 대한 전문성을 바탕으로, 복잡한 데이터셋을 다각도로 분석할 수 있는 자동화 시스템을 구축하는 것을 목표로 합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lab Philosophy */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">바이오 인포매틱스</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        최신 머신러닝 모델을 활용하여 단일 세포 RNA 시퀀싱 데이터를 해독하고, 희귀 세포 유형을 식별하며 발달 궤적을 높은 정밀도로 예측합니다.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">마켓 인텔리전스</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        자체 개발한 &quot;Antigravity&quot; 퀀트 엔진이 글로벌 시장 데이터를 처리하여 실행 가능한 투자 리포트를 생성하며, 유지보수는 최소화하고 통찰력은 극대화합니다.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section className="text-center pt-8">
                <h3 className="text-2xl font-bold mb-6">문의하기</h3>
                <div className="flex justify-center gap-4">
                    {/* Simple links */}
                    <a target="_blank" href="https://github.com" className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">GitHub</a>
                    <a href="mailto:contact@shawnlab.com" className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">Email</a>
                </div>
            </section>
        </div>
    );
}
