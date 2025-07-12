import React from 'react';
import { Link, Outlet } from 'react-router';
import { MdEmail, MdPendingActions, MdForum, MdOutlineHistoryEdu, MdOutlinePerson } from "react-icons/md";
import { FaUsers, FaMoneyBillWave, FaPlusCircle, FaCalendarAlt } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
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

                    {/* Done  */}

                    {/* All newletter subscribers */}
                    <li>
                        <Link
                            to="/dashboard/newsletter-subscribers"
                            className="flex items-center gap-3 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors duration-200">
                            <MdEmail className="text-xl text-blue-500" />
                            <span className="font-semibold">All Newsletter Subscribers</span>
                        </Link>
                    </li>

                    {/* Applied trainer */}
                    <li>
                        <Link
                            to="/dashboard/trainer-applied"
                            className="flex items-center gap-3 text-primary hover:bg-yellow-100 px-3 py-2 rounded-lg transition-colors duration-200">
                            <MdPendingActions className="text-xl text-yellow-500" />
                            <span className="font-semibold text-yellow-500">Applied Trainer</span>
                        </Link>
                    </li>

                    {/* All Trainers */}
                    <li>
                        <Link
                            to="/dashboard/trainers"
                            className="flex items-center gap-3 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition"
                        >
                            <FaUsers className="text-xl text-blue-500" />
                            <span className="font-semibold">All Trainers</span>
                        </Link>
                    </li>

                    {/* Activity Log */}
                    <li>
                        <Link
                            to="/dashboard/activity-log"
                            className="flex items-center gap-3 text-rose-600 hover:bg-rose-100 px-3 py-2 rounded-lg transition"
                        >
                            <MdOutlineHistoryEdu className="text-xl text-rose-500" />
                            <span className="font-semibold">Activity Log</span>
                        </Link>
                    </li>

                    {/* DO: this link page work  */}
                    {/* Balance */}
                    <li>
                        <Link
                            to="/dashboard/balance"
                            className="flex items-center gap-3 text-green-600 hover:bg-green-100 px-3 py-2 rounded-lg transition"
                        >
                            <FaMoneyBillWave className="text-xl text-green-500" />
                            <span className="font-semibold">Balance</span>
                        </Link>
                    </li>

                    {/* Add New Class */}
                    <li>
                        <Link
                            to="/dashboard/add-class"
                            className="flex items-center gap-3 text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-lg transition"
                        >
                            <FaPlusCircle className="text-xl text-purple-500" />
                            <span className="font-semibold">Add New Class</span>
                        </Link>
                    </li>

                    {/* Manage Slots */}
                    <li>
                        <Link
                            to="/dashboard/manage-slots"
                            className="flex items-center gap-3 text-yellow-600 hover:bg-yellow-100 px-3 py-2 rounded-lg transition"
                        >
                            <FaCalendarAlt className="text-xl text-yellow-500" />
                            <span className="font-semibold">Manage Slots</span>
                        </Link>
                    </li>

                    {/* Add New Forum */}
                    <li>
                        <Link
                            to="/dashboard/add-forum"
                            className="flex items-center gap-3 text-indigo-600 hover:bg-indigo-100 px-3 py-2 rounded-lg transition"
                        >
                            <MdForum className="text-xl text-indigo-500" />
                            <span className="font-semibold">Add New Forum</span>
                        </Link>
                    </li>



                    {/* Profile */}
                    <li>
                        <Link
                            to="/dashboard/my-profile"
                            className="flex items-center gap-3 text-sky-600 hover:bg-sky-100 px-3 py-2 rounded-lg transition"
                        >
                            <MdOutlinePerson className="text-xl text-sky-500" />
                            <span className="font-semibold">My Profile</span>
                        </Link>
                    </li>

                    {/* Booked Trainer */}
                    <li>
                        <Link
                            to="/dashboard/booked-trainers"
                            className="flex items-center gap-3 text-fuchsia-600 hover:bg-fuchsia-100 px-3 py-2 rounded-lg transition"
                        >
                            <BiBookBookmark className="text-xl text-fuchsia-500" />
                            <span className="font-semibold">Booked Trainer</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;