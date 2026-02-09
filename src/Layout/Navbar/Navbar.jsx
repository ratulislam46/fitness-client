import React, { use, useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import FitnestIcon from './FitnestIcon';
import './Navbar.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {

    const { user, LogOut } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);


    const handleLogOut = () => {
        LogOut()
            .then(result => {
                // console.log('successfully logout', result);
                toast.success('successfully logout');
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme]);

    // navbar hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowNavbar(false); // scroll down
            } else {
                setShowNavbar(true); // scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks =
        <>
            <li className='text-base-content '><NavLink to='/'>Home</NavLink></li>
            <li className='text-base-content'><NavLink to='/all-trainer'>Trainers</NavLink></li>
            <li className='text-base-content'><NavLink to='/all-forum-post'>Forums</NavLink></li>
            <li className='text-base-content'><NavLink to='/classes'>Classes</NavLink></li>
            <li className='text-base-content'><NavLink to='/contact'>Contact</NavLink></li>

            {
                user && <>
                    <li className='text-base-content'><NavLink to='/be-a-trainer'>Be a trainer</NavLink></li>
                    <li className='text-base-content'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </>
            }
        </>

    return (
        <div>
            <div
                className={`
                    fixed top-0 left-0 w-full z-50
                    backdrop-blur-2xl bg-base-100/80
                    shadow-sm
                    transition-transform duration-500 ease-in-out
                    ${showNavbar ? "translate-y-0" : "-translate-y-full"}`} >
                <div className="navbar container mx-auto">
                    {/* Start */}
                    <div className="navbar-start">
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden" >
                            <IoMdMenu size={24} />
                        </button>
                        <FitnestIcon />
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-4">
                            {navLinks}
                        </ul>
                    </div>

                    {/* End */}
                    <div className="navbar-end flex items-center gap-2">
                        {/* Theme toggle */}
                        <button
                            className="p-2 rounded-md"
                            onClick={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            } >
                            {theme === "light" ? (
                                <MdDarkMode size={26} />
                            ) : (
                                <MdLightMode size={26} />
                            )}
                        </button>

                        {/* User image */}
                        {user && (
                            <img
                                className="w-10 h-10 rounded-2xl object-cover"
                                src={
                                    user.photoURL ||
                                    "https://i.postimg.cc/pX5mX6Zd/istockphoto-1337144146-612x612.jpg"}
                                alt="user" />
                        )}

                        {/* Auth button */}
                        {user ? (
                            <Link
                                onClick={handleLogOut}
                                to="/login"
                                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition" >
                                Log Out
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition" >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Full screen slide from top) */}
            <div
                className={`fixed top-0 left-0 w-full z-50 bg-base-100 shadow-lg transform transition-transform duration-1000 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"}`} >
                {/* Close button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-2xl" >
                    ✕
                </button>

                {/* Menu content */}
                <ul
                    onClick={() => setMenuOpen(false)}
                    className=" flex flex-col items-center gap-5  pt-16 pb-8 max-h-[50vh]overflow-y-auto"   >
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;