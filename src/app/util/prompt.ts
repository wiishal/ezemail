import { BaseInputs } from "../types/type.user";

export const geneatePrompt = (input: BaseInputs): string => {
  const str = `Your are a email writer, i want you to write email for me. write email to ${input.to} from ${input.from} on context ${input.context}. note: do not include "Here is an email to" just return an email and return `;
  return str;
};

export const emailCtxPrompt = (userStage: string): string => {
  const str = `Generate a realistic email writing test scenario. The scenario should describe a situation where the user must write a professional email. It should specify the email's purpose, the recipient, and any key details that must be included. The scenario should be clear, concise, and designed for a test environment where the user has 10-15 minutes to complete the email. Generate a mix of formal and semi-formal scenarios covering topics like customer complaints, business inquiries, job applications, project updates, and meeting requests, note: user is a ${userStage} at writing email,Don't include any example, include just 1 scenario, Make responce in 100-150 words. don't include extra thing `;
  return str;
};

export const analysisCtxPrompt = (analysisCtx: {
  scenario: string;
  userInput: string;
}): string => {
  const str = `Analyze the following user-written email based on the given scenario. Provide an assessment in the following areas:

Relevance to Scenario – Does the email correctly address the given situation?
Clarity & Coherence – Is the email structured logically and easy to understand?
Spelling & Grammar – Are there any grammatical or spelling errors?
Sentence Structure – Are the sentences well-formed and professional?
Language Formality – Is the tone appropriate for a business email?

note: only analyse User-Written Email, if email is not well written you can rate it low
if user provide something random(not related to email scenario),rate 0 if possible

Scenario:
${analysisCtx.scenario}

User-Written Email:
${analysisCtx.userInput}

Provide the response strictly in JSON format with two main keys:
1. "evaluation": An array of objects where each object includes:
   - "criteria": The evaluation category (e.g., "Relevance to Scenario").
   - "rating": A number between 1 and 10.
   - "comment": Constructive feedback in 5-10 word.
   
2. "improvements": An array of specific suggestions to enhance the email. Each suggestion should be a string.

Example format:
{
  "evaluation": [
    {
      "criteria": "Relevance to Scenario",
      "rating": 0,
      "comment": ""
    },
    {
      "criteria": "Clarity & Coherence",
      "rating": 0,
      "comment": ""
    },
    {
      "criteria": "Spelling & Grammar",
      "rating": 0,
      "comment": ""
    },
    {
      "criteria": "Sentence Structure",
      "rating": 0,
      "comment": ""
    },
    {
      "criteria": "Language Formality",
      "rating": 0,
      "comment": ""
    }
  ],
  "improvements":"Provide a clear return process timeline.Make the apology more personalized by addressing the customer's specific issue.Emphasize the importance of the customer's next steps in the return process."
  
}

Ensure the response strictly follows this JSON format without any additional text outside of the JSON structure.`;
  return str;
};