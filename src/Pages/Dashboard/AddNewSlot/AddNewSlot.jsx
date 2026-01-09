import { use } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseAxios from "../../../hooks/UseAxios";
import Swal from "sweetalert2";

const AddNewSlot = () => {
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const axiosInstance = UseAxios()
    const { register, handleSubmit, reset, control } = useForm();

    const email = user?.email;

    //  Load trainer info
    const { data: trainer, isLoading: trainerLoading, } = useQuery({
        queryKey: ["trainer", email],
        enabled: !!email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainers-by-email/${email}`);
            return res.data;
        },
    });

    //  Load all admin-added classes
    const { data: classList = [], isLoading: classLoading, } = useQuery({
        queryKey: ["all-classes"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-added-classes");
            return res.data;
        },
    });

    //  Load existing slots for this trainer
    const { data: existingSlots = [], isLoading: slotLoading, } = useQuery({
        queryKey: ["trainer-slots", trainer?._id],
        enabled: !!trainer?._id,
        queryFn: async () => {
            const res = await axiosSecure.get(`/slots?trainerId=${trainer._id}`);
            return res.data;
        },
    });

    const totalUsedTime = existingSlots.reduce(
        (sum, slot) => sum + slot.slotDuration,
        0
    );

    const classOptions = classList.map((cls) => ({
        value: cls.title,
        label: cls.title,
    }));

    const onSubmit = async (data) => {
        const newSlotDuration = parseFloat(data.slotDuration);

        if (totalUsedTime + newSlotDuration > trainer.availableTime) {
            return toast.error(
                `You can only use up to ${trainer.availableTime} hours. Already used: ${totalUsedTime}h`
            );
        }

        const slotData = {
            trainerId: trainer._id,
            trainerName: trainer.fullName,
            trainerEmail: trainer.email,
            trainerImage: trainer.profileImage,
            slotName: data.slotName,
            slotDuration: newSlotDuration,
            selectedClasses: data.selectedClasses.map((c) => c.value),
            availableDays: trainer.availableDays,
            note: data.note || "",
            created_at: new Date().toISOString(),
        };

        const res = await axiosInstance.post("/slots", slotData);
        if (res.data.insertedId) {
            Swal.fire({
                title: "Slot added successfully!",
                icon: "success",
                draggable: true,
                confirm

            });
            reset();
        }
    };

    if (trainerLoading || classLoading || slotLoading) {
        return <p className="text-center py-4">Loading...</p>;
    }

    if (!trainer) return <p className="text-red-500 text-center">Trainer not found!</p>;

    return (
        <div className="container mx-auto p-6 md:p-10">
            <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-6">Add New Slot</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Trainer Info */}
                <input
                    value={trainer.fullName}
                    readOnly
                    className="input input-bordered w-full"
                />
                <input
                    value={trainer.email}
                    readOnly
                    className="input input-bordered w-full"
                />

                {/* Show Available Days (React Select - read-only style) */}
                <div>
                    <label className="font-semibold text-base-content">Available Days</label>
                    <Select
                        isMulti
                        isDisabled
                        value={trainer.availableDays.map((day) => ({
                            value: day,
                            label: day,
                        }))}
                        className="mt-1 "
                    />
                </div>

                {/* Slot Name */}
                <input
                    {...register("slotName", { required: true })}
                    type="text"
                    placeholder="Slot Name (e.g. Morning Slot)"
                    className="input input-bordered w-full"
                />

                {/* Slot Duration */}
                <input
                    {...register("slotDuration", { required: true })}
                    type="number"
                    min="0.5"
                    step="0.5"
                    placeholder="Slot Duration (in hours)"
                    className="input input-bordered w-full"
                />

                {/* Class Select from DB */}
                <div>
                    <label className="font-semibold">Select Classes</label>
                    <Controller
                        name="selectedClasses"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti
                                options={classOptions}
                                className="mt-1 "
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: '#fffff',
                                        borderColor: base.borderColor,
                                        color: 'var(--p)',
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        backgroundColor: '#6B7280',
                                        color: 'var(--p)',
                                    }),
                                    multiValue: (base) => ({
                                        ...base,
                                        backgroundColor: '#fffff',
                                        color: 'var(--p)',
                                    }),
                                    multiValueLabel: (base) => ({
                                        ...base,
                                        color: 'var(--p)',
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: 'var(--p)',
                                    }),
                                }}
                            />
                        )}
                    />
                </div>

                {/* Optional Note */}
                <textarea
                    {...register("note")}
                    placeholder="Additional Notes"
                    className="textarea textarea-bordered w-full"
                ></textarea>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Add Slot
                </button>

                {/* Info Message */}
                <p className="text-sm text-base-content/70 text-center">
                    Used: {totalUsedTime}h / Available: {trainer.availableTime}h
                </p>
            </form>
        </div>
    );
};

export default AddNewSlot;
