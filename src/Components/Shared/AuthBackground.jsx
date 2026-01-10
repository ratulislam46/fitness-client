import React from 'react';

const AuthBackground = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Left side - Login form */}
            <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16">
                <div className="max-w-md w-full mx-auto">
                    {/* Logo and header */}
                    <div className="mb-10">
                        <div className="flex items-center mb-6">
                            <div className="text-2xl font-bold text-gray-800">American</div>
                            <div className="text-2xl font-bold text-blue-600 ml-1">Realtor</div>
                        </div>

                        <div className="mb-2">
                            <h1 className="text-3xl font-bold text-gray-800">Welcome Back to</h1>
                            <h1 className="text-3xl font-bold text-blue-600">American Realtors!</h1>
                        </div>
                        <p className="text-gray-600 mt-2">Sign in your account</p>
                    </div>

                    {/* Your existing form exactly as provided */}
                    {children}
                </div >
            </div >

            {/* Right side - Image/Illustration */}
            < div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden" >
                <div className="relative z-10 text-white max-w-md mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Find Your Sweet Home</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Schedule visit just a few clicks, visit in just few clicks
                    </p>

                    {/* Decorative elements */}
                    <div className="grid grid-cols-2 gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl font-bold mb-2">2500+</div>
                            <div className="opacity-90">Properties Listed</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl font-bold mb-2">98%</div>
                            <div className="opacity-90">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Abstract background shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div >
        </div >
    );
};

export default AuthBackground;