import React from "react";

const InfoCard = () => {
  let userName = "";
  try {
    let userData = JSON.parse(localStorage.getItem("currentUser"));
    userName = userData.name;
  } catch (error) {
    console.log("error..", error);

  }
  return (
    <div className="rounded-lg overflow-hidden">
      <div>
        <img
          src="images/banner.jpeg"
          alt="Cover"
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="flex flex-col items-start px-8 -mt-16">
        <div className="flex items-start space-x-6 pb-2.5">
          <img
            src="images/user.png"
            alt="Profile"
            className="w-44 h-44 rounded-full border-4 border-white dark:border-gray-700"
          />
        </div>
        <div className="flex items-start w-full justify-between space-x-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {userName || "Nandani Singh"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Joined Since 2025 | 📍 Bihar
            </p>
            <div className="flex space-x-6 text-gray-600 dark:text-gray-300 mt-2">
              <span>+80 Quiz attempts</span>
              <span>12.6K followers</span>
              <span>990 following</span>
            </div>
          </div>
          <div className="ml-auto flex space-x-4 items-center">
            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition">
              + Follow
            </button>
            <button className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;