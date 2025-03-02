export enum leaningStage {
  Beginner,
  Mediocre,
}

export interface emailCtx{
    key:number,
    email:string
}

interface Evaluation {
  criteria: string;
  rating: number;
  comment: string;
}

export interface AnalysisState {
  evaluation: Evaluation[];
  improvements: string;
}
