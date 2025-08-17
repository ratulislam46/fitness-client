import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import TrainerList from '../../AllClasses/TrainerList';

const ShowLatestClass = ({ signleClass, refetch }) => {
    // console.log(signleClass);
    const { user } = use(AuthContext)
    
    return (
        <div>
            <div
                data-aos="fade-up"
                key={signleClass._id}
                className="bg-base-100 p-6 rounded-xl shadow-xs hover:shadow-md border border-base-content/5 h-[550px] flex flex-col justify-between">
                <img src={signleClass.image} className="w-full object-cover rounded mb-3" />
                <div className="px-4 space-y-4">
                    <h3 className="text-2xl font-bold">{signleClass.title}</h3>
                    <p className="text-sm text-base-content/70 mb-2 pb-4 border-b border-base-content/5">{signleClass.details}</p>
                </div>
                <div className="px-4">
                    <TrainerList className={signleClass.title} />
                </div>
            </div>
        </div>
    );
};

export default ShowLatestClass;