import React, { useState } from "react";

const Leaderboard = ({ users }) => {

  return (
    <div className="min-h-screen p-8 relative text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-500 rounded-full w-[400px] h-[400px] top-[-100px] left-[-150px] blur-3xl opacity-30"></div>
        <div className="absolute bg-purple-500 rounded-full w-[300px] h-[300px] bottom-[-100px] right-[-100px] blur-3xl opacity-30"></div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg">
          Leaderboard
        </h1>
        <p className="text-gray-200 text-lg">See the top performers this week and today!</p>
      </div>

      <div className="max-w-2xl mx-auto p-6 rounded-xl shadow-lg relative overflow-hidden" style={{background: "linear-gradient(90deg, rgba(0,21,52,1) 0%, #001c39 50%, rgba(0,29,61,1) 100%)"}}>
        <div className="scrollbar-hide overflow-y-scroll max-h-[420px]">
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-4 px-6 mb-4 bg-[#142850] rounded-lg shadow-md ${
                user.isCurrentUser ? "border-4 border-yellow-400" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold">
                  {index + 1 === 1
                    ? "🥇"
                    : index + 1 === 2
                    ? "🥈"
                    : index + 1 === 3
                    ? "🥉"
                    : `${index + 1}`}
                </div>
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-300">XP: {user.score}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1">
                {Array(5)
                  .fill()
                  .map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={`fa-solid fa-star ${
                        starIndex < user.stars
                          ? "text-yellow-400"
                          : "text-white"
                      }`}
                    ></i>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;