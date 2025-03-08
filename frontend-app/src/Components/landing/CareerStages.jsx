import React from "react";
import "./HeroSection.css"; // Importing the CSS file for styles

const data = [
  { img: "images/3.png", text: "Data Science" },
  { img: "images/4.jpg", text: "Web Development" },
  { img: "images/14.png", text: "Cloud Computing" },
  { img: "images/5.png", text: "Machine Learning" },
  { img: "images/2.png", text: "Cybersecurity" },
  { img: "images/13.jpg", text: "AI and Robotics" },
  { img: "images/1.png", text: "Cyber Physical Systems" },
  { img: "images/8.jpeg", text: "Artificial Intelligence" },
];

const CareerStages = () => {
  return (
    <div className="career-stage-container">
      <h2 style={{fontSize:'45px', textAlign:'center', color:'#fff', fontWeight:'700', margin:'50px'}}>
      For Every Career Stage
   </h2>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.text} />
            <div className="card-content">
              <h3>{item.text}</h3>
              <p>
                Discover what opportunities await in the field of{" "}
                {item.text}. Learn more about the career and what it entails.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerStages;
