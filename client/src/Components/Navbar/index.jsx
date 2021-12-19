import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

// components
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const MobileNav = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <Link to={"/"}>
                <div className="w-28 h-16">
                    <img src="https://www.boxfordlibrary.org/wordpress/wp-content/uploads/2014/03/elibrary-logo.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
            </Link>
            <div className="flex items-center gap-3 relative">
                <button className="bg-Library-400  text-white py-2 px-3 rounded-full">
                    UseApp
                </button>
                <span onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-300 text-Library-400 rounded-full">
                    <FaUserAlt />
                </span>
                {
                    isDropDownOpen && (
                        <div className="absolute shadow-lg py-3 -bottom-20 -right-4 z-20 bg-white w-full flex flex-col gap-2">
                            <button onClick={SignIn}>Sign In</button>
                            <button onClick={SignUp}>Sign Up</button>
                        </div>
                    )}
            </div>
        </div>
    );
};

const LargeNav = ({ SignIn, SignUp }) => {
    return (
        <>
            <div className=" container px-20 mx-auto">
                <div className="hidden w-full items-center justify-around lg:flex gap-5 ">
                    <Link to={"/"}>
                        <div className="w-28 h-16">
                            <img
                                src="https://www.boxfordlibrary.org/wordpress/wp-content/uploads/2014/03/elibrary-logo.png"
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                    </Link>
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
                        <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">
                            Login
                        </button>
                        <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInModal = () => setOpenSignin(true)
    const openSignUpModal = () => setOpenSignup(true)

    return (
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
            <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full flex-col items-center">
                <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
            </nav>
        </>
    );
};





export default Navbar;