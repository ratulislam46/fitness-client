import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import ForumPost from '../ForumPost/ForumPost';
import Review from '../Review/Review';
import Team from '../Team/Team';
import About from '../About/About';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div className='container mx-auto mt-28'>
            <section className='border mb-4'>
                <Banner></Banner>
            </section>
            <section className='border mb-4'>
                <Featured></Featured>
            </section>
            <section className='border mb-4'>
                <About></About>
            </section>
            <section className='border mb-4'>
                <ForumPost></ForumPost>
            </section>
            <section className='border mb-4'>
                <Review></Review>
            </section>
            <section className='border mb-4'>
                <NewsLetter></NewsLetter>
            </section>
            <section className='border mb-4'>
                <Team></Team>
            </section>
        </div>
    );
};

export default Home;