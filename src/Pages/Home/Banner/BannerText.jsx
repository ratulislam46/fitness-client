import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BannerText = () => {
    return (
        <div className='container mx-auto'>
            {/* Brand Info  */}
            <div className='grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
                <div className='flex flex-col justify-center py-14 md:py-0 space-y-6 pl-0 md:pl-10'>
                    <h1 className='text-5xl lg:text-6xl xl:w-7xl text-white text-center md:text-start uppercase font-bold'>Gym Gives you the perfect <span className='text-primary'>Health</span></h1>
                    <p className='text-center md:text-start text-white text-xl'>Stay strong, stay fit – the gym helps you build a healthy body and a balanced lifestyle.</p>
                    <div className='flex justify-center gap-6 md:justify-start'>
                        {/* See Classes Button with Arrow Icon */}
                        <Link 
                            to='/classes' 
                            className='group relative text-white bg-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 min-w-[160px]'
                        >
                            {/* Button Background Animation */}
                            <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all duration-500'></div>
                            <div className='absolute inset-0 bg-gradient-to-r from-primary/90 to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700'></div>
                            
                            {/* Button Content with Arrow */}
                            <span className='relative z-10 flex items-center gap-2'>
                                See Classes
                                <FaArrowRight className='w-5 h-5 transition-all duration-500 transform group-hover:translate-x-2 group-hover:scale-125' />
                            </span>
                            
                            {/* Hover Ring Effect */}
                            <div className='absolute -inset-1 rounded-xl ring-2 ring-white/0 group-hover:ring-2 group-hover:ring-white/40 transition-all duration-500'></div>
                        </Link>

                        {/* See Forums Button with Arrow Icon */}
                        <Link 
                            to='/all-forum-post' 
                            className='group relative bg-transparent text-white border-2 border-white/60 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 min-w-[160px]'
                        >
                            {/* Button Background Fill Animation */}
                            <div className='absolute inset-0 bg-white/90 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700'></div>
                            
                            {/* Button Content with Arrow */}
                            <span className='relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-gray-800'>
                                See Forums
                                <FaArrowRight className='w-5 h-5 transition-all duration-500 transform group-hover:translate-x-2 group-hover:scale-125' />
                            </span>
                            
                            {/* Border Animation */}
                            <div className='absolute -inset-1 rounded-xl border-2 border-white/0 group-hover:border-2 group-hover:border-white/40 transition-all duration-500'></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerText;