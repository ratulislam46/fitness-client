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
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Meet Our <span className="text-primary">Expert Trainers</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Our team of professional trainers is here to guide and motivate you in every step of your fitness journey.
                </p>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {trainers.map((trainer, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
                            <img
                                src={trainer.profileImage}
                                alt={trainer.fullName}
                                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-500 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{trainer.fullName}</h3>
                            <p className="text-sm text-gray-600 mt-2 mb-3">{trainer.otherInfo}</p>
                            <div className="text-sm text-gray-700">
                                <span className="font-semibold text-primary">Expertise:</span>
                                <ul className="mt-1 list-disc list-inside">
                                    {trainer.skills
                                        .map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
