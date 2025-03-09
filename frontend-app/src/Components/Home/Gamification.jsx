import React from "react";
import { useNavigate } from "react-router-dom";
const Gamification = ({ badges, level, progress }) => {
  const navigate=useNavigate();
  return (
    <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-700 to-green-800 w-48 h-48 rounded-full absolute top-[-20%] left-[-10%] animate-bounce"></div>
        <div className="bg-gradient-to-r from-green-400 to-blue-400 w-32 h-32 rounded-full absolute top-20 right-[-15%] animate-pulse"></div>
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-40 h-40 rounded-full absolute bottom-[-10%] left-[25%] animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              Current Level: <span className="text-[#ffb703]">Level {level}</span>
            </p>
            <div className="w-full dark:bg-gray-700 rounded-full h-3 mt-4">
              <div
                className="bg-[#ffb703] h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
              {progress}% to the next level
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              Keep Going!
            </p>
            <div className="text-6xl text-yellow-500 animate-bounce">
              <i className="fa-solid fa-trophy"></i>
            </div>
          </div>
        </div>

        {/* Badge Section */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Achievements
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-110"
              
            >
              <a href={badge.link}>

              
              <div className="text-5xl text-yellow-500">
                <i className={`fa-solid ${badge.icon}`}></i>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-3">
                {badge.name}
              </p>
              </a>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamification;
