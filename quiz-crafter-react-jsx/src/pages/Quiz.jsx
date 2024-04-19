import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Quiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    // Update score based on the correctness of the answer
    setScore((prevScore) => {
      const updatedScore = option.correct ? prevScore + 1 : prevScore;

      // Move to the next question or navigate to results
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        // Navigate and pass the updated score
        navigate("/results", { state: { score: updatedScore } });
      }

      return updatedScore; // Return the updated score for the next state update
    });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
