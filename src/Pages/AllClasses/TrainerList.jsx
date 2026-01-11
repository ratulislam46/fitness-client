import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import UseAxios from '../../hooks/UseAxios';
import { FaUserSlash } from 'react-icons/fa';

const TrainerList = ({ className }) => {
    const axiosInstance = UseAxios()

    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers-by-class', className],
        queryFn: async () => {
            const res = await axiosInstance.get(`/trainers-by-skill/${className}`);
            return res.data;
        }
    });

    return (
        <div className="mt-3">
            <h4 className="text-xl italic font-semibold">Trainers who Took this class</h4>
            <div className="flex gap-2 mt-2">
                {trainers?.length === 0 ? (
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                        <FaUserSlash className="text-gray-400" />
                        No trainers available
                    </p>
                ) : (
                    trainers?.map(trainer => (
                        <Link key={trainer._id} to={`/trainer/${trainer._id}`}>
                            <img
                                src={trainer.profileImage}
                                alt={trainer.fullName}
                                className="w-10 h-10 rounded-full border-2 border-blue-500"
                                title={trainer.fullName}
                            />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default TrainerList;
