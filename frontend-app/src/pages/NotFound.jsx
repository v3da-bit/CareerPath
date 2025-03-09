import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/Signin">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
