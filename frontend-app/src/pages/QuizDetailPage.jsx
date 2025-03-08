import React from "react";
import { useParams } from "react-router-dom";
import QuizAttempt from "../Components/quiz/QuizAttempt";
import Navbar from "../Components/common/Navbar";
import { useQuizContext } from "../context/QuizContext";

const QuizDetailsPage = () => {
  const { id } = useParams();
  const { quizzes } = useQuizContext();

  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));

  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="p-8">
        <QuizAttempt quiz={quiz} />
      </div>
    </div>
  );
};

export default QuizDetailsPage;