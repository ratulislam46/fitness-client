import React from 'react';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.postimg.cc/63XLMWby/ambitious-studio-rick-barrett-1-RNQ11-ZODJM-unsplash.jpg')" }}
      ></div>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <BannerText />
      </div>
    </section>
  );
};

export default Banner;