
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export default function ContentDashboard() {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleGenerate = async () => {
        if (loading) return;

        setLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/content/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "quote", // 기본값
                    topic: topic,
                    style: "sovereign"
                })
            });

            const data = await response.json();
            setResult(data);
        } catch (err) {
            console.error(err);
            setResult({ success: false, error: "Network Error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white p-8 font-sans">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00ff9f] to-[#00d9ff] bg-clip-text text-transparent">
                        SHawn Lab Content Engine
                    </h1>
                    <p className="text-gray-400 mt-2">Sovereign Alpha Design System v1.0</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="border-[#00ff9f] text-[#00ff9f] hover:bg-[#00ff9f]/10">
                        Sync Data
                    </Button>
                    <Button className="bg-[#00d9ff] hover:bg-[#00b8d4] text-black font-bold">
                        New Project
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Generator */}
                <section className="lg:col-span-2 space-y-6">
                    <Card className="bg-[#2c2c2c] border-none p-6 rounded-xl shadow-lg shadow-purple-500/5">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#00ff9f] rounded-full"></span>
                            AI Generator
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Topic / Keyword</label>
                                <Input
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-[#00ff9f]"
                                    placeholder="ex. Immuno-oncology trends 2026..."
                                    disabled={loading}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Preset Style</label>
                                <div className="flex gap-2">
                                    <Badge variant="secondary" className="bg-[#1e1e1e] text-[#00ff9f] cursor-pointer border border-[#00ff9f]/30">Sovereign Alpha</Badge>
                                    <Badge variant="secondary" className="bg-[#1e1e1e] text-gray-400 cursor-pointer hover:text-white">Minimal</Badge>
                                    <Badge variant="secondary" className="bg-[#1e1e1e] text-gray-400 cursor-pointer hover:text-white">Dark Nebula</Badge>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Button
                                    onClick={handleGenerate}
                                    className="w-full bg-gradient-to-r from-[#00ff9f] to-[#00d9ff] text-black font-bold h-12"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Generating...
                                        </>
                                    ) : "Generate Content"}
                                </Button>
                            </div>

                            {result && (
                                <div className={`p-4 rounded-lg mt-4 ${result.success ? "bg-[#00ff9f]/10 border border-[#00ff9f]/30" : "bg-red-500/10 border border-red-500/30"}`}>
                                    {result.success ? (
                                        <div>
                                            <p className="text-[#00ff9f] font-bold">Success!</p>
                                            <p className="text-xs text-gray-400 mt-1">Output saved to: {result.path}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-red-500 font-bold">Error</p>
                                            <p className="text-xs text-gray-400 mt-1">{result.error}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </Card>
                </section>

                {/* Right: Preview & Status */}
                <section className="space-y-6">
                    <Card className="bg-[#2c2c2c] border-none p-6 rounded-xl">
                        <h2 className="text-xl font-bold mb-4 text-[#00d9ff]">System Status</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-[#1e1e1e] rounded-lg">
                                <span className="text-sm text-gray-400">SHawn-BOT</span>
                                <span className="text-[#00ff9f] text-xs font-bold">● ONLINE</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-[#1e1e1e] rounded-lg">
                                <span className="text-sm text-gray-400">Instagram API</span>
                                <span className="text-[#00ff9f] text-xs font-bold">● CONNECTED</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#2c2c2c] border-none p-6 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                        </div>
                        <h2 className="text-xl font-bold mb-2">Recent Report</h2>
                        <p className="text-sm text-gray-400 mb-4">Latest analysis from SHawn-INV</p>
                        <div className="h-32 bg-[#1e1e1e] rounded-lg flex items-center justify-center border border-gray-800">
                            <span className="text-xs text-gray-500">Analysis Graph Placeholder</span>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
