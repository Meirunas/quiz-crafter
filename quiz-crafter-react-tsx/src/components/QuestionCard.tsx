import React from "react";
import { useQuiz } from "../QuizContext";

const QuestionCard: React.FC = () => {
  const { questions, currentQuestionIndex, goToNextQuestion } = useQuiz();
  const question = questions[currentQuestionIndex];
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full bg-white hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 text-gray-800 shadow-sm"
            onClick={() => goToNextQuestion(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
