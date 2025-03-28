import React from "react";
import { logo } from "../utils/logo";

const Header = () => {
  return (
    <div className="flex justify-between h-[50px] pb-[10px] text-[14px]   border-gray-300  border-b-[1px] ">
      <div className="flex justify-center items-center gap-6 left-header-bar">
        <img src={`${logo()}`} alt="" />
        <a href="" className="">Discover</a>
        <a href="">Create</a>
      </div>
      <div className="right-header-bar flex justify-center items-center gap-6">
        <a  className="text-blue-500  ">Watchlist</a>
        <a  className="bg-gray-500 text-white flex w-[20px] h-[20px] rounded-full justify-center items-center ">?</a>
        <button id="login-button" className="flex justify-center items-center rounded-lg text-blue-500 font-bold border-blue-300 border-[1px] w-[70px] h-[40px]">Login</button>
      </div>
    </div>
  );
};

export default Header;
