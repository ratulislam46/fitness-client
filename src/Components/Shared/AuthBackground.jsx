import React from 'react';

const AuthBackground = ({ children, title, subtitle, pageName }) => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col md:flex-row">
            {/* Left side - Login form */}
            <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16">
                <div className="max-w-md w-full mx-auto">
                    {/* Logo and header */}
                    <div className="mb-10">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <h1 className="text-3xl font-bold text-secondary">Fitness</h1>
                        </div>
                        <p className="mt-2">{subtitle}</p>
                    </div>

                    {/* Your existing form exactly as provided */}
                    {children}
                </div >
            </div >

            {/* Right side - Fitness Theme */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-400 to-blue-800 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10 text-white max-w-md mx-auto">
                    {/* Updated Headline */}
                    <h2 className="text-4xl font-bold mb-6">Transform Your Fitness Journey</h2>
                    {/* Updated Subtext */}
                    <p className="text-xl mb-8 opacity-90">
                        {pageName} to track your workouts, follow personalized plans, and celebrate your progress.
                    </p>

                    {/* Example Fitness Stats */}
                    <div className="grid grid-cols-2 gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl font-bold mb-2">100+</div>
                            <div className="opacity-90">Workout Plans</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl font-bold mb-2">98%</div>
                            <div className="opacity-90">User Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements (unchanged) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>
        </div >
    );
};

export default AuthBackground;