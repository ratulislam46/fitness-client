import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            let totalScroll = (scrollTop / docHeight) * 100;
            if (totalScroll > 100) totalScroll = 100;
            setScrollPercent(totalScroll)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (scrollPercent === 0) return null;

    return (
        <div
            onClick={scrollToTop}
            className='fixed bottom-6 right-6 h-12 w-12 md:h-16 md:w-16 rounded-full border-base-100 
        bg-primary flex items-center justify-center text-md md:text-2xl text-white font-semibold z-50 ring-4'>
            {scrollPercent >= 100 ? "↑" : `${Math.round(scrollPercent)}%`}


        </div>
    );
};

export default ScrollProgress;