import { useParams, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { FaUserCircle } from "react-icons/fa";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const TrainersDetails = () => {
    const { id } = useParams();
    const axiosSecure = UseAxiosSecure()

    //  Fetch trainer by ID
    const { data: trainer, isLoading: loadingTrainer } = useQuery({
        queryKey: ['trainer', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainers/${id}`);
            return res.data;
        },
        enabled: !!id
    });
    // console.log(trainer);

    //  Fetch slots based on trainer email
    const { data: slots = [], isLoading: loadingSlots } = useQuery({
        queryKey: ['trainerSlots', trainer?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/slots-in-trainer?email=${trainer.email}`);
            return res.data;
        },
        enabled: !!trainer?.email
    });
    // console.log(slots);

    if (loadingTrainer || loadingSlots) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-6xl mx-auto mt-16 px-4 py-10 grid md:grid-cols-2 gap-10">
            {/* Trainer Info Section */}
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-300 space-y-4">
                <div className="flex flex-col items-center">
                    {trainer.profileImage ? (
                        <img src={trainer.profileImage} alt="Trainer" className="w-64 h-64 rounded-xl object-cover border border-purple-300" />
                    ) : (
                        <FaUserCircle className="w-40 h-40 text-gray-400" />
                    )}
                    <h2 className="text-2xl font-bold mt-4">{trainer.fullName}</h2>
                    <p className="text-sm text-gray-600">Age: {trainer.age}</p>
                </div>

                <div>
                    <h3 className="font-semibold">Skills:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {trainer.skills?.map((skill, i) => (
                            <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold">Available Days:</h3>
                    <p className="text-gray-700">{trainer.availableDays?.join(', ')}</p>
                </div>

                <div>
                    <h3 className="font-semibold">Available Time:</h3>
                    <p className="text-gray-700">{trainer.availableTime}:00 hours</p>
                </div>

                <div>
                    <h3 className="font-semibold">About Trainer:</h3>
                    <p className="text-gray-700 whitespace-pre-line">{trainer.otherInfo}</p>
                </div>
            </div>

            {/* Available Slots Section */}
            <div className="bg-cyan-50 shadow-md rounded-xl p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4">Available Slots</h2>
                {slots.length === 0 ? (
                    <p className="text-gray-500">No slots available for booking.</p>
                ) : (
                    <div className="space-y-4">
                        {slots.map(slot => (
                            <div
                                key={slot._id}
                                className="p-4 bg-cyan-200 shadow-xl hover:shadow-2xl rounded-lg transition space-y-2">
                                <h3 className="text-2xl font-bold">{slot.slotName}</h3>
                                <p className="text-sm font-semibold">Duration: {slot.slotDuration} hours</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {slot.selectedClasses?.map((skill, i) => (
                                        <span key={i} className="bg-white text-cyan-900 px-3 py-1 rounded-full text-sm">{skill}</span>
                                    ))}
                                </div>
                                <p className="text-sm font-semibold">Days: {slot.availableDays.join(', ')}</p>
                                <p className="text-sm italic mt-1 text-gray-500">{slot.note}</p>
                                <Link
                                    to={`/book-slot/${slot._id}`}
                                    className="btn btn-xs btn-primary w-full mt-2 cursor-pointer"
                                >Trainer Booking</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrainersDetails;
