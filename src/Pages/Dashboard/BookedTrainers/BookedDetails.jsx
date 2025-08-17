import { MdEmail, MdPerson, MdAccessTime, MdFitnessCenter, MdRateReview } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { use, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UseAxios from "../../../hooks/UseAxios";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const BookedDetails = ({ slot }) => {

    const { trainerEmail, trainerName, slotName, slotDuration, selectedClasses
    } = slot;
    // console.log(selectedClasses);
    const { user } = use(AuthContext);
    const axiosIntance = UseAxios()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(5);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const reviewMutation = useMutation({
        mutationFn: async (reviewData) => {

            // console.log(reviewData);
            const res = await axiosIntance.post("/reviews", reviewData);
            return res.data;
        },
        onSuccess: () => {
            toast.success(" Thank you for your feedback!");
            setIsModalOpen(false);
            setFeedback("");
            setRating(5);
        },
        onError: (error) => {
            console.error(" Review submission error:", error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            trainerEmail,
            trainerName,
            slotName,
            userName: user?.displayName,
            userEmail: user?.email,
            userImage: user?.photoURL,
            feedback,
            rating,
            reviewedAt: new Date().toISOString(),
        };
        reviewMutation.mutate(reviewData);
    };

    return (
        <div className="bg-base-100 rounded-xl shadow-md hover:shadow-lg p-6 border border-base-content/5 transition duration-300 relative">
            <h2 className="text-xl font-bold text-base-content mb-4"> Booked Slot Details</h2>

            <div className="space-y-3 text-base-content/70">
                <div className="flex items-center gap-2">
                    <MdPerson className="text-green-500 text-lg" />
                    <span className="font-medium">Trainer Name:</span>
                    <span>{trainerName}</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdEmail className="text-yellow-500 text-lg" />
                    <span className="font-medium">Trainer Email:</span>
                    <span>{trainerEmail}</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdFitnessCenter className="text-shadow-red-500 text-lg" />
                    <span className="font-medium">Slot Name:</span>
                    <span>{slotName}</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdAccessTime className="text-cyan-500 text-lg" />
                    <span className="font-medium">Duration:</span>
                    <span>{slotDuration}</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaListAlt className="text-pink-500 text-lg" />
                    <span className="font-medium">Class Name:</span>
                    <div className="flex flex-wrap gap-2">
                        {selectedClasses.map((cls, idx) => (
                            <span
                                key={idx}
                                className="bg-primary/10 text-blue-700 px-2 py-1 rounded-full text-sm"
                            >
                                {cls}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="text-right mt-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn btn-outline btn-sm btn-primary"
                    >
                        ✍️ Give Review
                    </button>
                </div>
            </div>

            {/* Inline Modal */}
            {isModalOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-base-100 bg-opacity-95 rounded-xl shadow-xl z-10 p-6">
                    <h3 className="text-lg font-semibold text-center mb-4 text-base-content">📝 Submit Feedback</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Your feedback..."
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>

                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            min={1}
                            max={5}
                            className="input input-bordered w-full"
                            placeholder="Rating (1-5)"
                            required
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                className="btn btn-outline btn-error"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};


export default BookedDetails;