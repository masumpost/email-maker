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
            <div className=' bg-white px-2 py-10 w-full shadow-gray-300 shadow-md drop-shadow-md'>
                <div  className='flex flex-wrap w-full mx-auto gap-8 items-center justify-center'>
                <Button title="copy" toolTipData="Copy to Clipboard" icon={<BiSolidCopy></BiSolidCopy>}></Button>
                <Button title="Refresh" toolTipData="Refresh Message List" icon={<GrRefresh></GrRefresh>}></Button>
                <Button title="Change" toolTipData="Change E-mail Address" icon={<BsPencilSquare></BsPencilSquare>}></Button>
                <Button title="Delete" toolTipData="Delete This Address" icon={<LuDelete></LuDelete>}></Button>
                </div>
            </div>
        </div>
    );
};

export default Home;