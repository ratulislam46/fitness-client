import React from 'react';
import UseAxiosSecure from '../../../hooks/useAxiosSecure';
import UseAxios from '../../../hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Trainers = () => {

    const axiosSecure = UseAxiosSecure();
    const axiosInstance = UseAxios();

    const { data: trainers = [], refetch } = useQuery({
        queryKey: ["all-trainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/trainers/all");
            return res.data;
        }
    });
    console.log(trainers);

    const handleDelete = async (trainer) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This trainer role will be changed and set as a member.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Change!"
        });

        if (!confirm.isConfirmed) return;

        try {
            console.log('update role');
            await axiosInstance.patch(`/trainer/change-role/${trainer._id}`, {
                email: trainer?.email
            });

            Swal.fire("Changed!", "Trainer role has been changed.", "success");
            refetch();
        }
        catch (error) {
            console.error("Error changing trainer role", error);
            Swal.fire("Error", "Something went wrong.", "error");
        }

    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">All Trainers</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {trainers.map((trainer, idx) => (
                            <tr key={trainer._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <img src={trainer.image} className="w-10 h-10 rounded-full" />
                                </td>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>
                                    <span className="badge badge-info text-white">{trainer.role}</span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(trainer)}
                                        className="btn btn-error">
                                        Change Role
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {trainers.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No trainers found.</p>
                )}
            </div>
        </div>
    );
};

export default Trainers;