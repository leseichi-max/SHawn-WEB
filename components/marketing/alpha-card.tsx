import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface AlphaCardProps {
    ticker: string;
    name: string;
    score: number;
    badges?: string[];
    diagnosis: string;
    prediction: string;
}

export function AlphaCard({ ticker, name, score, badges = [], diagnosis, prediction }: AlphaCardProps) {
    // Color Logic
    const getScoreColor = (s: number) => {
        if (s >= 70) return "text-[var(--alpha-green)] border-[var(--alpha-green)]";
        if (s >= 60) return "text-[var(--alpha-blue)] border-[var(--alpha-blue)]";
        return "text-[var(--alpha-red)] border-[var(--alpha-red)]";
    };

    const colorClass = getScoreColor(score);

    return (
        <Card className="bg-[var(--alpha-card)] border-none shadow-lg mb-4 overflow-hidden">
            <div className={`flex flex-row items-stretch min-h-[120px] border-l-4 ${colorClass.split(' ')[1]}`}>

                {/* 1. Ticker Info */}
                <div className="flex-1 p-6 flex flex-col justify-center border-r border-gray-700/50">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-white">{ticker}</span>
                        {badges.includes("S-Tier") && <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">S-TIER</Badge>}
                        {badges.includes("Whale") && <Badge className="bg-[var(--alpha-blue)] text-black">WHALE</Badge>}
                    </div>
                    <span className="text-sm text-gray-400">{name}</span>
                </div>

                {/* 2. Score */}
                <div className="w-32 flex flex-col items-center justify-center border-r border-gray-700/50 bg-black/20">
                    <span className={`text-4xl font-extrabold ${colorClass.split(' ')[0]}`}>{score}</span>
                    <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Alpha Score</span>
                </div>

                {/* 3. Prediction & Diagnosis */}
                <div className="flex-[2] p-6 flex flex-col justify-center">
                    <div className="mb-3">
                        <span className="text-xs font-bold text-[var(--alpha-purple)] uppercase block mb-1">Future Value</span>
                        <span className="text-gray-200 font-medium">{prediction}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-700/50">
                        <span className="text-xs font-bold text-gray-500 uppercase block mb-1">AI Diagnosis</span>
                        <p className="text-sm text-gray-400 leading-snug" dangerouslySetInnerHTML={{ __html: diagnosis }} />
                    </div>
                </div>
            </div>
        </Card>
    )
}
