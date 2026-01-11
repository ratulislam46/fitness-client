import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import TrainerList from '../../AllClasses/TrainerList';

const ShowLatestClass = ({ signleClass, refetch }) => {

    const { user } = use(AuthContext)

    return (
        <div>
            <div
                data-aos="fade-up"
                key={signleClass._id}
                className="
            group
            bg-base-100
            p-6
            rounded-2xl
            border border-base-content/5
            h-[550px]
            flex flex-col justify-between
            overflow-hidden
            relative
            transition-all duration-1000 ease-in-out
            hover:text-primary-content
        "
            >
                {/* Hover background animation */}
                <div
                    className="
                absolute inset-0
                bg-primary
                translate-y-full
                group-hover:translate-y-0
                transition-transform duration-1000 ease-in-out
                z-0
            "
                />

                {/* Image */}
                <img
                    src={signleClass.image}
                    className="
                w-full h-48 object-cover rounded-xl mb-3
                relative z-10
                transition-all duration-700 ease-in-out
                group-hover:scale-105
                group-hover:rotate-[0.5deg]
            "
                />

                {/* Content */}
                <div className="px-4 space-y-4 relative z-10">
                    <h3 className="text-2xl font-semibold transition-colors duration-700">
                        {signleClass.title}
                    </h3>

                    <p className="
                text-sm
                text-base-content/70
                group-hover:text-primary-content/90
                mb-2 pb-4
                border-b border-base-content/5
                group-hover:border-primary-content/30
                transition-all duration-700
            ">
                        {signleClass.details}
                    </p>
                </div>

                {/* Trainer List */}
                <div className="px-4 relative z-10">
                    <TrainerList className={signleClass.title} />
                </div>
            </div>
        </div>

    );
};

export default ShowLatestClass;