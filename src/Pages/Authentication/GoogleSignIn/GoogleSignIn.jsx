import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import UseAxios from '../../../hooks/UseAxios';

const GoogleSignIn = () => {

    const { signInWithGoogle } = use(AuthContext)

    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();
    const axiosInstance = UseAxios();

    const handleGoogleLogin = () => {
        // Google login logic here
        signInWithGoogle()
            .then(async (result) => {
                navigate(from)

                const user = result.user;

                // update user info in database 
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    role: 'member',
                    image: user?.photoURL,
                    created_at: new Date().toISOString(),
                    last_login: new Date().toISOString()
                }
                // console.log(userInfo);
                const userResult = await axiosInstance.post('/users', userInfo);
                // console.log(userResult.data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 border w-full py-2 rounded-lg hover:bg-base-100 transition"
        >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
        </button>
    );
};

export default GoogleSignIn;