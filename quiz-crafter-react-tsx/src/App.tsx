// src/App.tsx
import React from 'react';
import { QuizProvider, useQuiz } from './QuizContext'; // Ensure useQuiz is imported
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';

const Quiz: React.FC = () => {
  const { isQuizFinished } = useQuiz(); // Now useQuiz is defined

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {!isQuizFinished ? <QuestionCard /> : <ResultCard />}
    </div>
  );
};

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
