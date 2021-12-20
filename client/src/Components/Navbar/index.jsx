import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import gravatar from 'gravatar';

// components
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

// redux action
import { signOut } from '../../Redux/Reducer/Auth/auth.action';

const MobileNav = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();

    const reduxState = useSelector(global => global.user.user);

    const signOutHandler = () => dispatch(signOut());

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
                {
                    reduxState?.user?.fullname? (
                        <>
                            <div onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 w-12 h-12 rounded-full">
                                <img
                                    src={gravatar.url(reduxState?.user?.email)}
                                    alt={reduxState?.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            {isDropDownOpen && (
                                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 z-20 bg-white w-full flex flex-col gap-2">
                                    <button onClick={signOutHandler}>Sign Out</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <span onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 rounded-full">
                                <FaUserAlt />
                            </span>
                            {isDropDownOpen && (
                                <div className="absolute shadow-lg py-3 top-20 -right-1 z-20 bg-white w-1/2 flex flex-col gap-2">
                                    <button onClick={SignIn}>Sign In</button>
                                    <button onClick={SignUp}>Sign Up</button>
                                </div>
                            )}
                        </>
                    )
                }
            </div>
        </div>
    );
};

const LargeNav = ({ SignIn, SignUp }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();

    const reduxState = useSelector(global => global.user.user);

    const signOutHandler = () => dispatch(signOut());

    return (
        <>
            <div className=" container px-20 mx-auto">
                <div className="hidden w-full items-center justify-between lg:flex gap-5 ">
                    <Link to={"/"}>
                        <div className="w-28 h-16">
                            <img
                                src="https://www.boxfordlibrary.org/wordpress/wp-content/uploads/2014/03/elibrary-logo.png"
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                    </Link>
                    {
                        reduxState?.user?.fullname? (
                            <div className="relative w-20">
                                <div onClick={() => setIsDropDownOpen(prev => !prev)} className="border p-2 border-gray-500 text-Library-300 w-12 h-12 rounded-full">
                                    <img
                                        src={gravatar.url(reduxState?.user?.email)}
                                        alt={reduxState?.user?.email}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {isDropDownOpen && (
                                    <div className="absolute shadow-lg py-3 -right-4 w-full bg-white z-30 flex flex-col gap-2">
                                        <button onClick={signOutHandler}>Sign Out</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="ml-28 flex gap-4">
                                <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">
                                    Login
                                </button>
                                <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">
                                    Signup
                                </button>
                            </div>
                        )
                    }
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