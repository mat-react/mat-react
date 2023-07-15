import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import AppContents from './AppContents';

function Layout() {
    return (
        <div className='main-container text-black dark:text-white navbar-sticky'>
        
            <Sidebar /> 

            <div className='main-content'>
                <Header />

                <AppContents />
            </div>
        
        </div>
    );
}

export default Layout;