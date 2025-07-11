import React from 'react';
import { Link, Outlet } from 'react-router';
import { MdEmail, MdPendingActions } from "react-icons/md";

import FitnestIcon from '../Layout/Navbar/FitnestIcon';

const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                </div>
                {/* Page content here */}

                <Outlet></Outlet>

                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <div className='pb-6'>
                        <FitnestIcon></FitnestIcon>
                    </div>

                    {/* show link  */}
                    <li>
                        <Link
                            to="/dashboard/newsletter-subscribers"
                            className="flex items-center gap-3 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors duration-200">
                            <MdEmail className="text-xl text-blue-500" />
                            <span className="font-semibold">All Newsletter Subscribers</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/trainer-applied"
                            className="flex items-center gap-3 text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-lg transition-colors duration-200">
                            <MdPendingActions className="text-xl text-yellow-500" />
                            <span className="font-semibold">Trainer Applied</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;