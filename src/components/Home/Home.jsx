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
            <div className='bg-white flex gap-4 items-center justify-items-center w-1/2 mx-auto mt-10'>
                <Button title="copy" icon={<BiSolidCopy></BiSolidCopy>}></Button>
                <Button title="Refresh" icon={<GrRefresh></GrRefresh>}></Button>
                <Button title="Change" icon={<BsPencilSquare></BsPencilSquare>}></Button>
                <Button title="Delete" icon={<LuDelete></LuDelete>}></Button>
            </div>
        </div>
    );
};

export default Home;