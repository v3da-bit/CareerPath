import React from "react";
import HeroSection from "./HeroSection";
import SkillTracker from "./SkillTracker";
import LearningPath from "./LearningPath";
import Gamification from "./Gamification";
import { li, link } from "framer-motion/client";

const Dashboard = () => {
  let uName = "";
  try {
    let userData = JSON.parse(localStorage.getItem("currentUser"));
    uName = userData.name;

  } catch (error) {
    console.log("error..", error);

  }
  const userName = uName || "Nandani";
  const profilePic = "images/user.jpg"; // Replace with dynamic URL
  const skills = [
    { name: "ReactJs", progress: 70, link: "https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" },
    { name: "Node.js", progress: 50, link: "https://www.youtube.com/watch?v=IIpiLZGTWuo&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8" },
    { name: "Tailwind CSS", progress: 90, link: "https://www.youtube.com/watch?v=AGbrsuWcwiE&list=PL8p2I9GklV471sLqkGuf0eKAu9sVNmKFV" },
    { name: "Nextjs", progress: 70, link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" },
  ];

  const paths = [
    { title: "Full-Stack Developer", description: "A complete roadmap to become a full-stack developer.", link: "https://www.crio.do/full-stack-developer-track/v2/ppc-ads/?utm_source=google-ads-search&utm_medium=SD-Exact&utm_campaign=Full-Stack&utm_content=728916945486&utm_term=full%20stack%20training&utm_network=s&gad_source=2&gclid=Cj0KCQiAz6q-BhCfARIsAOezPxl9IisTx7mE8yj2pYqFFgxhmdjJTzOnFFGVDMFpRC-Zj7g-bdcdG4IaArzuEALw_wcB" },
    { title: "Frontend Specialist", description: "Focus on mastering frontend technologies.", link: "https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp" },
  ];

  const badges = [
    { name: "Quiz Master", icon: "fa-award", link: "https://www.codingal.com/quizzes/" },
    { name: "Skill Pro", icon: "fa-lightbulb", link: "https://www.codingal.com/quizzes/" },
    { name: "Top Performer", icon: "fa-chart-line", link: "https://www.codingal.com/quizzes/" },
    { name: "Fast Learner", icon: "fa-bolt", link: "https://www.codingal.com/quizzes/" },
  ];
  const level = 5;
  const progress = 72;

  return (
    <div className="space-y-8 p-4">
      <HeroSection userName={userName} profilePic={profilePic} />
      <div className="p-4 space-y-8">
        <button onClick={() => console.log("Done")}>
          <Gamification badges={badges} level={level} progress={progress} />
        </button>
      </div>
      <SkillTracker skills={skills} />
      <LearningPath paths={paths} />
    </div>
  );
};

export default Dashboard;