import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const slides = [
        {
            title: "Track Your Fitness",
            desc: "Stay consistent and crush your health goals with FitNest — your smart fitness companion.",
            btnText: "Explore Classes",
            image: "../../../../public/image/banner1.jpg"
        },
        {
            title: "Join The Community",
            desc: "Connect with fitness lovers around the world and grow together through challenges.",
            btnText: "Join Now",
            image: "../../../../public/image/banner2.jpg"
        },
        {
            title: "Smash Your Goals",
            desc: "Visualize your progress, follow expert guidance, and become your best self.",
            btnText: "Start Today",
            imimage: "../../../../public/image/banner3.jpg"
        }
    ];

    return (
        <section className="w-full">
            <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                showStatus={false}
                transitionTime={600}
            >
                {slides.map((slide, idx) => (
                    <div key={idx} className="relative h-screen w-full">
                        <img
                            src={slide.image}
                            alt={`Slide ${idx}`}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 md:px-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                            <p className="text-base md:text-lg text-gray-100 mb-6 max-w-xl">{slide.desc}</p>
                            <a
                                href="/classes"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                            >
                                {slide.btnText}
                            </a>
                        </div>
                    </div>

                ))}
            </Carousel>
        </section>
    );
};

export default Banner;
