"use client";

import { useEffect, useState } from 'react';
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { ExternalLink, Calendar, Search, Clock } from "lucide-react";

interface Report {
    date: string;       // YYYY-MM-DD
    time?: string;      // HH:MM
    type: string;
    title: string;
    path: string;
    filename: string;
    timestamp: string;  // ISO
}

export default function ReportsPage() {
    const [reports, setReports] = useState<Report[]>([]);
    const [filteredReports, setFilteredReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        fetch('/reports/index.json')
            .then(res => {
                if (!res.ok) throw new Error("Failed to load index");
                return res.json();
            })
            .then(data => {
                setReports(data);
                setFilteredReports(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // Filter Logic
    useEffect(() => {
        let result = reports;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(r =>
                r.title.toLowerCase().includes(query) ||
                r.type.toLowerCase().includes(query) ||
                r.date.includes(query)
            );
        }

        if (selectedDate) {
            result = result.filter(r => r.date === selectedDate);
        }

        setFilteredReports(result);
    }, [searchQuery, selectedDate, reports]);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        시장 분석 리포트
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Dual Quant System 분석 리포트 아카이브 (날짜/시간별 추적)
                    </p>

                    {/* Search & Filter Bar */}
                    <div className="max-w-2xl mx-auto flex gap-4 flex-col sm:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="리포트 검색 (제목, 타입 등)..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Input
                            type="date"
                            className="w-full sm:w-auto"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-muted-foreground">리포트를 불러오는 중입니다...</div>
                ) : filteredReports.length === 0 ? (
                    <div className="text-center py-20 border rounded-lg bg-card text-card-foreground">
                        <p className="text-lg">검색 결과가 없습니다.</p>
                        <p className="text-sm text-muted-foreground mt-2">검색어 또는 날짜를 변경해보세요.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredReports.map((report, idx) => (
                            <Card key={idx} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant={report.type === 'KR' ? 'secondary' : 'default'} className="mb-2">
                                            {report.type === 'KR' ? '🇰🇷 한국' : '🇺🇸 미국'}
                                        </Badge>
                                        <div className="flex flex-col items-end text-xs text-muted-foreground font-mono">
                                            <span className="flex items-center mb-1">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {report.date}
                                            </span>
                                            {report.time && (
                                                <span className="flex items-center text-primary/80 font-bold">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {report.time}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">
                                        {report.type === 'KR' ? '국내 시장 정밀 분석' : '미국 시장 정밀 분석'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {report.title}
                                        </p>
                                        <Link href={report.path} target="_blank" className="w-full">
                                            <div className="p-3 bg-muted/50 rounded-md group-hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                                <ExternalLink className="w-4 h-4" />
                                                리포트 열기
                                            </div>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
