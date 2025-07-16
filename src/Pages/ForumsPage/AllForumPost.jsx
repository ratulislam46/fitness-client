import React, { use } from 'react';
import { Link } from 'react-router';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { SlCalender } from "react-icons/sl";
import Swal from 'sweetalert2';
import UseAxios from '../../hooks/UseAxios';
import { AuthContext } from '../../Context/AuthProvider';

const AllForumPost = ({ forum, refetch }) => {

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
        <div className=" bg-white rounded-lg  p-4 transition duration-300 border border-indigo-100">
            <div className="flex items-center mb-4 border-b pb-3 border-gray-400">
                <img
                    src={forum.posted_by?.image}
                    alt="Poster"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                    <h4 className="font-semibold">{forum.posted_by?.name}</h4>

                    {/* conditional role admin && trainer */}
                    {forum.posted_by?.role === 'trainer' ?
                        <p className="text-sm text-purple-600 capitalize badge badge-accent">{forum.posted_by?.role}</p> :
                        <p className="text-sm text-white capitalize badge badge-error">{forum.posted_by?.role}</p>
                    }

                </div>
                <p className="ml-auto text-sm text-gray-500 font-bold flex gap-1 items-center"><SlCalender color='red' /> {date}</p>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">{forum.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
                {forum.details.length > 100 ? forum.details.slice(0, 100) + '...' : forum.details}
                <Link to={`/single-forum-details/${forum._id}`} className="text-blue-500 ml-1">see more</Link>
            </p>

            <img
                src={forum.bannerImage}
                alt="Forum Banner"
                className="w-full object-cover rounded-md mb-4"
            />

            <div className="flex gap-4">
                <button
                    onClick={() => handleVote('vote', forum._id)}
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded text-white btn btn-info"
                >
                    <ArrowUp size={16} /> Up-vote: {forum.count || 0}
                </button>
                <button
                    onClick={() => handleVote('cancelVote', forum._id)}
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded hover:text-white btn btn-soft btn-error"
                >
                    <ArrowDown size={16} /> Down-vote
                </button>
            </div>
        </div>
    );
};

export default AllForumPost;