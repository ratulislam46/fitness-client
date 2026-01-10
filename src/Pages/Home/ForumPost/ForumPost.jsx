import React from 'react';
import UseAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import ShowForumPost from './ShowForumPost';
import Header from '../../../Components/Shared/Header';
import ButtonTwo from '../../../Components/Button/ButtonTwo';

const ForumPost = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: forums = [], isLoading, refetch } = useQuery({
        queryKey: ['latest-forums'],
        queryFn: async () => {
            const res = await axiosSecure.get("/forums/latest");
            return res.data;
        }
    });
    // console.log(forums);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="container mx-auto py-16 px-1 md:px-0 bg-base-100">

            {/* Heading  */}
            <Header title='Recent Forums' subtitle='See what the community is talking about right now.' />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {forums?.map((forum) =>
                    <ShowForumPost
                        key={forum._id}
                        forum={forum}
                        refetch={refetch}
                    >
                    </ShowForumPost>
                )}
            </div>

            <div data-aos="fade-up" className='flex justify-center mt-12'>
                <ButtonTwo address='/all-forum-post' text='See All Forum' />
            </div>
        </section>
    );
};

export default ForumPost; 
