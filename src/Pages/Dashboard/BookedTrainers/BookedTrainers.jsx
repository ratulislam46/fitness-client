import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { use } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import BookedDetails from "./BookedDetails";

const BookedTrainers = () => {
    const { user } = use(AuthContext)
    const axiosSecure = UseAxiosSecure();

    const { data: bookedSlots = [], isLoading } = useQuery({
        queryKey: ["bookedSlots", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/booked-slots?email=${user.email}`);
            return res.data.slots;
        },
    });
    console.log(bookedSlots);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {bookedSlots.length === 0 ?
                <h3 className="min-h-screen flex justify-center items-center text-3xl lg:text-5xl text-gray-500">You have no booked class!</h3> :
                bookedSlots.map(slot =>
                    <BookedDetails
                        key={slot._id}
                        slot={slot}
                    >
                    </BookedDetails>)
            }
        </div>
    );
};


export default BookedTrainers;
