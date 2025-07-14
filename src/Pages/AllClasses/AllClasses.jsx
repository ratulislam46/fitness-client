import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAxios from '../../hooks/UseAxios';
import TrainerList from './TrainerList';
import Loading from '../../Components/Loading/Loading';

const AllClasses = () => {
    const [page, setPage] = useState(1);
    const limit = 6;
    const axiosInstance = UseAxios()

    const { data: classesData = { result: [], total: 0 }, isLoading } = useQuery({
        queryKey: ['classes', page],
        queryFn: async () => {
            const res = await axiosInstance.get(`/classes?page=${page}&limit=${limit}`);
            return res.data;
        }
    });

    const totalPages = Math.ceil(classesData.total / limit);

    if (isLoading) return <Loading></Loading>

    return (
        <div className="p-6 mt-20  max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6  border-b border-gray-300 pb-2">All Classes</h2>

            <div className="grid grid-cols-1 gap-12">
                {classesData.result.map((cls) => (
                    <div key={cls._id} className="bg-white rounded-lg shadow-md pb-6">
                        <img src={cls.image} className="w-full object-cover rounded mb-3" />
                        <div className='px-4 space-y-4'>
                            <h3 className="text-2xl font-bold">{cls.title}</h3>
                            <p className="text-sm text-gray-600 mb-2 pb-4 border-b-1 border-gray-200">{cls.details}</p>
                        </div>

                        <div className='px-4'>
                            <TrainerList className={cls.title} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
                {[...Array(totalPages).keys()].map(i => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`btn btn-sm ${page === i + 1 ? "btn-primary" : "btn-outline"}`}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllClasses;
