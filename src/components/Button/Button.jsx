import React from 'react';

const Button = ({icon, title}) => {
    return (
        <div>
            <button className='py-4 hover:bg-teal-400 hover:duration-500 px-8 rounded-3xl flex items-center border-2'>
                <p className='mr-2 text-xl'>{icon}</p>
                <p className='text-xl font-semibold'>{title}</p>
            </button>
        </div>
    );
};

export default Button;