import React from 'react';
import "./loader.css";

const Loader = () => {
  return (
    <div className="container w-full h-full absolute top-0 left-0 flex justify-center items-center">
      <div class="cloud front">
        <span class="left-front"></span>
        <span class="right-front"></span>
      </div>
      <span class="sun sunshine"></span>
      <span class="sun"></span>
      <div class="cloud back">
        <span class="left-back"></span>
        <span class="right-back"></span>
      </div>
    </div>
  );
};

export default Loader;