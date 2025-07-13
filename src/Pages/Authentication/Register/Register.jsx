import React, { use, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import FitnestIcon from "../../../Layout/Navbar/FitnestIcon";
import { Link, useNavigate, } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import UseAxios from '../../../hooks/UseAxios';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import axios from 'axios';

const Register = () => {

    const { Register, updateUserProfile } = use(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const from = location.state || '/';
    const [imageURL, setImageURL] = useState('');
    const axiosInstance = UseAxios();

    const handleRegister = data => {
        // console.log(data);
        Register(data.email, data.password)
            .then(async (result) => {
                navigate(from)

                // update userinfo in database 
                const userInfo = {
                    name: data?.name,
                    email: data?.email,
                    role: 'member',
                    image: imageURL,
                    created_at: new Date().toISOString(),
                    last_login: new Date().toISOString()
                }
                const userResult = await axiosInstance.post('/users', userInfo)
                console.log(userResult.data);

                // update user profile in firebase 
                const userProfile = {
                    displayName: data?.name,
                    photoURL: imageURL
                }
                updateUserProfile(userProfile)
                    .then(() => console.log('Profile name and pic updated'))
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        const formData = new FormData()
        formData.append('image', image)

        const imageUploadURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`

        const res = await axios.post(imageUploadURL, formData);
        setImageURL(res.data.data.url);
    }

    return (
        <div>
            <div className="bg-gray-100 lg:pl-6 lg:pt-6 pt-2">
                <FitnestIcon></FitnestIcon>
            </div>
            <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Register an account!
                    </h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">

                            {/* name field  */}
                            <label className="label">Your Name</label>
                            <input
                                type="text "
                                {...register("name", { required: true })}
                                className="input" placeholder="Your Name" />

                            {/* image field */}
                            <label className="label">Image</label>
                            <input
                                onChange={handleImageUpload}
                                type="file" name='image'
                                className='input pt-2 font-semibold' />


                            {/* email field  */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-500'>Email required</p>}


                            {/* password field*/}
                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 6 })}
                                className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className='text-red-500'>Password required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>}

                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition mt-2">Register</button>

                            <div><p className='pl-2'>Already you have account!
                                <Link to='/login' className='text-blue-600 underline ml-1'>Login</Link> </p></div>
                        </fieldset>

                        <div className=" text-center">
                            <div className="divider">Or Continue With</div>

                            {/* google login */}
                            <GoogleSignIn></GoogleSignIn>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;