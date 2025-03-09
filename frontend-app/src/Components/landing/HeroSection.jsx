import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.css";

const content = [
  {
    title: "AI-Powered Career Exploration",
    paragraph:
      "Discover career paths tailored to your skills, interests, and goals. Our AI assistant provides personalized recommendations to guide your career choices.",
    image: "images/1.png",
  },
  {
    title: "Dynamic Skill Tracking",
    paragraph:
      "Track your progress in real-time. Set career goals, complete skill assessments, and receive feedback on your development journey.",
    image: "images/2.png",
  },
  {
    title: "Interactive Roadmaps",
    paragraph:
      "Visualize your path to success with interactive career roadmaps. See the steps, milestones, and skills you need to achieve your goals.",
    image: "images/3.png",
  },
  {
    title: "Real-Time Job Recommendations",
    paragraph:
      "Stay up-to-date with the latest job opportunities relevant to your skills and aspirations. Our real-time job board curates listings based on your preferences and career stage.",
    image: "images/4.jpg",
  },
  {
    title: "AI Chatbot Assistant",
    paragraph:
      "Get real-time guidance and insights from our AI chatbot. Whether it's career advice or skill improvement tips, our chatbot is here to help you at every step",
    image: "images/5.png",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section">
        {content.map((item, index) => (
          <div
            key={index}
            className={`hero-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="hero-overlay">
              <h1 className="hero-title">{item.title}</h1>
              <p className="hero-subtitle">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
