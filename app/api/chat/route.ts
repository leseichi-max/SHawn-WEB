import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// GCP Brain Server URL (Environment Variable)
const GCP_BRAIN_URL = process.env.GCP_BRAIN_URL || "https://shawn-brain-1009266651998.asia-northeast3.run.app";
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("❌ CRITICAL: JWT_SECRET is not set in environment variables!");
}

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json({ 
                role: 'error', 
                content: '❌ Invalid prompt' 
            }, { status: 400 });
        }

        // 1. Extract JWT from HttpOnly Cookie
        let token = null;
        const cookieHeader = req.headers.get('cookie');
        if (cookieHeader) {
            const cookies = Object.fromEntries(
                cookieHeader.split('; ').map(c => {
                    const [key, ...valueParts] = c.split('=');
                    return [key, valueParts.join('=')];
                })
            );
            token = cookies['shawn_auth'];
        }

        let isAdmin = false;
        let authHeader: Record<string, string> = {};

        // 2. JWT Verification
        if (token && JWT_SECRET) {
            try {
                const secret = new TextEncoder().encode(JWT_SECRET);
                const { payload } = await jwtVerify(token, secret);
                
                // Valid token - Admin access
                isAdmin = true;
                authHeader = { 'Authorization': `Bearer ${token}` };
                
                console.log(`✅ Admin access granted for user: ${payload.user_id}`);
            } catch (e) {
                console.log("Token verification failed - Guest mode activated");
                // Token invalid/expired -> treated as guest
            }
        }

        // 3. Guest Mode Handling
        if (!isAdmin) {
            // Guest users get limited search functionality
            return NextResponse.json({
                role: 'search',
                content: `🔍 **Guest Mode**\n\n"${prompt}"에 대한 연구소 문서 검색 기능이 곧 추가됩니다.\n\n*Dr. SHawn의 Brain 기능을 사용하려면 Telegram을 통해 인증하세요.*`,
                requireAuth: true
            });
        }

        // 4. Call GCP Brain Server (Admin Only)
        const brainRes = await fetch(`${GCP_BRAIN_URL}/think`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader
            },
            body: JSON.stringify({ 
                prompt, 
                task_type: 'auto' 
            })
        });

        if (!brainRes.ok) {
            const errText = await brainRes.text();
            console.error(`Brain Server Error (${brainRes.status}):`, errText);
            
            if (brainRes.status === 401) {
                return NextResponse.json({ 
                    role: 'expired', 
                    content: '⏱️ 세션이 만료되었습니다. Telegram으로 재인증하세요.',
                    requireAuth: true
                });
            }
            
            return NextResponse.json({ 
                role: 'system', 
                content: `🧠 Brain Server Error: ${brainRes.status}` 
            }, { status: brainRes.status });
        }

        const data = await brainRes.json();
        
        return NextResponse.json({ 
            role: 'brain', 
            content: data.response,
            model: data.model || 'unknown',
            domain: data.domain || 'auto'
        });

    } catch (error: any) {
        console.error("Chat API Route Error:", error);
        return NextResponse.json({
            role: 'error',
            content: '❌ 시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
        }, { status: 500 });
    }
}
