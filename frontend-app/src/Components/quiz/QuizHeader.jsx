import React from "react";

const QuizHeader = () => {
  return (
    <div className="relative text-white py-16 px-8 rounded-lg m-4 shadow-lg overflow-hidden" style={{background: "linear-gradient(15deg, #142850, #14365f, #13476f, #125d80, #107792, #0d96a5, #09b8b4, #04ccb1)"}}>

      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-32 h-32 rounded-full absolute top-[-10%] left-[5%] animate-bounce"></div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-40 h-40 rounded-full absolute bottom-[-10%] right-[10%] animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Welcome to the Quiz Hub!</h1>
        <p className="text-lg mt-4">
          Test your knowledge, challenge yourself, and enhance your skills. Choose from a variety of quizzes tailored for your success!
        </p>
      </div>
    </div>
  );
};

export default QuizHeader;