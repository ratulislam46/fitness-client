import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import FitnestIcon from "../../../Layout/Navbar/FitnestIcon";
import { Link, useNavigate, } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import UseAxios from '../../../hooks/UseAxios';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Register = () => {

    const { Register, signInWithGoogle } = use(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const from = location.state || '/';
    const axiosInstance = UseAxios()

    const handleRegister = data => {
        console.log(data);
        Register(data.email, data.password)
            .then(async (result) => {
                console.log(result.user);
                navigate(from)

            })
            .catch(error => {
                console.log('error', error);
            })
    }

    return (
        <div>
            <FitnestIcon></FitnestIcon>
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
                                type="file" name='image'
                                className='input pt-2 text-primary font-semibold' />


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