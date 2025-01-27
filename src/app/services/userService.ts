import axios, { AxiosResponse } from "axios";
import { UserResponse, ApiResponse } from "../types/type.user";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function call(
  prompt: string
): Promise<{ success: boolean; data?: ApiResponse; error?: unknown }> {
  try {
    const responce: AxiosResponse<UserResponse> = await axios.post(
      `/api/user`,
      {
        prompt,
      }
    );
    return { success: true, data: responce.data };
  } catch (error) {
    throw { success: false, error };
  }
}
