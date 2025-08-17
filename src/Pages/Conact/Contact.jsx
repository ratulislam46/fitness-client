import React from "react";

const Contact = () => {
    return (
        <div className="py-6 mt-20 container mx-auto px-4 md:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 pb-2">Contact Us</h2>
            <p className="mb-6 text-base-content/70 text-xl text-center">
                Have questions or want to get in touch? Please fill out the form below.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        placeholder="Write your message..."
                        rows="4"
                        className="w-full border rounded-lg p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-lg w-full"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
