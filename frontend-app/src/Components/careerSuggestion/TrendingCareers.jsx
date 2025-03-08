import React from 'react';
import { motion } from 'framer-motion';

const TrendingCareers = () => {
  const careers = [
    { title: "Data Scientist", img: "/images/1.png", desc: "Explore the world of data and analytics.", url: "https://www.geeksforgeeks.org/data-science-with-python-tutorial/" },
    { title: "Web Developer", img: "/images/5.png", desc: "Build responsive and modern websites.", url: "https://www.geeksforgeeks.org/web-development/" },
    { title: "Product Manager", img: "/images/9.jpg", desc: "Design intelligent systems with AI.", url: "https://www.geeksforgeeks.org/product-management/" },
    { title: "AI Engineer", img: "/images/14.png", desc: "Lead products to success.", url: "https://www.geeksforgeeks.org/artificial-intelligence/" },
    { title: "UX Designer", img: "/images/cer.jpg", desc: "Create user-friendly designs.", url: "https://www.geeksforgeeks.org/100-days-of-ui-ux/" },
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-5 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2 className="text-3xl font-bold col-span-full mb-4">Trending Careers</h2>
      {careers.map((career, index) => (
        <a key={index} href={career.url} rel="noopener noreferrer">
          <motion.div
            className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img src={career.img} alt={career.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4">
              <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
              <p className="text-gray-300 text-center">{career.desc}</p>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default TrendingCareers;