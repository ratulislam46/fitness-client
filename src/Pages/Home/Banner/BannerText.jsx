import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BannerText = () => {
    return (
        <div className='container mx-auto'>
            {/* Brand Info  */}
            <div className='grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
                <div className='flex flex-col justify-center py-14 md:py-0 space-y-6 pl-0 md:pl-10'>
                    <h1 className='text-5xl lg:text-6xl xl:w-7xl text-white text-center md:text-start'>Gym Gives you the perfect <span className='text-primary'>Health</span></h1>
                    <p className='text-center md:text-start text-white text-xl'>Stay strong, stay fit – the gym helps you build a healthy body and a balanced lifestyle.</p>
                    <div className='flex justify-center gap-4 md:justify-start'>
                        <Link to='/classes' className='text-white bg-primary px-8 py-2 hover:ring-2 hover:ring-primary duration-300 rounded-xl'>See Classes </Link>

                        <Link to='/all-forum-post' className='btn btn-outline btn-info px-8 py-2 rounded-xl'>See Forums </Link>
                    </div>
                </div>

                {/* <div className='flex justify-center md:justify-end items-center mt-10 md:mt-0'>
                    <motion.img
                        src="https://i.postimg.cc/QdPRxy0j/rifki-dwi-achsani-t-L-o-HZt-wr-F8-unsplash-removebg-preview.png"
                        alt="banner image"
                        className='w-[350px] md:w-[450px] rounded-full'
                        // initial={{ opacity: 0, y: 20 }}
                        animate={{ x: 0, y: [0, -10, 0], opacity: 1 }}
                    />
                </div> */}

            </div>
        </div>
    );
};

export default BannerText;