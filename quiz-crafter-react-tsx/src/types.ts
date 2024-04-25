// src/types.ts
export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface QuizContextType {
    questions: Question[];
    currentQuestionIndex: number;
    goToNextQuestion: (option: string) => void;
    score: number;
    isQuizFinished: boolean;
  }
  