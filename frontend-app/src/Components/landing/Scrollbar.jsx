import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const data = [
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Software Engineering" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Data Science" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Web Development" },
  { link: "https://roadmap.sh/", img: "images/8.jpeg", text: "Cloud Computing" },
  { link: "https://roadmap.sh/", img: "images/5.png", text: "Machine Learning" },
  { link: "https://roadmap.sh/", img: "images/2.png", text: "Cybersecurity" },
  { link: "https://roadmap.sh/", img: "images/9.jpg", text: "DevOps" },
  { link: "https://roadmap.sh/", img: "images/1.png", text: "AI and Robotics" },
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Product Management" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Digital Marketing" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Blockchain Development" },
  { link: "https://roadmap.sh/", img: "images/8.jpeg", text: "UI/UX Design" },
  { link: "https://roadmap.sh/", img: "images/5.png", text: "Business Analytics" },
  { link: "https://roadmap.sh/", img: "images/2.png", text: "Full Stack Development" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Data Engineering" },
  { link: "https://roadmap.sh/", img: "images/1.png", text: "Game Development" },
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Cloud Solutions Architect" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Network Engineering" },
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Software Engineering" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Data Science" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Web Development" },
  { link: "https://roadmap.sh/", img: "images/8.jpeg", text: "Cloud Computing" },
  { link: "https://roadmap.sh/", img: "images/5.png", text: "Machine Learning" },
  { link: "https://roadmap.sh/", img: "images/2.png", text: "Cybersecurity" },
  { link: "https://roadmap.sh/", img: "images/9.jpg", text: "DevOps" },
  { link: "https://roadmap.sh/", img: "images/1.png", text: "AI and Robotics" },
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Product Management" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Digital Marketing" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Blockchain Development" },
  { link: "https://roadmap.sh/", img: "images/8.jpeg", text: "UI/UX Design" },
  { link: "https://roadmap.sh/", img: "images/5.png", text: "Business Analytics" },
  { link: "https://roadmap.sh/", img: "images/2.png", text: "Full Stack Development" },
  { link: "https://roadmap.sh/", img: "images/4.jpg", text: "Data Engineering" },
  { link: "https://roadmap.sh/", img: "images/1.png", text: "Game Development" },
  { link: "https://roadmap.sh/", img: "images/14.png", text: "Cloud Solutions Architect" },
  { link: "https://roadmap.sh/", img: "images/3.png", text: "Network Engineering" },
];

const Scrollbar = () => {
  const scrollContainer = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const container = scrollContainer.current;
    let scrollSpeed = 1;

    const startScrolling = () => {
      if (scrolling) {
        requestAnimationFrame(() => {
          container.scrollLeft += scrollSpeed;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0; // Reset for infinite scrolling
          }
          startScrolling(); // Continue scrolling
        });
      }
    };

    if (scrolling) {
      startScrolling();
    }

    return () => setScrolling(false); // Cleanup on component unmount
  }, [scrolling]);

  const handleMouseEnter = () => {
    setScrolling(false); // Stop scrolling on hover
  };

  const handleMouseLeave = () => {
    setScrolling(true); // Resume scrolling when leaving
  };

  return (
    <div
      className="scroll-container"
      ref={scrollContainer}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "20px",
        height: "150px",
        borderRadius: "10px",
      }}
    >
      {data.map((item, index) => (
        <>
        <a href = { item.link } >
      <div
        key={index}
        className="card"
        onMouseEnter={handleMouseEnter} // Stop scrolling on hover
        onMouseLeave={handleMouseLeave} // Resume scrolling when leaving
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(4px)",
          backgroundColor: "#253b5070",
          transition: "opacity 0.3s ease-in, transform 0.3s ease, backdrop-filter 0.3s ease", // Added transition for backdrop-filter
          height: "80px",
          minWidth: '180px',
          width: 'fit-content',
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "5px 15px",
          cursor: "pointer",
          boxShadow: "0 0 5px grey",
          opacity: 0.7,
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.2)";
          e.target.style.opacity = "1"; // Make the background image clearer on hover
          e.target.style.backdropFilter = "blur(0px)"; // Remove blur effect on hover
        }}
      >
        {item.text}
      </div>
          </a>
        </>
))}
    </div>
  );
};

export default Scrollbar;
