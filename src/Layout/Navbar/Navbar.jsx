import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import FitnestIcon from './FitnestIcon';
import './Navbar.css'

const Navbar = () => {

    const { user, LogOut } = use(AuthContext)

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


    const navLinks =
        <>
            <li className='text-white'><NavLink to='/'>Home</NavLink></li>
            <li className='text-white'><NavLink to='/all-trainer'>All Trainger</NavLink></li>

            {
                user && <>
                    <li className='text-white'><NavLink to='/be-a-trainer'>Be a trainer</NavLink></li>
                    <li className='text-white'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </>
            }
        </>

    return (
        <div className="navbar bg-[#283747] shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#283747] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <FitnestIcon></FitnestIcon>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogOut} to='/login' className="btn bg-purple-600 hover:bg-purple-700 text-white">Log Out</Link> :
                        <Link to='/login' className="btn bg-purple-600 hover:bg-purple-700 text-white">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;