
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const ActivityLog = () => {
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const { data: pending = [] } = useQuery({
        queryKey: ["pending-applications", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer-applications/pending/${user?.email}`);
            return res.data;
        },
    });

    const { data: rejected = [] } = useQuery({
        queryKey: ["rejected-applications", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer-applications/rejected/${user?.email}`);
            return res.data;
        },
    });


    const combinedApplications = [
        ...pending.map(app => ({ ...app, status: 'pending' })),
        ...rejected.map(app => ({ ...app, status: 'rejected' })),
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">Trainer Application Activity Log</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th>#</th>
                            <th>Applied Date</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            combinedApplications.map((app, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>

                                    {/* conditional date  */}
                                    {
                                        app.status === 'rejected' ?
                                            <td>{new Date(app.rejected_at).toLocaleDateString()}</td> :
                                            <td>{new Date(app.applied_at).toLocaleDateString()}</td>
                                    }

                                    <td>
                                        <span className={`border py-1 px-2 rounded-md ${app.status === "pending" ? "bg-yellow-400 border-yellow-400 text-white" : "bg-red-400 border-red-400 text-white"}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td>
                                        {
                                            app.status === 'rejected' ?
                                                <button onClick={() => setSelectedFeedback(app)} className="btn btn-soft btn-info">
                                                    <FaEye />
                                                </button> :
                                                <p className="font-bold text-gray-400">Nothing</p>
                                        }
                                    </td>
                                </tr>
                            ))
                        }

                        {
                            combinedApplications.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center text-5xl mt-20 text-gray-500">No trainer application history found.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* Modal for Feedback */}
            {selectedFeedback && (
                <div className="modal modal-open">
                    <div className="modal-box shadow-xl">
                        <h3 className="text-lg font-semibold mb-2 text-red-500">Rejection Feedback</h3>
                        <p className="text-sm text-gray-700">
                            {selectedFeedback.feedback || "No feedback provided."}
                        </p>
                        <div className="modal-action">
                            <button
                                onClick={() => setSelectedFeedback(null)}
                                className="btn btn-soft btn-error"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityLog;
