import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../types/type.user";


export async function emailContextCall(
  prompt: string
): Promise<{ success: boolean; data?: ApiResponse; error?: unknown }> {
  try {
    const responce: AxiosResponse = await axios.post(
      `/api/email`,
      {
        prompt,
      }
    );
    return { success: true, data: responce.data };
  } catch (error) {
    return { success: false, error };
  }
}


export async function getAnalysisResult(prompt: string) {
  try {
    const responce: AxiosResponse = await axios.post("/api/email/analysis", {
      prompt,
    });

    if (!responce) {
      return { success: false, error: "failed during getting analysis" };
    }
    return { success: true, data: responce.data };
  } catch (error) {
    return { success: false, error };
  }
}