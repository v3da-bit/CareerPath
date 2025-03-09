import React from "react";
import "./Footer.css"; // Importing the CSS file for styling

const Footer = () => {
  return (
    <div className="career-footer-container">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-logo">
          <img src="images/chatBot.png" alt="Career Path Logo" className="footer-logo-img" />
          <p className="footer-description">
            Career Path <br />
            Empowering your journey through personalized career paths and professional growth.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Explore Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Career Insights</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Career Resources</h4>
            <ul>
              <li><a href="/career-guides">Career Guides</a></li>
              <li><a href="/skills-development">Skill Development</a></li>
              <li><a href="/job-openings">Job Openings</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and CTA Button */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://www.facebook.com/" rel="noopener noreferrer">
            <i class="fa-brands fa-square-facebook" style={{color: '#fff', fontSize:'30px'}} ></i>
            </a>
            <a href="https://www.google.com/" rel="noopener noreferrer">
            <i class="fa-brands fa-google" style={{color: '#fff', fontSize:'30px'}} ></i>
            </a>
            <a href="https://www.instagram.com/" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram" style={{color: '#fff', fontSize:'30px'}} ></i>
            </a>
            <a href="https://www.youtube.com/" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"  style={{color: '#fff', fontSize:'30px'}}></i>
            </a>
          </div>
          <button className="cta-button">Get Career Guidance</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
