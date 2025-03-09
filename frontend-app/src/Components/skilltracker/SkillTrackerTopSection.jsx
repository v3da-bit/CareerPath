import React from "react";
import { motion } from "framer-motion";

const SkillTrackerTopSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-5 md:px-20 lg:px-40">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Skill Progress</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Track your growth and stay ahead with actionable insights.
        </p>
      </motion.div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray-900 rounded-lg p-6 shadow-lg"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Skill Progress Over Time</h2>

          {/* Redesigned Progress Chart */}
          <div className="grid grid-cols-9 gap-4 w-full h-48 items-end">
            <div className="flex flex-col items-center">
              <div className="w-10 h-32 bg-blue-500 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Jan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-40 bg-green-500 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Feb</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-28 bg-yellow-500 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Mar</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-36 bg-green-900 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Apr</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-36 bg-red-500 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">May</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-40 bg-[skyblue] rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">June</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-36 bg-orange-500 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">July</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-40 bg-blue-800 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Aug</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-28 bg-pink-400 rounded-t-md transition-all duration-700 hover:scale-110"></div>
              <p className="mt-2 text-sm">Sep</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {[
          { title: "Skill Improvement", value: "+25%" },
          { title: "Test Scores", value: "85% Avg" },
          { title: "Milestones", value: "5 Completed" },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
          >
            <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
            <p className="text-2xl font-bold text-blue-400">{metric.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillTrackerTopSection;
