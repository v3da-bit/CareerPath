import React from "react";

const Navbar = () => {

  return (
    <div className="w-full h-16 flex items-center justify-end px-2 sticky top-0 z-20 bg-[#001a2c]">
      <div className="lg:w-[30%] sm:w-[50%] h-[68%]">
        <input
          type="search"
          className="w-full h-full px-2 text-black rounded-md border-2 border-gray-300"
          placeholder="Search..."
        />
      </div>
      <div className="lg:w-[15%] md:w-[45%] sm:w-[75%] flex items-center gap-4 justify-end">
        <div className="icon">
          <i className="fa fa-bell text-[25px]"></i>
        </div>
        <div className="icon">
          <i className="fa fa-globe text-[25px]"></i>
        </div>
        <div
        className="w-10 h-10 bg-center"
      >
        <img
          src="./images/user.png"
          alt="User"
          className="h-full w-full rounded-md"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;