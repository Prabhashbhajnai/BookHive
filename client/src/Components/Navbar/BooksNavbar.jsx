import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {RiSearch2Line} from "react-icons/ri";
import {AiOutlineArrowLeft}from "react-icons/ai";

const MobileNav = () => {
    return (
    <div className="flex w-full items-center justify-between lg:hidden">
        <AiOutlineArrowLeft/>
       <div className="w-28 h-16">
            <img src="https://www.boxfordlibrary.org/wordpress/wp-content/uploads/2014/03/elibrary-logo.png"  
            alt="logo"
            className="w-full h-full"
            />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-Library-400  text-white py-2 px-3 rounded-full">
                UseApp
            </button>
            <span className="border p-2 border-gray-300 text-Library-400 rounded-full">
                <FaUserAlt />
            </span>
        </div>
    </div>
    );
};

const LargeNav = () => {
    return (
      <>
      <div className=" container px-20 mx-auto">
        <div className="hidden w-full items-center justify-around lg:flex gap-5 ">
        <div className="w-28 h-16">
            <img 
            src="https://www.boxfordlibrary.org/wordpress/wp-content/uploads/2014/03/elibrary-logo.png"  
            alt="logo"
            className="w-full h-full"
            />
        </div>
        <div className="w-3/4 mr-40 bg-white shadow-md p-3 border border-gray-200 rounded">
           <div className="flex  items-center gap-2 ">
               <RiSearch2Line />
               <input 
                type="search"
                placeholder="Search for your books"
                className="w-full focus:outline-none" 
                />
           </div>
        </div>
        <div className="flex gap-5">
            <button className="text-gray-500 text-xl hover:text-gray-800">
                  Login
              </button>
            <button className="text-gray-500 text-xl hover:text-gray-800">
                  Signup
            </button>
         </div>
       </div>
       </div>
      </>
    );
};

const Navbar = () => {
    return (
    <>
    <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full flex-col items-center">
       <MobileNav />
       <LargeNav />
    </nav>
    </>
    );
};





export default Navbar;