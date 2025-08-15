import React from 'react';

const Banner = () => {
  return (
    <section>
      {/* Brand Info  */}
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        <div className='flex flex-col justify-center py-14 md:py-0 space-y-6 bg-orange-50 pl-0 md:pl-10'>
          <h1 className='text-5xl text-center md:text-start'>Gym Gives you the perfect <span className='primary-color'>Health</span></h1>
          <p className='text-center md:text-start text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui!</p>
          <div className='flex justify-center gap-4 md:justify-start'>
            <button className='text-white bg-orange-500 px-4 py-2 rounded-xl'> Order Now</button>
            <button className='border px-4 py-2 rounded-xl hover:text-orange-400'> Watch</button>
          </div>
        </div>
        {/* Hero Image  */}
        <div className='flex justify-center items-center bg-gray-50'>
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
