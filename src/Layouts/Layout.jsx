import React from 'react';
import { Box } from '@mui/material';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import AppContents from './AppContents';

function Layout() {
    return (
        <Box sx={{position: "relative", width: "100vw", height: "100vh"}}>
        
            <Sidebar /> 

            <Header />

            <AppContents />
        
        </Box>
    );
}

export default Layout;