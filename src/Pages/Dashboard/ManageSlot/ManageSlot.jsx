import { AuthContext } from "../../../Context/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";

const ManageSlot = () => {
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const axiosInstance = UseAxios();

    // fetch all slots by this trainer
    const {
        data: slots = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["trainer-slots", user?.email],
        // enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/slots-by-email/${user?.email}`);
            return res.data;
        },
    });
    // console.log(slots);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this slot?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosInstance.delete(`/slots/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your slot has been deleted.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <p className="text-center">Loading...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Manage Your Slots</h2>

            {slots.length === 0 ? (
                <p className="text-center text-gray-500">No slots found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Slot Name</th>
                                <th>Duration</th>
                                <th>Classes</th>
                                <th>Available Days</th>
                                <th>Booking Info</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slots.map((slot, index) => (
                                <tr key={slot._id}>
                                    <td>{index + 1}</td>
                                    <td>{slot.slotName}</td>
                                    <td>{slot.slotDuration} hr</td>
                                    <td>
                                        <ul className="list-disc list-inside text-sm">
                                            {slot.selectedClasses?.map((cls, idx) => (
                                                <li key={idx}>{cls}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-disc list-inside text-sm">
                                            {slot.availableDays?.map((day, idx) => (
                                                <li key={idx}>{day}</li>
                                            ))}
                                        </ul>
                                    </td>

                                    {/* Booked Info */}
                                    <td>
                                        {slot.booked
                                            ? (
                                                <div className="text-sm text-green-600">
                                                    <p><strong>Name:</strong> {slot.bookedBy?.name}</p>
                                                    <p><strong>Email:</strong> {slot.bookedBy?.email}</p>
                                                </div>
                                            )
                                            : <span className="text-gray-400">Not Booked</span>}
                                    </td>

                                    {/* Delete Button */}
                                    <td>
                                        <button
                                            onClick={() => handleDelete(slot._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageSlot;
