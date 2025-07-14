import React, { use } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import UseAxios from "../../hooks/UseAxios";

const BeATrainer = () => {
    const { user } = use(AuthContext)
    const axiosInstance = UseAxios()
    const { register, handleSubmit, control, reset } = useForm();


    const onSubmit = async (data) => {
        const time = data.availableTime;
        const converABTimeInANumber = parseInt(time)

        const formData = {
            fullName: data.fullName,
            email: user?.email,
            age: data.age,
            profileImage: data.profileImage,
            skills: data.skills,
            availableTime: converABTimeInANumber,
            otherInfo: data.otherInfo,
            status: "pending",
            applied_at: new Date(),
        };
        // console.table(formData); 

        try {
            const res = await axiosInstance.post("/applied-trainers", formData);
            if (res.data.insertedId) {
                Swal.fire("Success", "Trainer application submitted!", "success");
                reset();
            }
        } catch (err) {
            console.error("Submission error:", err);
            Swal.fire("Error", "Something went wrong", "error");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-24">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Apply to be a Trainer</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Full Name */}
                <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                    className="input input-bordered w-full"
                />

                {/* Email (readonly) */}
                <input
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                />

                {/* Age */}
                <input
                    type="number"
                    placeholder="Age"
                    min={21}
                    {...register("age", { required: true })}
                    className="input input-bordered w-full"
                />

                {/* Profile Image URL */}
                <input
                    type="url"
                    placeholder="Profile Image URL"
                    {...register("profileImage", { required: true })}
                    className="input input-bordered w-full"
                />

                {/* Skills (checkboxes) */}
                <div className="grid grid-cols-2 gap-3">
                    {["Yoga", "Cardio", "Strength", "Zumba", "Dance", "Pilates","Muscle", "Sports"].map((skill) => (
                        <label key={skill} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={skill}
                                {...register("skills")}
                                className="checkbox checkbox-sm"
                            />
                            {skill}
                        </label>
                    ))}
                </div>

                {/* Available Time */}
                <input
                    type="number"
                    placeholder="Available hours in a day"
                    {...register("availableTime", { required: true })}
                    className="input input-bordered w-full"
                />

                {/* Other Info */}
                <textarea
                    placeholder="Your Opinion . . . . ."
                    {...register("otherInfo", { required: true })}
                    className="textarea textarea-bordered w-full"
                />

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">Apply Now</button>
            </form>
        </div>
    );
};

export default BeATrainer;
