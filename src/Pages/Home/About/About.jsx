import workout from '../../../../public/image/workout.jpg'

const About = () => {
    return (
        <section className="py-16 px-1 md:px-0">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
                        About <span className="text-primary">Fitness</span>
                    </h2>
                    <p className="text-base-content/70 mb-4 text-xl">
                        Fitness is a smart fitness tracking platform that empowers individuals to set, track, and smash their wellness goals. We’re committed to making fitness accessible and enjoyable through data, challenges, expert guidance, and a powerful community.
                    </p>
                    <p className="text-base-content/70 mb-4 text-xl">
                        Whether you’re a beginner or an athlete, our tools and trainers help you stay motivated, measure progress, and celebrate wins.
                    </p>
                </div>

                {/* Image Section */}
                <div data-aos="fade-up">
                    <img
                        src={workout}
                        alt="fitness-workout"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
