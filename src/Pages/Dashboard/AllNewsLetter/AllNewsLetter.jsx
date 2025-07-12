import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../hooks/useAxiosSecure';

const AllNewsLetter = () => {
    const axiosSecure = UseAxiosSecure();
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        axiosSecure.get('/subscribers')
            .then(res => {
                setSubscribers(res.data);
            })
            .catch(err => {
                console.error('Failed to fetch subscribers:', err);
            });
    }, [axiosSecure]);

    return (
        <div className="p-6 mt-10 overflow-x-auto bg-white rounded shadow">
            <h2 className="text-3xl font-bold mb-4 text-primary">All Newsletter Subscribers</h2>

            <table className="table table-zebra w-full">
                <thead>
                    <tr className="bg-purple-100 text-primary">
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map((sub, index) => (
                        <tr key={sub._id}>
                            <td>{index + 1}</td>
                            <td>{sub.name}</td>
                            <td>{sub.email}</td>
                            <td>{new Date(sub.subscribed_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {subscribers.length === 0 && (
                <p className="text-center text-gray-500 mt-4">No subscribers found.</p>
            )}
        </div>
    );
};

export default AllNewsLetter;
