import React from "react";

const LearningPath = ({ paths }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Learning Paths
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paths.map((path, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-700 group"
          >
            {/* Animated Subtle Background */}
            <div className="absolute inset-0 bg-opacity-10 dark:bg-opacity-10 pointer-events-none">
              <svg
                className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74 9.94M12 2v20"></path>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:scale-105 transition-transform duration-300">
                {path.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {path.description}
              </p>
              <a href={path.link}>
              <button className="mt-4 bg-[#ffb703] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300">
                View Path
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
