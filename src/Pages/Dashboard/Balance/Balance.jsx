import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import moment from "moment/moment";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF8042"];

const Balance = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: totalPayments, isLoading, error } = useQuery({
        queryKey: ["totalBalance"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/total-balance");
            return res.data;
        }
    });

    const { data: payments = [] } = useQuery({
        queryKey: ["recentPayments"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/recent-payments");
            return res.data;
        }
    });

    const { data = {} } = useQuery({
        queryKey: ["chart-data"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin/chart-data");
            return res.data;
        },
    });
    console.log(data.subscribers);

    const chartData = [
        { name: "Subscribers", value: data.subscribers || 0 },
        { name: "Paid Members", value: data.paidMembers || 0 },
    ];

    if (isLoading) return <p>Loading balance...</p>;
    if (error) return <p>Error loading balance</p>;

    return (
        <div className="mt-24">

            <div className="flex justify-around items-center px-2 lg:px-0">
                {/* total payment  */}
                <div className="bg-green-100 py-6 px-2 lg:px-10 rounded-md shadow-md text-center h-40 lg:h-32">
                    <h2 className="text-2xl font-bold mb-2">Total Earnings</h2>
                    <p className="text-4xl text-green-600 font-semibold">${totalPayments.totalBalance}</p>
                </div>

                {/* show pie chart  */}
                <div className="">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>

            {/* last six payment details  */}
            <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-10">
                <h2 className="text-2xl font-bold mb-4">Recent Payments</h2>
                <table className="table table-zebra w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Plan</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Txn ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((pay, index) => (
                            <tr key={pay._id}>
                                <td>{index + 1}</td>
                                <td>{pay.userName}</td>
                                <td>{pay.userEmail}</td>
                                <td>{pay.plan}</td>
                                <td className="text-green-500 font-bold">${pay.price}</td>
                                <td>{moment(pay.paymentDate).format("MMM DD, YYYY")}</td>
                                <td className="text-sm break-all">{pay.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Balance;
