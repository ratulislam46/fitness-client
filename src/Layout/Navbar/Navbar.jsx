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

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                console.log('successfully logout', result);
                toast.success('successfully logout');
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    const navLinks =
        <>
            <li className='text-base-content'><NavLink to='/'>Home</NavLink></li>
            <li className='text-base-content'><NavLink to='/all-trainer'>Trainers</NavLink></li>
            <li className='text-base-content'><NavLink to='/all-forum-post'>Forums</NavLink></li>
            <li className='text-base-content'><NavLink to='/classes'>Classes</NavLink></li>

            {
                user && <>
                    <li className='text-base-content'><NavLink to='/be-a-trainer'>Be a trainer</NavLink></li>
                    <li className='text-base-content'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </>
            }
        </>

    return (
        <div className="shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-2xl  border-b-2 border-primary/30 ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <IoMdMenu size={24} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <FitnestIcon></FitnestIcon>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-bl">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* dark and light mood  */}
                    <div className="flex-none mr-2">
                        <button
                            className="px-2 py-1 rounded-md"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <MdDarkMode size={28} /> : <MdLightMode size={28} />}
                        </button>
                    </div>


                    {/* user image */}
                    {
                        user &&
                        <img className='w-10 h-10 mr-2 rounded-2xl' src={user.photoURL || 'https://i.postimg.cc/pX5mX6Zd/istockphoto-1337144146-612x612.jpg'} alt="" />
                    }

                    {/* conditional button  */}
                    {
                        user ?
                            <Link onClick={handleLogOut} to='/login' className="btn bg-green-500 hover:bg-green-600 border-none text-white">Log Out</Link> :
                            <Link to='/login' className="btn bg-purple-600 border-none hover:bg-purple-700 text-white">Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;