import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider.jsx'
import Swal from "sweetalert2";
import { use, useState } from "react";
import UseAxios from "../../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure.jsx";


const AddClass = () => {
    const { user } = use(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = UseAxiosSecure()
    const axiosInstance = UseAxios()
    const [uploading, setUploading] = useState(false);

    const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;

    // Load user data from DB
    const { data: userData = {} } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });
    // console.log(userData);

    const onSubmit = async (data) => {
        setUploading(true);
        const imageFile = data.classImage[0];
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const imageRes = await axios.post(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, formData);
            const imageUrl = imageRes.data.data.url;

            const classData = {
                title: data.title,
                details: data.details,
                image: imageUrl,
                created_at: new Date().toISOString(),
                posted_by: {
                    name: userData?.name,
                    email: userData?.email,
                    image: userData?.image,
                    role: userData?.role
                }
            };
            console.log(classData);

            await axiosInstance.post("/classes", classData);

            Swal.fire("Success!", "Class added successfully!", "success");
            reset();

        } catch (err) {
            console.error("Image upload failed", err);
            Swal.fire("Error!", "Image upload failed", "error");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 md:p-10">
            <h2 className="text-3xl font-bold text-center mb-6">ADD NEW CLASS</h2>
            <p className="text-center text-sm text-gray-500 mb-8">In here you can add new class</p>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Forum Title */}
                <div className="col-span-1">
                    <label className="block font-semibold mb-1">Class Title</label>
                    <input
                        type="text"
                        placeholder="Forum Title"
                        {...register("title", { required: true })}
                        className="input input-bordered w-full"
                    />
                    {errors.title && <span className="text-red-500 text-sm">Class title is required</span>}
                </div>

                {/* Class Image */}
                <div className="col-span-1">
                    <label className="block font-semibold mb-1">Class Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("classImage", { required: true })}
                        className="file-input file-input-bordered w-full"
                    />
                    {errors.classImage && <span className="text-red-500 text-sm">Image is required</span>}
                </div>

                {/* Class Description */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block font-semibold mb-1">Class Details</label>
                    <textarea
                        rows="5"
                        placeholder="Class details . . ."
                        {...register("details", { required: true })}
                        className="textarea textarea-bordered w-full"
                    />
                    {errors.details && <span className="text-red-500 text-sm">Details required</span>}
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full" disabled={uploading}>
                        {uploading ? "Posting..." : "Make Post"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
