import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import UseAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../Components/Loading/Loading';
import AllForumPost from './AllForumPost';
import Header from '../../Components/Shared/Header';

const ForumPage = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: forums = [], isLoading, refetch } = useQuery({
        queryKey: ['latest-forums'],
        queryFn: async () => {
            const res = await axiosSecure.get("/all/forums/routes");
            return res.data;
        }
    });
    // console.log(forums);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="container mx-auto py-12 mt-16 px-4 md:px-10 bg-base-100">
            <Header title='Latest Community Posts' subtitle='Stay updated with the newest discussions from our community.' />

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