import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import ForumPost from '../ForumPost/ForumPost';
import Review from '../Review/Review';
import Team from '../Team/Team';
import About from '../About/About';
import NewsLetter from '../NewsLetter/NewsLetter';
import LatestClass from '../LatestClass/LatestClass';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <section className='mb-4 mt-16'>
                <Banner></Banner>
            </section>
            <div className='container mx-auto'>

                <section className='mb-4'>
                    <Featured></Featured>
                </section>
                <section className='mb-4'>
                    <About></About>
                </section>
                <section className='mb-4'>
                    <ForumPost></ForumPost>
                </section>
                <section className='mb-4'>
                    <LatestClass />
                </section>
                <section className='mb-4'>
                    <Review></Review>
                </section>
                <section className='mb-4'>
                    <NewsLetter></NewsLetter>
                </section>
                <section className='mb-4'>
                    <Team></Team>
                </section>
                <section className='mb-4'>
                    <FAQ></FAQ>
                </section>
            </div>
        </div>
    );
};

export default Home;