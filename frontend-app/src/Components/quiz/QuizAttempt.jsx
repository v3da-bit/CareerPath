import React, { useState, useEffect } from "react";

const QuizAttempt = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null); // Reset selection for the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null); // Reset selection for the previous question
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const isLastQuestion = currentQuestion === quiz.questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </h2>
        <div className="text-lg text-red-500 font-semibold">
          Time Left: {timeLeft}s
        </div>
      </div>

      {/* Question */}
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {quiz.questions[currentQuestion].question}
      </p>

      {/* Options */}
      <div className="mt-6 space-y-4">
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`block w-full p-4 rounded-lg border ${
              selectedOption === option
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {!isFirstQuestion && (
          <button
            onClick={handlePreviousQuestion}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Previous
          </button>
        )}
        <div className="flex-grow"></div>
        {!isLastQuestion ? (
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            disabled={!selectedOption}
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizAttempt;