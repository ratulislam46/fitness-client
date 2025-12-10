import React, { use } from 'react';
import { Link } from 'react-router';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { SlCalender } from "react-icons/sl";
import UseAxios from '../../../hooks/UseAxios';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';

const ShowForumPost = ({ forum, refetch }) => {

    const axiosInstance = UseAxios();
    const { user } = use(AuthContext)


    const handleVote = async (vote, forumId) => {
        console.log(vote, forumId);
        if (!user) {
            return Swal.fire("Please login", "You must be logged in to vote", "warning");
        }
        try {
            const res = await axiosInstance.patch(`/forums/vote/${forumId}`, {
                vote,
                userEmail: user?.email
            })
            if (res.data.modifiedCount > 0 || res.data.acknowledged) {
                // show sucess message 
                refetch()
            }
        }
        catch (error) {
            console.log('Error from forums votes', error);
        }
    }


    const date = new Date(forum.created_at).toLocaleDateString();

    return (
        <div 
            data-aos="fade-up" 
            className="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl shadow-xl border border-base-content/10 p-6 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-secondary/5"></div>
            
            <div className="flex items-start mb-4 pb-3 border-b border-base-content/10">
                <div className="relative">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                            <img src={forum.posted_by?.image} alt="Profile" className="object-cover" />
                        </div>
                    </div>
                </div>
                
                <div className="ml-3 flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-base-content">{forum.posted_by?.name}</h4>
                            <div className="flex items-center mt-1">
                                {forum.posted_by?.role === 'trainer' ?
                                    <span className="badge badge-success badge-xs mr-2">Trainer</span> :
                                    <span className="badge badge-warning badge-xs mr-2">Member</span>
                                }
                                <span className="text-xs text-base-content/60 flex items-center">
                                    <SlCalender className="mr-1 text-primary" size={12} /> {date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-base-content mb-2">{forum.title}</h3>
            <p className="text-base-content/70 mb-4">
                {forum.details.length > 100 ? forum.details.slice(0, 100) + '...' : forum.details}
                <Link to={`/dashboard/forum-details/${forum._id}`} className="text-blue-500 ml-1 hover:text-primary transition-colors duration-300">see more</Link>
            </p>

            <img
                src={forum.bannerImage}
                alt="Forum Banner"
                className="w-full h-80 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />

            <div className="flex gap-4">
                <button
                    onClick={() => handleVote('vote', forum._id)}
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded text-white btn btn-info hover:bg-info/90 transition-all duration-300 transform hover:scale-105"
                >
                    <ArrowUp size={16} /> Up-vote: {forum.count || 0}
                </button>
                <button
                    onClick={() => handleVote('cancelVote', forum._id)}
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded hover:text-white btn btn-soft btn-error hover:bg-error/90 transition-all duration-300 transform hover:scale-105"
                >
                    <ArrowDown size={16} /> Down-vote
                </button>
            </div>
        </div>
    );
};

export default ShowForumPost;