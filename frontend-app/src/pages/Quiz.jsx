import React from "react";
import QuizHeader from "../Components/quiz/QuizHeader";
import QuizList from "../Components/quiz/QuizList";
import Navbar from "../Components/common/Navbar";
import { useQuizContext } from "../context/QuizContext";

const Quiz = () => {
  const { quizzes } = useQuizContext();

  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <QuizHeader />
      <QuizList quizzes={quizzes} />
    </div>
  );
};

export default Quiz;