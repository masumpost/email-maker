import React from 'react';

const Button = ({icon, title}) => {
    return (
        <div>
            <button className='py-4 px-10 rounded-3xl flex items-center ease-in duration-200 text-gray-950 font-normal shadow-2xl drop-shadow-2xl bg-gray-200 hover:bg-green-600'>
                <p className='mr-4'>{icon}</p>
                <p className=''>{title}</p>
            </button>
        </div>
    );
};

export default Button;