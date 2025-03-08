import React from 'react';
import './FeedbackSection.css'; // Importing the CSS file for styling

const FeedbackSection = () => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">User Feedback</h2>
      <div className="feedback-cards">
        {/* Card 1 */}
        <div className="feedback-card">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
            alt="User 1"
            className="user-image"
          />
          <h3 className="user-name">Khushi Arora</h3>
          <p className="user-feedback">
            "This product has helped me improve my productivity by leaps and bounds! Highly recommend it to anyone looking for a game-changer."
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feedback-card">
          <img
            src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg"
            alt="User 2"
            className="user-image"
          />
          <h3 className="user-name">Sawati singh</h3>
          <p className="user-feedback">
            "An incredible tool for anyone wanting to organize their work efficiently. Simple interface and powerful features."
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feedback-card">
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/23/25/76/1000_F_323257696_UPHLJEQ93e0AY0qXeXbw2Vh7R5Ts2fGN.jpg"
            alt="User 3"
            className="user-image"
          />
          <h3 className="user-name">Diya methta</h3>
          <p className="user-feedback">
            "I was able to finish my project on time thanks to this amazing service. Will definitely use it again for my future tasks."
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
            <i className="fa-solid fa-star-half"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
