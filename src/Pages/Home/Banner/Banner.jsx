import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerone from '../../../../public/image/banner01.jpg';
import bannertwo from '../../../../public/image/banner02.jpg';
import bannerthree from '../../../../public/image/banner03.jpg'

const Banner = () => {
  return (
    <div className="w-full mt-20 max-w-7xl mx-auto px-1 lg:px-0">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="rounded-lg overflow-hidden"
      >
        <div>
          <img
            src={bannerone}
            alt="Banner 1"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
        <div>
          <img
            src={bannertwo}
            alt="Banner 2"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
        <div>
          <img
            src={bannerthree}
            alt="Banner 3"
            className="h-[400px] lg:h-[600px] object-cover w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
