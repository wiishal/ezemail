import { getGroqEmailCtx } from "@/app/services/groq";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    console.log("started :email ctx");
    const chatCompletion = await getGroqEmailCtx(body.prompt);
    console.log( "chat end :email ctx");
    if (chatCompletion) {
      return NextResponse.json(
        { message: chatCompletion.choices[0]?.message?.content },
        { status: 200 }
      );
    }
    console.log(chatCompletion)
      return NextResponse.json({
        error: "failed during processing request",
        status: 400,
      });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "failed during processing request",
      status: 400,
    });
  }
}
