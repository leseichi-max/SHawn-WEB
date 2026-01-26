"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText, ExternalLink, RefreshCw, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

type ReportRequest = {
    date: string;
    path: string;
    title: string;
};

type ReportData = {
    KR: ReportRequest[];
    US: ReportRequest[];
};

export default function MarketIntelligencePage() {
    const [data, setData] = useState<ReportData>({ KR: [], US: [] });
    const [activeTab, setActiveTab] = useState<"KR" | "US">("KR");
    const [selectedReport, setSelectedReport] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch("/data/quant_reports.json", { cache: "no-store" });
            if (res.ok) {
                const json = await res.json();
                setData(json);
                // Auto-select the first report of the active tab if available
                if (json[activeTab].length > 0 && !selectedReport) {
                    setSelectedReport(json[activeTab][0].path);
                }
            }
        } catch (error) {
            console.error("Failed to load report data", error);
        } finally {
            setLoading(false);
        }
    };

    const currentList = data[activeTab];

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white p-6 md:p-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#2c2c2c] pb-6">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                            Market Intelligence
                        </h1>
                        <p className="text-gray-400 max-w-xl">
                            Automated Market Analysis Reports for Korea (KR) and United States (US) Markets.
                            Powered by SHawn-INV Algorithms.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-4">
                        <button
                            onClick={fetchData}
                            className="flex items-center gap-2 px-4 py-2 bg-[#2c2c2c] hover:bg-[#3c3c3c] rounded-lg transition-colors text-sm text-gray-300 border border-gray-700"
                        >
                            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                            Refresh Data
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar / List */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Tabs */}
                        <div className="flex p-1 bg-[#2c2c2c] rounded-xl border border-gray-800">
                            <button
                                onClick={() => setActiveTab("KR")}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "KR"
                                        ? "bg-[#1e1e1e] text-blue-400 shadow-md border border-gray-700"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                <TrendingUp size={16} />
                                Korea Market
                            </button>
                            <button
                                onClick={() => setActiveTab("US")}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "US"
                                        ? "bg-[#1e1e1e] text-green-400 shadow-md border border-gray-700"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                <Globe size={16} />
                                US Market
                            </button>
                        </div>

                        {/* Report List */}
                        <div className="h-[600px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                            {loading ? (
                                <div className="text-center py-10 text-gray-500">Loading history...</div>
                            ) : currentList.length === 0 ? (
                                <div className="text-center py-10 text-gray-500 bg-[#252525] rounded-xl border border-[#2c2c2c] border-dashed">
                                    No reports found.
                                </div>
                            ) : (
                                <AnimatePresence>
                                    {currentList.map((report) => {
                                        const isSelected = selectedReport === report.path;
                                        return (
                                            <motion.div
                                                key={report.path}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                onClick={() => setSelectedReport(report.path)}
                                                className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 group ${isSelected
                                                        ? "bg-[#2c2c2c] border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                                        : "bg-[#252525] border-transparent hover:bg-[#2c2c2c] hover:border-gray-700"
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className={`font-semibold text-sm mb-1 ${isSelected ? "text-blue-300" : "text-gray-200 group-hover:text-white"
                                                            }`}>
                                                            {report.title || report.date}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                                            <Calendar size={12} />
                                                            {report.date}
                                                        </div>
                                                    </div>
                                                    {isSelected && (
                                                        <div className="text-blue-400">
                                                            <FileText size={16} />
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            )}
                        </div>
                    </div>

                    {/* Viewer */}
                    <div className="lg:col-span-8 bg-[#252525] rounded-2xl border border-[#2c2c2c] overflow-hidden flex flex-col h-[750px] shadow-2xl relative">
                        {selectedReport ? (
                            <>
                                <div className="bg-[#2c2c2c] px-4 py-3 flex justify-between items-center border-b border-gray-700">
                                    <span className="text-xs font-mono text-gray-400 truncate max-w-md">
                                        Viewing: {selectedReport}
                                    </span>
                                    <Link
                                        href={selectedReport}
                                        target="_blank"
                                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline"
                                    >
                                        <ExternalLink size={12} />
                                        Open Fullscreen
                                    </Link>
                                </div>
                                <iframe
                                    src={selectedReport}
                                    className="w-full h-full bg-white"
                                    title="Report Viewer"
                                />
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <FileText size={48} className="mb-4 opacity-20" />
                                <p>Select a report to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
