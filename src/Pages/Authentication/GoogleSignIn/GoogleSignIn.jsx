import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import UseAxios from '../../../hooks/UseAxios';

const GoogleSignIn = () => {

    const { signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate();
    const from = location.state || '/';
    const axiosInstance = UseAxios();

    const handleGoogleLogin = () => {
        // Google login logic here
        signInWithGoogle()
            .then(async (result) => {
                console.log('google login', result.user);
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
                console.log(userResult.data);

                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 border w-full py-2 rounded-lg hover:bg-gray-100 transition"
        >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
        </button>
    );
};

export default GoogleSignIn;