import React from 'react';

import NotFoundImg from '../../assets/images/404.svg'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function NotFound(props) {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            <div className='justify-center flex flex-wrap'>
                <img src={NotFoundImg} alt='NOT FOUND' />
            </div>
            <p className="text-center text-base w-[100%]">The page you requested was not found!</p>
            <div className='w-[100%] flex justify-center mt-2'>
                <NavLink to="/">
                    <Button className='mx-auto mt-10 w-max bg-success'> Home </Button>
                </NavLink>
            </div>
        </div>
    );
}

export default NotFound;