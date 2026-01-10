import React from 'react';
import UseAxios from '../../../hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import ShowLatestClass from './ShowLatestClass';
import Loading from '../../../Components/Loading/Loading';
import Header from '../../../Components/Shared/Header';
import ButtonTwo from '../../../Components/Button/ButtonTwo';

const LatestClass = () => {

    const axiosSecure = UseAxios();

    const { data: classes = [], isLoading, refetch } = useQuery({
        queryKey: ['latest-classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('latest-classes');
            return res.data
        }
    })
    // console.log(classes);
    if (isLoading) return <Loading />

    return (
        <div className="container mx-auto py-16 px-1 md:px-0 bg-base-100">
            <Header title='Upcoming Classes' subtitle='Explore the newest classes and start learning today.' />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((signleClass) =>
                    <ShowLatestClass
                        key={signleClass._id}
                        signleClass={signleClass}
                        refetch={refetch}
                    >
                    </ShowLatestClass>
                )}
            </div>
            <div data-aos="fade-up" className='flex justify-center mt-12'>
                <ButtonTwo address='/classes' text='See All Class' />
            </div>
        </div>
    );
};

export default LatestClass;