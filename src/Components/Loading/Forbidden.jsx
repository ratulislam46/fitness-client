// components/Forbidden.jsx
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const Forbidden = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">
            <FaLock className="text-6xl text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-red-700">403 - Forbidden</h1>
            <p className="mt-2 text-gray-600">You don’t have permission to access this page.</p>
            <Link
                to="/"
                className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Forbidden;
