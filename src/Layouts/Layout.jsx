import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import AppContents from './AppContents';

function Layout() {
    return (
        <>
        
            <Sidebar /> 

            <Header />

            <AppContents />
        
        </>
    );
}

export default Layout;