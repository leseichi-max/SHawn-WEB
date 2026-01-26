"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Shield, Send, LogIn, ExternalLink, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ShawnChatUI() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check for existing token in cookies or localStorage
        const authStatus = document.cookie.includes("shawn_auth");
        setIsAuthorized(authStatus);
    }, []);

    const [authSessionId, setAuthSessionId] = useState<string | null>(null);

    // Polling Logic
    useEffect(() => {
        if (!authSessionId) return;

        const interval = setInterval(async () => {
            try {
                const res = await fetch(`/api/auth/poll?session_id=${authSessionId}`);
                const data = await res.json();

                if (data.status === "approved" && data.token) {
                    document.cookie = `shawn_auth=${data.token}; path=/; max-age=86400; SameSite=Strict`;
                    setIsAuthorized(true);
                    setAuthSessionId(null);
                    setMessages(prev => [...prev, { role: "system", content: "✅ 원격 승인 완료! 환영합니다." }]);
                } else if (data.status === "denied") {
                    setAuthSessionId(null);
                    alert("인증이 거부되었습니다.");
                }
            } catch (e) { console.error(e); }
        }, 2000);

        return () => clearInterval(interval);
    }, [authSessionId]);

    const handlePushAuth = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/request", { method: "POST" });
            const data = await res.json();
            if (data.session_id) {
                setAuthSessionId(data.session_id);
            } else {
                alert("요청 실패: " + JSON.stringify(data));
            }
        } catch (e) {
            alert("연결 오류");
        } finally {
            setLoading(false);
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: input }),
            });
            const data = await res.json();
            setMessages((prev) => [...prev, { role: "brain", content: data.content }]);
        } catch (err) {
            setMessages((prev) => [...prev, { role: "system", content: "❌ 연결 오류가 발생했습니다." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        document.cookie = "shawn_auth=; path=/; max-age=0; SameSite=Strict";
        setIsAuthorized(false);
        setMessages(prev => [...prev, { role: "system", content: "🔒 로그아웃되었습니다." }]);
    };

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl bg-[#d500f9] hover:bg-[#aa00c7] transition-all hover:scale-110 z-[9999]"
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </Button>
        );
    }

    return (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl border-[#2c2c2c] bg-[#1e1e1e] text-white animate-in slide-in-from-bottom-5 z-[9999]">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-[#2c2c2c]">
                <div className="flex items-center gap-2">
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                        🧠 SHawn Brain
                        {isAuthorized ? (
                            <Badge className="bg-[#00e676] text-black text-[10px]">ADMIN</Badge>
                        ) : (
                            <Badge className="bg-[#29b6f6] text-white text-[10px]">GUEST</Badge>
                        )}
                    </CardTitle>
                </div>
                <div className="flex items-center gap-1">
                    {isAuthorized && (
                        <Button variant="ghost" size="icon" onClick={handleLogout} className="h-8 w-8 text-neutral-400 hover:text-red-400" title="로그아웃">
                            <LogOut className="w-4 h-4" />
                        </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-neutral-400">
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                    <div className="text-center space-y-4 py-10">
                        <div className="w-12 h-12 bg-[#2c2c2c] rounded-full flex items-center justify-center mx-auto">
                            <Shield className="w-6 h-6 text-[#d500f9]" />
                        </div>
                        <p className="text-xs text-neutral-400">
                            Dr. SHawn의 통합 지능 시스템 (v2.5 Ready)<br />인증된 사용자만 전체 기능을 사용 가능합니다.
                        </p>
                        {!isAuthorized && (
                            <div className="flex flex-col items-center gap-2 w-full px-4">
                                {authSessionId ? (
                                    <Button disabled variant="outline" className="w-full text-[11px] h-8 border-[#d500f9] text-[#d500f9] animate-pulse">
                                        📲 모바일에서 승인 대기중...
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handlePushAuth}
                                        variant="outline"
                                        className="w-full text-[11px] h-8 border-[#d500f9] text-[#d500f9] hover:bg-[#d500f9] hover:text-white"
                                    >
                                        <LogIn className="w-3 h-3 mr-2" /> 🔒 SHawn에게 인증 요청
                                    </Button>
                                )}

                                <div className="text-[10px] text-neutral-500">OR (Manual)</div>
                                <div className="flex w-full gap-2">
                                    <Input
                                        placeholder="토큰 직접 붙여넣기"
                                        className="h-8 text-[10px] bg-[#2c2c2c] border-neutral-600"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            if (e.target.value.length > 20) {
                                                document.cookie = `shawn_auth=${e.target.value}; path=/; max-age=86400; SameSite=Strict`;
                                                setIsAuthorized(true);
                                                setMessages(prev => [...prev, { role: "system", content: "✅ 수동 인증되었습니다." }]);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {messages.map((m, i) => (
                    <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                        <div className={cn(
                            "max-w-[80%] p-3 rounded-2xl text-xs",
                            m.role === "user" ? "bg-[#d500f9] text-white rounded-br-none" : "bg-[#2c2c2c] text-neutral-200 rounded-bl-none"
                        )}>
                            {m.content}
                        </div>
                    </div>
                ))}
                {loading && <div className="text-[10px] text-[#d500f9] animate-pulse">Thinking...</div>}
            </CardContent>

            <CardFooter className="p-4 border-t border-[#2c2c2c]">
                <div className="flex w-full gap-2">
                    <Input
                        placeholder="질문을 입력하세요..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1 h-9 bg-[#2c2c2c] border-none text-xs focus-visible:ring-1 focus-visible:ring-[#d500f9]"
                    />
                    <Button size="icon" onClick={handleSend} className="h-9 w-9 bg-[#d500f9]">
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
