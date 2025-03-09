import React, { createContext, useContext, useState } from "react";

// Create a Context
const QuizContext = createContext();

// Custom Hook to use the Quiz Context
export const useQuizContext = () => {
  return useContext(QuizContext);
};

// Provide the Quiz Context to children
export const QuizProvider = ({ children }) => {
  const [quizzes] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "A quiz to test your knowledge of React fundamentals.",
      image: "images/reactQuiz.png",
      questions: [
        {
          question: "What is React?",
          options: ["Library", "Framework", "Language", "Tool"],
        },
        {
          question: "What is JSX?",
          options: ["JavaScript", "Java", "HTML", "JavaScript XML"],
        },
      ],
    },
    {
      id: 2,
      title: "CSS Mastery",
      description: "Test your skills with advanced CSS concepts.",
      image: "images/cssQuiz.png",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Custom Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Assess your JavaScript programming knowledge.",
      image: "images/jsQuiz.png",
      questions: [
        {
          question: "What is the output of 'typeof NaN'?",
          options: ["Number", "String", "Undefined", "Object"],
        },
      ],
    },
    {
      id: 4,
      title: "python Essentials",
      description: "Assess your python programming knowledge.",
      image: "images/python.jpeg",
      questions: [
        {
          question: "What is the output of 'typeof int'?",
          options: ["Number", "String", "Undefined", "Object"],
        },
      ],
    },
  ]);

  return (
    <QuizContext.Provider value={{ quizzes }}>
      {children}
    </QuizContext.Provider>
  );
};