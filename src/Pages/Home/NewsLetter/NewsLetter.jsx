import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";

const Newsletter = () => {
    const { register, handleSubmit, reset } = useForm();
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
        <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-20 px-4">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4 text-primary">Subscribe to our Newsletter</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                    />
                    <button className="btn btn-primary w-full">Subscribe Now</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
