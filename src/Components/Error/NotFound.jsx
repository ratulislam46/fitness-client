import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center p-6">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />

      <h1 className="text-5xl font-bold text-error">404</h1>
      <p className="text-xl mt-2 text-gray-500">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <div className="mt-6">
        <Link to="/" className="btn btn-error text-white">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
