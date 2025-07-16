import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full mt-20 max-w-7xl mx-auto px-1 lg:px-0">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="rounded-lg overflow-hidden"
      >
        <div>
          <img
            src="../../../../public/image/banner01.jpg"
            alt="Banner 1"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
        <div>
          <img
            src="../../../../public/image/banner02.jpg"
            alt="Banner 2"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
        <div>
          <img
            src="../../../../public/image/banner03.jpg"
            alt="Banner 3"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
