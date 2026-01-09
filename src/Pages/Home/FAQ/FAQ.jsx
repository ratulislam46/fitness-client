import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16">
            <div className="flex flex-col justify-center px-1 md:px-1 lg:px-1 md:p-8">
                <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-semibold text-center">Frequently Asked <span className='text-primary'>Questions</span></h2>
                <p data-aos="fade-up" className="mt-4 mb-8 text-base-content/70 text-xl text-center">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details data-aos="fade-up" className="w-full border border-base-content/5 rounded-lg hover:bg-primary/5" open="">
                        <summary className="px-4 py-6 text-2xl">How often should I work out in a week to see results?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">For most beginners, working out 3-5 times per week with a mix of strength training and cardio is recommended. Consistency is key. </p>
                    </details>
                    <details data-aos="fade-up" className="w-full border border-base-content/5 rounded-lg  hover:bg-primary/5" open="">
                        <summary className="px-4 py-6 text-2xl">How can I avoid injuries while lifting weights?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Always warm up before lifting, use proper form, start with lighter weights, and gradually increase intensity. Listen to your body. </p>
                    </details>
                    <details data-aos="fade-up" className="w-full border border-base-content/5 rounded-lg  hover:bg-primary/5" open="">
                        <summary className="px-4 py-6 text-2xl">What is the best time to exercise?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">The best time is when you feel most energetic. Morning workouts boost metabolism, while evening workouts can help relieve stress. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;