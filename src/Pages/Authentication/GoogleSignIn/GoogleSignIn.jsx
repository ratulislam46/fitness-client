import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignIn = () => {

    const { signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleGoogleLogin = () => {
        // Google login logic here
        signInWithGoogle()
            .then(async (result) => {
                navigate(from)
                console.log(result);
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