import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(prompt: string) {
  console.log("processing");
  try {
    if (prompt) {
      return groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "llama3-8b-8192",
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return;
  }
}

export async function getGroqEmailCtx(EmilCtxPrompt: string) {
  console.log("processing",EmilCtxPrompt);
  try {
    if (EmilCtxPrompt) {
      return groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: EmilCtxPrompt,
          },
        ],
        model: "llama3-8b-8192",
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return;
  }
}