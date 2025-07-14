import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserCircle, FaEnvelope, FaCalendar, FaClock, FaTags, FaClipboardList } from "react-icons/fa";
import Loading from "../../../Components/Loading/Loading";

const TrainerDetails = () => {
    const { id } = useParams();
    const axiosSecure = UseAxiosSecure()
    const [trainer, setTrainer] = useState(null);

    useEffect(() => {
        axiosSecure.get(`/trainers/${id}`)
            .then(res => setTrainer(res.data))
            .catch(err => console.error("Failed to load trainer details", err));
    }, [axiosSecure, id]);

    if (!trainer) {
        return <Loading></Loading>;
    }

    return (

        <div className="max-w-5xl mx-auto mt-28 p-6 bg-base-100 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-6 border-b border-gray-300 pb-2">Trainer Application Details</h2>

            <div className="flex flex-col md:flex-row gap-8 shadow-md py-10 px-8 rounded-xl">
                {/* Profile Image */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src={trainer.profileImage}
                        alt="Trainer"
                        className="w-64 h-64 rounded-xl object-cover border border-purple-300"
                    />
                </div>

                {/* Info */}
                <div className="md:w-2/3 space-y-4 text-base-content">
                    <p className="flex items-center gap-2">
                        <FaUserCircle className="text-primary" />
                        <span><strong>Name:</strong> {trainer.fullName}</span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-primary" />
                        <span><strong>Email:</strong> {trainer.email}</span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaCalendar className="text-primary" />
                        <span><strong>Age:</strong> {trainer.age}</span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaClipboardList className="text-primary" />
                        <span><strong>Status:</strong>
                            <span className="badge badge-warning ml-2">{trainer.status}</span>
                        </span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaTags className="text-primary" />
                        <span><strong>Skills:</strong> {trainer.skills?.join(", ")}</span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaCalendar className="text-primary" />
                        <span><strong>Available Days:</strong> {trainer.availableDays?.join(", ")}</span>
                    </p>

                    <p className="flex items-center gap-2">
                        <FaClock className="text-primary" />
                        <span><strong>Available Time:</strong> {trainer.availableTime}</span>
                    </p>

                    {trainer.otherInfo && (
                        <p className="flex items-start gap-2">
                            <FaClipboardList className="text-primary mt-1" />
                            <span><strong>Other Info:</strong> {trainer.otherInfo}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default TrainerDetails;
