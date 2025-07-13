import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { SlCalender } from 'react-icons/sl';

const ForumDetails = () => {

    const { id } = useParams();
    const axiosSecure = UseAxiosSecure();
    const [forumData, setForumData] = useState(null);

    useEffect(() => {
        axiosSecure.get(`/forum-details/${id}`)
            .then(res => setForumData(res.data))
            .catch(err => console.error("Failed to load forum details", err));
    }, [axiosSecure, id]);

    console.log(forumData);
    // console.log(forumData.posted_by);
    if (!forumData) {
        return <Loading></Loading>
    }

    const { title, details, bannerImage, created_at, posted_by = {} } = forumData;

    const date = new Date(created_at).toLocaleDateString();

    return (
        <section className="max-w-4xl mx-auto mt-12 px-4 md:px-8 py-12 bg-gray-50 border border-gray-300 rounded-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4 border-b pb-3 border-gray-400 ">
                <div className="flex items-center gap-4">
                    <img
                        src={posted_by.image}
                        alt="Author"
                        className="w-14 h-14 rounded-full object-cover border"
                    />
                    <div>
                        <h4 className="text-2xl font-semibold">{posted_by.name}</h4>

                        {/* conditional role admin && trainer */}
                        {posted_by.role === 'trainer' ?
                            <p className="text-sm text-purple-600 capitalize badge badge-accent">{posted_by.role}</p> :
                            <p className="text-sm text-white capitalize badge badge-error">{posted_by.role}</p>
                        }

                    </div>
                </div>
                <p className="ml-auto text-sm text-gray-500 font-bold flex gap-1 items-center"> <SlCalender color='red' />{date}</p>
            </div>

            {/* Image */}
            <div className="mb-8">
                <img
                    src={bannerImage}
                    alt="Forum Banner"
                    className="w-full h-64 md:h-[400px] object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">{title}</h1>

            {/* Details */}
            <div className="text-gray-500 text-base leading-7">
                {details}
            </div>
        </section >
    );
};


export default ForumDetails;