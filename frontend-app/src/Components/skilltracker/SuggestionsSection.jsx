import React from "react";

const suggestions = [
  { title: "Learn Advanced React", action: "Explore Course", link:"https://www.youtube.com/watch?v=-Qnf2bME-rE&pp=ygUXYWR2YW5jZSByZWFjdCBqcyBjb3Vyc2U%3D" },
  { title: "Practice Python Basics", action: "Take Test", link:"https://www.w3schools.com/python/python_quiz.asp" },
  { title: "Join AI Workshop", action: "Register Now", link:"https://www.ccbp.in/ai-workshop" },
];

const SuggestionsSection = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg text-center hover:shadow-xl transition"
          >
            <h3 className="font-semibold mb-2">{suggestion.title}</h3>
            <a href={suggestion.link}>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded mt-2 hover:bg-yellow-600">
              {suggestion.action}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsSection;
