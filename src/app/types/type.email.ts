export enum leaningStage {
  Beginner,
  Mediocre,
}

export interface emailCtx{
    key:number,
    email:string
}

export interface emailCtxApiCallResponce {}

interface Evaluation {
  criteria: string;
  rating: number;
  comment: string;
}

export interface AnalysisState {
  evaluation: Evaluation[];
  improvements: string;
}
