// Button import removed
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="space-y-12 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">About SHawn Lab</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Bridging the gap between biological complexity and financial intelligence through advanced data science.
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
                        <p className="text-secondary font-medium mb-4">Principal Investigator & Chief Architect</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Dr. SHawn leads the lab with a unique vision that integrates rigorous bio-informatics research with dynamic market intelligence.
                            With expertise in single-cell analysis and quantitative investment strategies, he aims to develop automated systems that can analyze complex datasets across domains.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lab Philosophy */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Bio-Informatics</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        We employ state-of-the-art machine learning models to decipher single-cell RNA sequencing data, identifying rare cell types and predicting developmental trajectories with high precision.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Market Intelligence</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Our &quot;Antigravity&quot; quant engine processes global market data to generate actionable investment reports, minimizing maintenance while maximizing insight output.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section className="text-center pt-8">
                <h3 className="text-2xl font-bold mb-6">Connect with Us</h3>
                <div className="flex justify-center gap-4">
                    {/* Simple links */}
                    <a target="_blank" href="https://github.com" className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">GitHub</a>
                    <a href="mailto:contact@shawnlab.com" className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">Email</a>
                </div>
            </section>
        </div>
    );
}
