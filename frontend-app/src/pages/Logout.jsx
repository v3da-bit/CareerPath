import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const LogoutUser = async () => {
    try {
      Cookies.remove("uid");
      navigate("/Signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  LogoutUser();
  return <></>;
};
export default Logout;