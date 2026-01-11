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
            className="group bg-base-100 rounded-2xl border border-base-content/5 overflow-hidden transition-all duration-1000 hover:text-primary-content relative"
        >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000 z-0" />

            <img
                src={forum.bannerImage}
                alt="Forum Banner"
                className="w-full h-64 object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="p-4 space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                    <img src={forum.posted_by?.image} className="w-9 h-9 rounded-full" />
                    <div>
                        <h4 className="text-lg font-semibold">{forum.posted_by?.name}</h4>
                        <span className="badge badge-sm capitalize">{forum.posted_by?.role}</span>
                    </div>
                    <p className="ml-auto text-sm flex items-center gap-1">
                        <SlCalender className="text-red-500" /> {date}
                    </p>
                </div>

                <h3 className="text-xl font-semibold">{forum.title}</h3>

                <p className="text-sm opacity-80">
                    {forum.details.slice(0, 100)}...
                    <Link to={`/dashboard/forum-details/${forum._id}`} className="ml-1 underline">
                        see more
                    </Link>
                </p>

                {/* Actions */}
                <div className="flex gap-4 relative z-10">
                    <button
                        onClick={() => handleVote('vote', forum._id)}
                        className="
                flex items-center gap-1 text-sm px-4 py-1.5 rounded
                btn btn-info text-white
                transition-all duration-300
                hover:scale-105
            "
                    >
                        <ArrowUp size={16} /> Up-vote: {forum.count || 0}
                    </button>

                    <button
                        onClick={() => handleVote('cancelVote', forum._id)}
                        className="
                flex items-center gap-1 text-sm px-4 py-1.5 rounded
                btn btn-error btn-soft
                transition-all duration-300
                hover:scale-105
            "
                    >
                        <ArrowDown size={16} /> Down-vote
                    </button>
                </div>
            </div>
        </div>


    );
};

export default ShowForumPost;
