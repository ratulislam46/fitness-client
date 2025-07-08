import { FaChartLine, FaUserFriends, FaDumbbell } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const features = [
    {
        icon: <FaChartLine className="text-4xl text-purple-600 mb-4" />,
        title: "Track Your Progress",
        desc: "Monitor your daily activity, calories, water intake, and more in real-time.",
    },
    {
        icon: <GiProgression className="text-4xl text-purple-600 mb-4" />,
        title: "Smart Goals",
        desc: "Set personal fitness goals and watch your growth with smart analytics.",
    },
    {
        icon: <FaUserFriends className="text-4xl text-purple-600 mb-4" />,
        title: "Join Challenges",
        desc: "Participate in global fitness challenges and climb the leaderboard.",
    },
    {
        icon: <FaDumbbell className="text-4xl text-purple-600 mb-4" />,
        title: "Expert Trainers",
        desc: "Get guidance from certified trainers through videos and tips.",
    },
];

const Featured = () => {
    return (
        <section className="py-16 bg-gray-50 px-6 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose <span className="text-purple-600">FitNest</span>?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">We bring powerful tools and a supportive community to make your fitness journey enjoyable and effective.</p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
