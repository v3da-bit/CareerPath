import React from "react";
import Leaderboard from "../Components/leaderboard/Leaderboard";
import Navbar from "../Components/common/Navbar";
const users = [
  { name: "Bharath Kumar", score: 2980, stars: 5, category: "weekly", avatar: "/images/user8.jpeg" },
  { name: "Roshani Patil", score: 2721, stars: 4, category: "daily", avatar: "/images/user2.jpg" },
  { name: "Chandra Harshita Bandi", score: 2579, stars: 4, category: "daily", avatar: "/images/user3.jpg" },
  { name: "Nandani (You)", score: 1300, stars: 3, category: "weekly", isCurrentUser: true, avatar: "/images/user.png" },
  { name: "Surbhi V S", score: 1874, stars: 3, category: "daily", avatar: "/images/user4.jpg" },
  { name: "Premjeet", score: 1756, stars: 3, category: "weekly", avatar: "/images/user5.jpeg" },
  { name: "Bharath Kumar", score: 280, stars: 5, category: "weekly", avatar: "/images/user6.jpg" },
  { name: "Jaya Patil", score: 271, stars: 4, category: "daily", avatar: "/images/user7.jpg" },
  { name: "Sanjay Harshita", score: 2579, stars: 4, category: "daily", avatar: "/images/user8.jpeg" },
  { name: "Subham thakur", score: 184, stars: 3, category: "daily", avatar: "/images/user9.jpg" },
  { name: "Ankit", score: 175, stars: 3, category: "weekly", avatar: "/images/user5.jpeg" },
];

const LeaderboardPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar/>
       <Leaderboard users={users} />
    </div>
  );
};

export default LeaderboardPage;
