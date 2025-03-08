import React from "react";
import { motion } from "framer-motion"; // For animations

const SkillTracker = ({ skills }) => {
  return (
    <div className="to-indigo-800 p-6 pt-16 rounded-lg shadow-lg text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Your Skill Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative dark:bg-gray-700 text-gray-200 rounded-lg shadow-md p-4"
          >
            <a href={skill.link}>
            {/* Skill Name */}
            <div className="absolute -top-4 left-4 bg-gray-500 text-white text-lg font-semibold px-3 py-1 rounded-lg shadow-lg">
              {skill.name}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="relative h-32 w-32 mx-auto">
                <svg className="w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="10"
                    fill="none"
                  />
                </svg>
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                  }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="#ffb703"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="314" // Circumference of the circle (2πr)
                    strokeDashoffset={`calc(314 - (314 * ${skill.progress}) / 100)`}
                  />
                </svg>
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {skill.progress}%
                </div>
              </div>
            </div>

            {/* Skill Details */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Progress towards mastering <span className="font-semibold">{skill.name}</span>
              </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillTracker;
