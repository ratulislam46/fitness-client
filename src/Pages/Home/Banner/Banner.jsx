import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section>
      {/* Brand Info  */}
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
        <div className='flex flex-col justify-center py-14 md:py-0 space-y-6 pl-0 md:pl-10'>
          <h1 className='text-5xl text-base-content text-center md:text-start'>Gym Gives you the perfect <span className='text-primary'>Health</span></h1>
          <p className='text-center md:text-start text-gray-500 text-xl'>Stay strong, stay fit – the gym helps you build a healthy body and a balanced lifestyle.</p>
          <div className='flex justify-center gap-4 md:justify-start'>
            <Link to='/classes' className='text-white bg-primary px-8 py-3 hover:ring-2 hover:ring-primary duration-300 rounded-xl'>Watch </Link>
          </div>
        </div>
        {/* Hero Image  */}
        <div className='flex justify-center items-center mt-10 md:0'>
          <img
            src="https://i.postimg.cc/jj4nxXG8/1-853d5b1f-9af5-4923-9952-cc4457b84535-removebg-preview.png" alt="banner image"
            className='w-[350px] md:[550px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
