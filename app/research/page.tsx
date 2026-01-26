
export default function ResearchPage() {
    return (
        <div className="space-y-12 py-12">
            <header className="border-b pb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">Research Areas</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Exploring the frontiers of Life Science and Data Intelligence.
                </p>
            </header>

            <div className="grid gap-12">
                <section className="group">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 aspect-video bg-blue-100 rounded-xl flex items-center justify-center text-4xl">
                            🦠
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
                                Single-Cell Analysis
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Primary Focus</span>
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Our main research focus involves dissecting the cellular heterogeneity of complex tissues.
                                By leveraging scRNA-seq and spatial transcriptomics, we aim to map the cellular architecture in health and disease.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                                <li>Automated cell type annotation using Deep Learning</li>
                                <li>Trajectory inference in developmental biology</li>
                                <li>Cell-cell interaction analysis</li>
                            </ul>
                            <a href="/blog/research-preview" className="text-secondary font-medium hover:underline">
                                Read recent update →
                            </a>
                        </div>
                    </div>
                </section>

                <section className="group">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 aspect-video bg-green-100 rounded-xl flex items-center justify-center text-4xl">
                            🤖
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-primary mb-3">
                                Bio-Medical AI
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Developing robust AI models for medical diagnosis and prognosis. We focus on interpretable AI to ensure clinical applicability.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="group">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 aspect-video bg-purple-100 rounded-xl flex items-center justify-center text-4xl">
                            🧠
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-primary mb-3">
                                Knowledge Graph Construction
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Integrating scattered biological knowledge into a unified graph structure to facilitate hypothesis generation and drug repurposing.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
