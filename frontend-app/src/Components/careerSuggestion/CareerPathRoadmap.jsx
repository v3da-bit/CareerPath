import React from 'react';
import { motion } from 'framer-motion';

const CareerPathRoadmap = () => {
  const steps = [
    { text: "Learn foundational skills", url: "https://www.javatpoint.com.cach3.com/" },
    { text: "Build a strong portfolio", url:"https://www.bestcolleges.com/bootcamps/guides/how-to-build-coding-portfolio/" },
    { text: "Apply for internships" , url:"https://careers.linkedin.com/pathways-programs/internships/"},
    { text: "Secure a full-time role" , url:"https://www.linkedin.com/advice/0/heres-how-you-can-secure-permanent-position-etdwe/"},
    { text: "Achieve peak performance" , url:"https://www.achievepeakperformance.net/"},
  ];

  return (
    <motion.div
      className="bg-gray-900 text-white py-10 px-8 rounded-lg shadow-lg mb-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Career Path Roadmap</h2>
      <div className="relative flex snap-x items-center justify-center space-x-6 px-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="snap-center flex-none bg-gray-800 p-5 rounded-lg shadow-md w-52 flex flex-col items-center space-y-4 hover:bg-gray-700 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white text-lg font-bold rounded-full">
              {index + 1}
            </div>
            {step.url ? (
              <a
                href={step.url}
                rel="noopener noreferrer"
                className="text-md text-center font-semibold text-blue-400 hover:underline"
              >
                {step.text}
              </a>
            ) : (
              <h3 className="text-md text-center font-semibold">{step.text}</h3>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CareerPathRoadmap;