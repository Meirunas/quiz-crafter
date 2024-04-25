import React from 'react';
import { useQuiz } from '../QuizContext';

const ResultCard: React.FC = () => {
  const { score, questions } = useQuiz();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <h2 className="text-2xl font-bold mb-2">Your Score:</h2>
      <p className="text-lg font-medium">
        You scored <span className="text-blue-500">{score}</span> out of <span className="text-blue-500">{questions.length}</span>
      </p>
    </div>
  );
};

export default ResultCard;
