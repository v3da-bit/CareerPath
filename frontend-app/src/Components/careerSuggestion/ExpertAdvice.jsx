import React from 'react'
import { motion } from "framer-motion";

const ExpertAdvice = () => {
    const testimonials = [
      { quote: "Networking is the key to success in any field.", author: "John Doe" },
      { quote: "Focus on learning and growing rather than quick results.", author: "Jane Smith" },
      { quote: "Keep your resume updated and tailored to your goals.", author: "Emily Johnson" },
    ];
  
    return (
      <motion.div
        className="bg-gray-900 text-white py-10 px-5 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Expert Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-blue-400">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
export default ExpertAdvice;