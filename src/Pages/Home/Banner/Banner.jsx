import React from 'react';
import { Link } from 'react-router-dom';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-14 lg:py-16 xl:py-18">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-xs"
        style={{ backgroundImage: "url('https://i.postimg.cc/63XLMWby/ambitious-studio-rick-barrett-1-RNQ11-ZODJM-unsplash.jpg')" }}
      ></div>

      {/* Optional Animated Overlay */}
      <div className="absolute inset-0 z-0 bg-black/30"></div> {/* dark overlay for text contrast */}

      <div>
        <BannerText />
      </div>
    </section>
  );
};

export default Banner;
