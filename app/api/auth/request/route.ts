import { NextResponse } from 'next/server';

const GCP_BRAIN_URL = process.env.GCP_BRAIN_URL || "https://shawn-brain-1009266651998.asia-northeast3.run.app";

export async function POST(req: Request) {
    try {
        const brainRes = await fetch(`${GCP_BRAIN_URL}/auth/request-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });

        if (!brainRes.ok) {
            const err = await brainRes.text();
            return NextResponse.json({ error: err }, { status: brainRes.status });
        }

        const data = await brainRes.json();
        return NextResponse.json(data);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
