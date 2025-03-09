import React from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

const MenuOption = ({ link, icon, text }) => {
  const isCompressed = useSelector((state) => state.slider.menuOpen);
  const navigate = useNavigate();
  const LogoutUser = async () => {
    try {
      Cookies.remove("uid");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  console.log("link..", link);
  
  return (
    <NavLink
      to={link === "/logout" ? "/" : link}
      onClick={() => {
        if (link === "/logout") {
          LogoutUser();
        }
      }}
      className={({ isActive }) =>
        `w-full h-10 rounded-sm flex items-center gap-2 text-base mb-2 duration-200 ${isActive ? "bg-white px-2 text-black" : "hover:bg-white/10"
        }`
      }
    >
      {icon}
      {isCompressed && <h3 className={({ isActive }) =>
        ` ${isActive ? "bg-white text-black text-sm	" : "text-white text-sm"
        }`
      }>{text}</h3>}
    </NavLink>
  );
};

export default MenuOption;
