import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1zko07i',
                'template_2vjjf1e',
                form.current, {
                publicKey: 'psaYyAoVgq5i8i5oV',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Email Send Succesfully!",
                        icon: "success",
                        draggable: true
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="py-6 mt-20 container mx-auto px-4 md:px-4 border border-base-content/5 rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 pb-2">Contact Us</h2>
            <p className="mb-6 text-base-content/70 text-xl text-center">
                Have questions or want to get in touch? Please fill out the form below.
            </p>

            <form
                ref={form} onSubmit={sendEmail}
                className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        className="w-full border border-base-content/5 rounded-lg p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email"
                        className="w-full border border-base-content/5 rounded-lg p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        placeholder="Write your message..."
                        name="message"
                        rows="4"
                        className="w-full border border-base-content/5 rounded-lg p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-lg w-full cursor-pointer"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
