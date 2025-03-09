import React from "react";
import { useNavigate } from "react-router-dom";

const QuizList = ({ quizzes }) => {
  const navigate = useNavigate();

  return (
    <div className="relative p-4">

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="relative p-3 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/quiz/${quiz.id}`)}
          >
            <div className="w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src={quiz.image}
                alt={quiz.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quiz Content */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-200">
                {quiz.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {quiz.description}
              </p>
              <p className="mt-4 text-yellow-500 font-semibold">
                {quiz.questions.length} Questions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;