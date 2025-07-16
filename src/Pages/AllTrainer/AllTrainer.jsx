import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const AllTrainer = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ["confirmed-trainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/trainers?status=confirm");
            return res.data;
        },
    });
    console.log(trainers);

    if (isLoading) return <p className="text-center py-8">Loading...</p>;

    return (
        <section className="py-12 bg-gray-50 mt-14">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Trainers</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {trainers.map((trainer) => (
                    <div key={trainer._id} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
                        <img
                            src={trainer.profileImage}
                            alt={trainer.fullName}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{trainer.fullName}</h3>
                        <p className="text-gray-500 text-sm mb-2">Age: {trainer.age}</p>

                        {/* Experience */}
                        <p className="text-sm text-gray-600">
                            Experience: <strong>{trainer.experience || "2+ years"}</strong>
                        </p>

                        {/* Slots (you can enhance later with real slot titles) */}
                        <p className="text-sm text-gray-600 mb-2">
                            Available Days: {trainer.availableDays?.join(", ") || "N/A"}
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 text-lg text-indigo-500 mt-2">
                            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
                            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
                            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        </div>

                        {/* Other Info */}
                        <p className="text-sm text-gray-700 mt-2">{trainer.otherInfo}</p>

                        {/* Know More Button */}
                        <Link
                            to={`/trainer/${trainer._id}`}
                            className="btn btn-md btn-primary mt-4 w-full"
                        >
                            Know More
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllTrainer;
