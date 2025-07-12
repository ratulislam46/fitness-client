import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import UseAxiosSecure from "../../../hooks/useAxiosSecure";
import UseAxios from "../../../hooks/UseAxios";
import axios from "axios";
import toast from "react-hot-toast";
import coverPhoto from '../../../../public/image/cover.jpg'

const MyProfile = () => {
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const axiosInstance = UseAxios();
    const queryClient = useQueryClient();
    const [imageUploading, setImageUploading] = useState(false);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Load user data from DB
    const { data: userData = {} } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });
    console.log(userData);

    useEffect(() => {
        if (userData) {
            setValue("name", userData.name || user.displayName);
            setValue("email", userData.email || user.email);
            setValue("photoURL", userData.photoURL || user.photoURL);
        }
    }, [userData, setValue, user]);

    const mutation = useMutation({
        mutationFn: async (data) => {
            // console.log(data);

            return await axiosInstance.patch(`/users/profile/${user.email}`, data);
        },
        onSuccess: () => {
            Swal.fire("Updated!", "Profile updated successfully", "success");
            queryClient.invalidateQueries(["user", user.email]);
        },
        onError: () => {
            Swal.fire("Error", "Failed to update profile", "error");
        }
    });

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
        setImageUploading(true);

        try {
            const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`;
            const res = await axios.post(url, formData)
            // console.log(res.data);

            if (res.data.success) {
                setValue("photoURL", res.data.data.url);
                toast.success("Profile image uploaded successfully");
            }
        } catch (error) {
            console.error("Image Upload Error", error);
        } finally {
            setImageUploading(false);
        }
    };

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {/* Cover Photo */}
            <div className="relative w-full h-52 md:h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={coverPhoto}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                {/* Profile Image */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10">
                    <img
                        src={userData?.image || user?.photoURL}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-2 border-blue-600 object-cover shadow-md"
                    />
                </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-center">My Profile</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="label">Full Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Full Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">Email (read-only)</label>
                        <input
                            {...register("email")}
                            type="email"
                            className="input input-bordered w-full bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Upload Image */}
                    <div>
                        <label className="label">Upload New Profile Image</label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            onChange={handleImageUpload}
                            disabled={imageUploading}
                            required
                        />
                    </div>

                    {/* Image URL hidden */}
                    <input type="hidden" {...register("photoURL")} />

                    {/* Last login */}
                    <div>
                        <label className="label">Last Login</label>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-gray-100"
                            value={user?.metadata?.lastSignInTime || "N/A"}
                            readOnly
                        />
                    </div>

                    <div className="text-center mt-6">
                        <button type="submit" className="btn btn-primary px-6" disabled={mutation.isLoading || imageUploading}>
                            {mutation.isLoading || imageUploading ? "Updating..." : "Update Profile"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
