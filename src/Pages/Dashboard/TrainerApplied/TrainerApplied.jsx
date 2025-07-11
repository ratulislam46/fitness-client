import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { useQuery } from '@tanstack/react-query';
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";

const TrainerApplied = () => {
    const axiosSecure = useAxiosSecure();
    const axiosIntance = UseAxios()

    const { refetch, data: appliedTrainers = [] } = useQuery({
        queryKey: ['applied-trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get("/trainers/pending");
            return res.data
        }
    })
    console.log(appliedTrainers);

    const handleConfirm = async (id, email, action) => {
        console.log(id, email, action);
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "This user will be approved as a trainer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#16a34a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm it!'
        })

        if (!confirm.isConfirmed) return;

        try {
            await axiosIntance.patch(`/trainers/status/${id}`, {
                status: action,
                email: email
            });
            refetch()
            Swal.fire({
                title: `Trainer ${action}`,
                icon: 'success'
            })
        }
        catch (error) {
            console.log('could not update trainer status', error);
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-4">Applied Trainers</h2>

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
                                        <Link to={`/dashboard/applied-trainers/${trainer._id}`} className="btn btn-xs btn-outline btn-info">Details</Link>
                                        <button
                                            onClick={() => handleConfirm(trainer._id, trainer.email, "confirm")}
                                            className="btn btn-xs btn-outline btn-success">Confirm</button>
                                        <button

                                            className="btn btn-xs btn-outline btn-error">Reject </button>
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
