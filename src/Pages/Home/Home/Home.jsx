import React from 'react';
import NewsLetter from '../NewLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import ForumPost from '../ForumPost/ForumPost';
import Review from '../Review/Review';
import Team from '../Team/Team';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Featured></Featured>
            <About></About>
            <ForumPost></ForumPost>
            <NewsLetter></NewsLetter>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default Home;