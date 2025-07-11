import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TrainerApplied = () => {
    const axiosSecure = useAxiosSecure();
    const [appliedTrainers, setAppliedTrainers] = useState([]);

    useEffect(() => {
        axiosSecure.get("/applied-trainers")
            .then(res => setAppliedTrainers(res.data))
            .catch(err => console.error("Error fetching applied trainers", err));
    }, [axiosSecure]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Applied Trainers</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            appliedTrainers.map((trainer, index) => (
                                <tr key={trainer._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={trainer.profileImage} alt="Trainer" className="w-12 h-12 rounded-full" />
                                    </td>
                                    <td>{trainer.fullName}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.age}</td>
                                    <td>
                                        <span className="badge badge-warning text-xs">{trainer.status}</span>
                                    </td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-xs btn-outline btn-info">Details</button>
                                        <button className="btn btn-xs btn-outline btn-success">Confirm</button>
                                        <button className="btn btn-xs btn-outline btn-error">Reject</button>
                                    </td>
                                </tr>
                            ))
                        }

                        {
                            appliedTrainers.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center text-gray-500 py-4">
                                        No trainer applications found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrainerApplied;
