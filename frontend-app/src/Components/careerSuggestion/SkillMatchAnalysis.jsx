import React from 'react'
import { motion } from "framer-motion";

const SkillMatchAnalysis = () => {
    return (
      <motion.div
        className="bg-gray-900 text-white py-10 px-5 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Skill Match Analysis</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {/* Skill Progress Bar */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden h-8">
              <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: "80%" }}></div>
            </div>
            <p className="mt-2 text-gray-300">Your Skills: 80%</p>
          </div>
  
          {/* Required Skills Progress Bar */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden h-8">
              <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: "95%" }}></div>
            </div>
            <p className="mt-2 text-gray-300">Required Skills: 95%</p>
          </div>
        </div>
  
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-400">85%</h3>
            <p className="text-gray-300">Technical Skills</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-400">70%</h3>
            <p className="text-gray-300">Communication Skills</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-yellow-400">90%</h3>
            <p className="text-gray-300">Problem Solving</p>
          </div>
        </div>
      </motion.div>
    );
  };  

  export default SkillMatchAnalysis;
