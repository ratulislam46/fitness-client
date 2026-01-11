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
                className="bg-base-100 rounded-xl shadow-lg hover:shadow-2xl border border-base-content/10 h-full flex flex-col transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="relative overflow-hidden">
                    <img 
                        src={signleClass.image} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                        alt={signleClass.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                        {signleClass.title}
                    </h3>
                    
                    <p className="text-sm text-base-content/70 mb-4 pb-3 border-b border-base-content/10 flex-grow">
                        {signleClass.details}
                    </p>
                    
                    <div className="mt-auto pt-3">
                        <TrainerList className={signleClass.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowLatestClass;