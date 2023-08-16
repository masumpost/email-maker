import React from 'react';
import Banner from '../../Shared/Banner';
import Button from '../Button/Button';
import { BiSolidCopy } from 'react-icons/Bi';
import { GrRefresh } from 'react-icons/Gr';
import { BsPencilSquare } from 'react-icons/Bs';
import { LuDelete } from 'react-icons/Lu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=' bg-white py-10 w-full shadow-gray-300 shadow-md drop-shadow-md'>
                <div  className='flex flex-wrap w-full mx-auto gap-8 items-center justify-center'>
                <Button title="copy" icon={<BiSolidCopy></BiSolidCopy>}></Button>
                <Button title="Refresh" icon={<GrRefresh></GrRefresh>}></Button>
                <Button title="Change" icon={<BsPencilSquare></BsPencilSquare>}></Button>
                <Button title="Delete" icon={<LuDelete></LuDelete>}></Button>
                </div>
            </div>
            <div className='bg-white mb-10 text-black'>
                
            </div>
        </div>
    );
};

export default Home;