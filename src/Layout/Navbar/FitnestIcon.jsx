import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router';

const FitnestIcon = () => {
    
    return (
        <Link to='/'>
            <div className='flex items-center font-bold ml-1'>
                <FaDumbbell size={20} className='mr-1'/>
                <h3 className='text-xl'><span className='text-primary'>FIT</span>NESS</h3>
            </div>
        </Link>
    );
};

export default FitnestIcon;