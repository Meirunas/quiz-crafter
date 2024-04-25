import React, { createContext, ReactNode, useContext, useState } from 'react';
import { QuizContextType, Question } from './types';

const quizQuestions: Question[] = [
  {
    question: 'Which element does "O" represent on the periodic table?',
    options: ['Oxygen', 'Gold', 'Osmium', 'Olive'],
    answer: 'Oxygen',
  },
  {
    question: 'What year did the first man walk on the moon?',
    options: ['1969', '1972', '1958', '1986'],
    answer: '1969',
  },
  // Add more questions as needed
];

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>(quizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const goToNextQuestion = (option: string) => {
    if (questions[currentQuestionIndex].answer === option) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <QuizContext.Provider value={{ questions, currentQuestionIndex, goToNextQuestion, score, isQuizFinished }}>
      {children}
    </QuizContext.Provider>
  );
};
