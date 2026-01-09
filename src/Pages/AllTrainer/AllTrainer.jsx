import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import Header from "../../Components/Shared/Header";

const AllTrainer = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ["confirmed-trainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/trainers?status=confirm");
            return res.data;
        },
    });
    // console.log(trainers);

    if (isLoading) return <Loading />

    return (
        <section className="py-16 bg-base-100 mt-10 container mx-auto px-1 md:px-0">
            <Header title='Meet Our Trainers' subtitle='Get to know the experts who will guide your fitness journey.' />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainers.map((trainer) => (
                    <div
                        data-aos="fade-up"
                        key={trainer._id}
                        className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg border border-base-content/5 transition-all duration-300 space-y-2">
                        <img
                            src={trainer.profileImage}
                            alt={trainer.fullName}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{trainer.fullName}</h3>
                        <p className="text-sm text-base-content/70">Age: {trainer.age}</p>

                        {/* Experience */}
                        <p className="text-sm text-base-content/70">
                            Experience: <strong>{trainer.experience || "2+ years"}</strong>
                        </p>

                        {/* Slots (you can enhance later with real slot titles) */}
                        <p className="text-sm text-base-content/70">
                            Available Days: {trainer.availableDays?.join(", ") || "N/A"}
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 text-lg text-indigo-500">
                            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
                            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
                            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        </div>

                        {/* Other Info */}
                        <p className="text-sm text-base-content/70">{trainer.otherInfo}</p>

                        {/* Know More Button */}
                        <Link
                            to={`/trainers/${trainer._id}`}
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
