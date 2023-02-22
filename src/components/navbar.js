import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import {  HiUser } from "react-icons/hi"

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-16 bg-white text-blue-500">
        <div className="flex items-center justify-between w-full h-full px-2">
          <div className="flex items-center ">
            <h1 className=" font-semibold text-2xl">Gifty</h1>
          </div>
          <div>
            <ul className="items-center hidden mr-10 md:flex space-x-10 ">
              <li className=" text-lg ">Home</li>
              <li className=" text-lg">Menu</li>

              <li className=" text-lg">About</li>
              <li className=" text-lg">Contact</li>
            </ul>
          </div>
          <div className="flex items-center">
            
            <BsFillCartFill className="invisible md:visible md:h-5 md:w-8" ></BsFillCartFill>
            <div className="flex items-center invisible md:visible">
             
                <HiUser className="w-5 h-5 text-blue-500   hover:scale-105 "></HiUser>
              <div className=" m-2">
                <h2>LogIn</h2>
              </div>
              
              </div>
            <AiOutlineMenu
              size={25}
              className="md:hidden"
              onClick={handleNav}
            ></AiOutlineMenu>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
              : null
          }
        >
          <div
            className={
              nav
                ? "md:hidden fixed top-0 shadow-xl z-[100] left-0 w-[75%] sm:w-[50%] md:w-[45%] p-5 ease-in duration-500 h-screen bg-white"
                : "fixed top-0 left-[-100%] p-5  ease-in duration-500  "
            }
          >
            <div>
              <div className="flex items-center justify-between w-full">
                <h1 className=" font-semibold text-2xl ">Gifty</h1>
                <div
                  onClick={handleNav}
                  className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400 bg-white"
                >
                  <AiOutlineClose className="text-blue-500 "></AiOutlineClose>
                </div>
              </div>
              <div className="flex-col mt-10">
                <ul>
                  <li className="text-lg py-3">Home</li>
                  <li className="text-lg py-3">Menu</li>
                  <li className="text-lg py-3">About</li>
                  <li className="text-lg py-3">Contact</li>
                  
                </ul>
              </div>
              
            
   
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
