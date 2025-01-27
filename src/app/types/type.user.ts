export interface BaseInputs {
  to: string;
  from: string;
  context: string;
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: string;
}
// export interface promptArgs extends BaseInputs {}
// export interface generateInputs extends BaseInputs {}
