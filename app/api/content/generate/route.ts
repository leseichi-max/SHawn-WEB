
import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const { type, topic, style } = await req.json();

        // SHawn-BOT 경로 설정 (환경에 따라 절대경로 조정)
        const botRepoPath = "/Users/soohyunglee/Documents/GitHub/SHawn-BOT";
        const scriptPath = path.join(botRepoPath, "engines", "content_engine.py");

        // CLI 명령 구성
        const command = `python3 ${scriptPath} --type ${type || "quote"} ${topic ? `--topic "${topic}"` : ""} --style ${style || "sovereign"}`;

        console.log(`[API] Executing command: ${command}`);

        return new Promise((resolve) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`[API] exec error: ${error}`);
                    return resolve(NextResponse.json({ success: false, error: error.message }, { status: 500 }));
                }

                console.log(`[API] stdout: ${stdout}`);

                // 출력 파싱 (SUCCESS|type|path 형식)
                if (stdout.includes("SUCCESS|")) {
                    const parts = stdout.trim().split("|");
                    return resolve(NextResponse.json({
                        success: true,
                        type: parts[1],
                        path: parts[2]
                    }));
                } else {
                    return resolve(NextResponse.json({
                        success: false,
                        error: "Engine failed to produce successful output",
                        raw: stdout
                    }));
                }
            });
        });

    } catch (err) {
        console.error(`[API] Error: ${err}`);
        return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
    }
}
