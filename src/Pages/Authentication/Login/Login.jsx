import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link, useNavigate } from "react-router";
import FitnestIcon from "../../../Layout/Navbar/FitnestIcon";
import { useForm } from "react-hook-form";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const LoginPage = () => {

    const { SignIn } = use(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = (data) => {

        // login logic here
        SignIn(data?.email, data?.password)
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div>
            <FitnestIcon></FitnestIcon>
            <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Welcome Back
                    </h2>
                    <p className="text-xl text-center text-gray-500 mb-6">
                        Please login to your account
                    </p>

                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                        <fieldset className="fieldset">
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

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition mt-2"
                            >
                                Login
                            </button>
                            <div><p className='pl-2'>If you have no account!
                                <Link to='/register' className='text-blue-600 underline ml-1'>Register</Link> </p>
                            </div>

                            <div className=" text-center">
                                <div className="divider">Or Continue With</div>

                                {/* google login */}
                                <GoogleSignIn></GoogleSignIn>

                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default LoginPage;
