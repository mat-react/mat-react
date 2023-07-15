import React from 'react';
<<<<<<< HEAD
import { Box } from '@mui/material';
=======
>>>>>>> new_theme

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import AppContents from './AppContents';

function Layout() {
    return (
<<<<<<< HEAD
        <Box sx={{position: "relative", width: "100vw", height: "100vh"}}>
        
            <Sidebar /> 

            <Header />

            <AppContents />
        
        </Box>
=======
        <div className='main-container text-black dark:text-white navbar-sticky'>
        
            <Sidebar /> 

            <div className='main-content'>
                <Header />

                <AppContents />
            </div>
        
        </div>
>>>>>>> new_theme
    );
}

export default Layout;