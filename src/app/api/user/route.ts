import { getGroqChatCompletion } from "@/app/services/groq";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    console.log("started");
    const chatCompletion = await getGroqChatCompletion(body.prompt);
    console.log( "chat end");
    if (chatCompletion) {
      return NextResponse.json(
        { message: chatCompletion.choices[0]?.message?.content },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "failed during processing request",
      status: 400,
    });
  }
}
