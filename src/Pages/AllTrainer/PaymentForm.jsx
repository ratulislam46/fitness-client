import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import UseAxiosSecure from '../../hooks/useAxiosSecure';
import UseAxios from '../../hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const PaymentForm = ({ price, trainerId, slotId, plan, action, user }) => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const axiosInstance = UseAxios();
    const [loading, setLoading] = useState(false);

    const { data: clientSecret, isLoading: secretLoading } = useQuery({
        queryKey: ['create-payment-intent', price],
        queryFn: async () => {
            const res = await axiosInstance.post('/create-payment-intent', { price });
            return res.data.clientSecret;
        },
    });
    // console.log(clientSecret);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || secretLoading) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        setLoading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message);
            setLoading(false);
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
            receipt_email: user?.email,
        });

        if (confirmError) {
            toast.error(confirmError.message);
            setLoading(false);
            return;
        }

        //  Save payment and increase booking
        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                transactionId: paymentIntent.id,
                trainerId,
                slotId,
                plan,
                price,
                action,
                userEmail: user?.email,
                userName: user?.displayName,
                paymentDate: new Date().toISOString(),
            };

            const res = await axiosSecure.post("/payments", paymentInfo);
            if (res.data.insertedId) {
                await axiosSecure.patch(`/slots/${slotId}/increment`);
                Swal.fire({
                    title: " Payment successful!",
                    icon: "success",
                    draggable: true
                });
            }
        }

        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-2xl w-[90%] lg:w-[70%] mx-auto">
                <CardElement
                    className='py-4 px-2  bg-white border-gray-300 border rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    disabled={!stripe}
                    className='btn btn-primary w-full mt-2'
                >
                    {`Pay $${price}`}
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;