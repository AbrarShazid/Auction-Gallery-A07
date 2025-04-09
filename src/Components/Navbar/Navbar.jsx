import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center mt-[1%] mb-[1.5%] mx-[5%]">
      <h1
        style={{ fontFamily: "Poppins, Helvetica, Arial, sans-serif" }}
        className="text-[#003EA4] text-4xl font-bold"
      >
        Auction<span className="text-[#FFD337]">Gallery</span>
      </h1>

      <ul className="flex flex-row gap-12 text-xl">
        <li>Home</li>
        <li>Auctions</li>
        <li>Categories</li>
        <li>How to works</li>
      </ul>

      <div className="flex gap-3 ">
        <div className="w-10 h-10 bg-[#EBF0F5] hover:bg-[#FFD337]  rounded-[50%] flex justify-center items-center relative">
          <IoNotificationsOutline className="w-6 h-6 text-[#0E2954] " />

          
          <div  className="bg-[#0E2954] text-[11px] text-white rounded-[50%] text-center  px-1 absolute -top-[0.3px] left-[18px]">9</div>
        </div>

        <img
          className="w-10 h-10 rounded-full object-cover"
          src="/profile.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
