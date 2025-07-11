import { ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <ScaleLoader ></ScaleLoader>
        </div>
    );
};

export default Loading;