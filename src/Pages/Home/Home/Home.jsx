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
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <ForumPost></ForumPost>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <Team></Team>
        </div>
    );
};

export default Home;