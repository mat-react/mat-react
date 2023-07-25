import React from 'react';
 

import { NavLink } from 'react-router-dom';

import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { IconButton } from '@mui/material';

import MenuLevel from './MenuLevel';
import { menus } from './menus';

import Logo from "../../assets/images/Logo.png"

import { sidebarToggler } from '../../Utils/appFuntions';

const Sidebar = () => {




    return(

        <>
            <div onClick={() => sidebarToggler()} className='fixed inset-0 z-50 bg-[black]/40 lg:hidden nav_overlay hidden'></div>
            <nav className="sidebar fixed top-0 bottom-0 z-50 dark:ltr:border-r dark:rtl:border-l border-muted-200 dark:border-muted-700 h-full min-h-screen w-[260px] dark:shadow-none shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
                <div className="h-full bg-white dark:bg-muted-800">
                    
                    <div className="flex items-center justify-between px-4 py-3">
                        <NavLink to={"/"} className="main-logo flex shrink-0 items-center">
                            <img className="ml-[5px] w-6 flex-none" src={Logo} alt="LOGO" />
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">MAT-REACT</span>
                        </NavLink>
                        <IconButton onClick={() => sidebarToggler()}>
                            <svg className="m-auto h-5 w-5 text-muted-400 hover:text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </IconButton>
                    </div>


                    <SimpleBarReact className='relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden p-4 py-0 ps ps--active-y'>
                        
                        <ul>
                            {menus.map((item, key) => {
                                if(item.type === "title"){
                                    return (
                                        <li key={key}>
                                            <h2 className="-mx-4 pb-0 flex dark:text-muted-200 text-muted-600 items-center mt-[10px] py-3 px-7 font-semibold uppercase text-[12px]">
                                                <span>{item.title}</span>
                                            </h2>
                                        </li>
                                    )
                                }else {
                                    return (<MenuLevel key={key} item={item} />)
                                }
                            })}
                        </ul>

                    </SimpleBarReact>
        
                </div>
            </nav>

        </>

    )
    
}

export default Sidebar;
