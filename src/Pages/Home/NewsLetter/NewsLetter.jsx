import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosInstance = UseAxios()

    const onSubmit = async (data) => {
        try {
            const res = await axiosInstance.post("/subscribers", data);
            if (res.data?.message === "Subscribed successfully") {
                Swal.fire("Subscribed!", "Thanks for subscribing!", "success");
                reset();
            }
        } catch (error) {
            if (error.response?.status === 409) {
                Swal.fire("Oops!", "You are already subscribed!", "warning");
            } else {
                Swal.fire("Error", "Something went wrong", "error");
            }
        }
    };

    return (
        <div className="w-full bg-white py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto shadow-md bg-white rounded-lg p-8 grid md:grid-cols-2 gap-10 items-center">
                {/* Left side - Text */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        SUBSCRIBE TO OUR NEWSLETTER!!
                    </h2>
                    <p className="text-gray-600">
                        Subscribe our newsletter to get exciting latest and updated news. So you stay connected to our forums.
                    </p>
                </div>

                {/* Right side - Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full flex items-center justify-center gap-2"
                    >
                        Subscribe Now <FiSend />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
