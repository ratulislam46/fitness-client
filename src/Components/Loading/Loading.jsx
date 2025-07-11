import { RiseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600">
                <RiseLoader></RiseLoader>
            </div>
        </div>
    );
};

export default Loading;