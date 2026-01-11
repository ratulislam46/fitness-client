import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link, useNavigate } from "react-router";
import FitnestIcon from "../../../Layout/Navbar/FitnestIcon";
import { useForm } from "react-hook-form";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import AuthBackground from "../../../Components/Shared/AuthBackground";
import toast from "react-hot-toast";

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
                toast.error("password error")
            })

    };

    return (
        <div>
            <AuthBackground title='Welcome Back to' subtitle='Sign in your account' pageName='Sign in'>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <fieldset className="fieldset">
                        {/* email field  */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="input w-full" placeholder="arfanratul46@gmail.com" />
                        {errors.email?.type === 'required' && <p className='text-red-500'>Email required</p>}


                        {/* password field*/}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true, minLength: 6 })}
                            className="input w-full" placeholder="• • • • • •" />
                        {errors.password?.type === 'required' && <p className='text-red-500'>Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>}

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition mt-2 cursor-pointer"
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

            </AuthBackground>
        </div>

    );
};

export default LoginPage;
