import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const ButtonOne = ({ address, text }) => {
    return (
        <Link
            to={address}
            className='group relative bg-transparent text-white border-2 border-white/60 px-4 lg:px-8 py-4 rounded-xl font-semibold text-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 min-w-[120px]'
        >
            {/* Button Background Fill Animation */}
            <div className='absolute inset-0 bg-white/90 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700'></div>

            {/* Button Content with Arrow */}
            <span className='relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-gray-800'>
                {text}
                <FaArrowRight className='w-5 h-5 transition-all duration-500 transform group-hover:translate-x-2 group-hover:scale-125' />
            </span>

            {/* Border Animation */}
            <div className='absolute -inset-1 rounded-xl border-2 border-white/0 group-hover:border-2 group-hover:border-white/40 transition-all duration-500'></div>
        </Link>
    );
};

export default ButtonOne;