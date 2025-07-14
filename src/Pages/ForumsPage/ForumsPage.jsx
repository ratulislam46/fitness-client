import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import UseAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../Components/Loading/Loading';
import AllForumPost from './AllForumPost';

const ForumPage = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: forums = [], isLoading, refetch } = useQuery({
        queryKey: ['latest-forums'],
        queryFn: async () => {
            const res = await axiosSecure.get("/all/forums/routes");
            return res.data;
        }
    });
    console.log(forums);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-12 mt-24 px-4 md:px-10 bg-base-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Latest Community Posts</h2>

            <div className="grid grid-cols-1 gap-14">
                {forums.map((forum) =>
                    <AllForumPost
                        key={forum._id}
                        forum={forum}
                        refetch={refetch}
                    >
                    </AllForumPost>
                )}
            </div>
        </section>
    );
};

export default ForumPage; 