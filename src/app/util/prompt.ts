import { promptArgs } from "../types/type.user";

export const geneatePrompt = (input: promptArgs): string => {
  let str = `Your are a email writer, i want you to write email for me. write email to ${input.to} from ${input.from} on context ${input.context}. note: do not include "Here is an email to" just return an email and return `;
  return str;
};
