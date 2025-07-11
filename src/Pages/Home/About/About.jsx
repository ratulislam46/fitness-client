const About = () => {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        About <span className="text-primary">FitNest</span>
                    </h2>
                    <p className="text-gray-600 text-base mb-4">
                        FitNest is a smart fitness tracking platform that empowers individuals to set, track, and smash their wellness goals. We’re committed to making fitness accessible and enjoyable through data, challenges, expert guidance, and a powerful community.
                    </p>
                    <p className="text-gray-600 text-base mb-6">
                        Whether you’re a beginner or an athlete, our tools and trainers help you stay motivated, measure progress, and celebrate wins.
                    </p>
                    <a
                        href="/"
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                    >
                        Learn More
                    </a>
                </div>

                {/* Image Section */}
                <div>
                    <img
                        src="../../../../public/image/workout.jpg"
                        alt="About FitNest"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
