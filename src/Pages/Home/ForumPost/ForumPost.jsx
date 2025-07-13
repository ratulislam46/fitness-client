import React from 'react';
import UseAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import Loading from '../../../Components/Loading/Loading';
import ShowForumPost from './ShowForumPost';

const ForumPost = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: forums = [], isLoading, refetch } = useQuery({
        queryKey: ['latest-forums'],
        queryFn: async () => {
            const res = await axiosSecure.get("/forums/latest");
            return res.data;
        }
    });
    console.log(forums);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-12 px-4 md:px-10 bg-base-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Latest Community Posts</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {forums.map((forum) =>
                    <ShowForumPost
                        key={forum._id}
                        forum={forum}
                        refetch={refetch}
                    >
                    </ShowForumPost>
                )}
            </div>
        </section>
    );
};

export default ForumPost;