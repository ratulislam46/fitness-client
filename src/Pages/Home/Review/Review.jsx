import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import UseAxios from "../../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 3 },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Review = () => {
    const carouselRef = useRef();
    const axiosIntance = UseAxios();
    const { data: reviews = [] } = useQuery({
        queryKey: ['customer-review'],
        queryFn: async () => {
            const res = await axiosIntance.get('customer-review')
            return res.data;
        }
    })
    // console.log(reviews);

    return (
        <section className="py-20 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    What Our <span className="text-primary">Members Say</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Real stories from people just like you. Discover how FitNest helped them reach their fitness goals.
                </p>
            </div>

            <Carousel
                ref={carouselRef}
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={9000}
                keyBoardControl
                transitionDuration={600}
                containerClass="carousel-container"
                itemClass="px-4"
                arrows={false}
            >
                {reviews?.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-xl shadow-md h-full hover:shadow-xl transition">
                        <div className="flex items-center mb-4 gap-4">
                            <img
                                src={review.userImage}
                                alt={review.userName}
                                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                            />
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                                <div className="flex text-yellow-400 text-sm">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">“{review.feedback}”</p>
                    </div>
                ))}
            </Carousel>

            {/* ✅ Bottom buttons */}
            <div className="mt-8 flex justify-center gap-6">
                <button
                    onClick={() => carouselRef.current?.previous()}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-5 py-2 rounded-lg font-medium transition"
                >
                    ⬅ Previous
                </button>
                <button
                    onClick={() => carouselRef.current?.next()}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium transition"
                >
                    Next ➡
                </button>
            </div>
        </section>
    );
};

export default Review;
