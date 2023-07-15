import React from 'react';
import { Box } from '@mui/material';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import AppContents from './AppContents';

function Layout() {
    return (
        <div className='main-container min-h-screen text-black dark:text-white-dark navbar-sticky'>
        
            <Sidebar /> 

            <div className='main-content'>
                <Header />

                <AppContents />
            </div>
        
        </div>
    );
}

export default Layout;