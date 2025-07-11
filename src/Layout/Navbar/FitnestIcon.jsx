import React from 'react';
import { Link } from 'react-router';

const FitnestIcon = () => {
    return (
        <Link to='/'>
            <div className='flex items-end bg-gray-100 font-bold text-purple-600'>
                <h3 className='text-3xl ml-4 mt-4'>FITNEST</h3>
            </div>
        </Link>
    );
};

export default FitnestIcon;