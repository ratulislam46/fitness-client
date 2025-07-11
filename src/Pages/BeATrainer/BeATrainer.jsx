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

    const daysOptions = [
        { value: "Sunday", label: "Sunday" },
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
    ];

    const onSubmit = async (data) => {
        const formData = {
            fullName: data.fullName,
            email: user?.email,
            age: data.age,
            profileImage: data.profileImage,
            skills: data.skills,
            availableDays: data.availableDays.map(day => day.value),
            availableTime: data.availableTime,
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
        <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
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
                    {["Yoga", "Cardio", "Strength", "Zumba", "Dance", "Pilates"].map((skill) => (
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

                {/* Available Days (React Select - Multi) */}
                <Controller
                    name="availableDays"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isMulti
                            options={daysOptions}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            placeholder="Select Available Days"
                        />
                    )}
                />

                {/* Available Time */}
                <input
                    type="text"
                    placeholder="Available Time (e.g. 7AM - 10AM)"
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
