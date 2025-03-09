import React from "react";
import "./Style.css";
import useTheme from "../context/theme";

const ToggleButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const handleToggle = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="toggle-container">
      <input
        type="checkbox"
        className="toggle-input"
        onChange={handleToggle}
        checked={themeMode === "dark"}
      />
      <span className="toggle-slider">
        <span className="toggle-icon">
          {themeMode === "dark" ? "🌙" : "☀️"}
        </span>
      </span>
    </label>
  );
};

export default ToggleButton;
