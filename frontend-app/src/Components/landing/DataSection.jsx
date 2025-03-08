import React from "react";
import "./HeroSection.css"; // Import the CSS file for styles

const DataSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Online Outline Creator, AI Copywriting, and Tools
        </h1>
        <p className="hero-subheading">
          Discover our free AI course creator and get unique, engaging content for
          any kind of course topic. Explore our blog to gain insights into AI
          copywriting techniques, best practices, and the latest tools
          revolutionizing the industry.
        </p>
        <button className="cta-button">Request a Demo</button>
      </div>

      {/* Featured Blogs Section */}
      <div className="feature-section">
        <div className="feature-card">
          <img
            src="images/5.png"
            alt="Top 5 Technology Trends"
            className="feature-img"
          />
          <div className="feature-content">
            <h3>Top 5 Technology Trends that Will Change Education in 2023</h3>
          </div>
        </div>

        <div className="feature-card">
          <img
            src="images/2.png"
            alt="Choose LMS using AI"
            className="feature-img"
          />
          <div className="feature-content">
            <h3>How to Choose the Right LMS for a Company using AI</h3>
          </div>
        </div>

        <div className="feature-card">
          <img
            src="images/13.jpg"
            alt="Use AI to create content"
            className="feature-img"
          />
          <div className="feature-content">
            <h3>How to Use AI to Create Excellent Course Content</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
