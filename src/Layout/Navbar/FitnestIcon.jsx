import React from 'react';
import { Link } from 'react-router';

const FitnestIcon = () => {
    return (
        <Link to='/'>
            <div className='flex items-end font-bold'>
                <h3 className='text-2xl mx-2 text-white'><span className='text-primary'>FIT</span>NEST</h3>
            </div>
        </Link>
    );
};

export default FitnestIcon;