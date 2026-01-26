import { NextResponse } from 'next/server';

const GCP_BRAIN_URL = process.env.GCP_BRAIN_URL || "https://shawn-brain-1009266651998.asia-northeast3.run.app";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
    }

    try {
        const brainRes = await fetch(`${GCP_BRAIN_URL}/auth/poll-login?session_id=${sessionId}`, {
            method: 'GET'
        });

        if (!brainRes.ok) {
            return NextResponse.json({ status: "error" }, { status: brainRes.status });
        }

        const data = await brainRes.json();
        return NextResponse.json(data);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
