import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const ButtonTwo = ({ address, text }) => {
    return (
        <Link
            to={address}
            className='group relative text-white bg-primary px-4 lg:px-8 py-4 rounded-xl font-semibold text-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 min-w-[120px]'
        >
            {/* Button Background Animation */}
            <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all duration-500'></div>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/90 to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700'></div>

            {/* Button Content with Arrow */}
            <span className='relative z-10 flex items-center gap-2'>
                {text}
                <FaArrowRight className='w-5 h-5 transition-all duration-500 transform group-hover:translate-x-2 group-hover:scale-125' />
            </span>

            {/* Hover Ring Effect */}
            <div className='absolute -inset-1 rounded-xl ring-2 ring-white/0 group-hover:ring-2 group-hover:ring-white/40 transition-all duration-500'></div>
        </Link>
    );
};

export default ButtonTwo;