import React from 'react';
import UseAxios from '../../../../hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import UseUserRole from '../../../../hooks/UseUserRole'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Loading from '../../../../Components/Loading/Loading';


const COLORS = ["#FF8042", "#00C49F"];
const COLORSTWO = ["#0088FE", "#00C49F", "#FFBB28"];
const COLORSTHREE = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#f28482"]

const MemberDashboard = () => {
    const axiosInstance = UseAxios();
    const { role, isLoading } = UseUserRole();

    const { data = {} } = useQuery({
        queryKey: ['total-subscribers'],
        queryFn: async () => {
            const res = await axiosInstance.get('/member/chart/data');
            return res.data
        }
    })

    const ClassAndForum = [
        { name: "Class", value: data.totalClass || 0 },
        { name: "Forums", value: data.totalForum || 0 },
    ];

    const UserRolesData = [
        { name: "Subscribers", value: data.totalSubscribers },
        { name: "Members", value: data.totalMembers },
        { name: "Trainers", value: data.totalTrainers }
    ];

    const barChart = [
        { name: "Class", value: data.totalClass || 0 },
        { name: "Forums", value: data.totalForum || 0 },
        { name: "Subscribers", value: data.totalSubscribers },
        { name: "Members", value: data.totalMembers },
        { name: "Trainers", value: data.totalTrainers }
    ]

    if (isLoading) return <Loading />

    return (
        <section className='container mx-auto px-2 mt-6 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
                {/* total subscribers */}
                <div className='text-center border border-base-content/5 rounded-xl p-4 bg-[#ff8fab]'>
                    <h2 className='text-2xl text-white'>Total Subscriber</h2>
                    <h3 className='text-2xl'>{data?.totalSubscribers}</h3>
                </div>
                {/* total Member */}
                <div className='text-center border border-base-content/5 rounded-xl p-4 bg-[#f2cc8f]'>
                    <h2 className='text-2xl text-white'>Total Member</h2>
                    <h3 className='text-2xl'>{data?.totalMembers}</h3>
                </div>
                {/* total trainers */}
                <div className='text-center border border-base-content/5 rounded-xl p-4 bg-[#2a9d8f]'>
                    <h2 className='text-2xl text-white'>Total Triner</h2>
                    <h3 className='text-2xl'>{data?.totalTrainers}</h3>
                </div>
                {/* total class */}
                <div className='text-center border border-base-content/5 rounded-xl p-4 bg-[#8ecae6]'>
                    <h2 className='text-2xl text-white'>Total Class</h2>
                    <h3 className='text-2xl'>{data?.totalClass}</h3>
                </div>
                {/* total forum */}
                <div className='text-center border border-base-content/5 rounded-xl p-4 bg-[#e07a5f]'>
                    <h2 className='text-2xl text-white'>Total Forum</h2>
                    <h3 className='text-2xl'>{data?.totalForum}</h3>
                </div>
            </div>

            {/* show pie chart  */}
            <div className=' md:flex items-center justify-center gap-5'>
                {/* class and forums  */}
                <div className='flex justify-center w-full'>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={ClassAndForum}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {ClassAndForum.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                <div className='flex justify-center w-full mt-10 md:mt-0'>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={UserRolesData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {UserRolesData.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORSTWO[index % COLORSTWO.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>

            {/* barchart  */}
            <div>
                {/* User Roles Chart */}
                <div className="h-80 mt-10">
                    {/* <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-4">User Roles Overview</h2> */}
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barChart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value">
                                {barChart.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORSTHREE[index % COLORSTHREE.length]} />
                                ))}
                            </Bar>

                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default MemberDashboard;