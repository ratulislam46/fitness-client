import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const TrainerBookedPage = () => {
    const { slotId } = useParams();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, watch } = useForm();
    const selectedPlan = watch("plan");

    const { data: slot = {}, isLoading } = useQuery({
        queryKey: ['slot', slotId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/slots/${slotId}`);
            return res.data;
        },
        enabled: !!slotId,
    });

    let price = 0;
    let action = "";

    if (selectedPlan === "Basic") {
        price = 10;
        action = "ACCESS_BASIC";
    } else if (selectedPlan === "Standard") {
        price = 50;
        action = "ACCESS_STANDARD";
    } else if (selectedPlan === "Premium") {
        price = 100;
        action = "ACCESS_PREMIUM";
    }

    const handlePlanSelect = () => {


    };

    if (isLoading) return <p className="text-center py-10">Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto mt-16 px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Trainer Booking Summary</h2>

            {/* Trainer Info */}
            <div className="bg-base-100 shadow rounded-xl border border-gray-200 p-6 mb-8">
                <p><strong>Trainer:</strong> {slot.trainerName}</p>
                <p><strong>Selected Slot:</strong> {slot.slotName}</p>
                <p><strong>Classes:</strong> {slot.selectedClasses?.join(", ")}</p>
            </div>

            {/* Plan Selection Form */}
            <form onChange={handlePlanSelect}>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Choose a Membership Plan:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Basic */}
                    <label className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition cursor-pointer">
                        <input type="radio" value="Basic" {...register("plan", { required: true })} className="radio radio-primary" />
                        <h4 className="text-lg font-bold mt-2">Basic Membership - $10</h4>
                        <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                            <li>Access during regular hours</li>
                            <li>Basic equipment</li>
                        </ul>
                    </label>

                    {/* Standard */}
                    <label className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition cursor-pointer">
                        <input type="radio" value="Standard" {...register("plan", { required: true })} className="radio radio-primary" />
                        <h4 className="text-lg font-bold mt-2">Standard Membership - $50</h4>
                        <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                            <li>Basic + group classes</li>
                            <li>Trainer support</li>
                        </ul>
                    </label>

                    {/* Premium */}
                    <label className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition cursor-pointer">
                        <input type="radio" value="Premium" {...register("plan", { required: true })} className="radio radio-primary" />
                        <h4 className="text-lg font-bold mt-2">Premium Membership - $100</h4>
                        <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                            <li>All access + steam room</li>
                            <li>Massage & diet coaching</li>
                        </ul>
                    </label>
                </div>

                {/* Join Now Button */}
                {selectedPlan && (
                    <div className="mt-10 text-center">
                        <Link
                            to={`/payment?trainerId=${slot.trainerId}&slotId=${slotId}&plan=${selectedPlan}&price=${price}&action=${action}`}
                            className="btn btn-primary"
                        >
                            Join Now (${price})
                        </Link>
                    </div>
                )}

            </form>
        </div>
    );
};

export default TrainerBookedPage;
