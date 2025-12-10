import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaCalendarCheck, FaArrowRight } from 'react-icons/fa';

const BannerText = () => {
    return (
        <div className='container mx-auto px-4'>
            {/* Brand Info  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[550px] gap-8 items-center'>
                <div className='flex flex-col justify-center py-10 md:py-14 space-y-6'>
                    <motion.h1 
                        className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Gym Gives you the <span className='text-primary'>Perfect</span> Health
                    </motion.h1>
                    
                    <motion.p 
                        className='text-white text-base sm:text-lg md:text-xl max-w-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Stay strong, stay fit – the gym helps you build a healthy body and a balanced lifestyle.
                    </motion.p>
                    
                    {/* Feature highlights with icons */}
                    <motion.div 
                        className='grid grid-cols-3 gap-4 py-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='flex flex-col items-center text-center text-white'>
                            <FaDumbbell className='text-3xl text-primary mb-2' />
                            <span className='font-medium text-sm'>Modern Equipment</span>
                        </div>
                        <div className='flex flex-col items-center text-center text-white'>
                            <FaUsers className='text-3xl text-primary mb-2' />
                            <span className='font-medium text-sm'>Expert Trainers</span>
                        </div>
                        <div className='flex flex-col items-center text-center text-white'>
                            <FaCalendarCheck className='text-3xl text-primary mb-2' />
                            <span className='font-medium text-sm'>Flexible Schedule</span>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className='flex flex-col sm:flex-row gap-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link 
                            to='/classes' 
                            className='text-white bg-primary hover:bg-primary/90 px-6 py-3 text-center rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
                        >
                            See Classes <FaArrowRight />
                        </Link>

                        <Link 
                            to='/all-forum-post' 
                            className='text-white border-2 border-white hover:border-primary hover:bg-primary px-6 py-3 text-center rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
                        >
                            See Forums <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>

                <div className='flex justify-center lg:justify-end items-center mt-8 lg:mt-0'>
                    <div className='relative'>
                        <div className='absolute -top-4 -left-4 w-full h-full rounded-full border-4 border-primary/30'></div>
                        <div className='absolute -bottom-4 -right-4 w-full h-full rounded-full border-4 border-primary/30'></div>
                        <motion.div
                            className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl'
                            animate={{ y: [0, -15, 0] }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="https://i.postimg.cc/QdPRxy0j/rifki-dwi-achsani-t-L-o-HZt-wr-F8-unsplash-removebg-preview.png"
                                alt="Fitness training"
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerText;