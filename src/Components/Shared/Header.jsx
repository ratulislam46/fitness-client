import React from 'react';

const Header = ({ title, subtitle }) => {
    return (
        <div className='mb-12 space-y-2'>
            <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-bold text-center text-base-content">
                {title}
            </h2>
            <p  data-aos="fade-up" className="text-base-content/70 mb-4 text-xl text-center">
                {subtitle}
            </p>
        </div>
    );
};

export default Header;