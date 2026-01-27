import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';

/**
 * SHawn Brain Feedback API
 * Web에서 수집된 피드백을 BOT의 LearningCore로 전달합니다.
 */
export async function POST(req: NextRequest) {
    try {
        const { interactionId, score, comment } = await req.json();

        if (!interactionId || !score) {
            return NextResponse.json({ error: 'Missing interactionId or score' }, { status: 400 });
        }

        const scriptPath = path.join(process.cwd(), 'scripts', 'add_feedback.py');
        const command = `python3 ${scriptPath} "${interactionId}" "${score}" "${comment || ''}"`;

        return new Promise((resolve) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Feedback bridge error: ${stderr}`);
                    resolve(NextResponse.json({ success: false, error: stderr }, { status: 500 }));
                } else {
                    console.log(`Feedback bridge output: ${stdout}`);
                    resolve(NextResponse.json({ success: true, message: stdout }));
                }
            });
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
