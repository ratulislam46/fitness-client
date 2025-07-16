import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUser, FaEnvelope, FaDollarSign, FaClipboardList, FaDumbbell, FaClock } from "react-icons/fa";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_TEST_KEY);

const PaymentPage = () => {
    const [searchParams] = useSearchParams();
    const axiosSecure = UseAxiosSecure();
    const { user } = use(AuthContext)

    const trainerId = searchParams.get("trainerId");
    const slotId = searchParams.get("slotId");
    const plan = searchParams.get("plan");
    const price = Number(searchParams.get("price"));
    const action = searchParams.get("action");
    // console.table(trainerId, slotId, plan, price, action);

    const { data: slotData = {}, isLoading } = useQuery({
        queryKey: ["slot", slotId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/slots/${slotId}`);
            return res.data;
        },
        enabled: !!slotId,
    });
    // console.log(slotData);

    if (isLoading) return <p>Loading...</p>;

    const bookingInfo = {
        trainerName: slotData.trainerName,
        slotName: slotData.slotName,
        plan,
        price,
        action,
        otherInfo: slotData.note
    };
// console.log(bookingInfo);

    return (
        <div className="mt-28 mb-12 px-1 lg:px-0">
            <div className="max-w-3xl mx-auto bg-base-100 border border-gray-300 rounded-xl shadow-lg p-6 mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-center text-primary mb-6 border-b-3 border-indigo-300 pb-2">
                    Booking Summary
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    {/* Trainer Name */}
                    <div className="flex items-center gap-3">
                        <FaUser className="text-xl text-indigo-500" />
                        <p><strong>Trainer:</strong> {slotData?.trainerName}</p>
                    </div>

                    {/* Slot Name */}
                    <div className="flex items-center gap-3">
                        <FaClock className="text-xl text-indigo-500" />
                        <p><strong>Slot:</strong> {slotData?.slotName}</p>
                    </div>

                    {/* Package Name */}
                    <div className="flex items-center gap-3">
                        <FaClipboardList className="text-xl text-indigo-500" />
                        <p><strong>Package:</strong> {plan}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <FaDollarSign className="text-xl text-green-500" />
                        <p><strong>Price:</strong> ${price}</p>
                    </div>

                    {/* User Name */}
                    <div className="flex items-center gap-3">
                        <FaUser className="text-xl text-indigo-500" />
                        <p><strong>Your Name:</strong> {user?.displayName || "Not Available"}</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-xl text-indigo-500" />
                        <p><strong>Email:</strong> {user?.email}</p>
                    </div>
                </div>

                {/* Optional Note */}
                {slotData?.note && (
                    <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-indigo-600">Other Info:</h4>
                        <p className="bg-indigo-50 text-gray-700 p-4 rounded-lg border-l-4 border-indigo-400 whitespace-pre-line">
                            {slotData.note}
                        </p>
                    </div>
                )}
                <div className="mt-16 mb-6">
                    <Elements stripe={stripePromise}>
                        <PaymentForm
                            price={price}
                            plan={plan}
                            slotId={slotId}
                            trainerId={trainerId}
                            action={action}
                            user={user}
                        ></PaymentForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
