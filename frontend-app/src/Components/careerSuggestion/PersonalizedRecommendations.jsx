import React from 'react'
import { motion } from "framer-motion";

const PersonalizedRecommendations = () => {
    return (
      <motion.div
        className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-10 px-5 rounded-lg shadow-xl mb-8 flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">Personalized Career Recommendations</h2>
          <p className="text-lg text-gray-300">
            Discover career options tailored to your skills and interests, powered by advanced AI algorithms.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/network.png"
            alt="Career Recommendations"
            className="w-72 md:w-72"
          />
        </div>
      </motion.div>
    );
  };
  export default PersonalizedRecommendations;