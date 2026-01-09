import UseAxios from "../../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";


const Team = () => {
    const axiosInstance = UseAxios();

    const { data: trainers = [] } = useQuery({
        queryKey: ["trainersTeam"],
        queryFn: async () => {
            const res = await axiosInstance.get("/team-trainers");
            return res.data;
        }
    });
    // console.log(trainers);

    return (
        <section className="py-16 px-1 md:px-1">
            <div className="text-center">
                <div data-aos="fade-up">
                    <h2 className="text-3xl lg:text-5xl mb-6 text-base-content">
                        Meet Our <span className="text-primary">Expert Trainers</span>
                    </h2>
                    <p className="text-base-content/70 mb-12 text-xl">
                        Our team of professional trainers is here to guide and motivate you in every step of your fitness journey.
                    </p>
                </div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {trainers.map((trainer, idx) => (
                        <div
                            data-aos="fade-up"
                            key={idx}
                            className="bg-base-100 border border-base-content/5 rounded-xl shadow-md duration-300 transition p-6 relative overflow-hidden group">
                            {/* Hover overlay that slides from bottom */}
                            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>

                            <div className="relative z-10">
                                <img
                                    src={trainer?.profileImage}
                                    alt={trainer?.fullName}
                                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-secondary mb-4 group-hover:border-white transition-colors duration-1000"
                                />
                                <h3 className="text-xl font-semibold text-base-content group-hover:text-white transition-colors duration-1000">{trainer?.fullName}</h3>
                                <p className="text-sm md:text-md lg:text-lg text-base-content/70 mt-2 mb-3 group-hover:text-white transition-colors duration-1000">{trainer.otherInfo}</p>

                                {/* skils  */}
                                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                                    <span className="flex pl-2 group-hover:text-white">Expertise:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {trainer?.skills?.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 group-hover:bg-white group-hover:text-primary group-hover:border-primary transition-all duration-1000"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
