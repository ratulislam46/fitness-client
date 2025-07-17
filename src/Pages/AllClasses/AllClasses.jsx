import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAxios from '../../hooks/UseAxios';
import TrainerList from './TrainerList';
import Loading from '../../Components/Loading/Loading';

const AllClasses = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const limit = 6;
  const axiosInstance = UseAxios();

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
      setPage(1); // reset to first page on new search
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const { data: classesData = { result: [], total: 0 }, isLoading } = useQuery({
    queryKey: ['classes', debouncedSearch, page],
    queryFn: async () => {
      const res = await axiosInstance.get(`/classes?search=${debouncedSearch}&page=${page}&limit=${limit}`);
      return res.data;
    }
  });

  const totalPages = Math.ceil(classesData.total / limit);

//   if (isLoading) return <Loading />;

  return (
    <div className="p-6 mt-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 border-b border-gray-300 pb-2">All Classes</h2>

      {/* 🔍 Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by class title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 gap-12">
        {classesData.result.length > 0 ? (
          classesData.result.map((cls) => (
            <div key={cls._id} className="bg-white rounded-lg shadow-md pb-6">
              <img src={cls.image} className="w-full object-cover rounded mb-3" />
              <div className="px-4 space-y-4">
                <h3 className="text-2xl font-bold">{cls.title}</h3>
                <p className="text-sm text-gray-600 mb-2 pb-4 border-b border-gray-200">{cls.details}</p>
              </div>
              <div className="px-4">
                <TrainerList className={cls.title} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No classes found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages).keys()].map(i => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`btn btn-sm ${page === i + 1 ? "btn-primary" : "btn-outline"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllClasses;
